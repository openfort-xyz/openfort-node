/**
 * @module Wallets/EVM/Actions/SignTransaction
 * Sign an EVM transaction
 */

import {
  keccak256,
  parseSignature,
  type Signature,
  serializeTransaction,
} from 'viem'
import { sign as signApi } from '../../../openapi-client'
import type { Address, Hex, TransactionSerializable } from '../types'

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
  const { accountId, transaction } = options

  // Serialize the unsigned transaction
  const serialized = serializeTransaction(transaction)

  // Sign the serialized transaction via API
  const response = await signApi(accountId, { data: serialized })

  // Parse signature into v, r, s components
  const signature = parseSignature(response.signature as Hex) as Signature

  // Re-serialize with signature to get fully signed transaction
  const signedTransaction = serializeTransaction(transaction, signature) as Hex

  // Hash the signed transaction to get the transaction hash
  const transactionHash = keccak256(signedTransaction)

  return {
    signedTransaction,
    transactionHash,
  }
}
