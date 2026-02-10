// Usage: npx tsx fee-sponsorship/disableEnablePolicy.ts

import Openfort from "@openfort/openfort-node";
import "dotenv/config";

const openfort = new Openfort(process.env.OPENFORT_API_KEY!, {
  basePath: process.env.OPENFORT_BASE_URL,
});

const chainId = Number(process.env.CHAIN_ID) || 80002;

// Create a policy first
const policy = await openfort.feeSponsorship.create({
  name: `TogglePolicy-${Date.now()}`,
  chainId,
  strategy: {
    sponsorSchema: "pay_for_user",
  },
});
console.log("Created policy:", policy.id);
console.log("Initial state - Enabled:", policy.enabled);

// Disable the policy
const disabled = await openfort.feeSponsorship.disable(policy.id);
console.log("\nAfter disable - Enabled:", disabled.enabled);

// Enable the policy again
const enabled = await openfort.feeSponsorship.enable(policy.id);
console.log("After enable - Enabled:", enabled.enabled);
