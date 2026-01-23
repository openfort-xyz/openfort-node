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
MIICIjANBgkqhkiG9w0BAQEFAAOCAg8AMIICCgKCAgEAleRdKA0Hk431RqG0HyJz
VfeG328BwHhP3nmH8YSRP/elYmS4VLcyOCsgtDFHaNKFghvv9MrIrwaj5xJvttxO
U6GXFvt+ZaEWyZAWAVw0Q3lk/5J4IWw4C/yAsRtwvr2RVFt2wlfBuB/kwEiLQ16b
TEGRtyXy2P/zhz8pwtiz3DuRgknpFO3GLIXuWL8Ajwqv5m8ke4eVJBJHcwpyhR+v
KEVtHptsyhjPn3LyHsHdm8lkhV9JDEQhkFhrYy9U5sjRojWJv7wADmmELWcKUbFV
lc8isq/c+dFSqai0jBu+L/qMIyG5wG0eCOz1bHF3KSQZOfNF603ze/Uf0odr1q0J
PZXjzzgCCeox2CpPtgldnFXhFlWhn9kp3qjHAuaNZrv3LqXca8Zjo5S/anUw0Tla
j/ijB6GwRYZlOhDVe+jDrI9w24TwFWv/I3eTQ78gqfgxD/WTeA9a2gOuwr0hbSE1
Zg6ptwHTHMXce5CDfjPUMKSywcudMRCcbGBTcIAvvw5Wm+H5/P8fdEtXnPzUv3zk
TltjkVKDi8+7ckhMkElxJgP4xshM9ssj+O8TBDkqrHVLAU+3CkUBvWZfwyZbLzp9
Aplp+RlvI11Ka2fef9hV9AQucXiMKHgSWQNCTo5JXHPFs8Zq+nj0mfycjwOQiNIJ
FRdRZaYbcqwwEXsZ2R0/P00CAwEAAQ==
-----END PUBLIC KEY-----`

// `-----BEGIN PUBLIC KEY-----
// MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEApEhDh4E/WszNdUMl3m7f
// MJro99ppHBud1EFnCRMXA2Ydhjt4PXnkOZuuo8aWjCd5ceJDJpIBve3KjeEw/SjY
// L5eBXwpirZrTM+Hz6QHFcmtjH+x8lBYn860CgfnpLNFUcfZFJkDCWyOLx0Eb98nw
// IfMmqGYB2UQ5wUJFwTw0fYVy8stzQgrSr4+CVI074F6kTpIeKt0ovB2ACOOkxIn9
// w31kdzhKRyXTjiGueP1cCA8jD42HD0BHMyiFiYoFq97ME9RbvDazXZQn11jhZdGh
// GYKfC847arHZBMsDaX8unVGa79cbRu1ho6aQfJyv0PtTrWxXbjPiooh6Lcb0XKKZ
// aQIDAQAB
// -----END PUBLIC KEY-----`
