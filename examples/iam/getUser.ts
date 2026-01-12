// Usage: npx tsx iam/getUser.ts <user_id>

import Openfort from "@openfort/openfort-node";
import "dotenv/config";

const openfort = new Openfort(process.env.OPENFORT_API_KEY!, {
  basePath: process.env.OPENFORT_BASE_URL,
});

const userId = process.argv[2];

if (!userId) {
  console.error("Usage: npx tsx iam/getUser.ts <user_id>");
  process.exit(1);
}

// Get a specific user by ID
const user = await openfort.iam.users.get(userId);

console.log("User details:");
console.log("  ID:", user.id);
console.log("  Name:", user.name);
console.log("  Email:", user.email ?? "N/A");
console.log("  Email Verified:", user.emailVerified);
console.log("  Created:", new Date(user.createdAt * 1000).toISOString());
console.log("  Linked Accounts:");
for (const account of user.linkedAccounts) {
  console.log(`    - Provider: ${account.provider}`);
  if (account.accountId) {
    console.log(`      Account ID: ${account.accountId}`);
  }
}
