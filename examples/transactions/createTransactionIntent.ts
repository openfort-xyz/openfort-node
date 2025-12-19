// Usage: npx tsx transactions/createTransactionIntent.ts

import Openfort from "@openfort/openfort-node";
import "dotenv/config";

const openfort = new Openfort(process.env.OPENFORT_API_KEY!, {
  basePath: process.env.OPENFORT_BASE_URL,
});

const chainId = Number(process.env.CHAIN_ID) || 80002;

// Create a player and account first
const player = await openfort.players.create({
  name: `Player-${Date.now()}`,
});

const account = await openfort.accountsV1.create({
  player: player.id,
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
  functionName: null,
  contract: null,
});

// Create a transaction intent
const transactionIntent = await openfort.transactionIntents.create({
  player: player.id,
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
