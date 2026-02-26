// Usage: npx tsx evm/accounts/getAccount.ts

import Openfort from "@openfort/openfort-node";
import "dotenv/config";

const openfort = new Openfort(process.env.OPENFORT_API_KEY!, {
  basePath: process.env.OPENFORT_BASE_URL,
  walletSecret: process.env.OPENFORT_WALLET_SECRET,
});

const account = await openfort.accounts.evm.backend.create();
console.log("Created account:", account.address);

// Retrieve account by ID
const accountById = await openfort.accounts.evm.backend.get({ id: account.id });
console.log("Retrieved account by ID:", accountById.address);

// Retrieve account by address
const accountByAddress = await openfort.accounts.evm.backend.get({
  address: account.address,
});
console.log("Retrieved account by address:", accountByAddress.address);
