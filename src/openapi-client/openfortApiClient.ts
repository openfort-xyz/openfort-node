import Axios, { type AxiosInstance, type AxiosRequestConfig } from 'axios'
import axiosRetry, { exponentialDelay } from 'axios-retry'
import { PACKAGE, VERSION } from '../version'
import {
  APIError,
  isOpenfortError,
  NetworkError,
  UnknownError,
  ValidationError,
} from './errors'

const ERROR_DOCS_URL = 'https://www.openfort.io/docs/errors'

/**
 * Configuration options for the Openfort API client
 */
export interface OpenfortClientOptions {
  /** The API key (secret key starting with sk_) */
  apiKey: string
  /** Optional publishable key for client-side auth endpoints (pk_live_... or pk_test_...) */
  publishableKey?: string
  /** Optional base URL for the API */
  basePath?: string
  /** If true, logs API requests and responses to the console */
  debugging?: boolean
  /** Optional source identifier for analytics */
  source?: string
  /** Optional source version for analytics */
  sourceVersion?: string
}

let axiosInstance: AxiosInstance
let clientConfig: OpenfortClientOptions | undefined

/**
 * Converts BigInts to strings recursively for safe JSON serialization
 */
function convertBigIntsToStrings<T>(obj: T): T {
  if (obj === null || obj === undefined) {
    return obj
  }

  if (typeof obj === 'bigint') {
    return obj.toString() as unknown as T
  }

  if (Array.isArray(obj)) {
    return obj.map(convertBigIntsToStrings) as unknown as T
  }

  if (typeof obj === 'object') {
    const result: Record<string, unknown> = {}
    for (const [key, value] of Object.entries(obj)) {
      result[key] = convertBigIntsToStrings(value)
    }
    return result as T
  }

  return obj
}

/**
 * Validates the request configuration before sending
 */
function validateRequest(config: AxiosRequestConfig): void {
  if (!axiosInstance) {
    throw new ValidationError(
      'Openfort client not configured. Call configure() first.',
    )
  }

  if (!config.url || config.url === '') {
    throw new ValidationError('Request URL is required.')
  }

  if (!config.method || config.method === '') {
    throw new ValidationError('Request method is required.')
  }
}

/**
 * Configures the Openfort API client with the given options.
 *
 * @param options - The client configuration options
 */
export const configure = (options: OpenfortClientOptions): void => {
  const baseURL = options.basePath || 'https://api.openfort.io'

  clientConfig = {
    ...options,
    basePath: baseURL,
  }

  axiosInstance = Axios.create({
    baseURL,
    headers: {
      'User-Agent': `${PACKAGE}@${VERSION}`,
      ...(options.source && { 'X-Source': options.source }),
      ...(options.sourceVersion && {
        'X-Source-Version': options.sourceVersion,
      }),
      ...(options.publishableKey && {
        'x-project-key': options.publishableKey,
      }),
    },
    paramsSerializer: {
      indexes: null, // Use repeat style for arrays: ?player=a&player=b instead of ?player[0]=a&player[1]=b
    },
  })

  // Add retry logic with exponential backoff
  axiosRetry(axiosInstance, {
    retryDelay: exponentialDelay,
    retries: 3,
    retryCondition: (error) => {
      // Retry on network errors and 5xx responses
      return (
        axiosRetry.isNetworkOrIdempotentRequestError(error) ||
        (error.response?.status !== undefined && error.response.status >= 500)
      )
    },
  })

  // Add request interceptor for authentication and data transformation
  axiosInstance.interceptors.request.use(async (config) => {
    // Add API key authentication only if not already set (e.g., by accessToken)
    if (!config.headers.Authorization) {
      config.headers.Authorization = `Bearer ${options.apiKey}`
    }

    // Convert BigInts in request body to strings
    if (config.data) {
      config.data = convertBigIntsToStrings(config.data)
    }

    return config
  })

  // Add debug interceptors if enabled
  if (options.debugging) {
    axiosInstance.interceptors.request.use((config) => {
      console.log('[Openfort] Request:', {
        method: config.method?.toUpperCase(),
        url: config.url,
        headers: config.headers,
        data: config.data,
      })
      return config
    })

    axiosInstance.interceptors.response.use(
      (response) => {
        console.log('[Openfort] Response:', {
          status: response.status,
          statusText: response.statusText,
          data: response.data,
        })
        return response
      },
      (error) => {
        return Promise.reject(error)
      },
    )
  }
}

/**
 * Request options for the API client
 */
export interface RequestOptions {
  /** Idempotency key for the request */
  idempotencyKey?: string
  /** Access token for authenticated requests (overrides default Authorization header) */
  accessToken?: string
}

/**
 * Adds custom headers to request config based on options
 */
const addRequestHeaders = (
  config: AxiosRequestConfig,
  options?: RequestOptions | string,
): AxiosRequestConfig => {
  // Support legacy string parameter (idempotency key only)
  const opts: RequestOptions | undefined =
    typeof options === 'string' ? { idempotencyKey: options } : options

  if (!opts) {
    return config
  }

  const additionalHeaders: Record<string, string> = {}

  if (opts.idempotencyKey) {
    additionalHeaders['X-Idempotency-Key'] = opts.idempotencyKey
  }

  if (opts.accessToken) {
    additionalHeaders.Authorization = `Bearer ${opts.accessToken}`
  }

  if (Object.keys(additionalHeaders).length === 0) {
    return config
  }

  return {
    ...config,
    headers: {
      ...(config.headers || {}),
      ...additionalHeaders,
    },
  }
}

/**
 * Handles network-level errors (no response received)
 */
function handleNetworkError(error: {
  message?: string
  code?: string
  cause?: unknown
}): never {
  const errorMessage = (error.message || '').toLowerCase()
  const errorCode = error.code?.toLowerCase()

  if (
    errorCode === 'econnrefused' ||
    errorMessage.includes('connection refused')
  ) {
    throw new NetworkError(
      'network_connection_failed',
      'Unable to connect to Openfort service. The service may be unavailable.',
      { code: error.code, message: error.message, retryable: true },
      error.cause,
    )
  }

  if (
    errorCode === 'etimedout' ||
    errorCode === 'econnaborted' ||
    errorMessage.includes('timeout')
  ) {
    throw new NetworkError(
      'network_timeout',
      'Request timed out. Please try again.',
      { code: error.code, message: error.message, retryable: true },
      error.cause,
    )
  }

  if (errorCode === 'enotfound' || errorMessage.includes('getaddrinfo')) {
    throw new NetworkError(
      'network_dns_failure',
      'DNS resolution failed. Please check your network connection.',
      { code: error.code, message: error.message, retryable: false },
      error.cause,
    )
  }

  if (
    errorMessage.includes('network error') ||
    errorMessage.includes('econnreset')
  ) {
    throw new NetworkError(
      'network_connection_failed',
      'Network error occurred. Please check your connection and try again.',
      { code: error.code, message: error.message, retryable: true },
      error.cause,
    )
  }

  // Generic network error
  throw new NetworkError(
    'unknown',
    error.message || 'An unknown network error occurred.',
    { code: error.code, message: error.message, retryable: true },
    error.cause,
  )
}

/**
 * Handles HTTP response errors
 */
function handleResponseError(
  statusCode: number,
  responseData: unknown,
  cause?: unknown,
): never {
  // Check for gateway-level errors
  const isGatewayError =
    responseData &&
    typeof responseData === 'string' &&
    (responseData.toLowerCase().includes('forbidden') ||
      responseData.toLowerCase().includes('ip') ||
      responseData.toLowerCase().includes('blocked') ||
      responseData.toLowerCase().includes('gateway'))

  // Extract correlation ID if available
  const correlationId = isOpenfortError(responseData)
    ? responseData.correlationId
    : undefined

  // Extract error message
  let errorMessage: string
  if (isOpenfortError(responseData)) {
    errorMessage = responseData.message || responseData.error || 'Unknown error'
  } else if (typeof responseData === 'string') {
    errorMessage = responseData
  } else if (responseData) {
    try {
      errorMessage = JSON.stringify(responseData)
    } catch {
      errorMessage = String(responseData)
    }
  } else {
    errorMessage = 'Unknown error'
  }

  switch (statusCode) {
    case 400:
      throw new APIError(
        statusCode,
        'bad_request',
        errorMessage,
        correlationId,
        `${ERROR_DOCS_URL}#bad-request`,
        cause,
      )

    case 401:
      throw new APIError(
        statusCode,
        'unauthorized',
        'Unauthorized. Check your API key.',
        correlationId,
        `${ERROR_DOCS_URL}#unauthorized`,
        cause,
      )

    case 403:
      if (isGatewayError) {
        throw new NetworkError(
          'network_ip_blocked',
          'Access denied. Your IP address may be blocked or restricted.',
          {
            code: 'IP_BLOCKED',
            message:
              typeof responseData === 'string' ? responseData : errorMessage,
            retryable: false,
          },
          cause,
        )
      }
      throw new APIError(
        statusCode,
        'forbidden',
        "Forbidden. You don't have permission to access this resource.",
        correlationId,
        `${ERROR_DOCS_URL}#forbidden`,
        cause,
      )

    case 404:
      throw new APIError(
        statusCode,
        'not_found',
        errorMessage || 'Resource not found.',
        correlationId,
        `${ERROR_DOCS_URL}#not-found`,
        cause,
      )

    case 409:
      throw new APIError(
        statusCode,
        'conflict',
        errorMessage || 'Resource conflict.',
        correlationId,
        `${ERROR_DOCS_URL}#conflict`,
        cause,
      )

    case 429:
      throw new APIError(
        statusCode,
        'rate_limited',
        'Rate limit exceeded. Please slow down your requests.',
        correlationId,
        `${ERROR_DOCS_URL}#rate-limited`,
        cause,
      )

    case 502:
      throw new APIError(
        statusCode,
        'bad_gateway',
        'Bad gateway. Please try again later.',
        correlationId,
        `${ERROR_DOCS_URL}`,
        cause,
      )

    case 503:
      throw new APIError(
        statusCode,
        'service_unavailable',
        'Service unavailable. Please try again later.',
        correlationId,
        `${ERROR_DOCS_URL}`,
        cause,
      )

    default:
      throw new APIError(
        statusCode,
        'unexpected_error',
        `An unexpected error occurred: ${errorMessage}`,
        correlationId,
        `${ERROR_DOCS_URL}`,
        cause,
      )
  }
}

/**
 * The Openfort API client mutator for Orval.
 * This function is called by generated API functions to make HTTP requests.
 *
 * @param config - The Axios request configuration
 * @param options - Optional request options (idempotency key, access token)
 * @returns Promise resolving to the response data
 */
export const openfortApiClient = async <T>(
  config: AxiosRequestConfig,
  options?: RequestOptions | string,
): Promise<T> => {
  // Validate the request
  validateRequest(config)

  const configWithHeaders = addRequestHeaders(config, options)

  try {
    const response = await axiosInstance(configWithHeaders)
    return response.data as T
  } catch (error) {
    // Handle validation errors (pass through)
    if (error instanceof ValidationError) {
      throw error
    }

    // Handle Axios errors
    if (Axios.isAxiosError(error)) {
      // Network-level errors (no response received)
      if (!error.response) {
        handleNetworkError({
          message: error.message,
          code: error.code,
          cause: error.cause,
        })
      }

      // HTTP response errors
      handleResponseError(
        error.response.status,
        error.response.data,
        error.cause,
      )
    }

    // Unknown errors
    throw new UnknownError(
      'Something went wrong. Please contact support at https://www.openfort.io/support',
      error instanceof Error ? error : undefined,
    )
  }
}

/**
 * Gets the current client configuration
 */
export const getConfig = (): OpenfortClientOptions | undefined => clientConfig
