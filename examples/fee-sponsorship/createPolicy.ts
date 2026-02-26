// Usage: npx tsx fee-sponsorship/createPolicy.ts

import Openfort from "@openfort/openfort-node";
import "dotenv/config";

const openfort = new Openfort(process.env.OPENFORT_API_KEY!, {
  basePath: process.env.OPENFORT_BASE_URL,
});

const chainId = Number(process.env.CHAIN_ID) || 80002;

// 1. Create a policy with criteria rules
const policy = await openfort.policies.create({
  scope: "project",
  description: "Sponsor all transactions on this chain",
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
console.log("Created policy:", policy.id);

// 2. Create a fee sponsorship linked to that policy
const sponsorship = await openfort.feeSponsorship.create({
  name: "Gas Sponsorship Policy",
  strategy: {
    sponsorSchema: "pay_for_user",
  },
  policyId: policy.id,
});

console.log("Created fee sponsorship:");
console.log("  ID:", sponsorship.id);
console.log("  Name:", sponsorship.name);
console.log("  Strategy:", sponsorship.strategy.sponsorSchema);
console.log("  Policy ID:", sponsorship.policyId);
