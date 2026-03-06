// Usage: pnpm tsx evm/policies/listPolicies.ts

import Openfort from "@openfort/openfort-node";
import "dotenv/config";

const openfort = new Openfort(process.env.OPENFORT_API_KEY!, {
  basePath: process.env.OPENFORT_BASE_URL,
});

const policies = await openfort.policies.list();
console.log("Listed policies: ", JSON.stringify(policies, null, 2));
