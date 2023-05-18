## @openfort/openfort-node@1.0.0

### Usage

Below code snippet shows exemplary usage of the configuration and the API. 

```typescript
import {OpenfortClient} from "@openfort/openfort-node";

async function example() {
    const openfort = new OpenfortClient("sk_test_XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX");
    const players = await openfort.players.getPlayers();
    for (const player of players.body.data) {
        console.log(player.id);
    }

    const newPlayer = await openfort.players.createPlayer("Test");
    console.log(newPlayer.body.id)
    await openfort.players.createSession(newPlayer.body.id, "public key");

    const transactionIntents = await openfort.transactions.getTransactionIntents();
    for (const intent of transactionIntents.body.data) {
        console.log(`Intent ${intent.id} by ${intent.player}`);
    }
}

example().catch((e) => console.error(e));

```
