// Usage: npx tsx transactions/getTransactionIntent.ts

import Openfort from "@openfort/openfort-node";
import "dotenv/config";

const openfort = new Openfort(process.env.OPENFORT_API_KEY!, {
  basePath: process.env.OPENFORT_BASE_URL,
});

const chainId = Number(process.env.CHAIN_ID) || 80002;

// Create an account (V1 legacy API)
const account = await openfort.accounts.v1.create({
  chainId,
});

// Create a policy
const policy = await openfort.policies.create({
  name: `TxPolicy-${Date.now()}`,
  chainId,
  strategy: {
    sponsorSchema: "pay_for_user",
  },
});

await openfort.policyRules.create({
  type: "account_functions",
  policy: policy.id,
});

// Create a transaction intent
const created = await openfort.transactionIntents.create({
  chainId,
  policy: policy.id,
  interactions: [
    {
      contract: "con_***",
      functionName: "mint",
      functionArgs: [account.address],
    },
  ],
});

console.log("Created transaction intent:", created.id);

// Retrieve the transaction intent
const intent = await openfort.transactionIntents.get(created.id);

console.log("\nRetrieved transaction intent:");
console.log("  ID:", intent.id);
console.log("  Chain ID:", intent.chainId);
console.log("  Player:", intent.player?.id);
console.log("  Account:", intent.account?.id);
console.log("  Created:", intent.createdAt);
