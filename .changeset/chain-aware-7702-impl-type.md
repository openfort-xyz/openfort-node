---
'@openfort/openfort-node': patch
---

Fix EVM backend `sendTransaction` EIP-7702 delegation on chains where the `Calibur` implementation type is not available (e.g. Polygon Amoy / 80002).

The register-on-first-send path previously hardcoded `implementationType: "Calibur"`, which is rejected on Amoy with `not available in chainId '80002'`. It now uses a chain-aware default (`CaliburV9`, available on Amoy) and falls back to `Calibur` only on chains where `CaliburV9` is not available (Ethereum Mainnet / 1). Callers can override per call via the new `SendTransactionOptions.implementationType`.
