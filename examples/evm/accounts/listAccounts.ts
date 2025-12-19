// Usage: npx tsx evm/accounts/listAccounts.ts

import Openfort from "@openfort/openfort-node";
import "dotenv/config";

const openfort = new Openfort(process.env.OPENFORT_API_KEY!, {
  basePath: process.env.OPENFORT_BASE_URL,
  walletSecret: process.env.OPENFORT_WALLET_SECRET,
});

// List all EVM accounts
const result = await openfort.evm.listAccounts({ limit: 10 });

console.log(`Found ${result.total} EVM accounts:`);
for (const account of result.accounts) {
  console.log(`  - ${account.address} (${account.id})`);
}

// List accounts for a specific user
const player = await openfort.players.create({
  name: `Player-${Date.now()}`,
});

// Create a few accounts for this player
await openfort.evm.createAccount({ user: player.id });
await openfort.evm.createAccount({ user: player.id });

const userAccounts = await openfort.evm.listAccounts({
  user: player.id,
  limit: 10,
});

console.log(`\nFound ${userAccounts.total} accounts for player ${player.id}:`);
for (const account of userAccounts.accounts) {
  console.log(`  - ${account.address}`);
}
