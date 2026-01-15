/**
 * @module Wallets/Solana/SolanaClient
 * Main client for Solana wallet operations
 */

import bs58 from 'bs58'
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
  sign,
} from '../../openapi-client'
import {
  decryptExportedPrivateKey,
  encryptForImport,
  generateRSAKeyPair,
} from '../../utilities/encryption'
import type { ListAccountsResult } from '../types'
import {
  type SolanaAccountData,
  toSolanaAccount,
} from './accounts/solanaAccount'
import type {
  CreateSolanaAccountOptions,
  ExportSolanaAccountOptions,
  GetSolanaAccountOptions,
  ImportSolanaAccountOptions,
  ListSolanaAccountsOptions,
  SolanaAccount,
} from './types'

/**
 * Converts a BackendWalletResponse to SolanaAccountData
 */
function toSolanaAccountData(
  response: BackendWalletResponse,
): SolanaAccountData {
  return {
    id: response.id,
    address: response.address,
  }
}

/**
 * Options for creating a Solana wallet client
 */
export interface SolanaClientOptions {
  /** Optional custom API base URL */
  basePath?: string
  /** Optional wallet secret for X-Wallet-Auth header */
  walletSecret?: string
}

/**
 * Client for managing Solana wallets.
 * Provides methods for creating, retrieving, and managing server-side Solana accounts.
 */
export class SolanaClient {
  static type = 'solanaWallet'

  /**
   * Creates a new Solana wallet client.
   *
   * Note: The API client is configured globally via the main Openfort class.
   * This client just provides wallet-specific methods.
   *
   * @param _accessToken - Openfort API key (passed for backwards compatibility)
   * @param _options - Optional client configuration (for backwards compatibility)
   */
  // biome-ignore lint/complexity/noUselessConstructor: Constructor needed for backwards compatibility
  constructor(_accessToken?: string, _options?: string | SolanaClientOptions) {
    // The API client is configured globally via openfortApiClient.configure()
    // No per-client configuration needed anymore
  }

  /**
   * Creates a new Solana backend wallet.
   *
   * @param options - Account creation options
   * @returns The created Solana account
   *
   * @example
   * ```typescript
   * // Create a Solana wallet
   * const account = await openfort.solana.createAccount();
   *
   * // Create with a specific wallet/player
   * const account = await openfort.solana.createAccount({
   *   wallet: 'pla_...',
   * });
   * ```
   */
  public async createAccount(
    options: CreateSolanaAccountOptions = {},
  ): Promise<SolanaAccount> {
    const response = await createBackendWallet({
      chainType: 'SVM',
      wallet: options.wallet,
    })

    return toSolanaAccount({
      id: response.id,
      address: response.address,
    })
  }

  /**
   * Retrieves an existing Solana account.
   *
   * @param options - Account retrieval options (id or address)
   * @returns The Solana account
   *
   * @example
   * ```typescript
   * const account = await openfort.solana.getAccount({
   *   id: 'acc_...',
   * });
   *
   * // Or by address (requires listing and filtering)
   * const account = await openfort.solana.getAccount({
   *   address: 'So1ana...',
   * });
   * ```
   */
  public async getAccount(
    options: GetSolanaAccountOptions,
  ): Promise<SolanaAccount> {
    if (!options.id && !options.address) {
      throw new UserInputValidationError(
        'Must provide either id or address to get account',
      )
    }

    // If we have an ID, fetch directly
    if (options.id) {
      const response = await getBackendWallet(options.id)
      return toSolanaAccount(toSolanaAccountData(response))
    }

    // For address lookup, use listBackendWallets with address filter
    if (options.address) {
      const wallets = await listBackendWallets({
        address: options.address,
        chainType: 'SVM',
        limit: 1,
      })

      if (wallets.data.length === 0) {
        throw new AccountNotFoundError()
      }

      return toSolanaAccount(toSolanaAccountData(wallets.data[0]))
    }

    throw new AccountNotFoundError()
  }

  /**
   * Lists all Solana backend wallets.
   *
   * @param options - List options (limit, skip, filters)
   * @returns List of Solana accounts
   *
   * @example
   * ```typescript
   * const { accounts } = await openfort.solana.listAccounts({
   *   limit: 10,
   * });
   * ```
   */
  public async listAccounts(
    options: ListSolanaAccountsOptions = {},
  ): Promise<ListAccountsResult<SolanaAccount>> {
    const response = await listBackendWallets({
      limit: options.limit,
      skip: options.skip,
      chainType: 'SVM',
    })

    const accounts = response.data.map((wallet) =>
      toSolanaAccount(toSolanaAccountData(wallet)),
    )

    return {
      accounts,
      total: response.total,
    }
  }

  /**
   * Imports a Solana account using a private key.
   * The private key is encrypted using RSA-OAEP with SHA-256.
   *
   * @param options - Import options including the private key
   * @returns The imported Solana account
   *
   * @example
   * ```typescript
   * const account = await openfort.solana.importAccount({
   *   privateKey: '5K...', // base58 or hex format
   *   name: 'ImportedWallet',
   * });
   * ```
   */
  public async importAccount(
    options: ImportSolanaAccountOptions,
  ): Promise<SolanaAccount> {
    let privateKeyBytes: Uint8Array

    // Determine the format and convert to bytes
    if (options.privateKey.startsWith('0x')) {
      // Hex format with 0x prefix
      const hex = options.privateKey.slice(2)
      if (!/^[0-9a-fA-F]+$/.test(hex)) {
        throw new UserInputValidationError('Invalid hex string')
      }
      privateKeyBytes = Uint8Array.from(Buffer.from(hex, 'hex'))
    } else if (/^[0-9a-fA-F]+$/.test(options.privateKey)) {
      // Hex format without prefix
      privateKeyBytes = Uint8Array.from(Buffer.from(options.privateKey, 'hex'))
    } else {
      // Assume base58 format (standard Solana format)
      try {
        privateKeyBytes = bs58.decode(options.privateKey)
      } catch {
        throw new UserInputValidationError(
          'Invalid private key format. Provide either a base58 string or hex string.',
        )
      }
    }

    // Solana private keys can be 32 bytes (seed) or 64 bytes (full keypair)
    // If 64 bytes, the first 32 are the private key, last 32 are the public key
    if (privateKeyBytes.length === 64) {
      privateKeyBytes = privateKeyBytes.slice(0, 32)
    } else if (privateKeyBytes.length !== 32) {
      throw new UserInputValidationError(
        'Private key must be 32 bytes (seed) or 64 bytes (full keypair)',
      )
    }

    // Convert to hex for encryption
    const privateKeyHex = Buffer.from(privateKeyBytes).toString('hex')

    // Check if server public key is configured
    if (!IMPORT_ENCRYPTION_PUBLIC_KEY) {
      throw new EncryptionError(
        'Import encryption public key is not configured. ' +
          'Please contact Openfort to get the server public key.',
      )
    }

    try {
      // Encrypt the private key with the server's RSA public key
      const encryptedPrivateKey = encryptForImport(
        privateKeyHex,
        IMPORT_ENCRYPTION_PUBLIC_KEY,
      )

      // Call the import API
      const response = await importPrivateKey({
        encryptedPrivateKey,
        chainType: 'SVM',
        name: options.name,
      })

      return toSolanaAccount({
        id: response.id,
        address: response.address,
      })
    } catch (error) {
      if (error instanceof UserInputValidationError) {
        throw error
      }
      throw new EncryptionError(
        `Failed to encrypt private key: ${error instanceof Error ? error.message : String(error)}`,
      )
    }
  }

  /**
   * Exports a Solana account's private key.
   * Uses RSA-OAEP with SHA-256 for E2E encryption.
   *
   * @param options - Export options with account ID
   * @returns The private key as a base58 encoded string (standard Solana format)
   *
   * @example
   * ```typescript
   * const privateKey = await openfort.solana.exportAccount({
   *   id: 'acc_...',
   * });
   * // Returns: '5Kd3...' (base58 encoded)
   * ```
   */
  public async exportAccount(
    options: ExportSolanaAccountOptions,
  ): Promise<string> {
    // Generate ephemeral RSA key pair for decryption
    const { publicKey, privateKeyPem } = generateRSAKeyPair()

    // Call the export API with our ephemeral public key
    const response = await exportPrivateKey(options.id, {
      encryptionKey: publicKey,
    })

    // Decrypt the private key using our ephemeral private key
    const privateKeyHex = decryptExportedPrivateKey(
      response.encryptedPrivateKey,
      privateKeyPem,
    )

    // Convert hex to base58 (standard Solana format)
    const privateKeyBytes = Buffer.from(privateKeyHex, 'hex')
    return bs58.encode(privateKeyBytes)
  }

  /**
   * Signs data using the backend wallet.
   *
   * @param accountId - The account ID
   * @param data - Data to sign (hex-encoded)
   * @returns The signature
   */
  public async signData(accountId: string, data: string): Promise<string> {
    const response = await sign(accountId, { data })
    return response.signature
  }
}
