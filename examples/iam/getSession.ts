// Usage: npx tsx iam/getSession.ts <access_token>

import Openfort from "@openfort/openfort-node";
import "dotenv/config";

const openfort = new Openfort(process.env.OPENFORT_API_KEY!, {
  basePath: process.env.OPENFORT_BASE_URL,
  publishableKey: process.env.OPENFORT_PUBLISHABLE_KEY,
  debugging: true,
});

const accessToken = process.argv[2];

if (!accessToken) {
  console.error("Usage: npx tsx iam/getSession.ts <access_token>");
  process.exit(1);
}

// Get session info using the user's access token
const response = await openfort.iam.getSession({ accessToken });
if (response === null) {
  console.error("Invalid token");
  process.exit(1);
}
console.log(response)
console.log("Session verified:");
console.log("  User ID:", response.user.id);
console.log("  User Email:", response.user.email);
console.log("  Session ID:", response.session.id);
console.log("  Expires At:", response.session.expiresAt);
