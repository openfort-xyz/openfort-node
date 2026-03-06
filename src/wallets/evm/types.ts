/**
 * @module Wallets/EVM/Types
 * EVM-specific types for wallet operations
 */

import type {
  Address,
  Hash,
  Hex,
  SignableMessage,
  TransactionSerializable,
  TypedData,
  TypedDataDefinition,
} from 'viem'
import type {
  Interaction,
  TransactionIntentResponse,
} from '../../openapi-client'

/**
 * Base EVM account with signing capabilities
 */
export interface EvmAccountBase {
  /** The account's unique identifier */
  id: string
  /** The account's address */
  address: Address
  /** Account type identifier */
  custody: 'Developer'
  /** Wallet ID */
  walletId: string
}

/**
 * EVM signing methods interface
 */
export interface EvmSigningMethods {
  /**
   * Signs a hash and returns the signature
   * @param parameters - Object containing the hash to sign
   */
  sign(parameters: { hash: Hash }): Promise<Hex>

  /**
   * Signs a message (EIP-191 personal sign)
   * @param parameters - Object containing the message to sign
   */
  signMessage(parameters: { message: SignableMessage }): Promise<Hex>

  /**
   * Signs a transaction
   * @param transaction - Transaction to sign
   */
  signTransaction(transaction: TransactionSerializable): Promise<Hex>

  /**
   * Signs typed data (EIP-712)
   * @param parameters - Typed data definition
   */
  signTypedData<
    const T extends TypedData | Record<string, unknown>,
    P extends keyof T | 'EIP712Domain' = keyof T,
  >(parameters: TypedDataDefinition<T, P>): Promise<Hex>
}

/**
 * Full EVM server account with all signing capabilities
 */
export type EvmAccount = EvmAccountBase & EvmSigningMethods

/**
 * Options for sign message action
 */
export interface SignMessageOptions {
  /** Account address */
  address: Address
  /** Message to sign (string or SignableMessage) */
  message: SignableMessage
  /** Idempotency key */
  idempotencyKey?: string
}

/**
 * Options for sign typed data action
 */
export interface SignTypedDataOptions<
  T extends TypedData | Record<string, unknown> = TypedData,
  P extends keyof T | 'EIP712Domain' = keyof T,
> {
  /** Account address */
  address: Address
  /** Typed data definition */
  typedData: TypedDataDefinition<T, P>
  /** Idempotency key */
  idempotencyKey?: string
}

/**
 * Options for sign transaction action
 */
export interface SignTransactionOptions {
  /** Account address */
  address: Address
  /** Transaction to sign */
  transaction: TransactionSerializable
  /** Idempotency key */
  idempotencyKey?: string
}

/**
 * Options for creating an EVM account
 */
export interface CreateEvmAccountOptions {
  /** Wallet ID (starts with pla_). Optional - associates the wallet with a player. */
  wallet?: string
  /** Idempotency key */
  idempotencyKey?: string
}

/**
 * Options for getting an EVM account
 */
export interface GetEvmAccountOptions {
  /** Account address */
  address?: Address
  /** Account ID */
  id?: string
}

/**
 * Options for retrieving linked (delegated) accounts for an EVM address
 */
export interface GetLinkedAccountsOptions {
  /** The EVM address to look up linked accounts for */
  address: string
  /** The chain ID to filter linked accounts by */
  chainId: number
}

/**
 * Options for listing EVM accounts
 */
export interface ListEvmAccountsOptions {
  /** Maximum number of accounts to return (default: 10, max: 100) */
  limit?: number
  /** Number of accounts to skip (for pagination) */
  skip?: number
}

/**
 * Options for importing an EVM account
 */
export interface ImportEvmAccountOptions {
  /** Private key as hex string (with or without 0x prefix) */
  privateKey: string
  /** Idempotency key */
  idempotencyKey?: string
}

/**
 * Options for exporting an EVM account
 */
export interface ExportEvmAccountOptions {
  /** Account ID (starts with acc_) */
  id: string
  /** Idempotency key */
  idempotencyKey?: string
}

/**
 * Options for updating an EVM account (e.g., upgrading to Delegated Account)
 */
export interface UpdateEvmAccountOptions {
  /** WalletId (starts with pla_) */
  walletId: string
  /** Upgrade the account type. Currently only supports "Delegated Account". */
  accountType?: 'Delegated Account'
  /** The chain ID. Must be a supported chain. */
  chainId: number
  /** The implementation type for delegation (e.g., "Calibur"). Required when accountType is "Delegated Account". */
  implementationType?: string
  /** The ID of the existing account to upgrade. Required when accountType is "Delegated Account". */
  accountId?: string
}

/**
 * Options for signing data
 */
export interface SignDataOptions {
  /** Account ID (starts with acc_) */
  id: string
  /** Data to sign (hex-encoded transaction data or message hash) */
  data: string
  /** Idempotency key */
  idempotencyKey?: string
}

/**
 * Options for sending a gasless transaction with EIP-7702 delegation
 */
export interface SendTransactionOptions {
  /** Account ID (starts with acc_) */
  account: EvmAccount
  /** Chain ID to execute on */
  chainId: number
  /** Contract interactions to execute */
  interactions: Interaction[]
  /** Policy ID for gas sponsorship (starts with pol_). Optional. */
  policy?: string
  /** Custom RPC URL. If omitted, uses viem's default public RPC for the chain. */
  rpcUrl?: string
}

// Re-export viem types for convenience
export type {
  Address,
  Hash,
  Hex,
  SignableMessage,
  TransactionSerializable,
  TypedData,
  TypedDataDefinition,
}

// Re-export openapi types for convenience
export type { Interaction, TransactionIntentResponse }
