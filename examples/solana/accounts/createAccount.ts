// Usage: npx tsx solana/accounts/createAccount.ts

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

// Create a Solana account for this player
const account = await openfort.solana.createAccount({
  user: player.id,
});

console.log("Created Solana account:");
console.log("  ID:", account.id);
console.log("  Address:", account.address);
