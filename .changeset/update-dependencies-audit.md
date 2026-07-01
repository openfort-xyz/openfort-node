---
"@openfort/openfort-node": patch
---

Update dependencies and resolve `pnpm audit` advisories. Bumps runtime deps (`axios` to ^1.18.1, `jose`, `@openfort/shield-js`) and dev tooling, and adds `pnpm.overrides` for transitive `axios`, `ws`, and `esbuild` so `pnpm audit` reports no known vulnerabilities.
