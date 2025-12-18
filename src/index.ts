import fetch from 'node-fetch'
import * as api from './openapi-client'
import { configure } from './openapi-client/openfortApiClient'
import { sign } from './utilities/signer'
import { EvmClient } from './wallets/evm/evmClient'
import { SolanaClient } from './wallets/solana/solanaClient'

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
 * // Create an account
 * const account = await openfort.accounts.create({ chainId: 1 });
 *
 * // Create an EVM wallet
 * const evmAccount = await openfort.evm.createAccount({ name: 'MyWallet' });
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
    })
  }

  // ============================================
  // Accounts API
  // ============================================

  /**
   * Account management endpoints
   */
  public get accountsV1() {
    return {
      /** List accounts */
      list: api.getAccounts,
      /** Create an account */
      create: api.createAccount,
      /** Get an account by ID */
      get: api.getAccount,
      /** Disable an account */
      disable: api.disableAccount,
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
  public get accounts() {
    return {
      /** List accounts */
      list: api.getAccountsV2,
      /** Create an account */
      create: api.createAccountV2,
      /** Get an account by ID */
      get: api.getAccountV2,
      /** Remove an account */
      remove: api.removeAccount,
      /** Get signer ID by address */
      getSignerIdByAddress: api.getSignerIdByAddress,
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
      /** Estimate gas */
      estimateGas: api.estimateTransactionIntentCost,
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
      sign: api.signatureSession,
    }
  }

  // ============================================
  // Developer Accounts API
  // ============================================

  /**
   * Developer account management endpoints
   */
  public get developerAccounts() {
    return {
      /** List developer accounts */
      list: api.getDeveloperAccounts,
      /** Create a developer account */
      create: api.createDeveloperAccount,
      /** Get a developer account by ID */
      get: api.getDeveloperAccount,
      /** Update a developer account */
      update: api.updateDeveloperAccount,
      /** Delete a developer account */
      delete: api.deleteDeveloperAccount,
      /** Sign payload with developer account */
      signPayload: api.signPayloadDeveloperAccount,
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
      /** List subscription logs */
      getLogs: api.listSubscriptionLogs,
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
      /** Test a trigger */
      test: api.testTrigger,
    }
  }

  // ============================================
  // Events API
  // ============================================

  /**
   * Event management endpoints
   */
  public get events() {
    return {
      /** List events */
      list: api.getEvents,
      /** Create an event */
      create: api.createEvent,
      /** Get an event by ID */
      get: api.getEvent,
      /** Delete an event */
      delete: api.deleteEvent,
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
      /** Get swap quote */
      quote: api.quoteSwap,
      /** Create swap */
      swap: api.createSwap,
    }
  }

  // ============================================
  // Paymaster API
  // ============================================

  /**
   * Paymaster endpoints
   */
  public get paymaster() {
    return {
      /** List paymasters */
      list: api.listPaymasters,
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
  // Authentication API
  // ============================================

  /**
   * Authentication endpoints
   */
  public get auth() {
    return {
      /** Refresh session */
      refresh: api.refresh,
      /** Logout */
      logout: api.logout,
      /** Initialize SIWE */
      initSIWE: api.initSIWE,
      /** Authenticate with SIWE */
      authenticateSIWE: api.authenticateSIWE,
      /** Sign up with email and password */
      signupEmailPassword: api.signupEmailPassword,
      /** Login with email and password */
      loginEmailPassword: api.loginEmailPassword,
      /** Request email verification */
      requestEmailVerification: api.requestEmailVerification,
      /** Verify email */
      verifyEmail: api.verifyEmail,
      /** Request password reset */
      requestResetPassword: api.requestResetPassword,
      /** Reset password */
      resetPassword: api.resetPassword,
      /** Login with OAuth */
      loginOAuth: api.initOAuth,
      /** Login with third party */
      thirdParty: api.thirdParty,
      /** Get current user */
      me: api.me,
      /** Get JWKS */
      getJwks: api.getJwks,
    }
  }

  // ============================================
  // Users API (Admin)
  // ============================================

  /**
   * User management endpoints (admin)
   */
  public get users() {
    return {
      /** Get user by ID */
      get: api.getAuthUser,
      /** List users */
      list: api.getAuthUsers,
      /** Delete a user */
      delete: api.deleteUser,
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
// ECDH encryption utilities for key import/export
export {
  decryptExportedPrivateKey,
  decryptWithSharedSecret,
  deriveSharedSecret,
  type ECDHKeyPair,
  encryptForImport,
  encryptWithSharedSecret,
  generateECDHKeyPair,
} from './utilities/encryption'
// Re-export wallet types
export * from './wallets'
// Wallet clients
export { EvmClient } from './wallets/evm/evmClient'
export { SolanaClient } from './wallets/solana/solanaClient'
