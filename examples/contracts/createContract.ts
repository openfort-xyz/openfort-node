// Usage: npx tsx contracts/createContract.ts

import Openfort from "@openfort/openfort-node";
import "dotenv/config";

const openfort = new Openfort(process.env.OPENFORT_API_KEY!, {
  basePath: process.env.OPENFORT_BASE_URL,
});

const chainId = Number(process.env.CHAIN_ID) || 80002;

// Create a contract reference
const contract = await openfort.contracts.create({
  name: "My NFT Contract",
  chainId,
  address: "0x38090d1636069c0ff1af6bc1737fb996b7f63ac0",
  // Optional: provide ABI for function name validation
  // abi: [...]
});

console.log("Created contract:");
console.log("  ID:", contract.id);
console.log("  Name:", contract.name);
console.log("  Address:", contract.address);
console.log("  Chain ID:", contract.chainId);
