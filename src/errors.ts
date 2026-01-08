/**
 * @module Errors
 * Custom error classes for the Openfort SDK
 */

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
