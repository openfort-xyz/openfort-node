---
"@openfort/openfort-node": patch
---

Bump `@openfort/shield-js` to `^0.2.1`, which depends on axios 1.20.0. Earlier `0.1.x` releases pinned axios 1.18.1, so installs of this SDK pulled a vulnerable axios even though the SDK's own axios range already allowed 1.20.0.
