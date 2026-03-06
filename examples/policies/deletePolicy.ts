// Usage: npx tsx policies/deletePolicy.ts

import Openfort, {
  CreatePolicyBodySchema,
  type CreatePolicyBody,
} from "@openfort/openfort-node";
import "dotenv/config";

const openfort = new Openfort(process.env.OPENFORT_API_KEY!, {
  basePath: process.env.OPENFORT_BASE_URL,
});

// Create a policy to delete
const body: CreatePolicyBody = {
  scope: "project",
  description: "Temporary policy to be deleted",
  rules: [
    {
      action: "reject",
      operation: "signEvmHash",
    },
  ],
};
CreatePolicyBodySchema.parse(body);

const policy = await openfort.policies.create(body);
console.log("Created policy:", policy.id);

// Delete the policy (soft delete)
const result = await openfort.policies.delete(policy.id);

console.log("\nDeleted policy:");
console.log("  ID:", result.id);
console.log("  Deleted:", result.deleted);
