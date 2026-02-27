/**
 * @module Wallets/EVM/Actions/SignMessage
 * Sign an EIP-191 personal message
 */

import { toHex, toPrefixedMessage } from 'viem'
import { UserInputValidationError } from '../../../errors'
import { sign } from '../../../openapi-client'
import type { Address, Hex, SignableMessage } from '../types'
import { normalizeSignature } from './normalizeSignature'

/**
 * Options for signing a message
 */
export interface SignMessageOptions {
  /** Account address */
  address: Address
  /** Account ID for API calls */
  accountId: string
  /** Message to sign */
  message: SignableMessage
}

/**
 * Result of sign message operation
 */
export interface SignMessageResult {
  /** Signature as hex string */
  signature: Hex
}

/**
 * Signs a message using EIP-191 personal sign.
 * The EIP-191 preimage is sent to the backend, which detects the type, hashes, and signs.
 *
 * @param options - Sign message options
 * @returns The signature
 */
export async function signMessage(
  options: SignMessageOptions,
): Promise<SignMessageResult> {
  const { accountId, message } = options

  // Normalize message to a SignableMessage that toPrefixedMessage accepts
  let normalizedMessage: SignableMessage
  if (typeof message === 'string') {
    normalizedMessage = message
  } else if (message instanceof Uint8Array) {
    normalizedMessage = { raw: toHex(message) }
  } else if ('raw' in message) {
    normalizedMessage = message
  } else {
    throw new UserInputValidationError('Invalid message format')
  }

  // Send EIP-191 preimage (backend detects type, hashes, signs)
  const preimage = toPrefixedMessage(normalizedMessage)
  const response = await sign(accountId, { data: preimage })

  const signature = normalizeSignature(response.signature)

  return {
    signature: signature as Hex,
  }
}
