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
  type AccountV2Response,
  type CreateAccountRequestV2AccountType,
  createAccountV2,
  exportPrivateKeyV2,
  getAccountsV2,
  getAccountV2,
  importPrivateKeyV2,
  signTransactionV2,
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
 * Converts an AccountV2Response to EvmAccountData
 */
function toEvmAccountData(
  response: AccountV2Response,
  name?: string,
): EvmAccountData {
  return {
    id: response.id,
    address: response.address,
    name,
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
   * Creates a new EVM account using the v2 API.
   *
   * @param options - Account creation options
   * @returns The created EVM account
   *
   * @example
   * ```typescript
   * // Create an EOA wallet
   * const account = await openfort.evm.createAccount({
   *   user: 'pla_...',  // Optional - will create new user if not provided
   *   accountType: 'Externally Owned Account',
   * });
   *
   * // Create a smart account
   * const smartAccount = await openfort.evm.createAccount({
   *   accountType: 'Smart Account',
   *   chainId: 8453,  // Base
   * });
   * ```
   */
  public async createAccount(
    options: CreateEvmAccountOptions = {},
  ): Promise<EvmAccount> {
    // Map the account type to the API enum value
    const accountType = (options.accountType ||
      'Externally Owned Account') as CreateAccountRequestV2AccountType

    // For v2 API, user is required. If not provided, we need to create a player first
    // or the API will create one automatically
    if (!options.user) {
      throw new UserInputValidationError(
        'User ID is required. Please provide a user ID (starts with pla_) or create a user first.',
      )
    }

    const response = await createAccountV2({
      accountType,
      chainType: 'EVM',
      user: options.user,
      chainId: options.chainId,
    })

    return toEvmAccount(toEvmAccountData(response, options.name))
  }

  /**
   * Retrieves an existing EVM account using the v2 API.
   *
   * @param options - Account retrieval options (id, address, or name)
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
    if (!options.id && !options.address && !options.name) {
      throw new UserInputValidationError(
        'Must provide either id, address, or name to get account',
      )
    }

    // If we have an ID, fetch directly using v2 API
    if (options.id) {
      const response = await getAccountV2(options.id)
      return toEvmAccount(toEvmAccountData(response, options.name))
    }

    // For address lookup, use listAccounts with address filter
    if (options.address) {
      const accounts = await getAccountsV2({
        address: options.address,
        chainType: 'EVM',
        limit: 1,
      })

      if (accounts.data.length === 0) {
        throw new AccountNotFoundError()
      }

      return toEvmAccount(toEvmAccountData(accounts.data[0], options.name))
    }

    // For name lookup, we need to list and filter (names are client-side only)
    const accounts = await this.listAccounts({ limit: 100 })
    const found = accounts.accounts.find((acc) => acc.name === options.name)

    if (!found) {
      throw new AccountNotFoundError()
    }

    return found
  }

  /**
   * Gets an existing account or creates a new one.
   *
   * @param options - Account options
   * @returns The EVM account
   *
   * @example
   * ```typescript
   * const account = await openfort.evm.getOrCreateAccount({
   *   name: 'MyWallet',
   * });
   * ```
   */
  public async getOrCreateAccount(
    options: CreateEvmAccountOptions = {},
  ): Promise<EvmAccount> {
    if (options.name) {
      try {
        return await this.getAccount({ name: options.name })
      } catch {
        // Account doesn't exist, create it
      }
    }
    return this.createAccount(options)
  }

  /**
   * Lists all EVM accounts using the v2 API.
   *
   * @param options - List options (limit, skip, filters)
   * @returns List of EVM accounts
   *
   * @example
   * ```typescript
   * const { accounts } = await openfort.evm.listAccounts({
   *   limit: 10,
   *   user: 'pla_...',
   * });
   * ```
   */
  public async listAccounts(
    options: ListEvmAccountsOptions = {},
  ): Promise<ListAccountsResult<EvmAccount>> {
    const response = await getAccountsV2({
      limit: options.limit,
      skip: options.skip,
      user: options.user,
      chainType: 'EVM',
    })

    const accounts = response.data.map((acc) =>
      toEvmAccount(toEvmAccountData(acc)),
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
    const response = await importPrivateKeyV2({
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
    const response = await exportPrivateKeyV2(options.id, {
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
    const response = await signTransactionV2(options.id, {
      data: options.data,
    })

    return response.signature
  }
}
