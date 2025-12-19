// Usage: npx tsx solana/signing/signMessage.ts

import Openfort from "@openfort/openfort-node";
import "dotenv/config";

const openfort = new Openfort(process.env.OPENFORT_API_KEY!, {
  basePath: process.env.OPENFORT_BASE_URL,
  walletSecret: process.env.OPENFORT_WALLET_SECRET,
});

// Create a player and Solana account
const player = await openfort.players.create({
  name: `Player-${Date.now()}`,
});

const account = await openfort.solana.createAccount({
  user: player.id,
});
console.log("Created Solana account:", account.address);

// Sign a message
const message = "Hello, Openfort on Solana!";
const signature = await account.signMessage({ message });

console.log("\nMessage:", message);
console.log("Signature:", signature);
