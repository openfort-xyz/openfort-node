/**
 * @module Errors
 * Custom error classes for the Openfort SDK
 */

/**
 * MissingAPIKeyError is thrown when no API key is provided.
 */
export class MissingAPIKeyError extends Error {
  constructor() {
    super(`Missing required Openfort API key.

You can set your API key using environment variables:
  export OPENFORT_API_KEY="sk_test_..."

Or pass it to the constructor:
  new Openfort("sk_test_...")
  new Openfort(process.env.OPENFORT_API_KEY!)

Get your API key from: https://dashboard.openfort.io/api-keys`)
    this.name = 'MissingAPIKeyError'
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, MissingAPIKeyError)
    }
  }
}

/**
 * InvalidAPIKeyFormatError is thrown when the API key has an invalid format.
 */
export class InvalidAPIKeyFormatError extends Error {
  constructor(key: string) {
    const prefix = key.length > 8 ? `${key.substring(0, 8)}...` : key
    super(`Invalid API key format: "${prefix}"

Openfort secret API keys should start with:
  - "sk_test_" for test environment
  - "sk_live_" for live environment

Make sure you're using a SECRET key (not a publishable key).
Publishable keys start with "pk_" and cannot be used for server-side API calls.

Get your secret API key from: https://dashboard.openfort.io/api-keys`)
    this.name = 'InvalidAPIKeyFormatError'
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, InvalidAPIKeyFormatError)
    }
  }
}

/**
 * InvalidPublishableKeyFormatError is thrown when the publishable key has an invalid format.
 */
export class InvalidPublishableKeyFormatError extends Error {
  constructor(key: string) {
    const prefix = key.length > 8 ? `${key.substring(0, 8)}...` : key
    super(`Invalid publishable key format: "${prefix}"

Openfort publishable keys should start with:
  - "pk_test_" for test environment
  - "pk_live_" for live environment

Get your publishable key from: https://dashboard.openfort.io/api-keys`)
    this.name = 'InvalidPublishableKeyFormatError'
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, InvalidPublishableKeyFormatError)
    }
  }
}

/**
 * MissingWalletSecretError is thrown when wallet secret is required but not provided.
 */
export class MissingWalletSecretError extends Error {
  constructor(operation: string) {
    super(`Wallet secret not configured. Required for: ${operation}

You can set it using environment variables:
  export OPENFORT_WALLET_SECRET="your-wallet-secret"

Or pass it to the constructor:
  new Openfort("sk_test_...", { walletSecret: "..." })

The wallet secret is required for backend wallet operations (create, sign, import, export).`)
    this.name = 'MissingWalletSecretError'
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, MissingWalletSecretError)
    }
  }
}

/**
 * MissingPublishableKeyError is thrown when publishable key is required but not provided.
 */
export class MissingPublishableKeyError extends Error {
  constructor(operation: string) {
    super(`Publishable key not configured. Required for: ${operation}

Pass it to the constructor:
  new Openfort("sk_test_...", { publishableKey: "pk_test_..." })

The publishable key is required for client-side auth endpoints like getSession.
Get your publishable key from: https://dashboard.openfort.io/api-keys`)
    this.name = 'MissingPublishableKeyError'
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, MissingPublishableKeyError)
    }
  }
}

/**
 * TimeoutError is thrown when an operation times out.
 */
export class TimeoutError extends Error {
  /**
   * Initializes a new TimeoutError instance.
   *
   * @param message - The error message.
   */
  constructor(message = 'Timeout Error') {
    super(message)
    this.name = 'TimeoutError'
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, TimeoutError)
    }
  }
}

/**
 * UserInputValidationError is thrown when validation of a user-supplied input fails.
 */
export class UserInputValidationError extends Error {
  /**
   * Initializes a new UserInputValidationError instance.
   *
   * @param message - The user input validation error message.
   */
  constructor(message: string) {
    super(message)
    this.name = 'UserInputValidationError'
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, UserInputValidationError)
    }
  }
}

/**
 * AccountNotFoundError is thrown when an account cannot be found.
 */
export class AccountNotFoundError extends Error {
  /**
   * Initializes a new AccountNotFoundError instance.
   *
   * @param message - The error message.
   */
  constructor(message = 'Account not found') {
    super(message)
    this.name = 'AccountNotFoundError'
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, AccountNotFoundError)
    }
  }
}

/**
 * EncryptionError is thrown when encryption or decryption fails.
 */
export class EncryptionError extends Error {
  /**
   * Initializes a new EncryptionError instance.
   *
   * @param message - The error message.
   */
  constructor(message: string) {
    super(message)
    this.name = 'EncryptionError'
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, EncryptionError)
    }
  }
}
