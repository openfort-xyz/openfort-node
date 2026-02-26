// Usage: npx tsx fee-sponsorship/getPolicy.ts

import Openfort from "@openfort/openfort-node";
import "dotenv/config";

const openfort = new Openfort(process.env.OPENFORT_API_KEY!, {
  basePath: process.env.OPENFORT_BASE_URL,
});

const chainId = Number(process.env.CHAIN_ID) || 80002;

// Create a policy and fee sponsorship first
const policy = await openfort.policies.create({
  scope: "project",
  rules: [
    {
      action: "accept",
      operation: "sponsorEvmTransaction",
      criteria: [
        { type: "evmNetwork", operator: "in", chainIds: [chainId] },
      ],
    },
  ],
});

const created = await openfort.feeSponsorship.create({
  name: `TestPolicy-${Date.now()}`,
  strategy: {
    sponsorSchema: "pay_for_user",
  },
  policyId: policy.id,
});
console.log("Created fee sponsorship:", created.id);

// Retrieve the fee sponsorship by ID
const sponsorship = await openfort.feeSponsorship.get(created.id);

console.log("\nRetrieved fee sponsorship:");
console.log("  ID:", sponsorship.id);
console.log("  Name:", sponsorship.name);
console.log("  Strategy:", sponsorship.strategy.sponsorSchema);
console.log("  Enabled:", sponsorship.enabled);
console.log("  Policy ID:", sponsorship.policyId);
