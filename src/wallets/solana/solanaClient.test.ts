import { describe, expect, it } from 'vitest'

import { UserInputValidationError } from '../../errors'
import { SolanaClient } from './solanaClient'

describe('SolanaClient.importAccount', () => {
  it('rejects odd-length hex private keys before encryption', async () => {
    const client = new SolanaClient()

    await expect(
      client.importAccount({ privateKey: `0x${'a'.repeat(63)}` }),
    ).rejects.toThrow(UserInputValidationError)
    await expect(
      client.importAccount({ privateKey: `0x${'a'.repeat(63)}` }),
    ).rejects.toThrow(
      'Private key hex string must contain an even number of characters',
    )
  })
})
