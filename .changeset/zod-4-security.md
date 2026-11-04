---
"@openfort/openfort-node": minor
---

Upgrade the `zod` dependency from 3.x to 4.6.7 to pick up the zod security fix, along with patched transitive dependencies (axios, follow-redirects, undici, fast-uri, esbuild). The exported policy schemas (`CreatePolicyBodySchema`, `RuleSchema` and the criterion schemas) are now zod 4 schemas. Code that only calls `.parse()`/`.safeParse()` on them needs no change. Code that composes them with its own zod 3 schemas (`.extend()`, `.merge()`, `z.union([...])`) must move to zod 4.
