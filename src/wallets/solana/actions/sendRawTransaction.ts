import { UserInputValidationError } from '../../../errors'
import type { SendRawSolanaTransactionOptions } from '../types'
import { sendTransaction } from './sendTransaction'
import { getRpcEndpoint } from './utils'

/**
 * Sends a pre-built base64-encoded Solana transaction via the gasless Kora flow.
 *
 * Decodes the base64 transaction, extracts its instructions by decompiling
 * the transaction message, and re-wraps them using the existing `sendTransaction`
 * gasless flow. The original fee payer, blockhash, and any existing signatures
 * are discarded — a new transaction is built with Kora as the fee payer.
 *
 * @param options - Raw transaction options
 * @returns Object with the transaction signature
 *
 * @example
 * ```typescript
 * const result = await sendRawTransaction({
 *   account,
 *   cluster: 'devnet',
 *   transaction: 'base64EncodedTransaction...',
 * });
 * console.log('Transaction signature:', result.signature);
 * ```
 */
export async function sendRawTransaction(
  options: SendRawSolanaTransactionOptions,
): Promise<{ signature: string }> {
  const {
    account,
    cluster,
    transaction,
    computeUnitLimit,
    computeUnitPrice,
    rpcUrl,
    wsUrl,
  } = options

  let solanaKit: any
  try {
    solanaKit = await import('@solana/kit')
  } catch {
    throw new UserInputValidationError(
      '`@solana/kit` is required for sendRawTransaction. Install it and try again.',
    )
  }

  // Decode base64 -> bytes -> Transaction -> compiled message
  const txBytes = new Uint8Array(Buffer.from(transaction, 'base64'))
  const decoded = solanaKit.getTransactionDecoder().decode(txBytes)
  const compiledMessage = solanaKit
    .getCompiledTransactionMessageDecoder()
    .decode(decoded.messageBytes)

  // Decompile the transaction message, fetching lookup tables from the network
  const rpc = solanaKit.createSolanaRpc(rpcUrl ?? getRpcEndpoint(cluster))
  const decompiled =
    await solanaKit.decompileTransactionMessageFetchingLookupTables(
      compiledMessage,
      rpc,
    )

  return sendTransaction({
    account,
    cluster,
    instructions: decompiled.instructions,
    computeUnitLimit,
    computeUnitPrice,
    rpcUrl,
    wsUrl,
  })
}
