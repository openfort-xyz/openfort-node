// Usage: npx tsx iam/updateUserMetadata.ts <user_id>

import Openfort from "@openfort/openfort-node";
import "dotenv/config";

const openfort = new Openfort(process.env.OPENFORT_SECRET_KEY!, {
  basePath: process.env.OPENFORT_BASE_URL,
});

const userId = process.argv[2];

if (!userId) {
  console.error("Usage: npx tsx iam/updateUserMetadata.ts <user_id>");
  process.exit(1);
}

// Record terms acceptance on the user. Top-level keys merge into the stored metadata.
const accepted = await openfort.iam.users.update(userId, {
  metadata: {
    acceptedTerms: true,
    acceptedTermsAt: new Date().toISOString(),
    termsVersion: "2026-11",
  },
});

console.log("Metadata after accepting terms:", accepted.metadata);

// A key set to null is removed; the other keys are kept.
const updated = await openfort.iam.users.update(userId, {
  metadata: { termsVersion: null },
});

console.log("Metadata after removing termsVersion:", updated.metadata);
