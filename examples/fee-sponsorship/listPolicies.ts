// Usage: npx tsx fee-sponsorship/listPolicies.ts

import Openfort from "@openfort/openfort-node";
import "dotenv/config";

const openfort = new Openfort(process.env.OPENFORT_API_KEY!, {
  basePath: process.env.OPENFORT_BASE_URL,
});

// List all fee sponsorships
const result = await openfort.feeSponsorship.list({ limit: 10 });

console.log(`Found ${result.total} fee sponsorships:`);
for (const sponsorship of result.data) {
  console.log(`  - ${sponsorship.name} (${sponsorship.id})`);
  console.log(`    Strategy: ${sponsorship.strategy.sponsorSchema}`);
  console.log(`    Policy: ${sponsorship.policyId}`);
  console.log(`    Enabled: ${sponsorship.enabled}`);
}
