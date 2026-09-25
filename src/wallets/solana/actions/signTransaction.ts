/**
 * @module Wallets/Solana/Actions/SignTransaction
 * Sign a Solana transaction
 */

import { sign as signApi } from '../../../openapi-client'
import type { SignTransactionOptions } from '../types'

/**
 * Result of sign transaction operation
 */
export interface SignTransactionResult {
  /** 0x-prefixed hex ed25519 signature over the transaction message. Not a signed transaction: add it to the transaction's signatures before broadcasting. */
  signedTransaction: string
}

/**
 * Signs a Solana transaction via the Openfort API.
 * The transaction should be a base64-encoded serialized transaction.
 *
 * @param options - Sign transaction options
 * @returns The signature over the transaction message
 *
 * @example
 * ```typescript
 * import { compileTransaction, getBase64EncodedWireTransaction } from '@solana/kit';
 *
 * // Build a transaction message with @solana/kit, then compile it
 * const base64Tx = getBase64EncodedWireTransaction(compileTransaction(transactionMessage));
 *
 * // Sign via Openfort. The result is the account's signature over the message.
 * const { signedTransaction: signature } = await signTransaction({
 *   accountId: 'acc_...',
 *   transaction: base64Tx,
 * });
 * ```
 */
export async function signTransaction(
  options: SignTransactionOptions,
): Promise<SignTransactionResult> {
  const { accountId, transaction } = options

  // Convert base64 to hex for the API
  const txBytes = Buffer.from(transaction, 'base64')
  const txHex = `0x${txBytes.toString('hex')}`

  // Sign via v2 API
  const response = await signApi(accountId, { data: txHex })

  return {
    signedTransaction: response.signature,
  }
}
