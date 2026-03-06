import { createHmac } from 'node:crypto'

/**
 * Signs a string using HMAC-SHA256 with the provided secret key.
 * Strips the `sk_` and `test_` prefixes and removes hyphens from the key before signing.
 *
 * @param secretKey - The Openfort secret key (e.g. sk_test_...)
 * @param data - The string data to sign
 * @returns The hex-encoded HMAC signature
 */
export async function sign(secretKey: string, data: string): Promise<string> {
  const signingKey = secretKey
    .replace('sk_', '')
    .replace('test_', '')
    .replace(/-/g, '')
  return createHmac('sha256', signingKey).update(data, 'utf8').digest('hex')
}
