import { DelegationError, UserInputValidationError } from '../../../errors'
import {
  createTransactionIntent,
  getAccountsV2,
  signature as submitSignature,
} from '../../../openapi-client'
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
 * Internally: registers delegation -> fetches EOA nonce via RPC -> hashes and signs
 * EIP-7702 authorization -> creates transaction intent -> signs and submits if needed.
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

  // 2. Get or create delegated account
  let signedAuthorization: string | undefined
  let txAccountId: string

  const response = await getAccountsV2({
    address: viem.getAddress(account.address),
    accountType: 'Delegated Account',
    chainType: 'EVM',
    chainId: chainId,
  })

  if (response.data.length === 0) {
    // No delegation yet - register it
    const updated = await update({
      walletId: account.walletId,
      chainId,
      implementationType: 'Calibur',
      accountId: account.id,
    })
    txAccountId = updated.id

    const implementationAddress: Hex =
      '0x000000009b1d0af20d8c6d0a44e162d11f9b8f00'

    const publicClient = viem.createPublicClient({ chain, transport })

    // 2.1. Sign EIP-7702 authorization if not yet delegated on-chain
    const eoaNonce = await publicClient.getTransactionCount({
      address: account.address,
    })
    const authHash = viemUtils.hashAuthorization({
      contractAddress: implementationAddress,
      chainId,
      nonce: eoaNonce,
    })
    signedAuthorization = await account.sign({ hash: authHash })
  } else {
    txAccountId = response.data[0].id
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
