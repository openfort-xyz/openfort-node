import {
  entropy,
  type Share,
  type ShieldAuthOptions,
  ShieldAuthProvider,
  ShieldSDK,
} from '@openfort/shield-js'
import fetch from 'node-fetch'
import {
  InvalidAPIKeyFormatError,
  InvalidPublishableKeyFormatError,
  MissingAPIKeyError,
} from './errors'
import * as api from './openapi-client'
import { configure } from './openapi-client/openfortApiClient'
import { sign } from './utilities/signer'
import { EvmClient } from './wallets/evm/evmClient'
import { SolanaClient } from './wallets/solana/solanaClient'

// Re-export ShieldAuthProvider for convenience
export { ShieldAuthProvider } from '@openfort/shield-js'

/**
 * Configuration options for the Openfort client
 */
export interface OpenfortOptions {
  /** API base URL (optional) */
  basePath?: string
  /** Wallet secret for X-Wallet-Auth header (optional) */
  walletSecret?: string
  /** Enable debug logging (optional) */
  debugging?: boolean
  /** Publishable key for client-side auth endpoints (pk_live_... or pk_test_...) */
  publishableKey?: string
}

/**
 * Configuration for pre-generating embedded accounts with Shield
 */
export interface ShieldConfiguration {
  /** Shield API key */
  shieldApiKey: string
  /** Shield API secret */
  shieldApiSecret: string
  /** Encryption share for the recovery share */
  encryptionShare: string
  /** Shield auth provider type */
  shieldAuthProvider: ShieldAuthProvider
  /** Shield API base URL (optional, defaults to https://shield.openfort.io) */
  shieldApiBaseUrl?: string
}

/**
 * Validates that a string is a valid Openfort secret API key format.
 * @param key - The key to validate
 * @returns true if valid
 */
function isValidSecretKey(key: string): boolean {
  return key.startsWith('sk_test_') || key.startsWith('sk_live_')
}

/**
 * Validates that a string is a valid Openfort publishable key format.
 * @param key - The key to validate
 * @returns true if valid
 */
function isValidPublishableKey(key: string): boolean {
  return key.startsWith('pk_test_') || key.startsWith('pk_live_')
}

/**
 * The Openfort SDK client.
 * Provides access to all Openfort API endpoints and wallet functionality.
 *
 * Environment variables (all optional, constructor options take precedence):
 * - `OPENFORT_API_KEY` - Secret API key (sk_test_... or sk_live_...)
 * - `OPENFORT_WALLET_SECRET` - Wallet secret for backend wallet operations
 * - `OPENFORT_PUBLISHABLE_KEY` - Publishable key for auth endpoints (pk_test_... or pk_live_...)
 * - `OPENFORT_BASE_URL` - Custom API base URL
 *
 * @example
 * ```typescript
 * import Openfort from '@openfort/openfort-node';
 *
 * // Using environment variables
 * const openfort = new Openfort();
 *
 * // Or with explicit API key
 * const openfort = new Openfort('sk_test_...');
 *
 * // Or with options
 * const openfort = new Openfort('sk_test_...', {
 *   walletSecret: 'your-wallet-secret',
 *   publishableKey: 'pk_test_...',
 * });
 *
 * // Create a player
 * const player = await openfort.players.create({ name: 'Player-1' });
 *
 * // Get an account (V2)
 * const account = await openfort.accounts.get('acc_...');
 *
 * // Create an account (V1 legacy)
 * const newAccount = await openfort.accounts.v1.create({ player: player.id, chainId: 1 });
 * ```
 */
class Openfort {
  private readonly _apiKey: string
  private _evmClient?: EvmClient
  private _solanaClient?: SolanaClient

  constructor(apiKey?: string, options?: string | OpenfortOptions) {
    // Resolve API key: explicit parameter > environment variable
    const resolvedApiKey = apiKey || process.env.OPENFORT_API_KEY

    // Resolve options
    const resolvedBasePath =
      typeof options === 'string'
        ? options
        : options?.basePath || process.env.OPENFORT_BASE_URL

    const resolvedWalletSecret =
      typeof options === 'object'
        ? options.walletSecret || process.env.OPENFORT_WALLET_SECRET
        : process.env.OPENFORT_WALLET_SECRET

    const resolvedPublishableKey =
      typeof options === 'object'
        ? options.publishableKey || process.env.OPENFORT_PUBLISHABLE_KEY
        : process.env.OPENFORT_PUBLISHABLE_KEY

    const debugging =
      typeof options === 'object' ? options.debugging : undefined

    // Validate API key presence
    if (!resolvedApiKey) {
      throw new MissingAPIKeyError()
    }

    // Validate API key format
    if (!isValidSecretKey(resolvedApiKey)) {
      throw new InvalidAPIKeyFormatError(resolvedApiKey)
    }

    // Validate publishable key format if provided
    if (
      resolvedPublishableKey &&
      !isValidPublishableKey(resolvedPublishableKey)
    ) {
      throw new InvalidPublishableKeyFormatError(resolvedPublishableKey)
    }

    // Store API key for webhook signature verification
    this._apiKey = resolvedApiKey

    // Configure the API client
    configure({
      apiKey: resolvedApiKey,
      basePath: resolvedBasePath,
      walletSecret: resolvedWalletSecret,
      debugging,
      publishableKey: resolvedPublishableKey,
    })
  }

  // ============================================
  // Accounts API
  // ============================================

  /**
   * Unified accounts namespace for managing wallets across chains.
   *
   * @example
   * ```typescript
   * // Create a backend wallet (Developer custody)
   * const wallet = await openfort.accounts.evm.backend.create({ name: 'Treasury' })
   *
   * // Pregenerate an embedded wallet (User custody)
   * const embedded = await openfort.accounts.evm.embedded.pregenerate(
   *   { email: 'user@example.com' },
   *   shieldConfig
   * )
   *
   * // List all accounts
   * const all = await openfort.accounts.list()
   *
   * // List with filters
   * const evmBackend = await openfort.accounts.list({
   *   chainType: 'EVM',
   *   custody: 'Developer',
   * })
   *
   * // V1 API
   * await openfort.accounts.v1.create({ player: 'pla_...', chainId: 1 })
   * ```
   */
  public get accounts() {
    // Lazily initialize clients
    if (!this._evmClient) {
      this._evmClient = new EvmClient()
    }
    if (!this._solanaClient) {
      this._solanaClient = new SolanaClient()
    }
    const evmClient = this._evmClient
    const solanaClient = this._solanaClient

    return {
      /** List all accounts across chains */
      list: api.getAccountsV2,
      /** EVM accounts */
      evm: {
        /** List EVM accounts */
        list: (params?: Omit<api.GetAccountsV2Params, 'chainType'>) =>
          api.getAccountsV2({ ...params, chainType: 'EVM' }),
        /** Backend wallet operations (Developer custody) */
        backend: {
          /** Create EVM backend wallet */
          create: evmClient.createAccount.bind(evmClient),
          /** List EVM backend wallets */
          list: evmClient.listAccounts.bind(evmClient),
          /** Get backend wallet by ID or address */
          get: evmClient.getAccount.bind(evmClient),
          /** Delete backend wallet */
          delete: api.deleteBackendWallet,
          /** Sign data */
          sign: evmClient.signData.bind(evmClient),
          /** Import private key (with E2E encryption) */
          import: evmClient.importAccount.bind(evmClient),
          /** Export private key (with E2E encryption) */
          export: evmClient.exportAccount.bind(evmClient),
        },
        /** Embedded wallet operations (User custody) */
        embedded: {
          /** Pregenerate embedded account */
          pregenerate: (
            req: Omit<api.PregenerateUserRequestV2, 'chainType'>,
            shieldConfig: ShieldConfiguration,
          ) => this.pregenerateUser({ ...req, chainType: 'EVM' }, shieldConfig),
          /** List embedded accounts */
          list: (
            params?: Omit<api.GetAccountsV2Params, 'chainType' | 'custody'>,
          ) =>
            api.getAccountsV2({ ...params, chainType: 'EVM', custody: 'User' }),
        },
      },
      /** Solana accounts */
      solana: {
        /** List Solana accounts */
        list: (params?: Omit<api.GetAccountsV2Params, 'chainType'>) =>
          api.getAccountsV2({ ...params, chainType: 'SVM' }),
        /** Backend wallet operations (Developer custody) */
        backend: {
          /** Create Solana backend wallet */
          create: solanaClient.createAccount.bind(solanaClient),
          /** List Solana backend wallets */
          list: solanaClient.listAccounts.bind(solanaClient),
          /** Get backend wallet by ID or address */
          get: solanaClient.getAccount.bind(solanaClient),
          /** Delete backend wallet */
          delete: api.deleteBackendWallet,
          /** Sign data */
          sign: solanaClient.signData.bind(solanaClient),
          /** Import private key (with E2E encryption) */
          import: solanaClient.importAccount.bind(solanaClient),
          /** Export private key (with E2E encryption) */
          export: solanaClient.exportAccount.bind(solanaClient),
        },
        /** Embedded wallet operations (User custody) */
        embedded: {
          /** Pregenerate embedded account */
          pregenerate: (
            req: Omit<api.PregenerateUserRequestV2, 'chainType'>,
            shieldConfig: ShieldConfiguration,
          ) => this.pregenerateUser({ ...req, chainType: 'SVM' }, shieldConfig),
          /** List embedded accounts */
          list: (
            params?: Omit<api.GetAccountsV2Params, 'chainType' | 'custody'>,
          ) =>
            api.getAccountsV2({ ...params, chainType: 'SVM', custody: 'User' }),
        },
      },
      /** V1 legacy API */
      v1: {
        list: api.getAccounts,
        create: api.createAccount,
        get: api.getAccount,
        requestTransferOwnership: api.requestTransferOwnership,
        cancelTransferOwnership: api.cancelTransferOwnership,
        signPayload: api.signPayload,
        sync: api.syncAccount,
        deploy: api.deployAccount,
        startRecovery: api.startRecovery,
        completeRecovery: api.completeRecovery,
      },
    }
  }

  // ============================================
  // Players API
  // ============================================

  /**
   * Player management endpoints
   */
  public get players() {
    return {
      /** List players */
      list: api.getPlayers,
      /** Create a player */
      create: api.createPlayer,
      /** Get a player by ID */
      get: api.getPlayer,
      /** Update a player */
      update: api.updatePlayer,
      /** Delete a player */
      delete: api.deletePlayer,
    }
  }

  // ============================================
  // Contracts API
  // ============================================

  /**
   * Contract management endpoints
   */
  public get contracts() {
    return {
      /** List contracts */
      list: api.getContracts,
      /** Create a contract */
      create: api.createContract,
      /** Get a contract by ID */
      get: api.getContract,
      /** Update a contract */
      update: api.updateContract,
      /** Delete a contract */
      delete: api.deleteContract,
    }
  }

  // ============================================
  // Policies API
  // ============================================

  /**
   * Policy management endpoints
   */
  public get policies() {
    return {
      /** List policies */
      list: api.getPolicies,
      /** Create a policy */
      create: api.createPolicy,
      /** Get a policy by ID */
      get: api.getPolicy,
      /** Update a policy */
      update: api.updatePolicy,
      /** Delete a policy */
      delete: api.deletePolicy,
      /** Disable a policy */
      disable: api.disablePolicy,
      /** Enable a policy */
      enable: api.enablePolicy,
      /** Get policy total gas usage */
      getTotalGasUsage: api.getPolicyTotalGasUsage,
    }
  }

  /**
   * Policy rules management endpoints
   */
  public get policyRules() {
    return {
      /** List policy rules */
      list: api.getPolicyRules,
      /** Create a policy rule */
      create: api.createPolicyRule,
      /** Update a policy rule */
      update: api.updatePolicyRule,
      /** Delete a policy rule */
      delete: api.deletePolicyRule,
    }
  }

  // ============================================
  // Transaction Intents API
  // ============================================

  /**
   * Transaction intent management endpoints
   */
  public get transactionIntents() {
    return {
      /** List transaction intents */
      list: api.getTransactionIntents,
      /** Create a transaction intent */
      create: api.createTransactionIntent,
      /** Get a transaction intent by ID */
      get: api.getTransactionIntent,
      /** Sign a transaction intent */
      signature: api.signature,
      /** Estimate cost */
      estimateCost: api.estimateTransactionIntentCost,
    }
  }

  // ============================================
  // Sessions API
  // ============================================

  /**
   * Session management endpoints
   */
  public get sessions() {
    return {
      /** List sessions */
      list: api.getPlayerSessions,
      /** Create a session */
      create: api.createSession,
      /** Get a session by ID */
      get: api.getSession,
      /** Revoke a session */
      revoke: api.revokeSession,
      /** Sign a session */
      signature: api.signatureSession,
    }
  }

  // ============================================
  // Settings API
  // ============================================

  /**
   * Settings / Developer account management endpoints
   */
  public get settings() {
    return {
      /** List developer accounts */
      getDeveloperAccounts: api.getDeveloperAccounts,
      /** Create a developer account */
      createDeveloperAccount: api.createDeveloperAccount,
      /** Get a developer account by ID */
      getDeveloperAccount: api.getDeveloperAccount,
      /** Delete a developer account */
      deleteDeveloperAccount: api.deleteDeveloperAccount,
      /** Get verification payload */
      getVerificationPayload: api.getVerificationPayload,
    }
  }

  // ============================================
  // Subscriptions API
  // ============================================

  /**
   * Subscription management endpoints
   */
  public get subscriptions() {
    return {
      /** List subscriptions */
      list: api.getSubscriptions,
      /** Create a subscription */
      create: api.createSubscription,
      /** Get a subscription by ID */
      get: api.getSubscription,
      /** Delete a subscription */
      delete: api.deleteSubscription,
    }
  }

  // ============================================
  // Triggers API
  // ============================================

  /**
   * Trigger management endpoints
   */
  public get triggers() {
    return {
      /** List triggers */
      list: api.getTriggers,
      /** Create a trigger */
      create: api.createTrigger,
      /** Get a trigger by ID */
      get: api.getTrigger,
      /** Delete a trigger */
      delete: api.deleteTrigger,
    }
  }

  // ============================================
  // Exchange API
  // ============================================

  /**
   * Exchange endpoints
   */
  public get exchange() {
    return {
      /** Create swap */
      createSwap: api.createSwap,
      /** Get swap quote */
      quoteSwap: api.quoteSwap,
    }
  }

  // ============================================
  // Auth API
  // ============================================

  /**
   * Authentication endpoints
   *
   * @example
   * ```typescript
   * await openfort.auth.verifyThirdParty({ provider: 'firebase', token: '...' });
   * ```
   */
  public get auth() {
    return {
      /** Verify third-party auth provider token (Supabase, Firebase, etc.) */
      verifyThirdParty: api.thirdPartyV2,
    }
  }

  // ============================================
  // IAM API (V2 default, V1 legacy)
  // ============================================

  /**
   * Identity and access management endpoints (V2 default)
   *
   * @example
   * ```typescript
   * // V2 (default) - Users
   * const users = await openfort.iam.users.list();
   * const user = await openfort.iam.users.get('usr_...');
   *
   * // V1 - Players
   * const players = await openfort.iam.v1.players.list();
   * await openfort.iam.v1.players.create(request, shieldConfig);
   * ```
   */
  public get iam() {
    return {
      /** Get session from access token */
      getSession: this.getSession.bind(this),
      /** User management (V2) */
      users: {
        /** List authenticated users */
        list: api.getAuthUsers,
        /** Get an authenticated user by ID */
        get: api.getAuthUser,
        /** Delete a user */
        delete: api.deleteUser,
      },
      /** OAuth configuration */
      authProvidersConfig: {
        /** Create OAuth config */
        create: api.createOAuthConfig,
        /** Get OAuth config */
        get: api.getOAuthConfig,
        /** List OAuth configs */
        list: api.listOAuthConfig,
        /** Delete OAuth config */
        delete: api.deleteOAuthConfig,
      },
      /** V1 IAM methods */
      v1: {
        /** Auth player management (V1) */
        players: {
          /**
           * Create an auth player with optional embedded account pre-generation.
           * @param req - The create auth player request
           * @param shieldConfig - Optional Shield configuration for storing the recovery share
           * @returns The auth player response
           */
          create: this.createAuthPlayerWithShield.bind(this),
          /** List auth players */
          list: api.getAuthPlayers,
          /** Get an auth player by ID */
          get: api.getAuthPlayer,
          /** Delete an auth player */
          delete: api.deleteAuthPlayer,
        },
        /** Verify auth token */
        verifyToken: api.verifyAuthToken,
        /** Verify OAuth token */
        verifyOAuthToken: api.verifyOAuthToken,
        /** Authorize */
        authorize: api.authorize,
      },
    }
  }

  /**
   * Get session from access token.
   * @internal
   */
  private getSession(options: {
    accessToken: string
    disableCookieCache?: boolean
  }): Promise<api.authSchemas.GetGetSession200> {
    const { accessToken, disableCookieCache } = options
    return api.authApi.getGetSession(
      disableCookieCache !== undefined ? { disableCookieCache } : undefined,
      { accessToken },
    )
  }

  /**
   * Pre-generate a user with an embedded account (V2).
   * If Shield pre-registration fails, the created user will be deleted.
   * @internal
   */
  private async pregenerateUser(
    req: api.PregenerateUserRequestV2,
    shieldConfig: ShieldConfiguration,
  ): Promise<api.AccountV2Response> {
    const response = await api.pregenerateUserV2(req)

    try {
      await this.preRegisterWithShield(
        response.recoveryShare,
        response.user,
        req.thirdPartyUserId,
        shieldConfig,
      )

      // Return without recoveryShare (it's been stored in Shield)
      const { recoveryShare: _, ...accountResponse } = response
      return accountResponse
    } catch (error) {
      // If anything fails after user creation, delete the created user
      await api.deleteUser(response.user)
      throw error
    }
  }

  /**
   * Create an auth player with optional Shield pre-registration (V1).
   * @internal
   */
  private async createAuthPlayerWithShield(
    req: api.CreateAuthPlayerRequest,
    shieldConfig?: ShieldConfiguration,
  ): Promise<api.AuthPlayerResponse> {
    if (req.preGenerateEmbeddedAccount && !shieldConfig) {
      throw new Error(
        'Pre-generating embedded account requires Shield configuration.',
      )
    }

    const response = await api.createAuthPlayer(req)

    if (response.recoveryShare && shieldConfig) {
      await this.preRegisterWithShield(
        response.recoveryShare,
        response.id,
        req.thirdPartyUserId,
        shieldConfig,
      )
    }

    // Return without recoveryShare (it's been stored in Shield)
    const { recoveryShare: _, ...playerResponse } = response
    return playerResponse as api.AuthPlayerResponse
  }

  /**
   * Pre-register a recovery share with Shield.
   * @internal
   */
  private async preRegisterWithShield(
    recoveryShare: string,
    openfortUserId: string,
    thirdPartyUserId: string | undefined,
    config: ShieldConfiguration,
  ): Promise<void> {
    let externalUserId: string

    if (config.shieldAuthProvider === ShieldAuthProvider.OPENFORT) {
      externalUserId = openfortUserId
    } else if (config.shieldAuthProvider === ShieldAuthProvider.CUSTOM) {
      if (!thirdPartyUserId) {
        throw new Error(
          'thirdPartyUserId is required when using CUSTOM Shield auth provider.',
        )
      }
      externalUserId = thirdPartyUserId
    } else {
      throw new Error('Invalid Shield auth provider.')
    }

    const authOptions: ShieldAuthOptions = {
      authProvider: config.shieldAuthProvider,
      encryptionPart: config.encryptionShare,
      externalUserId,
      apiKey: config.shieldApiKey,
      apiSecret: config.shieldApiSecret,
    }

    const share: Share = {
      secret: recoveryShare,
      entropy: entropy.project,
    }

    const shieldSDK = new ShieldSDK({
      apiKey: config.shieldApiKey,
      baseURL: config.shieldApiBaseUrl,
    })

    await shieldSDK.preRegister(share, authOptions)
  }

  // ============================================
  // Paymasters API
  // ============================================

  /**
   * Paymaster endpoints
   */
  public get paymasters() {
    return {
      /** Create a paymaster */
      create: api.createPaymaster,
      /** Get a paymaster by ID */
      get: api.getPaymaster,
      /** Update a paymaster */
      update: api.updatePaymaster,
      /** Delete a paymaster */
      delete: api.deletePaymaster,
    }
  }

  // ============================================
  // Utility Methods
  // ============================================

  /**
   * Constructs and validates a webhook event from the request body and signature.
   * @param body - The raw request body
   * @param signature - The signature header value
   * @returns The validated webhook event
   */
  public async constructWebhookEvent<T = unknown>(
    body: string,
    signature: string,
  ): Promise<T> {
    const signedPayload = await sign(this._apiKey, body)
    if (signedPayload !== signature) {
      throw Error('Invalid signature')
    }
    return JSON.parse(body) as T
  }

  /**
   * Creates an encryption session with Shield.
   * This is a setup step for configuring encryption before using pregenerate.
   *
   * @param shieldApiKey - Shield API key
   * @param shieldApiSecret - Shield API secret
   * @param encryptionShare - Encryption share for the recovery share
   * @param shieldApiBaseUrl - Shield API base URL (defaults to https://shield.openfort.io)
   * @returns The encryption session ID
   *
   * @example
   * ```typescript
   * const sessionId = await openfort.createEncryptionSession(
   *   'shield_api_key',
   *   'shield_api_secret',
   *   'encryption_share',
   * );
   * ```
   */
  public async createEncryptionSession(
    shieldApiKey: string,
    shieldApiSecret: string,
    encryptionShare: string,
    shieldApiBaseUrl = 'https://shield.openfort.io',
  ): Promise<string> {
    const response = await fetch(
      `${shieldApiBaseUrl}/project/encryption-session`,
      {
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': shieldApiKey,
          'x-api-secret': shieldApiSecret,
        },
        method: 'POST',
        body: JSON.stringify({
          encryption_part: encryptionShare,
        }),
      },
    )

    if (!response.ok) {
      throw new Error('Failed to create encryption session')
    }

    const jsonResponse = await response.json()
    return jsonResponse.session_id
  }
}

// Export both as default and named export for better CommonJS/ESM interop
export { Openfort }
export default Openfort

// Constants
export { IMPORT_ENCRYPTION_PUBLIC_KEY } from './constants'
// Error classes
export {
  AccountNotFoundError,
  EncryptionError,
  InvalidAPIKeyFormatError,
  InvalidPublishableKeyFormatError,
  InvalidWalletSecretFormatError,
  MissingAPIKeyError,
  MissingPublishableKeyError,
  MissingWalletSecretError,
  TimeoutError,
  UserInputValidationError,
} from './errors'
// Re-export all types from the generated API
export * from './openapi-client'
// Export the configure function for advanced use cases
export { configure, getConfig } from './openapi-client/openfortApiClient'
// RSA encryption utilities for key import/export
export {
  decryptExportedPrivateKey,
  encryptForImport,
  generateRSAKeyPair,
  type RSAKeyPair,
} from './utilities/encryption'
// Re-export wallet types
export * from './wallets'
