import fetch from 'node-fetch'
import * as api from './openapi-client'
import { configure } from './openapi-client/openfortApiClient'
import { sign } from './utilities/signer'

/**
 * Configuration options for the Openfort client
 */
export interface OpenfortOptions {
  /** API base URL (optional) */
  basePath?: string
  /** Enable debug logging (optional) */
  debugging?: boolean
}

/**
 * The Openfort SDK client.
 * Provides access to all Openfort API endpoints.
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
 * // Create an account
 * const account = await openfort.accounts.create({ player: player.id, chainId: 1 });
 * ```
 */
class Openfort {
  constructor(
    private readonly apiKey: string,
    options?: string | OpenfortOptions,
  ) {
    // Support both old signature (basePath string) and new options object
    let basePath: string | undefined
    if (typeof options === 'string') {
      basePath = options
    } else if (options) {
      basePath = options.basePath
    }

    // Configure the API client
    configure({
      apiKey: this.apiKey,
      basePath,
      debugging: typeof options === 'object' ? options.debugging : undefined,
    })
  }

  // ============================================
  // Accounts API
  // ============================================

  /**
   * Account management endpoints
   */
  public get accounts() {
    return {
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
    }
  }

  /**
   * V2 Account management endpoints
   */
  public get accountsV2() {
    return {
      /** List accounts */
      list: api.getAccountsV2,
      /** Get an account by ID */
      get: api.getAccountV2,
      /** Switch chain */
      switchChain: api.switchChainV2,
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
   *
   * // V1 (legacy) - Players
   * const players = await openfort.iam.v1.players.list();
   * await openfort.iam.v1.oauthConfig.create({ provider: 'google', ... });
   * ```
   */
  public get iam() {
    return {
      /** Get session from auth token (server-side verification) */
      getSession: api.verifyAuthToken,
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
          /** Create an auth player */
          create: api.createAuthPlayer,
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
    const signedPayload = await sign(this.apiKey, body)
    if (signedPayload !== signature) {
      throw Error('Invalid signature')
    }
    return JSON.parse(body) as T
  }

  /**
   * Signs a nonce with the API key.
   * @param nonce - The nonce to sign
   * @returns The signed nonce
   */
  public async signNonce(nonce: string): Promise<string> {
    return await sign(this.apiKey, nonce)
  }

  /**
   * Registers a recovery session with Shield.
   * @param apiKey - Shield API key
   * @param secretKey - Shield secret key
   * @param encryptionPart - Encryption part
   * @param shieldAPIBaseURL - Shield API base URL
   * @returns The session ID
   */
  public async registerRecoverySession(
    apiKey: string,
    secretKey: string,
    encryptionPart: string,
    shieldAPIBaseURL = 'https://shield.openfort.io',
  ): Promise<string> {
    const response = await fetch(
      `${shieldAPIBaseURL}/project/encryption-session`,
      {
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': apiKey,
          'x-api-secret': secretKey,
        },
        method: 'POST',
        body: JSON.stringify({
          encryption_part: encryptionPart,
        }),
      },
    )

    if (!response.ok) {
      throw new Error('Failed to authorize user')
    }

    const jsonResponse = await response.json()
    return jsonResponse.session_id
  }
}

// Export both as default and named export for better CommonJS/ESM interop
export { Openfort }
export default Openfort

// Re-export all types from the generated API
export * from './openapi-client'
// Export the configure function for advanced use cases
export { configure, getConfig } from './openapi-client/openfortApiClient'
