/**
 * @module Wallets/EVM/Actions/SignTypedData
 * Sign EIP-712 typed data
 */

import { UserInputValidationError } from '../../../errors'
import { sign } from '../../../openapi-client'
import type { Address, Hex, TypedData, TypedDataDefinition } from '../types'
import { normalizeSignature } from './normalizeSignature'

/**
 * Options for signing typed data
 */
export interface SignTypedDataOptions<
  T extends TypedData | Record<string, unknown> = TypedData,
  P extends keyof T | 'EIP712Domain' = keyof T,
> {
  /** Account address */
  address: Address
  /** Account ID for API calls */
  accountId: string
  /** Typed data definition */
  typedData: TypedDataDefinition<T, P>
}

/**
 * Result of sign typed data operation
 */
export interface SignTypedDataResult {
  /** Signature as hex string */
  signature: Hex
}

/**
 * Signs EIP-712 typed data via the Openfort API.
 * The typed data is hashed according to EIP-712 and signed.
 *
 * @param options - Sign typed data options
 * @returns The signature
 */
export async function signTypedData<
  T extends TypedData | Record<string, unknown> = TypedData,
  P extends keyof T | 'EIP712Domain' = keyof T,
>(options: SignTypedDataOptions<T, P>): Promise<SignTypedDataResult> {
  let viem: any
  try {
    viem = await import('viem')
  } catch {
    throw new UserInputValidationError(
      '`viem` is required for signTypedData. Install it and try again.',
    )
  }

  const { accountId, typedData } = options

  // Hash the typed data using EIP-712
  const hash = viem.hashTypedData(typedData)

  // Sign the hash via v2 API
  const response = await sign(accountId, { data: hash })

  const signature = normalizeSignature(response.signature)

  return {
    signature: signature as Hex,
  }
}
