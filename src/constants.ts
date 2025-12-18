/**
 * Constants for the Openfort SDK.
 *
 * @module Constants
 */

/**
 * Server's ECDH P-256 public key for import encryption.
 *
 * This key is used to encrypt private keys before sending them to the server
 * for import. The server holds the corresponding private key to decrypt.
 *
 * Format: Base64-encoded uncompressed P-256 public key (65 bytes)
 *
 * TODO: This key needs to be provided by Openfort.
 * Contact Openfort to get the production public key.
 */
export const IMPORT_ENCRYPTION_PUBLIC_KEY = ''
