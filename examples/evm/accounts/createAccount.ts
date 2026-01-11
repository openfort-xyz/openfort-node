// Usage: npx tsx evm/accounts/createAccount.ts

import Openfort from "@openfort/openfort-node";
import "dotenv/config";

const openfort = new Openfort(process.env.OPENFORT_API_KEY!, {
  basePath: process.env.OPENFORT_BASE_URL,
  walletSecret: process.env.OPENFORT_WALLET_SECRET,
});

// Create an EVM account
const account = await openfort.evm.createAccount({
  name: `MyWallet-${Date.now()}`,
});

console.log("Created EVM account:");
console.log("  ID:", account.id);
console.log("  Address:", account.address);
