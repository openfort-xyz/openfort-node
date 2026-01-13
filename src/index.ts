import {
  entropy,
  type Share,
  type ShieldAuthOptions,
  ShieldAuthProvider,
  ShieldSDK,
} from '@openfort/shield-js'
import fetch from 'node-fetch'
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
 * The Openfort SDK client.
 * Provides access to all Openfort API endpoints and wallet functionality.
 *
 * @example
 * ```typescript
 * import Openfort from '@openfort/openfort-node';
 *
 * const openfort = new Openfort('sk_test_...');
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
  private readonly walletSecret?: string
  private readonly basePath?: string
  private _evmClient?: EvmClient
  private _solanaClient?: SolanaClient

  constructor(
    private readonly apiKey: string,
    options?: string | OpenfortOptions,
  ) {
    // Support both old signature (basePath string) and new options object
    if (typeof options === 'string') {
      this.basePath = options
    } else if (options) {
      this.basePath = options.basePath
      this.walletSecret = options.walletSecret
    }

    // Configure the API client
    configure({
      apiKey: this.apiKey,
      basePath: this.basePath,
      walletSecret: this.walletSecret,
      debugging: typeof options === 'object' ? options.debugging : undefined,
      publishableKey:
        typeof options === 'object' ? options.publishableKey : undefined,
    })
  }

  // ============================================
  // Accounts API
  // ============================================

  /**
   * Account management endpoints (V2 default)
   *
   * @example
   * ```typescript
   * // V2 (default)
   * const accounts = await openfort.accounts.list({ player: 'pla_...' });
   * const account = await openfort.accounts.get('acc_...');
   * await openfort.accounts.switchChain('acc_...', { chainId: 137 });
   *
   * // V1 (legacy)
   * const legacyAccounts = await openfort.accounts.v1.list({ player: 'pla_...' });
   * await openfort.accounts.v1.create({ player: 'pla_...', chainId: 1 });
   * ```
   */
  public get accounts() {
    return {
      /** List accounts */
      list: api.getAccountsV2,
      /** Get an account by ID */
      get: api.getAccountV2,
      /** Switch chain */
      switchChain: api.switchChainV2,
      /** V1 account methods (legacy) */
      v1: {
        /** List accounts */
        list: api.getAccounts,
        /** Create an account */
        create: api.createAccount,
        /** Get an account by ID */
        get: api.getAccount,
        /** Request transfer of ownership */
        requestTransferOwnership: api.requestTransferOwnership,
        /** Cancel transfer of ownership */
        cancelTransferOwnership: api.cancelTransferOwnership,
        /** Sign a payload */
        signPayload: api.signPayload,
        /** Sync account state */
        sync: api.syncAccount,
        /** Deploy an account */
        deploy: api.deployAccount,
        /** Start recovery */
        startRecovery: api.startRecovery,
        /** Complete recovery */
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
      /** Read a contract */
      read: api.readContract,
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
   * await openfort.iam.users.pregenerate({ email: 'user@example.com' }, shieldConfig);
   *
   * // V1 (legacy) - Players
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
        /**
         * Pre-generate a user with an embedded account before they authenticate.
         * Creates a user record and an embedded account.
         * @param req - The pregenerate user request
         * @param shieldConfig - Optional Shield configuration for storing the recovery share
         * @returns The pregenerated account response
         */
        pregenerate: this.pregenerateUser.bind(this),
      },
      /** OAuth configuration */
      oauthConfig: {
        /** Create OAuth config */
        create: api.createOAuthConfig,
        /** Get OAuth config */
        get: api.getOAuthConfig,
        /** List OAuth configs */
        list: api.listOAuthConfig,
        /** Delete OAuth config */
        delete: api.deleteOAuthConfig,
      },
      /** V1 IAM methods (legacy) */
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
  // EVM Wallet
  // ============================================

  /**
   * EVM wallet client for creating and managing EVM accounts.
   *
   * @example
   * ```typescript
   * const account = await openfort.evm.createAccount({ name: 'MyWallet' });
   * const signature = await account.signMessage({ message: 'Hello' });
   * ```
   */
  public get evm(): EvmClient {
    if (!this._evmClient) {
      this._evmClient = new EvmClient(this.apiKey, {
        basePath: this.basePath,
        walletSecret: this.walletSecret,
      })
    }
    return this._evmClient
  }

  /**
   * Solana wallet client for creating and managing Solana accounts.
   *
   * @example
   * ```typescript
   * const account = await openfort.solana.createAccount({ user: 'pla_...' });
   * const signature = await account.signMessage({ message: 'Hello' });
   * ```
   */
  public get solana(): SolanaClient {
    if (!this._solanaClient) {
      this._solanaClient = new SolanaClient(this.apiKey, {
        basePath: this.basePath,
        walletSecret: this.walletSecret,
      })
    }
    return this._solanaClient
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
    const signedPayload = await sign(this.apiKey, body)
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
// Wallet clients
export { EvmClient } from './wallets/evm/evmClient'
export { SolanaClient } from './wallets/solana/solanaClient'
