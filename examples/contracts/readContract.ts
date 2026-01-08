// Usage: npx tsx contracts/readContract.ts

import Openfort from "@openfort/openfort-node";
import "dotenv/config";

const openfort = new Openfort(process.env.OPENFORT_API_KEY!, {
  basePath: process.env.OPENFORT_BASE_URL,
});

const chainId = Number(process.env.CHAIN_ID) || 80002;

// Create a contract reference first
const contract = await openfort.contracts.create({
  name: "ERC20 Token",
  chainId,
  address: "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174", // USDC on Polygon
});

console.log("Contract ID:", contract.id);

// Read contract data (e.g., totalSupply)
const result = await openfort.contracts.read(contract.id, {
  functionName: "totalSupply",
  functionArgs: [],
});

console.log("\nContract read result:");
console.log("  Function: totalSupply");
console.log("  Result:", result.result);
