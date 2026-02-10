// Usage: npx tsx fee-sponsorship/updatePolicy.ts

import Openfort from "@openfort/openfort-node";
import "dotenv/config";

const openfort = new Openfort(process.env.OPENFORT_API_KEY!, {
  basePath: process.env.OPENFORT_BASE_URL,
});

const chainId = Number(process.env.CHAIN_ID) || 80002;

// Create a policy first
const policy = await openfort.feeSponsorship.create({
  name: "Original Policy Name",
  chainId,
  strategy: {
    sponsorSchema: "pay_for_user",
  },
});
console.log("Created policy:", policy.name);

// Update the policy
const updated = await openfort.feeSponsorship.update(policy.id, {
  name: "Updated Policy Name",
});

console.log("\nUpdated policy:");
console.log("  ID:", updated.id);
console.log("  Name:", updated.name);
