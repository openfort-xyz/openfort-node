// Usage: npx tsx evm/accounts/createAccount.ts

import Openfort from "@openfort/openfort-node";
import "dotenv/config";

const openfort = new Openfort(process.env.OPENFORT_API_KEY!, {
  basePath: process.env.OPENFORT_BASE_URL,
  walletSecret: process.env.OPENFORT_WALLET_SECRET,
});

// First create a user since it's required for account creation
const userId = `User-${Date.now()}`
console.log("Created user:", userId);

// Create an EVM account for this player
const account = await openfort.evm.createAccount({
  user: userId,
  accountType: "Externally Owned Account",
});

console.log("Created EVM account:");
console.log("  ID:", account.id);
console.log("  Address:", account.address);
