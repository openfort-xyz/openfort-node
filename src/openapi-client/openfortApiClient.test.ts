import { createServer, type Server } from 'node:http'
import type { AddressInfo } from 'node:net'
import { afterAll, beforeAll, beforeEach, describe, expect, it } from 'vitest'
import { APIError } from './errors'
import {
  configure,
  openfortApiClient,
  type OpenfortRequestInfo,
} from './openfortApiClient'

const UUID_RE = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/

/** Requests observed by the stub server, most recent last. */
let seenRequestIds: Array<string | undefined> = []
/** Per-path scripted responses: status + JSON body. */
let responses: Record<string, { status: number; body: unknown }> = {}
let server: Server
let baseURL: string

beforeAll(async () => {
  server = createServer((req, res) => {
    seenRequestIds.push(
      Array.isArray(req.headers['x-request-id'])
        ? req.headers['x-request-id'][0]
        : req.headers['x-request-id'],
    )
    const scripted = responses[req.url ?? ''] ?? { status: 200, body: { ok: true } }
    res.writeHead(scripted.status, { 'Content-Type': 'application/json' })
    res.end(JSON.stringify(scripted.body))
  })
  await new Promise<void>((resolve) => server.listen(0, resolve))
  baseURL = `http://127.0.0.1:${(server.address() as AddressInfo).port}`
})

afterAll(async () => {
  await new Promise<void>((resolve, reject) =>
    server.close((err) => (err ? reject(err) : resolve())),
  )
})

beforeEach(() => {
  seenRequestIds = []
  responses = {}
})

describe('request id correlation', () => {
  it('sends a generated UUID x-request-id on every request', async () => {
    configure({ apiKey: 'sk_test_x', basePath: baseURL })
    await openfortApiClient({ method: 'GET', url: '/ok' })
    expect(seenRequestIds).toHaveLength(1)
    expect(seenRequestIds[0]).toMatch(UUID_RE)
  })

  it('a caller-supplied requestId overrides the generated one', async () => {
    configure({ apiKey: 'sk_test_x', basePath: baseURL })
    await openfortApiClient(
      { method: 'GET', url: '/ok' },
      { requestId: 'liveproof-run-42' },
    )
    expect(seenRequestIds[0]).toBe('liveproof-run-42')
  })

  it('retries reuse the same request id (one id per logical operation)', async () => {
    configure({ apiKey: 'sk_test_x', basePath: baseURL })
    responses['/flaky'] = { status: 503, body: { message: 'unavailable' } }
    await expect(
      openfortApiClient({ method: 'GET', url: '/flaky' }),
    ).rejects.toThrow()
    // 1 original + 3 retries, all carrying the identical id.
    expect(seenRequestIds.length).toBe(4)
    expect(new Set(seenRequestIds).size).toBe(1)
    expect(seenRequestIds[0]).toMatch(UUID_RE)
  }, 30_000)

  it('failed requests carry the id as APIError.correlationId and in the message', async () => {
    configure({ apiKey: 'sk_test_x', basePath: baseURL })
    responses['/missing'] = { status: 404, body: { message: 'no such thing' } }
    const error = await openfortApiClient({ method: 'GET', url: '/missing' }).then(
      () => {
        throw new Error('expected rejection')
      },
      (err: unknown) => err,
    )
    expect(error).toBeInstanceOf(APIError)
    const apiError = error as APIError
    expect(apiError.correlationId).toBe(seenRequestIds[0])
    expect(apiError.message).toContain(`(request_id: ${seenRequestIds[0]})`)
  })

  it('a correlationId in the error body wins over the sent header', async () => {
    configure({ apiKey: 'sk_test_x', basePath: baseURL })
    responses['/traced'] = {
      status: 400,
      body: { message: 'bad', correlationId: 'server-side-id' },
    }
    const error = (await openfortApiClient({ method: 'GET', url: '/traced' }).catch(
      (err: unknown) => err,
    )) as APIError
    expect(error.correlationId).toBe('server-side-id')
  })

  it('onRequest fires for successes and failures with matching ids', async () => {
    const events: OpenfortRequestInfo[] = []
    configure({
      apiKey: 'sk_test_x',
      basePath: baseURL,
      onRequest: (info) => events.push(info),
    })
    responses['/bad'] = { status: 400, body: { message: 'nope' } }

    await openfortApiClient({ method: 'POST', url: '/ok' })
    await openfortApiClient({ method: 'GET', url: '/bad' }).catch(() => undefined)

    expect(events).toHaveLength(2)
    expect(events[0]).toMatchObject({ method: 'POST', path: '/ok', status: 200 })
    expect(events[1]).toMatchObject({ method: 'GET', path: '/bad', status: 400 })
    expect(events.map((e) => e.requestId)).toEqual(seenRequestIds)
    for (const event of events) expect(event.durationMs).toBeGreaterThanOrEqual(0)
  })

  it('a throwing onRequest callback never fails the request', async () => {
    configure({
      apiKey: 'sk_test_x',
      basePath: baseURL,
      onRequest: () => {
        throw new Error('observability exploded')
      },
    })
    await expect(openfortApiClient({ method: 'GET', url: '/ok' })).resolves.toEqual({
      ok: true,
    })
  })
})
