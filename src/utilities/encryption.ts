/**
 * Encryption utilities for key import/export operations.
 * Uses RSA-4096 OAEP SHA-256 for end-to-end encrypted key transfer.
 *
 * Import: SDK encrypts with server's static RSA public key
 * Export: SDK generates ephemeral RSA key pair, server encrypts with client's public key
 *
 * @module Utilities/Encryption
 */

import {
  constants,
  generateKeyPairSync,
  privateDecrypt,
  publicEncrypt,
} from 'node:crypto'
import { UserInputValidationError } from '../errors'

/**
 * RSA key pair for export decryption
 */
export interface RSAKeyPair {
  /** Base64-encoded SPKI DER public key (to send to server) */
  publicKey: string
  /** PEM-encoded private key (for decryption) */
  privateKeyPem: string
}

/**
 * Generates an ephemeral RSA-4096 key pair for export encryption.
 * The public key is sent to the server, and the private key is used
 * to decrypt the response.
 *
 * @returns RSA key pair with base64-encoded public key
 */
export const generateRSAKeyPair = (): RSAKeyPair => {
  const { publicKey, privateKey } = generateKeyPairSync('rsa', {
    modulusLength: 4096,
    publicKeyEncoding: {
      type: 'spki',
      format: 'der',
    },
    privateKeyEncoding: {
      type: 'pkcs1',
      format: 'pem',
    },
  })

  return {
    publicKey: (publicKey as Buffer).toString('base64'),
    privateKeyPem: privateKey as string,
  }
}

/**
 * Encrypts a private key for import using RSA-OAEP with SHA-256.
 * Uses the server's static RSA public key embedded in the SDK.
 *
 * @param privateKeyHex - Private key as hex string (with or without 0x prefix)
 * @param serverPublicKeyPem - Server's RSA public key in PEM format
 * @returns Encrypted data (base64-encoded)
 */
export const encryptForImport = (
  privateKeyHex: string,
  serverPublicKeyPem: string,
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

  const encrypted = publicEncrypt(
    {
      key: serverPublicKeyPem,
      padding: constants.RSA_PKCS1_OAEP_PADDING,
      oaepHash: 'sha256',
    },
    privateKeyBytes,
  )

  return encrypted.toString('base64')
}

/**
 * Decrypts a private key received from the export endpoint.
 * Uses the ephemeral RSA private key generated for this request.
 *
 * @param encryptedPrivateKeyBase64 - Encrypted private key from server (base64)
 * @param privateKeyPem - Your RSA private key in PEM format
 * @returns Decrypted private key as hex string (without 0x prefix)
 */
export const decryptExportedPrivateKey = (
  encryptedPrivateKeyBase64: string,
  privateKeyPem: string,
): string => {
  const encryptedData = Buffer.from(encryptedPrivateKeyBase64, 'base64')

  const decrypted = privateDecrypt(
    {
      key: privateKeyPem,
      padding: constants.RSA_PKCS1_OAEP_PADDING,
      oaepHash: 'sha256',
    },
    encryptedData,
  )

  return decrypted.toString('hex')
}
