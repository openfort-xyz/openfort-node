// Usage: npx tsx policies/validatePolicy.ts
//
// Demonstrates client-side validation of policy bodies using the exported
// Zod schemas. This catches invalid payloads before they reach the API —
// no network request required.

import {
  CreatePolicyBodySchema,
  UpdatePolicyBodySchema,
  type CreatePolicyBody,
} from "@openfort/openfort-node";
import { ZodError } from "zod";

// ---------------------------------------------------------------------------
// 1. Valid policy — validation passes
// ---------------------------------------------------------------------------

const validBody: CreatePolicyBody = {
  scope: "project",
  description: "Reject high-value transactions",
  rules: [
    {
      action: "reject",
      operation: "signEvmTransaction",
      criteria: [
        {
          type: "ethValue",
          operator: ">",
          ethValue: "1000000000000000000",
        },
      ],
    },
  ],
};

const parsed = CreatePolicyBodySchema.parse(validBody);
console.log("Valid policy parsed successfully!");
console.log("  Scope:", parsed.scope);
console.log("  Rules:", parsed.rules.length);

// ---------------------------------------------------------------------------
// 2. Invalid criterion type — validation fails
// ---------------------------------------------------------------------------

console.log("\n--- Invalid criterion type ---");
try {
  CreatePolicyBodySchema.parse({
    scope: "project",
    rules: [
      {
        action: "reject",
        operation: "signEvmTransaction",
        criteria: [
          {
            type: "INVALID_TYPE", // not a valid criterion
            operator: ">",
            ethValue: "100",
          },
        ],
      },
    ],
  });
} catch (e) {
  if (e instanceof ZodError) {
    console.log("Caught ZodError:", e.issues[0].message);
  }
}

// ---------------------------------------------------------------------------
// 3. Invalid EVM address format — validation fails
// ---------------------------------------------------------------------------

console.log("\n--- Invalid EVM address ---");
try {
  CreatePolicyBodySchema.parse({
    scope: "project",
    rules: [
      {
        action: "accept",
        operation: "sendEvmTransaction",
        criteria: [
          {
            type: "evmAddress",
            operator: "in",
            addresses: ["not-a-hex-address"], // bad format
          },
        ],
      },
    ],
  });
} catch (e) {
  if (e instanceof ZodError) {
    console.log("Caught ZodError:", e.issues[0].message);
  }
}

// ---------------------------------------------------------------------------
// 4. Wrong criterion for operation — validation fails
// ---------------------------------------------------------------------------

console.log("\n--- Wrong criterion for operation ---");
try {
  CreatePolicyBodySchema.parse({
    scope: "project",
    rules: [
      {
        action: "accept",
        operation: "signEvmMessage",
        criteria: [
          {
            type: "ethValue", // ethValue is not valid for signEvmMessage
            operator: ">",
            ethValue: "100",
          },
        ],
      },
    ],
  });
} catch (e) {
  if (e instanceof ZodError) {
    console.log("Caught ZodError:", e.issues[0].message);
  }
}

// ---------------------------------------------------------------------------
// 5. Missing required fields — validation fails
// ---------------------------------------------------------------------------

console.log("\n--- Missing scope ---");
try {
  CreatePolicyBodySchema.parse({
    // scope is missing
    rules: [
      {
        action: "reject",
        operation: "signEvmHash",
      },
    ],
  });
} catch (e) {
  if (e instanceof ZodError) {
    console.log("Caught ZodError:", e.issues[0].message);
  }
}

// ---------------------------------------------------------------------------
// 6. Validate update body
// ---------------------------------------------------------------------------

console.log("\n--- Valid update body ---");
const updateParsed = UpdatePolicyBodySchema.parse({
  description: "Updated description",
  enabled: false,
});
console.log("Update body parsed successfully!");
console.log("  Description:", updateParsed.description);
console.log("  Enabled:", updateParsed.enabled);

// ---------------------------------------------------------------------------
// 7. Too many rules — validation fails
// ---------------------------------------------------------------------------

console.log("\n--- Too many rules (> 10) ---");
try {
  CreatePolicyBodySchema.parse({
    scope: "project",
    rules: Array.from({ length: 11 }, () => ({
      action: "reject",
      operation: "signEvmHash",
    })),
  });
} catch (e) {
  if (e instanceof ZodError) {
    console.log("Caught ZodError:", e.issues[0].message);
  }
}
