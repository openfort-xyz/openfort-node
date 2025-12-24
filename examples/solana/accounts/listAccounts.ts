// Usage: npx tsx solana/accounts/listAccounts.ts

import Openfort from "@openfort/openfort-node";
import "dotenv/config";

const openfort = new Openfort(process.env.OPENFORT_API_KEY!, {
  basePath: process.env.OPENFORT_BASE_URL,
  walletSecret: process.env.OPENFORT_WALLET_SECRET,
});

// List all Solana accounts
const result = await openfort.solana.listAccounts({ limit: 10 });

console.log(`Found ${result.total} Solana accounts:`);
for (const account of result.accounts) {
  console.log(`  - ${account.address} (${account.id})`);
}

// Create a few more accounts
await openfort.solana.createAccount({ name: `SolanaWallet-${Date.now()}-1` });
await openfort.solana.createAccount({ name: `SolanaWallet-${Date.now()}-2` });

// List accounts with pagination
const moreAccounts = await openfort.solana.listAccounts({
  limit: 5,
  skip: 0,
});

console.log(`\nPaginated results (first 5):`);
for (const account of moreAccounts.accounts) {
  console.log(`  - ${account.address}`);
}
