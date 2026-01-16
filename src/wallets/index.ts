/**
 * @module Wallets
 * Wallet functionality for EVM and Solana blockchains
 */

// EVM exports
export {
  type Address,
  type CreateEvmAccountOptions,
  type EvmAccount,
  type EvmAccountBase,
  type EvmAccountData,
  EvmClient,
  type EvmSigningMethods,
  type GetEvmAccountOptions,
  type Hash,
  type Hex,
  type ListEvmAccountsOptions,
  type SignableMessage,
  type SignMessageOptions as EvmSignMessageOptions,
  type SignTransactionOptions as EvmSignTransactionOptions,
  type SignTypedDataOptions as EvmSignTypedDataOptions,
  type TransactionSerializable,
  type TypedData,
  type TypedDataDefinition,
  toEvmAccount,
} from './evm'

// Solana exports
export {
  type CreateSolanaAccountOptions,
  type ExportSolanaAccountOptions,
  type GetSolanaAccountOptions,
  type ImportSolanaAccountOptions,
  type ListSolanaAccountsOptions,
  type SignMessageOptions as SolanaSignMessageOptions,
  type SignTransactionOptions as SolanaSignTransactionOptions,
  type SolanaAccount,
  type SolanaAccountBase,
  type SolanaAccountData,
  SolanaClient,
  type SolanaSigningMethods,
  toSolanaAccount,
} from './solana'

// Shared types
export type { ListAccountsResult } from './types'
