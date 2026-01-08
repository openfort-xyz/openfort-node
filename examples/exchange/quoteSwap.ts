// Usage: npx tsx exchange/quoteSwap.ts

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

console.log("Account address:", account.address);

// Get a quote for swapping tokens
// Note: Token addresses and amounts will vary by network
const quote = await openfort.exchange.quoteSwap({
  fromAddress: account.id,
  chainId,
  tokenInAddress: "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE", // Native token (ETH/MATIC)
  tokenOutAddress: "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174", // USDC on Polygon
  amount: "1000000000000000", // 0.001 native token
  tradeType: "EXACT_INPUT",
});

console.log("\nSwap quote:");
console.log("  Amount:", quote.amount);
console.log("  Slippage:", quote.slippage);
console.log("  Estimated Gas Fee:", quote.estimatedTXGasFee);
console.log("  Estimated Gas Fee (USD):", quote.estimatedTXGasFeeUSD);
