/**
 * @module Wallets/EVM/EvmClient
 * Main client for EVM wallet operations
 */

import { IMPORT_ENCRYPTION_PUBLIC_KEY } from '../../constants'
import {
  AccountNotFoundError,
  EncryptionError,
  UserInputValidationError,
} from '../../errors'
import {
  type BackendWalletResponse,
  createBackendWallet,
  exportPrivateKey,
  getBackendWallet,
  importPrivateKey,
  listBackendWallets,
  signTransaction,
} from '../../openapi-client'
import {
  decryptExportedPrivateKey,
  deriveSharedSecret,
  encryptWithSharedSecret,
  generateECDHKeyPair,
} from '../../utilities/encryption'
import type { ListAccountsResult } from '../types'
import { type EvmAccountData, toEvmAccount } from './accounts/evmAccount'
import type {
  CreateEvmAccountOptions,
  EvmAccount,
  ExportEvmAccountOptions,
  GetEvmAccountOptions,
  ImportEvmAccountOptions,
  ListEvmAccountsOptions,
  SignDataOptions,
} from './types'

/**
 * Converts a BackendWalletResponse to EvmAccountData
 */
function toEvmAccountData(response: BackendWalletResponse): EvmAccountData {
  return {
    id: response.id,
    address: response.address,
    name: response.name,
  }
}

/**
 * Options for creating an EVM wallet client
 */
export interface EvmClientOptions {
  /** Optional custom API base URL */
  basePath?: string
  /** Optional wallet secret for X-Wallet-Auth header */
  walletSecret?: string
}

/**
 * Client for managing EVM wallets.
 * Provides methods for creating, retrieving, and managing server-side EVM accounts.
 */
export class EvmClient {
  static type = 'evmWallet'

  /**
   * Creates a new EVM wallet client.
   *
   * Note: The API client is configured globally via the main Openfort class.
   * This client just provides wallet-specific methods.
   *
   * @param _accessToken - Openfort API key (passed for backwards compatibility)
   * @param _options - Optional client configuration (for backwards compatibility)
   */
  // biome-ignore lint/complexity/noUselessConstructor: Constructor needed for backwards compatibility
  constructor(_accessToken?: string, _options?: string | EvmClientOptions) {
    // The API client is configured globally via openfortApiClient.configure()
    // No per-client configuration needed anymore
  }

  /**
   * Creates a new EVM backend wallet.
   *
   * @param options - Account creation options
   * @returns The created EVM account
   *
   * @example
   * ```typescript
   * // Create an EVM wallet
   * const account = await openfort.evm.createAccount({
   *   name: 'MyWallet',
   * });
   *
   * // Create with a specific wallet
   * const account = await openfort.evm.createAccount({
   *   wallet: 'pla_...',
   *   name: 'PlayerWallet',
   * });
   * ```
   */
  public async createAccount(
    options: CreateEvmAccountOptions = {},
  ): Promise<EvmAccount> {
    const response = await createBackendWallet({
      chainType: 'EVM',
      wallet: options.wallet,
      name: options.name,
    })

    return toEvmAccount({
      id: response.id,
      address: response.address,
      name: options.name,
    })
  }

  /**
   * Retrieves an existing EVM account.
   *
   * @param options - Account retrieval options (id or address)
   * @returns The EVM account
   *
   * @example
   * ```typescript
   * const account = await openfort.evm.getAccount({
   *   id: 'acc_...',
   * });
   *
   * // Or by address (requires listing and filtering)
   * const account = await openfort.evm.getAccount({
   *   address: '0x...',
   * });
   * ```
   */
  public async getAccount(options: GetEvmAccountOptions): Promise<EvmAccount> {
    if (!options.id && !options.address) {
      throw new UserInputValidationError(
        'Must provide either id or address to get account',
      )
    }

    // If we have an ID, fetch directly
    if (options.id) {
      const response = await getBackendWallet(options.id)
      return toEvmAccount(toEvmAccountData(response))
    }

    // For address lookup, use listBackendWallets with address filter
    if (options.address) {
      const wallets = await listBackendWallets({
        address: options.address,
        chainType: 'EVM',
        limit: 1,
      })

      if (wallets.data.length === 0) {
        throw new AccountNotFoundError()
      }

      return toEvmAccount(toEvmAccountData(wallets.data[0]))
    }

    throw new AccountNotFoundError()
  }

  /**
   * Lists all EVM backend wallets.
   *
   * @param options - List options (limit, skip, filters)
   * @returns List of EVM accounts
   *
   * @example
   * ```typescript
   * const { accounts } = await openfort.evm.listAccounts({
   *   limit: 10,
   * });
   * ```
   */
  public async listAccounts(
    options: ListEvmAccountsOptions = {},
  ): Promise<ListAccountsResult<EvmAccount>> {
    const response = await listBackendWallets({
      limit: options.limit,
      skip: options.skip,
      chainType: 'EVM',
    })

    const accounts = response.data.map((wallet) =>
      toEvmAccount(toEvmAccountData(wallet)),
    )

    return {
      accounts,
      total: response.total,
    }
  }

  /**
   * Imports an EVM account using a private key.
   * The private key is encrypted using ECDH P-256 key exchange with AES-256-GCM.
   *
   * @param options - Import options including the private key
   * @returns The imported EVM account
   *
   * @example
   * ```typescript
   * const account = await openfort.evm.importAccount({
   *   privateKey: '0x...',
   *   name: 'ImportedWallet',
   * });
   * ```
   */
  public async importAccount(
    options: ImportEvmAccountOptions,
  ): Promise<EvmAccount> {
    // Validate private key format
    const privateKeyHex = options.privateKey.startsWith('0x')
      ? options.privateKey.slice(2)
      : options.privateKey

    if (!/^[0-9a-fA-F]{64}$/.test(privateKeyHex)) {
      throw new UserInputValidationError(
        'Private key must be a valid 32-byte hexadecimal string (64 characters)',
      )
    }

    // Check if server public key is configured
    if (!IMPORT_ENCRYPTION_PUBLIC_KEY) {
      throw new EncryptionError(
        'Import encryption public key is not configured. ' +
        'Please contact Openfort to get the server public key.',
      )
    }

    // Generate ephemeral ECDH key pair for encryption
    const { publicKey, ecdh } = generateECDHKeyPair()

    // Derive shared secret using server's static public key
    const sharedSecret = deriveSharedSecret(ecdh, IMPORT_ENCRYPTION_PUBLIC_KEY)

    // Encrypt the private key with the shared secret
    const encryptedPrivateKey = encryptWithSharedSecret(
      privateKeyHex,
      sharedSecret,
    )

    // Call the import API
    const response = await importPrivateKey({
      encryptedPrivateKey,
      encryptionKey: publicKey,
      chainType: 'EVM',
      name: options.name,
    })

    return toEvmAccount({
      id: response.id,
      address: response.address,
      name: options.name,
    })
  }

  /**
   * Exports an EVM account's private key.
   * Uses ECDH P-256 key exchange with AES-256-GCM for E2E encryption.
   *
   * @param options - Export options with account ID
   * @returns The private key as a hex string (without 0x prefix)
   *
   * @example
   * ```typescript
   * const privateKey = await openfort.evm.exportAccount({
   *   id: 'acc_...',
   * });
   * // Returns: 'a1b2c3d4...' (64-character hex string)
   * ```
   */
  public async exportAccount(
    options: ExportEvmAccountOptions,
  ): Promise<string> {
    // Generate ephemeral ECDH key pair for decryption
    const { publicKey, ecdh } = generateECDHKeyPair()

    // Call the export API with our ephemeral public key
    const response = await exportPrivateKey(options.id, {
      encryptionKey: publicKey,
    })

    // Decrypt the private key using ECDH shared secret
    const privateKey = decryptExportedPrivateKey(
      response.encryptedPrivateKey,
      response.serverPublicKey,
      ecdh,
    )

    return privateKey
  }

  /**
   * Signs data (transaction or message hash) using the backend wallet.
   *
   * @param options - Sign options with account ID and data
   * @returns The signature as a hex string
   *
   * @example
   * ```typescript
   * const signature = await openfort.evm.signData({
   *   id: 'acc_...',
   *   data: '0x...',  // hex-encoded transaction or message hash
   * });
   * ```
   */
  public async signData(options: SignDataOptions): Promise<string> {
    const response = await signTransaction(options.id, {
      data: options.data,
    })

    return response.signature
  }
}
