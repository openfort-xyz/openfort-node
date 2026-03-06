// Usage: npx tsx policies/getPolicy.ts

import Openfort, {
  CreatePolicyBodySchema,
  type CreatePolicyBody,
} from "@openfort/openfort-node";
import "dotenv/config";

const openfort = new Openfort(process.env.OPENFORT_API_KEY!, {
  basePath: process.env.OPENFORT_BASE_URL,
});

// Create a policy first
const body: CreatePolicyBody = {
  scope: "project",
  description: "Test policy to retrieve",
  rules: [
    {
      action: "reject",
      operation: "signEvmHash",
    },
  ],
};
CreatePolicyBodySchema.parse(body);

const created = await openfort.policies.create(body);
console.log("Created policy:", created.id);

// Retrieve the policy by ID
const policy = await openfort.policies.get(created.id);

console.log("\nRetrieved policy:");
console.log("  ID:", policy.id);
console.log("  Scope:", policy.scope);
console.log("  Description:", policy.description);
console.log("  Enabled:", policy.enabled);
console.log("  Priority:", policy.priority);
console.log("  Rules:");
for (const rule of policy.rules) {
  console.log(`    - Action: ${rule.action}, Operation: ${rule.operation}`);
}
