// Usage: npx tsx policies/listPolicies.ts

import Openfort from "@openfort/openfort-node";
import "dotenv/config";

const openfort = new Openfort(process.env.OPENFORT_API_KEY!, {
  basePath: process.env.OPENFORT_BASE_URL,
});

// List all policies
const result = await openfort.policies.list({ limit: 10 });

console.log(`Found ${result.total} policies:`);
for (const policy of result.data) {
  console.log(`  - ${policy.name} (${policy.id})`);
  console.log(`    Chain: ${policy.chainId}, Strategy: ${policy.strategy.sponsorSchema}`);
}
