// Usage: npx tsx fee-sponsorship/disableEnablePolicy.ts

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
  name: `TogglePolicy-${Date.now()}`,
  strategy: {
    sponsorSchema: "pay_for_user",
  },
  policyId: policy.id,
});
console.log("Created fee sponsorship:", sponsorship.id);
console.log("Initial state - Enabled:", sponsorship.enabled);

// Disable the fee sponsorship
const disabled = await openfort.feeSponsorship.disable(sponsorship.id);
console.log("\nAfter disable - Enabled:", disabled.enabled);

// Enable the fee sponsorship again
const enabled = await openfort.feeSponsorship.enable(sponsorship.id);
console.log("After enable - Enabled:", enabled.enabled);
