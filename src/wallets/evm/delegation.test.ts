import { describe, expect, it } from 'vitest'
import { getDelegationTarget, isDelegatedTo } from './delegation'
import type { Hex } from './types'

const IMPL = '0x00000000000000000000000000000000deadbeef' as Hex
const DESIGNATOR = `0xef0100${IMPL.slice(2)}` as Hex

describe('getDelegationTarget', () => {
  it('extracts the lowercase target from a valid designator', () => {
    expect(getDelegationTarget(DESIGNATOR)).toBe(IMPL.toLowerCase())
  })

  it('is case-insensitive about the prefix and address', () => {
    const upper = `0xEF0100${IMPL.slice(2).toUpperCase()}` as Hex
    expect(getDelegationTarget(upper)).toBe(IMPL.toLowerCase())
  })

  it('returns null for a bare EOA (undefined or 0x)', () => {
    expect(getDelegationTarget(undefined)).toBeNull()
    expect(getDelegationTarget('0x')).toBeNull()
  })

  it('returns null for a regular contract (wrong length)', () => {
    expect(getDelegationTarget('0x6080604052348015' as Hex)).toBeNull()
  })

  it('returns null when the length is right but the prefix does not match', () => {
    const wrongPrefix = `0xdeadbe${IMPL.slice(2)}` as Hex
    expect(getDelegationTarget(wrongPrefix)).toBeNull()
  })
})

describe('isDelegatedTo', () => {
  it('is true only when delegated to the expected implementation', () => {
    expect(isDelegatedTo(DESIGNATOR, IMPL)).toBe(true)
  })

  it('is false when delegated to a different implementation', () => {
    const other = '0x000000000000000000000000000000000000beef' as Hex
    expect(isDelegatedTo(`0xef0100${other.slice(2)}` as Hex, IMPL)).toBe(false)
  })

  it('matches regardless of implementation address casing', () => {
    expect(isDelegatedTo(DESIGNATOR, IMPL.toUpperCase() as Hex)).toBe(true)
  })

  it('is false for a bare EOA', () => {
    expect(isDelegatedTo(undefined, IMPL)).toBe(false)
    expect(isDelegatedTo('0x', IMPL)).toBe(false)
  })
})
