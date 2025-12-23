/**
 * @module WalletAuth
 * Wallet authentication utilities for generating X-Wallet-Auth headers
 */

import { createHash, randomBytes } from 'node:crypto'
import { importPKCS8, SignJWT } from 'jose'
import { EncryptionError, UserInputValidationError } from '../errors'

/**
 * Options for generating a wallet JWT
 */
export interface WalletJwtOptions {
  /** The wallet secret (EC private key in base64 DER format) */
  walletSecret: string
  /** The HTTP method for the request */
  requestMethod: string
  /** The host for the request */
  requestHost: string
  /** The path for the request */
  requestPath: string
  /** The request body data */
  requestData?: Record<string, unknown>
}

/**
 * Generates a random nonce for the JWT
 */
function generateNonce(): string {
  return randomBytes(16).toString('hex')
}

/**
 * Creates a hash of the request data for the JWT
 */
function hashRequestData(data: Record<string, unknown>): string {
  const sortedData = sortKeys(data)
  const jsonString = JSON.stringify(sortedData)
  return createHash('sha256').update(jsonString).digest('hex')
}

/**
 * Recursively sorts object keys alphabetically.
 * This ensures deterministic JSON serialization for hash computation.
 * Exported for use in request body serialization (must match hash computation).
 */
export function sortKeys(obj: unknown): unknown {
  if (obj === null || typeof obj !== 'object') {
    return obj
  }

  if (Array.isArray(obj)) {
    return obj.map(sortKeys)
  }

  const sorted: Record<string, unknown> = {}
  for (const key of Object.keys(obj as Record<string, unknown>).sort()) {
    sorted[key] = sortKeys((obj as Record<string, unknown>)[key])
  }
  return sorted
}

/**
 * Generates a wallet authentication JWT for signing requests.
 * Used for authenticating wallet operations that require additional security.
 *
 * @param options - The configuration options for generating the JWT
 * @returns The generated JWT token string
 * @throws {Error} If the wallet secret is invalid or signing fails
 */
export async function generateWalletJwt(
  options: WalletJwtOptions,
): Promise<string> {
  if (!options.walletSecret) {
    throw new UserInputValidationError('Wallet secret is required')
  }

  const uri = `${options.requestMethod} ${options.requestHost}${options.requestPath}`
  const now = Math.floor(Date.now() / 1000)

  const claims: Record<string, unknown> = {
    uris: [uri],
  }

  // Add request hash if there's request data
  if (
    options.requestData &&
    typeof options.requestData === 'object' &&
    Object.keys(options.requestData).length > 0 &&
    Object.values(options.requestData).some((value) => value !== undefined)
  ) {
    claims.reqHash = hashRequestData(options.requestData)
  }

  try {
    // Convert base64 DER to PEM format for jose
    const derBuffer = Buffer.from(options.walletSecret, 'base64')
    const pemKey = `-----BEGIN PRIVATE KEY-----\n${derBuffer
      .toString('base64')
      .match(/.{1,64}/g)
      ?.join('\n')}\n-----END PRIVATE KEY-----`

    const ecKey = await importPKCS8(pemKey, 'ES256')

    return await new SignJWT(claims)
      .setProtectedHeader({ alg: 'ES256', typ: 'JWT' })
      .setIssuedAt(now)
      .setNotBefore(now)
      .setJti(generateNonce())
      .sign(ecKey)
  } catch (error) {
    throw new EncryptionError(
      `Failed to generate wallet JWT: ${error instanceof Error ? error.message : String(error)}`,
    )
  }
}

/**
 * Determines if a request requires wallet authentication based on method and path.
 *
 * @param requestMethod - The HTTP method of the request
 * @param requestPath - The URL path of the request
 * @returns True if the request requires wallet authentication
 */
export function requiresWalletAuth(
  requestMethod: string,
  requestPath: string,
): boolean {
  const methodRequiresAuth =
    requestMethod === 'POST' ||
    requestMethod === 'DELETE' ||
    requestMethod === 'PUT'

  const pathRequiresAuth =
    requestPath?.includes('/accounts') || requestPath?.includes('/sign_payload')

  return methodRequiresAuth && pathRequiresAuth
}
