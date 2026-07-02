import { describe, expect, it } from 'vitest'

import Openfort from './index'
import { sign } from './utilities/signer'

describe('constructWebhookEvent', () => {
  it('should reject malformed hex signatures', async () => {
    const client = new Openfort('sk_test_1234567890')
    const body = JSON.stringify({ type: 'test.event' })
    const validSignature = await sign('sk_test_1234567890', body)

    await expect(
      client.constructWebhookEvent(body, `${validSignature.slice(0, -1)}z`),
    ).rejects.toThrow('Invalid signature')
  })
})
