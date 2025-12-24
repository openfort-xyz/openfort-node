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

// Create a few more accounts
await openfort.evm.createAccount({ name: `Wallet-${Date.now()}-1` });
await openfort.evm.createAccount({ name: `Wallet-${Date.now()}-2` });

// List accounts with pagination
const moreAccounts = await openfort.evm.listAccounts({
  limit: 5,
  skip: 0,
});

console.log(`\nPaginated results (first 5):`);
for (const account of moreAccounts.accounts) {
  console.log(`  - ${account.address}`);
}
