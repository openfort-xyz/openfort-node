// Usage: npx tsx transactions/listTransactionIntents.ts

import Openfort from "@openfort/openfort-node";
import "dotenv/config";

const openfort = new Openfort(process.env.OPENFORT_API_KEY!, {
  basePath: process.env.OPENFORT_BASE_URL,
});

// List all transaction intents
const result = await openfort.transactionIntents.list({ limit: 10 });

console.log(`Found ${result.total} transaction intents:`);
for (const intent of result.data) {
  console.log(`  - ${intent.id}`);
  console.log(`    Chain: ${intent.chainId}`);
  console.log(`    Player: ${intent.player?.id || "N/A"}`);
  console.log(`    Created: ${intent.createdAt}`);
}

// List transaction intents for a specific player
const player = await openfort.players.create({
  name: `Player-${Date.now()}`,
});

const playerIntents = await openfort.transactionIntents.list({
  playerId: [player.id],
  limit: 10,
});

console.log(`\nTransaction intents for player ${player.id}: ${playerIntents.total}`);
