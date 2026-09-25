/**
 * @module Wallets/Solana/Types
 * Solana-specific types for wallet operations
 */

import type { Instruction } from '@solana/kit'

/**
 * Base Solana account with signing capabilities
 */
export interface SolanaAccountBase {
  /** The account's unique identifier */
  id: string
  /** The account's address (base58 encoded) */
  address: string
  /** Account type identifier */
  custody: 'Developer'
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
 * Solana cluster identifier
 */
export type SolanaCluster = 'devnet' | 'mainnet-beta'

/**
 * Full Solana server account with all signing capabilities
 */
export type SolanaAccount = SolanaAccountBase &
  SolanaSigningMethods & {
    /**
     * Transfer SOL or SPL tokens to a destination address.
     * Handles ATA creation, mint decimals, and balance validation automatically.
     * @param options - Transfer options (destination, amount, token, cluster)
     * @returns Object with the transaction signature
     */
    transfer(options: AccountTransferOptions): Promise<{ signature: string }>

    /**
     * Send a pre-built base64-encoded transaction via the gasless Kora flow.
     * Decodes the transaction, extracts instructions, and re-wraps them.
     * @param options - Raw transaction options (cluster, transaction, etc.)
     * @returns Object with the transaction signature
     */
    sendRawTransaction(
      options: AccountSendRawTransactionOptions,
    ): Promise<{ signature: string }>
  }

/**
 * Options for creating a Solana account
 */
export interface CreateSolanaAccountOptions {
  /** Wallet ID (starts with pla_). Optional - associates the wallet with a player. */
  wallet?: string
}

/**
 * Options for getting a Solana account
 */
export interface GetSolanaAccountOptions {
  /** Account address (base58 encoded) */
  address?: string
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

/**
 * Options for sending a gasless Solana transaction via Kora
 */
export interface SendSolanaTransactionOptions {
  /** The Solana account to send the transaction from */
  account: SolanaAccount
  /** The Solana cluster to use */
  cluster: SolanaCluster
  /** Solana instructions to include in the transaction */
  instructions: Instruction[]
  /** Compute unit limit (default: 200_000) */
  computeUnitLimit?: number
  /** Compute unit price in micro-lamports (default: 50_000n) */
  computeUnitPrice?: bigint
  /** Solana RPC URL. Defaults to public RPC for the cluster. */
  rpcUrl?: string
  /** Solana WebSocket URL. Defaults to public WS for the cluster. */
  wsUrl?: string
}

/**
 * Options for the high-level transfer action
 */
export interface TransferOptions {
  /** The Solana account to transfer from */
  account: SolanaAccount
  /** Destination address (base58 encoded) */
  to: string
  /** Amount in smallest unit (lamports for SOL, base units for SPL) */
  amount: bigint
  /** Token to transfer: 'sol' (default), 'usdc', or a mint address */
  token?: string
  /** The Solana cluster to use */
  cluster: SolanaCluster
  /** Compute unit limit (default: 200_000) */
  computeUnitLimit?: number
  /** Compute unit price in micro-lamports (default: 50_000n) */
  computeUnitPrice?: bigint
  /** Solana RPC URL. Defaults to public RPC for the cluster. */
  rpcUrl?: string
  /** Solana WebSocket URL. Defaults to public WS for the cluster. */
  wsUrl?: string
}

/**
 * Transfer options without the account field, for use on the account object
 */
export type AccountTransferOptions = Omit<TransferOptions, 'account'>

/**
 * Options for sending a pre-built base64-encoded Solana transaction via Kora
 */
export interface SendRawSolanaTransactionOptions {
  /** The Solana account to send the transaction from */
  account: SolanaAccount
  /** The Solana cluster to use */
  cluster: SolanaCluster
  /** Base64-encoded wire transaction */
  transaction: string
  /** Compute unit limit (default: 200_000) */
  computeUnitLimit?: number
  /** Compute unit price in micro-lamports (default: 50_000n) */
  computeUnitPrice?: bigint
  /** Solana RPC URL. Defaults to public RPC for the cluster. */
  rpcUrl?: string
  /** Solana WebSocket URL. Defaults to public WS for the cluster. */
  wsUrl?: string
}

/**
 * Raw transaction options without the account field, for use on the account object
 */
export type AccountSendRawTransactionOptions = Omit<
  SendRawSolanaTransactionOptions,
  'account'
>
