/**
 * @module Wallets/EVM
 * EVM wallet functionality
 */

// Account factory
export { type EvmAccountData, toEvmAccount } from './accounts'
// Actions
export { signMessage, signTransaction, signTypedData } from './actions'
// Client
export { EvmClient } from './evmClient'
// Types
export type {
  Address,
  CreateEvmAccountOptions,
  EvmAccount,
  EvmAccountBase,
  EvmSigningMethods,
  ExportEvmAccountOptions,
  GetEvmAccountOptions,
  Hash,
  Hex,
  ImportEvmAccountOptions,
  ListEvmAccountsOptions,
  SignableMessage,
  SignMessageOptions,
  SignTransactionOptions,
  SignTypedDataOptions,
  TransactionSerializable,
  TypedData,
  TypedDataDefinition,
} from './types'
