/**
 * @module Wallets/EVM/Accounts/EvmAccount
 * Factory function for creating EVM account objects with bound action methods
 */

import { signHash as signHashAction } from '../actions/signHash'
import { signMessage as signMessageAction } from '../actions/signMessage'
import { signTransaction as signTransactionAction } from '../actions/signTransaction'
import { signTypedData as signTypedDataAction } from '../actions/signTypedData'
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
    custody: 'developer',

    async sign(parameters: { hash: Hash }): Promise<Hex> {
      const result = await signHashAction({
        accountId: id,
        hash: parameters.hash,
      })
      return result.signature
    },

    async signMessage(parameters: { message: SignableMessage }): Promise<Hex> {
      const result = await signMessageAction({
        address: address as Address,
        accountId: id,
        message: parameters.message,
      })
      return result.signature
    },

    async signTransaction(transaction: TransactionSerializable): Promise<Hex> {
      const result = await signTransactionAction({
        address: address as Address,
        accountId: id,
        transaction,
      })
      return result.signedTransaction
    },

    async signTypedData<
      const T extends TypedData | Record<string, unknown>,
      P extends keyof T | 'EIP712Domain' = keyof T,
    >(parameters: TypedDataDefinition<T, P>): Promise<Hex> {
      const result = await signTypedDataAction({
        address: address as Address,
        accountId: id,
        typedData: parameters,
      })
      return result.signature
    },
  }

  return account
}
