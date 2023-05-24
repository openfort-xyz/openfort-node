## @openfort/openfort-node@1.0.0

### Installation

Add the Openfort registry to the configuration file for NPM `.npmrc`:

```text
@openfort:registry=https://npm.pkg.github.com
```

Depends on the package manager that used in the project, one of the following commands should be run:

```shell
npm install @openfort/openfort-node
```

```shell
yarn add @openfort/openfort-node
```

### Usage

Below code snippet shows exemplary usage of the configuration and the API. 

```typescript
import Openfort from "@openfort/openfort-node";

async function example() {
    const openfort = new Openfort("sk_test_XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX");
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
