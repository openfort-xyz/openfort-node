import { beforeEach, describe, expect, it, vi } from 'vitest'
import { CALIBUR_IMPLEMENTATION_ADDRESS } from '../../../constants'
import type { EvmAccount, SendTransactionOptions } from '../types'

// Shared mocks (hoisted so vi.mock factories can reference them).
const mocks = vi.hoisted(() => ({
  getAccountsV2: vi.fn(),
  createTransactionIntent: vi.fn(),
  submitSignature: vi.fn(),
  update: vi.fn(),
  getCode: vi.fn(),
  getTransactionCount: vi.fn(),
  hashAuthorization: vi.fn(),
}))

vi.mock('../../../openapi-client', () => ({
  getAccountsV2: mocks.getAccountsV2,
  createTransactionIntent: mocks.createTransactionIntent,
  signature: mocks.submitSignature,
}))

vi.mock('./updateToDelegated', () => ({ update: mocks.update }))

vi.mock('viem', () => ({
  http: vi.fn(() => ({})),
  getAddress: (a: string) => a,
  createPublicClient: vi.fn(() => ({
    getCode: mocks.getCode,
    getTransactionCount: mocks.getTransactionCount,
  })),
}))

vi.mock('viem/chains', () => ({ baseSepolia: { id: 84532 } }))

vi.mock('viem/utils', () => ({ hashAuthorization: mocks.hashAuthorization }))

// Imported after mocks are registered.
const { sendTransaction } = await import('./sendTransaction')

const CALIBUR = CALIBUR_IMPLEMENTATION_ADDRESS
const DESIGNATOR = `0xef0100${CALIBUR.slice(2)}`

function makeAccount() {
  return {
    id: 'acc_eoa',
    address: '0xb4527c24a393db150d1d8bac93c51f9ad7b6480a',
    walletId: 'pla_x',
    sign: vi.fn(async () => '0xsignature'),
  }
}

const opts = (
  account: ReturnType<typeof makeAccount>,
): SendTransactionOptions => ({
  account: account as unknown as EvmAccount,
  chainId: 84532,
  interactions: [{ to: '0xUSDC', data: '0xdeadbeef' }],
  policy: 'pol_x',
})

beforeEach(() => {
  vi.clearAllMocks()
  mocks.hashAuthorization.mockReturnValue('0xauthhash')
  mocks.getTransactionCount.mockResolvedValue(0)
  mocks.createTransactionIntent.mockResolvedValue({
    id: 'tin_x',
    nextAction: null,
  })
  mocks.submitSignature.mockResolvedValue({ id: 'tin_x' })
})

describe('sendTransaction — EIP-7702 authorization gating', () => {
  it('signs the authorization when a delegated record exists but the EOA is NOT delegated on-chain (stale-record regression)', async () => {
    mocks.getAccountsV2.mockResolvedValue({ data: [{ id: 'acc_del' }] })
    mocks.getCode.mockResolvedValue('0x') // bare EOA on-chain despite the DB record

    const account = makeAccount()
    await sendTransaction(opts(account))

    expect(mocks.update).not.toHaveBeenCalled() // reuse existing record, don't recreate
    expect(account.sign).toHaveBeenCalledWith({ hash: '0xauthhash' })
    const intentArg = mocks.createTransactionIntent.mock.calls[0][0]
    expect(intentArg.account).toBe('acc_del')
    expect(intentArg.signedAuthorization).toBe('0xsignature') // <- the fix
  })

  it('uses the implementation address from the account record, not the hardcoded fallback', async () => {
    const apiImpl = '0x00000000000000000000000000000000deadbeef'
    mocks.getAccountsV2.mockResolvedValue({
      data: [
        { id: 'acc_del', smartAccount: { implementationAddress: apiImpl } },
      ],
    })
    mocks.getCode.mockResolvedValue('0x') // not delegated -> must sign

    const account = makeAccount()
    await sendTransaction(opts(account))

    expect(mocks.hashAuthorization).toHaveBeenCalledWith(
      expect.objectContaining({ contractAddress: apiImpl }),
    )
  })

  it('treats the EOA as delegated when on-chain code matches the record implementation', async () => {
    const apiImpl = '0x00000000000000000000000000000000deadbeef'
    mocks.getAccountsV2.mockResolvedValue({
      data: [
        { id: 'acc_del', smartAccount: { implementationAddress: apiImpl } },
      ],
    })
    mocks.getCode.mockResolvedValue(`0xef0100${apiImpl.slice(2)}`)

    const account = makeAccount()
    await sendTransaction(opts(account))

    expect(mocks.hashAuthorization).not.toHaveBeenCalled()
    expect(
      mocks.createTransactionIntent.mock.calls[0][0].signedAuthorization,
    ).toBeUndefined()
  })

  it('does NOT re-sign the authorization when the EOA is already delegated on-chain to Calibur', async () => {
    mocks.getAccountsV2.mockResolvedValue({ data: [{ id: 'acc_del' }] })
    mocks.getCode.mockResolvedValue(DESIGNATOR)

    const account = makeAccount()
    await sendTransaction(opts(account))

    expect(mocks.hashAuthorization).not.toHaveBeenCalled()
    expect(
      mocks.createTransactionIntent.mock.calls[0][0].signedAuthorization,
    ).toBeUndefined()
  })

  it('matches the on-chain designator case-insensitively', async () => {
    mocks.getAccountsV2.mockResolvedValue({ data: [{ id: 'acc_del' }] })
    mocks.getCode.mockResolvedValue(`0xEF0100${CALIBUR.slice(2).toUpperCase()}`)

    const account = makeAccount()
    await sendTransaction(opts(account))

    expect(
      mocks.createTransactionIntent.mock.calls[0][0].signedAuthorization,
    ).toBeUndefined()
  })

  it('rejects a non-https rpcUrl (SSRF/scheme guard)', async () => {
    const account = makeAccount()
    await expect(
      sendTransaction({ ...opts(account), rpcUrl: 'http://evil.internal' }),
    ).rejects.toThrow(/rpcUrl must use https/)
    expect(account.sign).not.toHaveBeenCalled()
    expect(mocks.getCode).not.toHaveBeenCalled()
  })

  it('rejects a malformed rpcUrl', async () => {
    const account = makeAccount()
    await expect(
      sendTransaction({ ...opts(account), rpcUrl: 'not a url' }),
    ).rejects.toThrow(/Invalid rpcUrl/)
  })

  it('allows http only for loopback (local dev nodes)', async () => {
    mocks.getAccountsV2.mockResolvedValue({ data: [{ id: 'acc_del' }] })
    mocks.getCode.mockResolvedValue(DESIGNATOR)

    const account = makeAccount()
    await expect(
      sendTransaction({ ...opts(account), rpcUrl: 'http://127.0.0.1:8545' }),
    ).resolves.toBeDefined()
  })

  it('fails open and signs the authorization when the on-chain code read throws (RPC error)', async () => {
    mocks.getAccountsV2.mockResolvedValue({ data: [{ id: 'acc_del' }] })
    mocks.getCode.mockRejectedValue(new Error('RPC down'))
    const warn = vi.spyOn(console, 'warn').mockImplementation(() => {})

    const account = makeAccount()
    await sendTransaction(opts(account))

    expect(account.sign).toHaveBeenCalledWith({ hash: '0xauthhash' })
    expect(
      mocks.createTransactionIntent.mock.calls[0][0].signedAuthorization,
    ).toBe('0xsignature')
    expect(warn).toHaveBeenCalled()
    warn.mockRestore()
  })

  it('registers a delegated record and signs the authorization on first send (no record yet)', async () => {
    mocks.getAccountsV2.mockResolvedValue({ data: [] })
    mocks.update.mockResolvedValue({ id: 'acc_new_del' })
    mocks.getCode.mockResolvedValue(undefined) // viem returns undefined for empty code

    const account = makeAccount()
    await sendTransaction(opts(account))

    expect(mocks.update).toHaveBeenCalled()
    const intentArg = mocks.createTransactionIntent.mock.calls[0][0]
    expect(intentArg.account).toBe('acc_new_del')
    expect(intentArg.signedAuthorization).toBe('0xsignature')
  })
})
