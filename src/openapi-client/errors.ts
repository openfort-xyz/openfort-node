/**
 * Error types for HTTP-level errors
 */
export type HttpErrorType =
  | 'unexpected_error'
  | 'unauthorized'
  | 'forbidden'
  | 'not_found'
  | 'bad_request'
  | 'conflict'
  | 'rate_limited'
  | 'bad_gateway'
  | 'service_unavailable'
  | 'unknown'
  | 'network_timeout'
  | 'network_connection_failed'
  | 'network_ip_blocked'
  | 'network_dns_failure'

/**
 * Extended API error type
 */
export type APIErrorType = HttpErrorType | string

/**
 * Shape of Openfort API error responses
 */
export interface OpenfortErrorResponse {
  message?: string
  error?: string
  statusCode?: number
  correlationId?: string
}

/**
 * Type guard to check if an object is an Openfort error response
 */
export function isOpenfortError(obj: unknown): obj is OpenfortErrorResponse {
  return (
    obj !== null &&
    typeof obj === 'object' &&
    ('message' in obj || 'error' in obj)
  )
}

/**
 * Extended API error that encompasses both Openfort errors and other API-related errors
 */
export class APIError extends Error {
  statusCode: number
  errorType: APIErrorType
  errorMessage: string
  correlationId?: string
  errorLink?: string
  declare cause?: Error | unknown

  /**
   * Constructor for the APIError class
   *
   * @param statusCode - The HTTP status code
   * @param errorType - The type of error
   * @param errorMessage - The error message
   * @param correlationId - The correlation ID for tracing
   * @param errorLink - URL to documentation about this error
   * @param cause - The cause of the error
   */
  constructor(
    statusCode: number,
    errorType: APIErrorType,
    errorMessage: string,
    correlationId?: string,
    errorLink?: string,
    cause?: Error | unknown,
  ) {
    super(errorMessage)
    if (cause) {
      this.cause = cause
    }
    this.name = 'APIError'
    this.statusCode = statusCode
    this.errorType = errorType
    this.errorMessage = errorMessage

    if (correlationId !== undefined) {
      this.correlationId = correlationId
    }

    if (errorLink !== undefined) {
      this.errorLink = errorLink
    }
  }

  /**
   * Convert the error to a JSON object
   */
  toJSON() {
    return {
      name: this.name,
      statusCode: this.statusCode,
      errorType: this.errorType,
      errorMessage: this.errorMessage,
      ...(this.correlationId && { correlationId: this.correlationId }),
      ...(this.errorLink && { errorLink: this.errorLink }),
    }
  }
}

/**
 * Error thrown when a network-level failure occurs before reaching the Openfort service.
 * This includes gateway errors, IP blocklist rejections, DNS failures, timeouts, etc.
 */
export class NetworkError extends APIError {
  networkDetails?: {
    code?: string
    message?: string
    retryable?: boolean
  }

  /**
   * Constructor for the NetworkError class
   *
   * @param errorType - The type of network error
   * @param errorMessage - The error message
   * @param networkDetails - Additional network error details
   * @param cause - The cause of the error
   */
  constructor(
    errorType: HttpErrorType,
    errorMessage: string,
    networkDetails?: { code?: string; message?: string; retryable?: boolean },
    cause?: Error | unknown,
  ) {
    super(
      0, // Status code 0 indicates no response was received
      errorType,
      errorMessage,
      undefined,
      'https://www.openfort.io/docs/errors#network-errors',
      cause,
    )
    this.name = 'NetworkError'
    this.networkDetails = networkDetails
  }

  /**
   * Convert the error to a JSON object
   */
  toJSON() {
    return {
      ...super.toJSON(),
      ...(this.networkDetails && { networkDetails: this.networkDetails }),
    }
  }
}

/**
 * Error thrown when an error is not known or cannot be categorized
 */
export class UnknownError extends Error {
  declare cause?: Error

  /**
   * Constructor for the UnknownError class
   *
   * @param message - The error message
   * @param cause - The cause of the error
   */
  constructor(message: string, cause?: Error) {
    super(message)
    if (cause) {
      this.cause = cause
    }
    this.name = 'UnknownError'
  }
}

/**
 * Error thrown for user input validation failures
 */
export class ValidationError extends Error {
  field?: string
  value?: unknown

  /**
   * Constructor for the ValidationError class
   *
   * @param message - The error message
   * @param field - The field that failed validation
   * @param value - The invalid value
   */
  constructor(message: string, field?: string, value?: unknown) {
    super(message)
    this.name = 'ValidationError'
    this.field = field
    this.value = value
  }
}
