/**
 * Normalizes an ECDSA signature's `v` byte.
 *
 * Some signers return `v` as 0 or 1 instead of 27 or 28.
 * This function detects that and adds 27 so the signature
 * is valid for on-chain verification.
 *
 * @param sig - Raw hex signature string (e.g. "0x…" or without prefix)
 * @returns The signature with a corrected `v` byte
 */
export function normalizeSignature(sig: string): string {
  const v = parseInt(sig.slice(-2), 16)
  if (v < 27) {
    return sig.slice(0, -2) + (v + 27).toString(16)
  }
  return sig
}
