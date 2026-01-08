// Usage: npx tsx policies/createPolicy.ts

import Openfort from "@openfort/openfort-node";
import "dotenv/config";

const openfort = new Openfort(process.env.OPENFORT_API_KEY!, {
  basePath: process.env.OPENFORT_BASE_URL,
});

const chainId = Number(process.env.CHAIN_ID) || 80002;

// Create a gas sponsorship policy
const policy = await openfort.policies.create({
  name: "Gas Sponsorship Policy",
  chainId,
  strategy: {
    sponsorSchema: "pay_for_user",
  },
});

console.log("Created policy:");
console.log("  ID:", policy.id);
console.log("  Name:", policy.name);
console.log("  Chain ID:", policy.chainId);
console.log("  Strategy:", policy.strategy.sponsorSchema);
