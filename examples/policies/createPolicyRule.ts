// Usage: npx tsx policies/createPolicyRule.ts

import Openfort from "@openfort/openfort-node";
import "dotenv/config";

const openfort = new Openfort(process.env.OPENFORT_API_KEY!, {
  basePath: process.env.OPENFORT_BASE_URL,
});

const chainId = Number(process.env.CHAIN_ID) || 80002;

// Create a policy first
const policy = await openfort.policies.create({
  name: `PolicyWithRules-${Date.now()}`,
  chainId,
  strategy: {
    sponsorSchema: "pay_for_user",
  },
});
console.log("Created policy:", policy.id);

// Create a contract to reference in the rule
const contract = await openfort.contracts.create({
  name: "Test Contract",
  chainId,
  address: "0x38090d1636069c0ff1af6bc1737fb996b7f63ac0",
});
console.log("Created contract:", contract.id);

// Create a policy rule for account functions
const rule = await openfort.policyRules.create({
  type: "account_functions",
  policy: policy.id,
  functionName: "transfer",
  contract: contract.id,
});

console.log("\nCreated policy rule:");
console.log("  ID:", rule.id);
console.log("  Type:", rule.type);
if ("functionName" in rule && rule.functionName) {
  console.log("  Function:", rule.functionName);
}
