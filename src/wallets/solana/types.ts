/**
 * @module Wallets/Solana/Types
 * Solana-specific types for wallet operations
 */

/**
 * Base Solana account with signing capabilities
 */
export interface SolanaAccountBase {
  /** The account's unique identifier */
  id: string
  /** The account's address (base58 encoded) */
  address: string
  /** Optional name for the account */
  name?: string
  /** Account type identifier */
  type: 'solana-server'
}

/**
 * Solana signing methods interface
 */
export interface SolanaSigningMethods {
  /**
   * Signs a message
   * @param parameters - Object containing the message to sign
   */
  signMessage(parameters: { message: string }): Promise<string>

  /**
   * Signs a transaction
   * @param parameters - Object containing the base64-encoded transaction
   */
  signTransaction(parameters: { transaction: string }): Promise<string>
}

/**
 * Full Solana server account with all signing capabilities
 */
export type SolanaAccount = SolanaAccountBase & SolanaSigningMethods

/**
 * Options for creating a Solana account
 */
export interface CreateSolanaAccountOptions {
  /** Wallet ID (starts with pla_). Optional - associates the wallet with a player. */
  wallet?: string
  /** Optional name for the wallet */
  name?: string
  /** Idempotency key */
  idempotencyKey?: string
}

/**
 * Options for getting a Solana account
 */
export interface GetSolanaAccountOptions {
  /** Account address (base58 encoded) */
  address?: string
  /** Account name */
  name?: string
  /** Account ID */
  id?: string
}

/**
 * Options for listing Solana accounts
 */
export interface ListSolanaAccountsOptions {
  /** Maximum number of accounts to return (default: 10, max: 100) */
  limit?: number
  /** Number of accounts to skip (for pagination) */
  skip?: number
}

/**
 * Options for importing a Solana account
 */
export interface ImportSolanaAccountOptions {
  /** Private key as base58 string or 64-byte hex string */
  privateKey: string
  /** Optional name for the account */
  name?: string
}

/**
 * Options for exporting a Solana account
 */
export interface ExportSolanaAccountOptions {
  /** Account ID (starts with acc_) */
  id: string
}

/**
 * Options for signing a message
 */
export interface SignMessageOptions {
  /** Account ID for API calls */
  accountId: string
  /** Message to sign (will be UTF-8 encoded) */
  message: string
}

/**
 * Options for signing a transaction
 */
export interface SignTransactionOptions {
  /** Account ID for API calls */
  accountId: string
  /** Base64-encoded serialized transaction */
  transaction: string
}
