// Usage: npx tsx evm/accounts/createAccount.ts

import Openfort from "@openfort/openfort-node";
import "dotenv/config";

const openfort = new Openfort(process.env.OPENFORT_API_KEY!, {
  basePath: process.env.OPENFORT_BASE_URL,
  walletSecret: process.env.OPENFORT_WALLET_SECRET,
});

// First create a player (user) since it's required for account creation
const player = await openfort.players.create({
  name: `Player-${Date.now()}`,
});
console.log("Created player:", player.id);

// Create an EVM account for this player
const account = await openfort.evm.createAccount({
  user: player.id,
  accountType: "Externally Owned Account",
});

console.log("Created EVM account:");
console.log("  ID:", account.id);
console.log("  Address:", account.address);
