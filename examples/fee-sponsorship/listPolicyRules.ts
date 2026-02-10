// Usage: npx tsx fee-sponsorship/listPolicyRules.ts

import Openfort from "@openfort/openfort-node";
import "dotenv/config";

const openfort = new Openfort(process.env.OPENFORT_API_KEY!, {
  basePath: process.env.OPENFORT_BASE_URL,
});

const chainId = Number(process.env.CHAIN_ID) || 80002;

// Create a policy with rules
const policy = await openfort.feeSponsorship.create({
  name: `PolicyWithRules-${Date.now()}`,
  chainId,
  strategy: {
    sponsorSchema: "pay_for_user",
  },
});

// Add some rules
await openfort.feeSponsorship.rules.create({
  type: "account_functions",
  policy: policy.id,
});

// List rules for this policy
const result = await openfort.feeSponsorship.rules.list({ policy: policy.id });

console.log(`Found ${result.total} rules for policy ${policy.id}:`);
for (const rule of result.data) {
  console.log(`  - ${rule.id}`);
  console.log(`    Type: ${rule.type}`);
  if ("functionName" in rule && rule.functionName) {
    console.log(`    Function: ${rule.functionName}`);
  }
}
