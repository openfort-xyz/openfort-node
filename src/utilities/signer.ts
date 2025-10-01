import { createHmac } from 'node:crypto'

// This function is used to sign a string with a secret key
export async function sign(secretKey: string, data: string): Promise<string> {
  const signingKey = secretKey
    .replace('sk_', '')
    .replace('test_', '')
    .replace(/-/g, '')
  return createHmac('sha256', signingKey).update(data, 'utf8').digest('hex')
}
