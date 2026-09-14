---
'@openfort/openfort-node': minor
---

Type `iam.getSession` as `Promise<GetGetSession200 | null>`

`GET /iam/v2/auth/get-session` answers `200` with a `null` body when the access
token is missing, malformed or expired — it does not return a 4xx. The return
type said otherwise, so the common way to call it compiled cleanly and then
threw on every expired session:

```ts
// Used to typecheck, then fail at runtime with
// "TypeError: Cannot destructure property 'session' of '(intermediate value)' as it is null"
const { session, user } = await openfort.iam.getSession({ accessToken })
```

Callers now have to check the result first, which is what the endpoint has
always required:

```ts
const result = await openfort.iam.getSession({ accessToken })
if (!result) throw new Error('Invalid or expired session')
const { session, user } = result
```

This is a type-level change only — no runtime behaviour is different — but it
will surface as a compile error anywhere the result was used without a check.
