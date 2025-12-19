// Usage: npx tsx evm/accounts/importAccount.ts

import Openfort from "@openfort/openfort-node";
import "dotenv/config";
import { generatePrivateKey, privateKeyToAccount } from "viem/accounts";

const openfort = new Openfort(process.env.OPENFORT_API_KEY!, {
  basePath: process.env.OPENFORT_BASE_URL,
  walletSecret: process.env.OPENFORT_WALLET_SECRET,
});

// Generate a random private key for demonstration
const privateKey = generatePrivateKey();
const localAccount = privateKeyToAccount(privateKey);

console.log("Generated private key:", privateKey);
console.log("Expected address:", localAccount.address);

// Import the account to Openfort
const account = await openfort.evm.importAccount({
  privateKey,
  name: "ImportedWallet",
});

console.log("\nImported account:");
console.log("  ID:", account.id);
console.log("  Address:", account.address);
console.log(
  "  Addresses match:",
  account.address.toLowerCase() === localAccount.address.toLowerCase()
);
