// Usage: npx tsx iam/getSession.ts <access_token>

import Openfort from "@openfort/openfort-node";
import "dotenv/config";

const openfort = new Openfort(process.env.OPENFORT_API_KEY!, {
  basePath: process.env.OPENFORT_BASE_URL,
});

const accessToken = process.argv[2];

if (!accessToken) {
  console.error("Usage: npx tsx iam/getSession.ts <access_token>");
  process.exit(1);
}

// Verify an auth token and get session info (server-side verification)
const session = await openfort.iam.getSession({ token: accessToken });

console.log("Session verified:");
console.log("  User ID:", session.userId);
console.log("  Player ID:", session.playerId);
console.log("  Project ID:", session.projectId);
