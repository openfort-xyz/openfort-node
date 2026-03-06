// Usage: npx tsx contracts/listContracts.ts

import Openfort from "@openfort/openfort-node";
import "dotenv/config";

const openfort = new Openfort(process.env.OPENFORT_API_KEY!, {
  basePath: process.env.OPENFORT_BASE_URL,
});

// List all contracts
const result = await openfort.contracts.list({ limit: 10 });

console.log(`Found ${result.total} contracts:`);
for (const contract of result.data) {
  console.log(`  - ${contract.name} (${contract.id})`);
  console.log(`    Address: ${contract.address}`);
  console.log(`    Chain: ${contract.chainId}`);
}
