/**
 * Constants for the Openfort SDK.
 *
 * @module Constants
 */

/**
 * Server's RSA-4096 public key for import encryption.
 *
 * This key is used to encrypt private keys before sending them to the server
 * for import. The server holds the corresponding private key in a KMS HSM
 * (non-extractable) to decrypt.
 *
 * Algorithm: RSA-OAEP with SHA-256
 * Key Size: 4096 bits (production) / 2048 bits (development)
 * Format: PEM-encoded SPKI public key
 */
export const IMPORT_ENCRYPTION_PUBLIC_KEY = `-----BEGIN PUBLIC KEY-----
MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEApEhDh4E/WszNdUMl3m7f
MJro99ppHBud1EFnCRMXA2Ydhjt4PXnkOZuuo8aWjCd5ceJDJpIBve3KjeEw/SjY
L5eBXwpirZrTM+Hz6QHFcmtjH+x8lBYn860CgfnpLNFUcfZFJkDCWyOLx0Eb98nw
IfMmqGYB2UQ5wUJFwTw0fYVy8stzQgrSr4+CVI074F6kTpIeKt0ovB2ACOOkxIn9
w31kdzhKRyXTjiGueP1cCA8jD42HD0BHMyiFiYoFq97ME9RbvDazXZQn11jhZdGh
GYKfC847arHZBMsDaX8unVGa79cbRu1ho6aQfJyv0PtTrWxXbjPiooh6Lcb0XKKZ
aQIDAQAB
-----END PUBLIC KEY-----`
