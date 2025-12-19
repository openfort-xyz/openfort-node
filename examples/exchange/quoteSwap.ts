// Usage: npx tsx exchange/quoteSwap.ts

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

console.log("Account address:", account.address);

// Get a quote for swapping tokens
// Note: Token addresses and amounts will vary by network
const quote = await openfort.exchange.quote({
  account: account.id,
  chainId,
  tokenIn: "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE", // Native token (ETH/MATIC)
  tokenOut: "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174", // USDC on Polygon
  amount: "1000000000000000", // 0.001 native token
});

console.log("\nSwap quote:");
console.log("  Token In:", quote.tokenIn);
console.log("  Token Out:", quote.tokenOut);
console.log("  Amount In:", quote.amountIn);
console.log("  Amount Out:", quote.amountOut);
