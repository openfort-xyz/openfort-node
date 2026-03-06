/**
 * @module Wallets/EVM/Actions/SignTransaction
 * Sign an EVM transaction
 */

import { UserInputValidationError } from '../../../errors'
import { sign as signApi } from '../../../openapi-client'
import type { Address, Hex, TransactionSerializable } from '../types'
import { normalizeSignature } from './normalizeSignature'

/**
 * Options for signing a transaction
 */
export interface SignTransactionOptions {
  /** Account address */
  address: Address
  /** Account ID for API calls */
  accountId: string
  /** Transaction to sign */
  transaction: TransactionSerializable
}

/**
 * Result of sign transaction operation
 */
export interface SignTransactionResult {
  /** Signed transaction as hex string (ready to broadcast) */
  signedTransaction: Hex
  /** Transaction hash */
  transactionHash: Hex
}

/**
 * Signs an EVM transaction via the Openfort API.
 * The transaction is serialized, signed, and returned as a fully signed
 * transaction ready to broadcast.
 *
 * @param options - Sign transaction options
 * @returns The signed transaction and hash
 */
export async function signTransaction(
  options: SignTransactionOptions,
): Promise<SignTransactionResult> {
  let viem: any
  try {
    viem = await import('viem')
  } catch {
    throw new UserInputValidationError(
      '`viem` is required for signTransaction. Install it and try again.',
    )
  }

  const { accountId, transaction } = options

  // Send serialized transaction (backend detects type, hashes, signs)
  const serialized = viem.serializeTransaction(transaction)
  const response = await signApi(accountId, { data: serialized })

  // Parse signature into v, r, s components
  const signature = viem.parseSignature(
    normalizeSignature(response.signature) as Hex,
  )

  // Re-serialize with signature to get fully signed transaction
  const signedTransaction = viem.serializeTransaction(
    transaction,
    signature,
  ) as Hex

  // Hash the signed transaction to get the transaction hash
  const transactionHash = viem.keccak256(signedTransaction)

  return {
    signedTransaction,
    transactionHash,
  }
}
