/**
 * @module Wallets/EVM/Actions/SignMessage
 * Sign an EIP-191 personal message
 */

import { hashMessage, toHex } from 'viem'
import { UserInputValidationError } from '../../../errors'
import { signTransactionV2 } from '../../../openapi-client'
import type { Address, Hex, SignableMessage } from '../types'

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
 * The message is hashed with the EIP-191 prefix and signed via the Openfort API.
 *
 * @param options - Sign message options
 * @returns The signature
 */
export async function signMessage(
  options: SignMessageOptions,
): Promise<SignMessageResult> {
  const { accountId, message } = options

  // Convert message to string if needed
  let messageStr: string
  if (typeof message === 'string') {
    messageStr = message
  } else if (message instanceof Uint8Array) {
    messageStr = toHex(message)
  } else if ('raw' in message) {
    messageStr =
      typeof message.raw === 'string' ? message.raw : toHex(message.raw)
  } else {
    throw new UserInputValidationError('Invalid message format')
  }

  // Hash the message using EIP-191 format: "\x19Ethereum Signed Message:\n" + len(message) + message
  const messageHash = hashMessage(messageStr)

  // Sign the hash directly via v2 API
  const response = await signTransactionV2(accountId, { data: messageHash })

  return {
    signature: response.signature as Hex,
  }
}
