/**
 * @module Wallets/EVM/Accounts/EvmAccount
 * Factory function for creating EVM account objects with bound action methods
 */

import { UserInputValidationError } from '../../../errors'
import { sign } from '../../../openapi-client'
import { normalizeSignature } from '../actions/normalizeSignature'
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
  /** Wallet ID */
  walletId: string
}

/**
 * Creates an EVM account object with bound action methods.
 *
 * @param data - Raw account data from API
 * @returns EVM account object with signing methods
 */
export function toEvmAccount(data: EvmAccountData): EvmAccount {
  const { id, address, walletId } = data

  const account: EvmAccount = {
    id,
    address: address as Address,
    custody: 'Developer',
    walletId,

    async sign(parameters: { hash: Hash }): Promise<Hex> {
      const result = await signHashAction({
        accountId: id,
        hash: parameters.hash,
      })
      return result.signature
    },

    async signMessage(parameters: { message: SignableMessage }): Promise<Hex> {
      let viem: typeof import('viem')
      try {
        viem = await import('viem')
      } catch {
        throw new UserInputValidationError(
          '`viem` is required for signMessage. Install it and try again.',
        )
      }

      const { message } = parameters

      // Send EIP-191 preimage (backend detects type, hashes, signs)
      const preimage = viem.toPrefixedMessage(message)
      const result = await sign(id, { data: preimage })
      return normalizeSignature(result.signature) as Hex
    },

    async signTransaction(transaction: TransactionSerializable): Promise<Hex> {
      let viem: typeof import('viem')
      try {
        viem = await import('viem')
      } catch {
        throw new UserInputValidationError(
          '`viem` is required for signTransaction. Install it and try again.',
        )
      }

      // Send serialized transaction (backend detects type, hashes, signs)
      const serialized = viem.serializeTransaction(transaction)
      const response = await sign(id, { data: serialized })

      // Parse signature into v, r, s components
      const signature = viem.parseSignature(response.signature as Hex)

      // Re-serialize with signature to get fully signed transaction
      const signedTransaction = viem.serializeTransaction(
        transaction,
        signature,
      ) as Hex

      return signedTransaction
    },

    async signTypedData<
      const T extends TypedData | Record<string, unknown>,
      P extends keyof T | 'EIP712Domain' = keyof T,
    >(parameters: TypedDataDefinition<T, P>): Promise<Hex> {
      let viem: typeof import('viem')
      try {
        viem = await import('viem')
      } catch {
        throw new UserInputValidationError(
          '`viem` is required for signTypedData. Install it and try again.',
        )
      }

      // Construct EIP712Domain types properly
      const {
        domain = {},
        message,
        primaryType,
      } = parameters as TypedDataDefinition
      const types = {
        EIP712Domain: viem.getTypesForEIP712Domain({ domain }),
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
      const hash = viem.hashTypedData(openApiMessage)
      const result = await sign(id, { data: hash })

      return normalizeSignature(result.signature) as Hex
    },
  }

  return account
}
