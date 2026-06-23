import { describe, expect, it } from 'vitest'
import { normalizeSignature } from './normalizeSignature'

const signatureWithV = (v: string) => `0x${'11'.repeat(64)}${v}`

describe('normalizeSignature', () => {
  it('normalizes 0 and 1 recovery ids', () => {
    expect(normalizeSignature(signatureWithV('00'))).toBe(signatureWithV('1b'))
    expect(normalizeSignature(signatureWithV('01'))).toBe(signatureWithV('1c'))
  })

  it('keeps already normalized recovery ids', () => {
    expect(normalizeSignature(signatureWithV('1b'))).toBe(signatureWithV('1b'))
  })

  it('rejects signatures without a valid final byte', () => {
    expect(() => normalizeSignature('0x')).toThrow('Invalid signature')
    expect(() => normalizeSignature(signatureWithV('zz'))).toThrow(
      'Invalid signature',
    )
  })
})
