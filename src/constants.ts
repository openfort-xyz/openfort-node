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
MIICIjANBgkqhkiG9w0BAQEFAAOCAg8AMIICCgKCAgEAj/AOU9F/GPDPCmvB4TIx
Q9Sif8nu7NERsfiuePcqsfUH1hATeCVRRPtRQmHflRdDmhhew62bQfOF1G0gAKp6
c2A1TTy3JYLLo7zzfxDHlA58qjZQKJwbzy+/ZWpbAZ1RksW4UDffX/Poy8kgxAgq
qg1dHNZ/YJq7Lp4lh9gFlbur5gKb59RBLUaszadLI3lo+sYx19ZZbjuaoBjeltUu
5FbIEE3pjDE+45MFG1KH2o+4gNsPKxPYyXebMkjNfGr4xCZnCA7kRCnseCV5Vno9
kge134e3CNNDmEHl70JlkpCTmGBTk64xqk2cZtk2S/iiRaK/gxiV3HCzHbA2WxA1
ZqCWpFZ+hRB08U26l1dnhTJnVar4IFAMRtwX3RCFhG6JQuem6JAZYoPFaYMbfdGg
SZcZzpoYm0e44JGgZTN17MyZf8HCSxPgnKa/CtUFvYm4QEf9y83fDKk6vfh1wX19
gF5eltRAiwq++MJyKUFTyBAtux/HS4vniMJbi/gpLgVhWCiT2Jo/SS7MjhiYuXSi
5TF+i/2A3MiuBmiv+T6K/D1XfkDuvU0ybk6gO49BL0OS0t2O4SbXB85qxI4gd5sH
+xI7WsBdZfFak5NUcBz285NvuRxWnhh6lvPHf04jftdchj01u6BZcv+8vV9f4VPO
cpVsvSx6G98MYbYBtqqjjdECAwEAAQ==
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
