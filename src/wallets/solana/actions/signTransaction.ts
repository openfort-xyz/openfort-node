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
  /** Signed transaction as base64 string */
  signedTransaction: string
}

/**
 * Signs a Solana transaction via the Openfort API.
 * The transaction should be a base64-encoded serialized transaction.
 *
 * @param options - Sign transaction options
 * @returns The signed transaction
 *
 * @example
 * ```typescript
 * import { Transaction } from '@solana/web3.js';
 *
 * // Create your transaction
 * const transaction = new Transaction();
 * // ... add instructions ...
 *
 * // Serialize without requiring signatures
 * const serialized = transaction.serialize({
 *   requireAllSignatures: false,
 * });
 *
 * // Base64 encode for the API
 * const base64Tx = Buffer.from(serialized).toString('base64');
 *
 * // Sign via Openfort
 * const { signedTransaction } = await signTransaction({
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

  // The response signature is the signed transaction
  return {
    signedTransaction: response.signature,
  }
}
