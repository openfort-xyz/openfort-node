/**
 * @module Wallets/EVM/Actions/SignHash
 * Sign a raw hash directly (no EIP-191 prefix)
 */

import { signTransaction } from '../../../openapi-client'
import type { Hash, Hex } from '../types'

/**
 * Options for signing a hash
 */
export interface SignHashOptions {
  /** Account ID for API calls */
  accountId: string
  /** Hash to sign (32-byte hex string) */
  hash: Hash
}

/**
 * Result of sign hash operation
 */
export interface SignHashResult {
  /** Signature as hex string */
  signature: Hex
}

/**
 * Signs a raw hash directly via the Openfort API.
 * Unlike signMessage, this does NOT apply EIP-191 prefix or any hashing.
 * The hash is signed as-is.
 *
 * @param options - Sign hash options
 * @returns The signature
 */
export async function signHash(
  options: SignHashOptions,
): Promise<SignHashResult> {
  const { accountId, hash } = options

  // Sign the hash directly via v2 API (no EIP-191 prefix)
  const response = await signTransaction(accountId, { data: hash })

  return {
    signature: response.signature as Hex,
  }
}
