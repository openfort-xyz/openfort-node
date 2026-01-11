// Usage: npx tsx iam/deleteUser.ts <user_id>

import Openfort from "@openfort/openfort-node";
import "dotenv/config";

const openfort = new Openfort(process.env.OPENFORT_API_KEY!, {
  basePath: process.env.OPENFORT_BASE_URL,
});

const userId = process.argv[2];

if (!userId) {
  console.error("Usage: npx tsx iam/deleteUser.ts <user_id>");
  process.exit(1);
}

// Delete a user (this will also delete all linked accounts and embedded signers)
const result = await openfort.iam.users.delete(userId);

console.log("User deleted:");
console.log("  ID:", result.id);
console.log("  Deleted:", result.deleted);
