---
"@openfort/openfort-node": minor
---

Add `iam.users.update` to store custom metadata on a user, such as terms acceptance. Top-level keys merge into the stored object and a key set to `null` is removed. Users returned by the API now include `metadata`, and `accounts.evm.embedded.pregenerate` and `accounts.solana.embedded.pregenerate` accept `metadata` to set it at creation.
