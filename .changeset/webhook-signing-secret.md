---
'@openfort/openfort-node': minor
---

Verify webhooks with the webhook signing secret

Openfort signs webhooks with the environment's `whsec_...` signing secret.
`constructWebhookEvent` verified them with a key derived from the secret key,
so it rejected every genuine webhook. Pass the secret as the `webhookSecret`
option or set `OPENFORT_WEBHOOK_SECRET`; the method throws if it is missing.
The signature must now be exactly 64 hex characters.
