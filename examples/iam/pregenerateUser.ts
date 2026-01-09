// Usage: npx tsx iam/pregenerateUser.ts

import Openfort, { ShieldAuthProvider } from "@openfort/openfort-node";
import "dotenv/config";

const openfort = new Openfort(process.env.OPENFORT_API_KEY!, {
  basePath: process.env.OPENFORT_BASE_URL,
});

const chainId = Number(process.env.CHAIN_ID) || 80002;

// Pre-generate a user with an embedded wallet
// This creates the user and wallet before they authenticate
const result = await openfort.iam.users.pregenerate(
  {
    email: "user@example.com",
    accountType: "Smart Account",
    chainId,
  },
  {
    shieldApiKey: process.env.SHIELD_API_KEY!,
    shieldApiSecret: process.env.SHIELD_API_SECRET!,
    shieldAuthProvider: ShieldAuthProvider.OPENFORT,
    encryptionPart: process.env.SHIELD_ENCRYPTION_PART!,
  }
);

console.log("Pre-generated user with embedded wallet:");
console.log("  Account ID:", result.id);
console.log("  User ID:", result.user);
console.log("  Address:", result.address);
console.log("  Owner Address:", result.ownerAddress);
console.log("  Account Type:", result.accountType);
console.log("  Chain ID:", result.chainId);
console.log("  Chain Type:", result.chainType);
console.log("  Created:", new Date(result.createdAt * 1000).toISOString());
