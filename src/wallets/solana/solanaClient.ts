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
  type AccountV2Response,
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
 * Converts an AccountV2Response to SolanaAccountData
 */
function toSolanaAccountData(
  response: AccountV2Response,
  name?: string,
): SolanaAccountData {
  return {
    id: response.id,
    address: response.address,
    name,
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
   * Creates a new Solana account using the v2 API.
   *
   * @param options - Account creation options
   * @returns The created Solana account
   *
   * @example
   * ```typescript
   * const account = await openfort.solana.createAccount({
   *   user: 'pla_...',
   * });
   * ```
   */
  public async createAccount(
    options: CreateSolanaAccountOptions,
  ): Promise<SolanaAccount> {
    if (!options.user) {
      throw new UserInputValidationError(
        'User ID is required. Please provide a user ID (starts with pla_) or create a user first.',
      )
    }

    const response = await createAccountV2({
      accountType: 'Externally Owned Account',
      chainType: 'SVM',
      user: options.user,
    })

    return toSolanaAccount(toSolanaAccountData(response, options.name))
  }

  /**
   * Retrieves an existing Solana account using the v2 API.
   *
   * @param options - Account retrieval options (id, address, or name)
   * @returns The Solana account
   *
   * @example
   * ```typescript
   * const account = await openfort.solana.getAccount({
   *   id: 'acc_...',
   * });
   * ```
   */
  public async getAccount(
    options: GetSolanaAccountOptions,
  ): Promise<SolanaAccount> {
    if (!options.id && !options.address && !options.name) {
      throw new UserInputValidationError(
        'Must provide either id, address, or name to get account',
      )
    }

    // If we have an ID, fetch directly using v2 API
    if (options.id) {
      const response = await getAccountV2(options.id)
      return toSolanaAccount(toSolanaAccountData(response, options.name))
    }

    // For address lookup, use listAccounts with address filter
    if (options.address) {
      const accounts = await getAccountsV2({
        address: options.address,
        chainType: 'SVM',
        limit: 1,
      })

      if (accounts.data.length === 0) {
        throw new AccountNotFoundError()
      }

      return toSolanaAccount(
        toSolanaAccountData(accounts.data[0], options.name),
      )
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
   * Lists all Solana accounts using the v2 API.
   *
   * @param options - List options (limit, skip, filters)
   * @returns List of Solana accounts
   *
   * @example
   * ```typescript
   * const { accounts } = await openfort.solana.listAccounts({
   *   limit: 10,
   *   user: 'pla_...',
   * });
   * ```
   */
  public async listAccounts(
    options: ListSolanaAccountsOptions = {},
  ): Promise<ListAccountsResult<SolanaAccount>> {
    const response = await getAccountsV2({
      limit: options.limit,
      skip: options.skip,
      user: options.user,
      chainType: 'SVM',
    })

    const accounts = response.data.map((acc) =>
      toSolanaAccount(toSolanaAccountData(acc)),
    )

    return {
      accounts,
      total: response.total,
    }
  }

  /**
   * Imports a Solana account using a private key.
   * The private key is encrypted using ECDH P-256 key exchange with AES-256-GCM.
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
      chainType: 'SVM',
      name: options.name,
    })

    return toSolanaAccount({
      id: response.id,
      address: response.address,
      name: options.name,
    })
  }

  /**
   * Exports a Solana account's private key.
   * Uses ECDH P-256 key exchange with AES-256-GCM for E2E encryption.
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
    // Generate ephemeral ECDH key pair for decryption
    const { publicKey, ecdh } = generateECDHKeyPair()

    // Call the export API with our ephemeral public key
    const response = await exportPrivateKeyV2(options.id, {
      encryptionKey: publicKey,
    })

    // Decrypt the private key using ECDH shared secret
    const privateKeyHex = decryptExportedPrivateKey(
      response.encryptedPrivateKey,
      response.serverPublicKey,
      ecdh,
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
    const response = await signTransactionV2(accountId, { data })
    return response.signature
  }
}
