---
'@openfort/openfort-node': patch
---

`normalizeSignature` throws when the last byte of a signature is not two hex characters

It parsed the recovery byte with `parseInt`, which accepts partial input, so a
trailing `1z` became `1c` and `zz` passed through unchanged. Recovery ids 0 and
1 still become 27 and 28.
