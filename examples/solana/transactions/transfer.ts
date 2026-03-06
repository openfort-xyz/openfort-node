// Usage: pnpm tsx solana/transactions/transfer.ts

import Openfort from "@openfort/openfort-node";
import "dotenv/config";

const openfort = new Openfort(process.env.OPENFORT_API_KEY!, {
  basePath: process.env.OPENFORT_BASE_URL,
  walletSecret: process.env.OPENFORT_WALLET_SECRET,
  publishableKey: process.env.OPENFORT_PUBLISHABLE_KEY,
});

// Prefunded devnet account with some SOL and USDC for testing transfers
const account = await openfort.accounts.solana.backend.get({
  address: "o24A5URLU3JNKg7AoeUrPsfsAo1NQeeAB4uQViAkpjq",
});
console.log("Solana account:", account.address);

const DEST = "FDx9mfVqTvXUaSPQDELwDtGgMqxirmAFsEK2s4YsKfsc";

// --- Example 1: SOL transfer ---
const solResult = await account.transfer({
  to: DEST,
  amount: 1_000_000n,
  cluster: "devnet",
});
console.log("SOL transfer signature:", solResult.signature);

// --- Example 2: USDC transfer by name ---
const usdcResult = await account.transfer({
  to: DEST,
  amount: 1_000_000n,
  token: "usdc",
  cluster: "devnet",
});
console.log("USDC transfer signature:", usdcResult.signature);

// --- Example 3: SPL transfer by mint address ---
const splResult = await account.transfer({
  to: DEST,
  amount: 2_000_000n,
  token: "4zMMC9srt5Ri5X14GAgXhaHii3GnPAEERYPJgZJDncDU",
  cluster: "devnet",
});
console.log("SPL transfer signature:", splResult.signature);
