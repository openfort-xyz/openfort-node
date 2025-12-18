/**
 * @module Wallets/Solana/Accounts/SolanaAccount
 * Factory function for creating Solana account objects with bound action methods
 */

import { signMessage as signMessageAction } from '../actions/signMessage'
import { signTransaction as signTransactionAction } from '../actions/signTransaction'
import type { SolanaAccount } from '../types'

/**
 * Raw account data from API response
 */
export interface SolanaAccountData {
  /** Account unique ID */
  id: string
  /** Account address (base58 encoded) */
  address: string
  /** Optional account name */
  name?: string
}

/**
 * Creates a Solana account object with bound action methods.
 *
 * @param data - Raw account data from API
 * @returns Solana account object with signing methods
 */
export function toSolanaAccount(data: SolanaAccountData): SolanaAccount {
  const { id, address, name } = data

  const account: SolanaAccount = {
    id,
    address,
    name,
    type: 'solana-server',

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
  }

  return account
}
