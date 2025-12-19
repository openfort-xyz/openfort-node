/**
 * @module Wallets/Solana/Actions/SignMessage
 * Sign a Solana message
 */

import { signTransaction } from '../../../openapi-client'
import type { SignMessageOptions } from '../types'

/**
 * Result of sign message operation
 */
export interface SignMessageResult {
  /** Signature as base58 string */
  signature: string
}

/**
 * Signs a message via the Openfort API.
 * The message is UTF-8 encoded and signed.
 *
 * @param options - Sign message options
 * @returns The signature
 */
export async function signMessage(
  options: SignMessageOptions,
): Promise<SignMessageResult> {
  const { accountId, message } = options

  // Encode message as hex for the API
  const messageBytes = Buffer.from(message, 'utf-8')
  const messageHex = `0x${messageBytes.toString('hex')}`

  // Sign via v2 API
  const response = await signTransaction(accountId, { data: messageHex })

  return {
    signature: response.signature,
  }
}
