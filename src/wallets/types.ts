/**
 * @module Wallets
 * Shared types for wallet functionality
 */

/**
 * Result of listing wallet accounts
 */
export interface ListAccountsResult<T> {
  /** Array of accounts */
  accounts: T[]
  /** Token for fetching the next page */
  nextPageToken?: string
  /** Total count of accounts */
  total?: number
}
