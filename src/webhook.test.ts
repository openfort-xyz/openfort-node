import { createHmac } from 'node:crypto'
import { describe, expect, it } from 'vitest'
import Openfort from './index'

const secret = 'whsec_test_secret'
const body = JSON.stringify({
  type: 'transaction_intent.successful',
  data: { id: 'tin_1' },
})
const sign = (key: string) =>
  createHmac('sha256', key).update(body, 'utf8').digest('hex')
const client = new Openfort('sk_test_1234', { webhookSecret: secret })

describe('constructWebhookEvent', () => {
  it('accepts a signature made with the webhook secret', async () => {
    await expect(
      client.constructWebhookEvent(body, sign(secret)),
    ).resolves.toEqual(JSON.parse(body))
  })

  it('rejects a signature made with another key', async () => {
    await expect(
      client.constructWebhookEvent(body, sign('1234')),
    ).rejects.toThrow('Invalid signature')
  })

  it('rejects trailing garbage and odd-length hex', async () => {
    await expect(
      client.constructWebhookEvent(body, `${sign(secret)}zz`),
    ).rejects.toThrow('Invalid signature')
    await expect(
      client.constructWebhookEvent(body, `${sign(secret)}a`),
    ).rejects.toThrow('Invalid signature')
  })

  it('requires the webhook secret', async () => {
    const { OPENFORT_WEBHOOK_SECRET: _, ...env } = process.env
    process.env = env
    await expect(
      new Openfort('sk_test_1234').constructWebhookEvent(body, sign(secret)),
    ).rejects.toThrow('Webhook secret is required')
  })
})
