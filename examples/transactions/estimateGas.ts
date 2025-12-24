// Usage: npx tsx transactions/estimateGas.ts

import Openfort from "@openfort/openfort-node";
import "dotenv/config";

const openfort = new Openfort(process.env.OPENFORT_API_KEY!, {
  basePath: process.env.OPENFORT_BASE_URL,
});

const chainId = Number(process.env.CHAIN_ID) || 80002;

// Create an account
const account = await openfort.accounts.create({
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

// Define transaction intent request
const transactionIntentRequest = {
  chainId,
  policy: policy.id,
  interactions: [
    {
      contract: "0x38090d1636069c0ff1af6bc1737fb996b7f63ac0",
      functionName: "mint",
      functionArgs: [account.address],
    },
  ],
};

// Estimate cost for the transaction before creating it
const estimate = await openfort.transactionIntents.estimateCost(
  transactionIntentRequest,
);

console.log("Cost estimate:");
console.log("  Estimated TX Gas:", estimate.estimatedTXGas);
console.log("  Estimated TX Gas Fee:", estimate.estimatedTXGasFee);
console.log("  Estimated TX Gas Fee (USD):", estimate.estimatedTXGasFeeUSD);
