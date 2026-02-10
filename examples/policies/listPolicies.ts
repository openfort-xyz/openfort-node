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
  console.log(`  - ${policy.id}`);
  console.log(`    Scope: ${policy.scope}`);
  console.log(`    Description: ${policy.description ?? "(none)"}`);
  console.log(`    Enabled: ${policy.enabled}`);
  console.log(`    Rules: ${policy.rules.length}`);
}

// List only project-scoped policies
console.log("\nProject-scoped policies:");
const projectPolicies = await openfort.policies.list({
  scope: "project",
});
console.log(`  Found: ${projectPolicies.total}`);

// List only account-scoped policies
console.log("\nAccount-scoped policies:");
const accountPolicies = await openfort.policies.list({
  scope: "account",
});
console.log(`  Found: ${accountPolicies.total}`);
