import { createServer, type Server } from 'node:http'
import type { AddressInfo } from 'node:net'
import { afterAll, beforeAll, beforeEach, describe, expect, it } from 'vitest'
import Openfort, { ShieldAuthProvider } from './index'

type SeenRequest = { method?: string; url?: string; body: unknown }

let seen: SeenRequest[] = []
let server: Server
let openfort: Openfort

const metadata = {
  acceptedTerms: true,
  acceptedTermsAt: '2026-11-18T12:00:00.000Z',
  termsVersion: null,
}

beforeAll(async () => {
  server = createServer((req, res) => {
    let raw = ''
    req.on('data', (chunk) => {
      raw += chunk
    })
    req.on('end', () => {
      seen.push({
        method: req.method,
        url: req.url,
        body: raw ? JSON.parse(raw) : undefined,
      })
      const body =
        req.url === '/v2/users/pregenerate'
          ? {
              user: 'usr_1',
              metadata,
              accounts: [{ id: 'acc_1', recoveryShare: 'share' }],
            }
          : { id: 'usr_1', metadata }
      res.writeHead(200, { 'Content-Type': 'application/json' })
      res.end(JSON.stringify(body))
    })
  })
  await new Promise<void>((resolve) => server.listen(0, resolve))
  const { port } = server.address() as AddressInfo
  openfort = new Openfort('sk_test_x', {
    basePath: `http://127.0.0.1:${port}`,
  })
})

afterAll(async () => {
  await new Promise<void>((resolve, reject) =>
    server.close((err) => (err ? reject(err) : resolve())),
  )
})

beforeEach(() => {
  seen = []
})

describe('user metadata', () => {
  it('iam.users.update sends PATCH /v2/users/{id} with the metadata body', async () => {
    const user = await openfort.iam.users.update('usr_1', { metadata })

    expect(seen).toEqual([
      { method: 'PATCH', url: '/v2/users/usr_1', body: { metadata } },
    ])
    expect(user.metadata).toEqual(metadata)
  })

  it.each([
    ['evm', () => openfort.accounts.evm.embedded],
    ['solana', () => openfort.accounts.solana.embedded],
  ])('%s embedded pregenerate forwards metadata to the API', async (_, embedded) => {
    // An empty Shield key fails pre-registration before any Shield request.
    await expect(
      embedded().pregenerate(
        { thirdPartyUserId: 'ext_1', metadata },
        {
          shieldApiKey: '',
          shieldApiSecret: '',
          encryptionShare: '',
          shieldAuthProvider: ShieldAuthProvider.OPENFORT,
        },
      ),
    ).rejects.toThrow('Shield configuration requires')

    const pregenerate = seen.find((r) => r.url === '/v2/users/pregenerate')
    expect(pregenerate?.method).toBe('POST')
    expect(pregenerate?.body).toMatchObject({
      thirdPartyUserId: 'ext_1',
      metadata,
    })
  })
})
