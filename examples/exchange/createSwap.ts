// Usage: npx tsx exchange/createSwap.ts

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

// Create a policy for the swap
const policy = await openfort.policies.create({
  name: `SwapPolicy-${Date.now()}`,
  chainId,
  strategy: {
    sponsorSchema: "pay_for_user",
  },
});

await openfort.policyRules.create({
  type: "account_functions",
  policy: policy.id,
  functionName: null,
  contract: null,
});

console.log("Account address:", account.address);
console.log("Policy ID:", policy.id);

// Create a swap transaction
// Note: Token addresses and amounts will vary by network
// The account must have sufficient balance for the swap
const swap = await openfort.exchange.swap({
  account: account.id,
  chainId,
  tokenIn: "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE", // Native token
  tokenOut: "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174", // USDC
  amount: "1000000000000000", // 0.001 native token
  policy: policy.id,
});

console.log("\nSwap created:");
console.log("  Transaction Intent ID:", swap.id);
console.log("  Status:", swap.response?.status || "pending");
