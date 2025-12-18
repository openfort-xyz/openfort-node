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

/**
 * Base EVM account with signing capabilities
 */
export interface EvmAccountBase {
  /** The account's unique identifier */
  id: string
  /** The account's address */
  address: Address
  /** Optional name for the account */
  name?: string
  /** Account type identifier */
  type: 'evm-server'
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
 * Account type for v2 API
 */
export type EvmAccountType =
  | 'Externally Owned Account'
  | 'Smart Account'
  | 'Delegated Account'

/**
 * Options for creating an EVM account
 */
export interface CreateEvmAccountOptions {
  /** User ID (starts with pla_). If not provided, a new user will be created. */
  user?: string
  /** Account type. Defaults to 'Externally Owned Account' */
  accountType?: EvmAccountType
  /** Chain ID for the account */
  chainId?: number
  /** Optional name for the account (stored client-side only) */
  name?: string
  /** Idempotency key */
  idempotencyKey?: string
}

/**
 * Options for getting an EVM account
 */
export interface GetEvmAccountOptions {
  /** Account address */
  address?: Address
  /** Account name */
  name?: string
  /** Account ID */
  id?: string
}

/**
 * Options for listing EVM accounts
 */
export interface ListEvmAccountsOptions {
  /** Maximum number of accounts to return */
  limit?: number
  /** Number of accounts to skip */
  skip?: number
  /** Filter by user */
  user?: string
}

/**
 * Options for importing an EVM account
 */
export interface ImportEvmAccountOptions {
  /** Private key as hex string (with or without 0x prefix) */
  privateKey: string
  /** Optional name for the account */
  name?: string
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
