// Usage: npx tsx policies/updatePolicy.ts

import Openfort, {
  CreatePolicyBodySchema,
  UpdatePolicyBodySchema,
  type CreatePolicyBody,
  type UpdatePolicyBody,
} from "@openfort/openfort-node";
import "dotenv/config";

const openfort = new Openfort(process.env.OPENFORT_API_KEY!, {
  basePath: process.env.OPENFORT_BASE_URL,
});

// Create a policy first
const createBody: CreatePolicyBody = {
  scope: "project",
  description: "Original policy — reject high-value transactions",
  rules: [
    {
      action: "reject",
      operation: "signEvmTransaction",
      criteria: [
        {
          type: "ethValue",
          operator: ">",
          ethValue: "1000000000000000000", // 1 ETH
        },
      ],
    },
  ],
};
CreatePolicyBodySchema.parse(createBody);

const policy = await openfort.policies.create(createBody);
console.log("Created policy:", policy.id);
console.log("  Description:", policy.description);

// ---------------------------------------------------------------------------
// Update the policy — lower the threshold and add an address denylist
// ---------------------------------------------------------------------------

const updateBody: UpdatePolicyBody = {
  description: "Updated — reject high-value or denylist transactions",
  rules: [
    {
      action: "reject",
      operation: "signEvmTransaction",
      criteria: [
        {
          type: "ethValue",
          operator: ">",
          ethValue: "500000000000000000", // 0.5 ETH (lowered)
        },
      ],
    },
    {
      action: "reject",
      operation: "sendEvmTransaction",
      criteria: [
        {
          type: "evmAddress",
          operator: "in",
          addresses: ["0x000000000000000000000000000000000000dEaD"],
        },
      ],
    },
  ],
};
UpdatePolicyBodySchema.parse(updateBody);

const updated = await openfort.policies.update(policy.id, updateBody);

console.log("\nUpdated policy:");
console.log("  ID:", updated.id);
console.log("  Description:", updated.description);
console.log("  Rules:", updated.rules.length);
