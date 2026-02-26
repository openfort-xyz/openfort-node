// Usage: npx tsx fee-sponsorship/updatePolicy.ts

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

const sponsorship = await openfort.feeSponsorship.create({
  name: "Original Policy Name",
  strategy: {
    sponsorSchema: "pay_for_user",
  },
  policyId: policy.id,
});
console.log("Created fee sponsorship:", sponsorship.name);

// Update the fee sponsorship
const updated = await openfort.feeSponsorship.update(sponsorship.id, {
  name: "Updated Policy Name",
});

console.log("\nUpdated fee sponsorship:");
console.log("  ID:", updated.id);
console.log("  Name:", updated.name);
