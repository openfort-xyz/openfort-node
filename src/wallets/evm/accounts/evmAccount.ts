/**
 * @module Wallets/EVM/Accounts/EvmAccount
 * Factory function for creating EVM account objects with bound action methods
 */

import {
  getTypesForEIP712Domain,
  type HashTypedDataParameters,
  hashMessage,
  hashTypedData,
  parseSignature,
  type Signature,
  serializeTransaction,
} from 'viem'
import { sign } from '../../../openapi-client'
import { signHash as signHashAction } from '../actions/signHash'
import type {
  Address,
  EvmAccount,
  Hash,
  Hex,
  SignableMessage,
  TransactionSerializable,
  TypedData,
  TypedDataDefinition,
} from '../types'

/**
 * Raw account data from API response
 */
export interface EvmAccountData {
  /** Account unique ID */
  id: string
  /** Account address */
  address: string
}

/**
 * Creates an EVM account object with bound action methods.
 *
 * @param data - Raw account data from API
 * @returns EVM account object with signing methods
 */
export function toEvmAccount(data: EvmAccountData): EvmAccount {
  const { id, address } = data

  const account: EvmAccount = {
    id,
    address: address as Address,
    custody: 'Developer',

    async sign(parameters: { hash: Hash }): Promise<Hex> {
      const result = await signHashAction({
        accountId: id,
        hash: parameters.hash,
      })
      return result.signature
    },

    async signMessage(parameters: { message: SignableMessage }): Promise<Hex> {
      const { message } = parameters

      // Handle string messages differently from raw messages
      if (typeof message === 'string') {
        // For string messages, hash with EIP-191 prefix and sign
        const hash = hashMessage(message)
        const result = await sign(id, { data: hash })
        return result.signature as Hex
      }

      // For raw messages (Uint8Array or { raw: ... }), hash and sign
      const hash = hashMessage(message)
      const result = await sign(id, { data: hash })
      return result.signature as Hex
    },

    async signTransaction(transaction: TransactionSerializable): Promise<Hex> {
      // Serialize the transaction before sending to API
      const serialized = serializeTransaction(transaction)

      // Sign the serialized transaction via API
      const response = await sign(id, { data: serialized })

      // Parse signature into v, r, s components
      const signature = parseSignature(response.signature as Hex) as Signature

      // Re-serialize with signature to get fully signed transaction
      const signedTransaction = serializeTransaction(
        transaction,
        signature,
      ) as Hex

      return signedTransaction
    },

    async signTypedData<
      const T extends TypedData | Record<string, unknown>,
      P extends keyof T | 'EIP712Domain' = keyof T,
    >(parameters: TypedDataDefinition<T, P>): Promise<Hex> {
      // Construct EIP712Domain types properly
      const {
        domain = {},
        message,
        primaryType,
      } = parameters as HashTypedDataParameters
      const types = {
        EIP712Domain: getTypesForEIP712Domain({ domain }),
        ...parameters.types,
      }

      const openApiMessage = {
        domain,
        types,
        primaryType,
        message,
      }

      // Sign the typed data via API
      // Note: Openfort uses a generic sign endpoint, so we hash first
      const hash = hashTypedData(openApiMessage)
      const result = await sign(id, { data: hash })

      return result.signature as Hex
    },
  }

  return account
}
