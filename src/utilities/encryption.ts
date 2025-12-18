/**
 * Encryption utilities for key import/export operations.
 * Uses ECDH P-256 for end-to-end encrypted key transfer.
 *
 * @module Utilities/Encryption
 */

import {
  createCipheriv,
  createDecipheriv,
  createECDH,
  randomBytes,
} from 'node:crypto'
import { UserInputValidationError } from '../errors'

/**
 * ECDH key pair for encryption/decryption
 */
export interface ECDHKeyPair {
  /** Base64-encoded public key (uncompressed format) */
  publicKey: string
  /** The ECDH instance containing the private key */
  ecdh: ReturnType<typeof createECDH>
}

/**
 * Generates an ephemeral ECDH P-256 key pair for export encryption.
 * The public key is sent to the server, and the private key is used
 * to derive a shared secret for decryption.
 *
 * @returns ECDH key pair with base64-encoded public key
 */
export const generateECDHKeyPair = (): ECDHKeyPair => {
  const ecdh = createECDH('prime256v1') // P-256
  ecdh.generateKeys()

  return {
    publicKey: ecdh.getPublicKey('base64'),
    ecdh,
  }
}

/**
 * Derives a shared secret from your private key and the server's public key.
 *
 * @param ecdh - Your ECDH instance with private key
 * @param serverPublicKeyBase64 - Server's public key (base64-encoded)
 * @returns Shared secret buffer (32 bytes for AES-256)
 */
export const deriveSharedSecret = (
  ecdh: ReturnType<typeof createECDH>,
  serverPublicKeyBase64: string,
): Buffer => {
  const serverPublicKey = Buffer.from(serverPublicKeyBase64, 'base64')
  return ecdh.computeSecret(serverPublicKey)
}

/**
 * Decrypts an encrypted private key using ECDH shared secret.
 * Uses AES-256-GCM with the shared secret as the key.
 *
 * @param encryptedDataBase64 - Encrypted data (base64-encoded, format: iv + authTag + ciphertext)
 * @param sharedSecret - ECDH shared secret (32 bytes)
 * @returns Decrypted private key as hex string
 */
export const decryptWithSharedSecret = (
  encryptedDataBase64: string,
  sharedSecret: Buffer,
): string => {
  const encryptedData = Buffer.from(encryptedDataBase64, 'base64')

  // Extract IV (12 bytes), auth tag (16 bytes), and ciphertext
  const iv = encryptedData.subarray(0, 12)
  const authTag = encryptedData.subarray(12, 28)
  const ciphertext = encryptedData.subarray(28)

  const decipher = createDecipheriv('aes-256-gcm', sharedSecret, iv)
  decipher.setAuthTag(authTag)

  const decrypted = Buffer.concat([
    decipher.update(ciphertext),
    decipher.final(),
  ])

  return decrypted.toString('hex')
}

/**
 * Encrypts a private key using ECDH shared secret.
 * Uses AES-256-GCM with the shared secret as the key.
 *
 * @param privateKeyHex - Private key as hex string (with or without 0x prefix)
 * @param sharedSecret - ECDH shared secret (32 bytes)
 * @returns Encrypted data (base64-encoded, format: iv + authTag + ciphertext)
 */
export const encryptWithSharedSecret = (
  privateKeyHex: string,
  sharedSecret: Buffer,
): string => {
  const keyHex = privateKeyHex.startsWith('0x')
    ? privateKeyHex.slice(2)
    : privateKeyHex

  if (!/^[0-9a-fA-F]+$/.test(keyHex)) {
    throw new UserInputValidationError(
      'Private key must be a valid hexadecimal string',
    )
  }

  const privateKeyBytes = Buffer.from(keyHex, 'hex')

  // Generate random IV (12 bytes for GCM)
  const iv = randomBytes(12)

  const cipher = createCipheriv('aes-256-gcm', sharedSecret, iv)
  const ciphertext = Buffer.concat([
    cipher.update(privateKeyBytes),
    cipher.final(),
  ])
  const authTag = cipher.getAuthTag()

  // Concatenate: iv (12) + authTag (16) + ciphertext
  const result = Buffer.concat([iv, authTag, ciphertext])

  return result.toString('base64')
}

/**
 * Decrypts a private key received from the export endpoint.
 *
 * @param encryptedPrivateKey - Encrypted private key from server (base64)
 * @param serverPublicKey - Server's ephemeral public key (base64)
 * @param ecdh - Your ECDH instance with private key
 * @returns Decrypted private key as hex string (without 0x prefix)
 */
export const decryptExportedPrivateKey = (
  encryptedPrivateKey: string,
  serverPublicKey: string,
  ecdh: ReturnType<typeof createECDH>,
): string => {
  const sharedSecret = deriveSharedSecret(ecdh, serverPublicKey)
  return decryptWithSharedSecret(encryptedPrivateKey, sharedSecret)
}

/**
 * Prepares a private key for import by encrypting it with ECDH.
 *
 * @param privateKeyHex - Private key as hex string (with or without 0x prefix)
 * @param serverPublicKey - Server's public key (base64)
 * @param ecdh - Your ECDH instance with private key
 * @returns Encrypted private key (base64)
 */
export const encryptForImport = (
  privateKeyHex: string,
  serverPublicKey: string,
  ecdh: ReturnType<typeof createECDH>,
): string => {
  const sharedSecret = deriveSharedSecret(ecdh, serverPublicKey)
  return encryptWithSharedSecret(privateKeyHex, sharedSecret)
}
