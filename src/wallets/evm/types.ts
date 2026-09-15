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
  /**
   * Fee-sponsorship policy ID (starts with `pol_`), obtained from
   * `openfort.feeSponsorship.create()`. Optional — when omitted, project-scoped
   * fee sponsorships are auto-discovered and the first matching one is applied.
   *
   * This is NOT a guardrail policy ID (starts with `ply_`, from
   * `openfort.policies.create()`). Guardrail policies are attached by scope
   * (project- or account-wide) and enforced automatically on every operation —
   * they are never passed here. Linking a guardrail policy to a fee sponsorship
   * (via `feeSponsorship.create({ policyId })`) makes it govern sponsorship
   * eligibility instead; it no longer acts as a signing guardrail.
   */
  policy?: string
  /** Custom RPC URL. If omitted, uses viem's default public RPC for the chain. */
  rpcUrl?: string
  /**
   * EIP-7702 implementation type to register when the account has no delegated
   * record yet (the register-on-first-send path). Optional.
   *
   * When omitted, a chain-aware default is used: `"CaliburV9"` on every chain
   * where it is deployed (including Polygon Amoy / 80002), falling back to
   * `"Calibur"` (V8) on the chains where V9 is not available (e.g. Ethereum
   * Mainnet / 1). Set this explicitly to override the default for a chain — for
   * example if a newer implementation type ships before this SDK is updated.
   *
   * Ignored when a delegated-account record already exists (the existing
   * record's implementation is authoritative).
   */
  implementationType?: string
}

// Re-export viem types for convenience
// Re-export openapi types for convenience
export type {
  Address,
  Hash,
  Hex,
  Interaction,
  SignableMessage,
  TransactionIntentResponse,
  TransactionSerializable,
  TypedData,
  TypedDataDefinition,
}
