---
'@openfort/openfort-node': patch
---

Pass the API's error message through on 403 responses. Previously the SDK
discarded the server-side reason and replaced it with a generic "Forbidden.
You don't have permission to access this resource.", which hid actionable
information from developers — e.g., policy rejections from the policy engine
("No matching policy rule found, defaulting to reject") were invisible.
