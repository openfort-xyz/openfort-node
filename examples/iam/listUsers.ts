// Usage: npx tsx iam/listUsers.ts

import Openfort from "@openfort/openfort-node";
import "dotenv/config";

const openfort = new Openfort(process.env.OPENFORT_API_KEY!, {
  basePath: process.env.OPENFORT_BASE_URL,
});

// List all authenticated users
const result = await openfort.iam.users.list({ limit: 10 });

console.log(`Found ${result.total} users:`);
for (const user of result.data) {
  console.log(`  - ${user.id}`);
  console.log(`    Created: ${new Date(user.createdAt * 1000).toISOString()}`);
  console.log(`    Linked Accounts: ${user.linkedAccounts.length}`);
}
