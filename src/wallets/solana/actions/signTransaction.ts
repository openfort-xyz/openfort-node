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
  /**
   * 0x-prefixed hex ed25519 signature over the transaction message bytes.
   * This is a signature, not a signed transaction: place it in the transaction's
   * signature slot for this account before broadcasting.
   */
  signedTransaction: string
}

/**
 * Signs a Solana transaction message via the Openfort API.
 *
 * Send the base64-encoded compiled message bytes. The API also accepts a full
 * wire-format transaction and signs only its message bytes. Either way the
 * result is the ed25519 signature for this account, which you place in the
 * transaction's signature slot before broadcasting.
 *
 * @param options - Sign transaction options
 * @returns The signature over the message bytes
 *
 * @example
 * ```typescript
 * import { compileTransaction, getBase64EncodedWireTransaction } from '@solana/kit';
 *
 * const compiled = compileTransaction(transactionMessage);
 * const messageBase64 = Buffer.from(compiled.messageBytes).toString('base64');
 *
 * const { signedTransaction: signatureHex } = await signTransaction({
 *   accountId: 'acc_...',
 *   transaction: messageBase64,
 * });
 *
 * const signature = new Uint8Array(Buffer.from(signatureHex.slice(2), 'hex'));
 * const signed = { ...compiled, signatures: { ...compiled.signatures, [account.address]: signature } };
 * const wire = getBase64EncodedWireTransaction(signed);
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
