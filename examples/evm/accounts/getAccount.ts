// Usage: npx tsx evm/accounts/getAccount.ts

import Openfort from "@openfort/openfort-node";
import "dotenv/config";

const openfort = new Openfort(process.env.OPENFORT_API_KEY!, {
  basePath: process.env.OPENFORT_BASE_URL,
  walletSecret: process.env.OPENFORT_WALLET_SECRET,
});

// Create a player and account first
const player = await openfort.players.create({
  name: `Player-${Date.now()}`,
});
console.log("Created player:", player.id);

const account = await openfort.evm.createAccount({
  name: `MyWallet-${Date.now()}`,
});
console.log("Created account:", account.address);

// Retrieve account by ID
const accountById = await openfort.evm.getAccount({ id: account.id });
console.log("Retrieved account by ID:", accountById.address);

// Retrieve account by address
const accountByAddress = await openfort.evm.getAccount({
  address: account.address,
});
console.log("Retrieved account by address:", accountByAddress.address);
