// Usage: npx tsx transactions/createTransactionIntent.ts

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

// Create a policy for gas sponsorship
const policy = await openfort.policies.create({
  name: `TxPolicy-${Date.now()}`,
  chainId,
  strategy: {
    sponsorSchema: "pay_for_user",
  },
});

// Create a policy rule to allow all account functions
await openfort.policyRules.create({
  type: "account_functions",
  policy: policy.id,
});

// Create a transaction intent
const transactionIntent = await openfort.transactionIntents.create({
  chainId,
  policy: policy.id,
  interactions: [
    {
      contract: "0x38090d1636069c0ff1af6bc1737fb996b7f63ac0",
      functionName: "mint",
      functionArgs: [account.address],
    },
  ],
});

console.log("Created transaction intent:");
console.log("  ID:", transactionIntent.id);
console.log("  Chain ID:", transactionIntent.chainId);
console.log("  Player:", transactionIntent.player?.id);
console.log("  Policy:", transactionIntent.policy?.id);
