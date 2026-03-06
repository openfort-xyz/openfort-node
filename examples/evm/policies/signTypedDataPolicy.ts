// Usage: pnpm tsx evm/policies/signTypedDataPolicy.ts

import Openfort from "@openfort/openfort-node";
import "dotenv/config";

const openfort = new Openfort(process.env.OPENFORT_API_KEY!, {
  basePath: process.env.OPENFORT_BASE_URL,
});

// Create a policy that restricts EIP-712 Permit signatures to a max value of 1000 tokens
const permitPolicy = await openfort.policies.create({
  scope: "account",
  description: "Restrict Permit signatures to max 1000 tokens",
  rules: [
    {
      action: "accept",
      operation: "signEvmTypedData",
      criteria: [
        {
          type: "evmTypedDataVerifyingContract",
          addresses: ["0x000000000000000000000000000000000000dEaD"],
          operator: "in",
        },
        {
          type: "evmTypedDataField",
          fieldPath: "value",
          operator: "<=",
          value: "1000000000000000000000", // Max 1000 tokens (assuming 18 decimals)
        },
      ],
    },
  ],
});

console.log("Created permit policy. Policy ID:", permitPolicy.id);
