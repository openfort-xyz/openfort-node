---
'@openfort/openfort-node': patch
---

Document that Solana `signTransaction` returns a signature, not a signed transaction

The API signs the compiled transaction message and returns the account's ed25519
signature. The docstring and example now say so, and the example uses `@solana/kit`.
