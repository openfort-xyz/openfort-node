/**
 * @module Wallets/Solana/Accounts/SolanaAccount
 * Factory function for creating Solana account objects with bound action methods
 */

import { sendRawTransaction as sendRawTransactionAction } from '../actions/sendRawTransaction'
import { signMessage as signMessageAction } from '../actions/signMessage'
import { signTransaction as signTransactionAction } from '../actions/signTransaction'
import { transfer as transferAction } from '../actions/transfer'
import type {
  AccountSendRawTransactionOptions,
  AccountTransferOptions,
  SolanaAccount,
} from '../types'

/**
 * Raw account data from API response
 */
export interface SolanaAccountData {
  /** Account unique ID */
  id: string
  /** Account address (base58 encoded) */
  address: string
}

/**
 * Creates a Solana account object with bound action methods.
 *
 * @param data - Raw account data from API
 * @returns Solana account object with signing methods
 */
export function toSolanaAccount(data: SolanaAccountData): SolanaAccount {
  const { id, address } = data

  const account: SolanaAccount = {
    id,
    address,
    custody: 'Developer',

    async signMessage(parameters: { message: string }): Promise<string> {
      const result = await signMessageAction({
        accountId: id,
        message: parameters.message,
      })
      return result.signature
    },

    async signTransaction(parameters: {
      transaction: string
    }): Promise<string> {
      const result = await signTransactionAction({
        accountId: id,
        transaction: parameters.transaction,
      })
      return result.signedTransaction
    },

    async transfer(
      options: AccountTransferOptions,
    ): Promise<{ signature: string }> {
      return transferAction({ ...options, account })
    },

    async sendRawTransaction(
      options: AccountSendRawTransactionOptions,
    ): Promise<{ signature: string }> {
      return sendRawTransactionAction({ ...options, account })
    },
  }

  return account
}
