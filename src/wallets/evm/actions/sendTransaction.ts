import { CALIBUR_IMPLEMENTATION_ADDRESS } from '../../../constants'
import { DelegationError, UserInputValidationError } from '../../../errors'
import {
  createTransactionIntent,
  getAccountsV2,
  signature as submitSignature,
} from '../../../openapi-client'
import { isDelegatedTo } from '../delegation'
import type {
  Hash,
  Hex,
  SendTransactionOptions,
  TransactionIntentResponse,
} from '../types'
import { update } from './updateToDelegated'
/**
 * Delegates an EVM account via EIP-7702 and sends a gasless transaction in one call.
 *
 * Internally: ensures a delegated-account record -> checks on-chain delegation via
 * eth_getCode -> if the EOA is not delegated on-chain, hashes and signs an EIP-7702
 * authorization -> creates transaction intent -> signs and submits if needed.
 *
 * @param options - Transaction options including account ID, chain, interactions, and optional policy
 * @returns The transaction intent response
 *
 * @example
 * ```typescript
 * const result = await openfort.accounts.evm.backend.sendTransaction({
 *   id: 'acc_...',
 *   chainId: 84532,
 *   interactions: [{ to: '0x...', data: '0x...' }],
 *   policy: 'pol_...',
 * });
 * console.log(result.response?.transactionHash);
 * ```
 */
export async function sendTransaction(
  options: SendTransactionOptions,
): Promise<TransactionIntentResponse> {
  let viem: typeof import('viem')
  let viemChains: typeof import('viem/chains')
  let viemUtils: typeof import('viem/utils')
  try {
    viem = await import('viem')
  } catch {
    throw new UserInputValidationError(
      '`viem` is required for sendTransaction. Install it and try again.',
    )
  }
  try {
    viemChains = await import('viem/chains')
  } catch {
    throw new UserInputValidationError(
      '`viem` is required for sendTransaction. Install it and try again.',
    )
  }
  try {
    viemUtils = await import('viem/utils')
  } catch {
    throw new UserInputValidationError(
      '`viem` is required for sendTransaction. Install it and try again.',
    )
  }

  const { account, chainId, interactions, policy, rpcUrl } = options

  // 1. Resolve chain + RPC
  // This RPC gates EIP-7702 authorization signing, so require a trusted scheme:
  // https everywhere, http only for loopback (local dev nodes like anvil).
  if (rpcUrl !== undefined) {
    let parsed: URL
    try {
      parsed = new URL(rpcUrl)
    } catch {
      throw new UserInputValidationError(`Invalid rpcUrl: ${rpcUrl}`)
    }
    const isLoopback = ['localhost', '127.0.0.1', '[::1]'].includes(
      parsed.hostname,
    )
    if (
      parsed.protocol !== 'https:' &&
      !(parsed.protocol === 'http:' && isLoopback)
    ) {
      throw new UserInputValidationError(
        'rpcUrl must use https (http allowed only for localhost).',
      )
    }
  }
  const transport = rpcUrl ? viem.http(rpcUrl) : viem.http()
  const allChains = Object.values(viemChains)
  const chain = allChains.find(
    (c) =>
      typeof c === 'object' &&
      c !== null &&
      'id' in c &&
      (c as { id: number }).id === chainId,
  ) as import('viem').Chain | undefined
  if (!chain) {
    throw new DelegationError(
      `Unknown chain ID ${chainId}. Provide a custom rpcUrl for unsupported chains.`,
    )
  }

  // 2. Resolve the delegated-account record, then decide whether to (re)sign the
  //    EIP-7702 authorization based on ACTUAL on-chain delegation state.
  const publicClient = viem.createPublicClient({ chain, transport })
  const eoaAddress = viem.getAddress(account.address)

  const response = await getAccountsV2({
    address: eoaAddress,
    accountType: 'Delegated Account',
    chainType: 'EVM',
    chainId: chainId,
  })

  // Take the implementation address from the account record (the backend's source
  // of truth) so the signed authorization and the on-chain check match what the
  // platform registered. Fall back to the known Calibur address if absent.
  let txAccountId: string
  let implementationAddress: Hex
  if (response.data.length === 0) {
    // No delegated-account record yet - register one.
    const updated = await update({
      walletId: account.walletId,
      chainId,
      implementationType: 'Calibur',
      accountId: account.id,
    })
    txAccountId = updated.id
    implementationAddress =
      (updated.smartAccount?.implementationAddress as Hex | undefined) ??
      CALIBUR_IMPLEMENTATION_ADDRESS
  } else {
    txAccountId = response.data[0].id
    implementationAddress =
      (response.data[0].smartAccount?.implementationAddress as
        | Hex
        | undefined) ?? CALIBUR_IMPLEMENTATION_ADDRESS
  }

  // TRANSITIONAL: stale records can read delegated while the EOA is bare on-chain
  // (code === '0x'), causing AA34. Gate signing on actual on-chain state until the
  // API backfill makes the DB authoritative, then REMOVE this getCode call and
  // trust the record alone (no RPC).
  let signedAuthorization: string | undefined
  // Fail open: if the on-chain code is unreadable (RPC error), sign the
  // authorization anyway. Re-delegating an already-delegated EOA is harmless,
  // but skipping a needed authorization reverts on-chain with AA34.
  let delegatedOnChain = false
  try {
    const code = await publicClient.getCode({ address: eoaAddress })
    delegatedOnChain = isDelegatedTo(code, implementationAddress)
  } catch (error) {
    // biome-ignore lint/suspicious/noConsole: a fallback notice belongs on stderr (warn), not stdout (log).
    console.warn(
      '[Openfort] Could not read on-chain code for EIP-7702 delegation check; signing authorization anyway.',
      error,
    )
  }
  if (!delegatedOnChain) {
    const eoaNonce = await publicClient.getTransactionCount({
      address: account.address,
    })
    const authHash = viemUtils.hashAuthorization({
      contractAddress: implementationAddress,
      chainId,
      nonce: eoaNonce,
    })
    signedAuthorization = await account.sign({ hash: authHash })
  }

  // 3. Create transaction intent
  const txIntent = await createTransactionIntent({
    chainId,
    account: txAccountId,
    policy,
    signedAuthorization,
    interactions,
  })

  // 4. Sign and submit if needed
  if (!txIntent.nextAction?.payload?.signableHash) {
    return txIntent
  }

  const txSignature = await account.sign({
    hash: txIntent.nextAction.payload.signableHash as Hash,
  })

  return submitSignature(txIntent.id, {
    signature: txSignature,
  })
}
