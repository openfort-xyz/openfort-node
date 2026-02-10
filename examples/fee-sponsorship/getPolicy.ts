// Usage: npx tsx fee-sponsorship/getPolicy.ts

import Openfort from "@openfort/openfort-node";
import "dotenv/config";

const openfort = new Openfort(process.env.OPENFORT_API_KEY!, {
  basePath: process.env.OPENFORT_BASE_URL,
});

const chainId = Number(process.env.CHAIN_ID) || 80002;

// Create a policy first
const created = await openfort.feeSponsorship.create({
  name: `TestPolicy-${Date.now()}`,
  chainId,
  strategy: {
    sponsorSchema: "pay_for_user",
  },
});
console.log("Created policy:", created.id);

// Retrieve the policy by ID
const policy = await openfort.feeSponsorship.get(created.id);

console.log("\nRetrieved policy:");
console.log("  ID:", policy.id);
console.log("  Name:", policy.name);
console.log("  Chain ID:", policy.chainId);
console.log("  Strategy:", policy.strategy.sponsorSchema);
console.log("  Enabled:", policy.enabled);
