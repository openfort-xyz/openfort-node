---
"@openfort/openfort-node": patch
---

Align policy Zod schemas with the API: allow up to 50 rules per policy and 20 criteria per rule, accept the `transaction` scope, accept `solNetwork` criteria on `signSolTransaction` rules, and drop `testnet` from the Solana network enum (the API only accepts `mainnet-beta` and `devnet`).
