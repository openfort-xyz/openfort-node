---
'@openfort/openfort-node': patch
---

Reject odd-length hex private keys in Solana `importAccount`

Node's hex decoder drops a trailing half byte, so a key with one extra
character decoded to 32 bytes, passed the length check and imported a
different key than the one supplied. Odd-length hex is now rejected before
decoding, with or without the `0x` prefix.
