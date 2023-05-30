# Openfort Node.js Library

[![Version](https://img.shields.io/npm/v/stripe.svg)](https://www.npmjs.org/package/@openfort/openfort-node)

The Openfort Node library provides convenient access to the Openfort API from applications written in server-side JavaScript.

## Documentation

See the [`openfort-node` API docs](https://openfort.xyz/docs/api?lang=node) for Node.js.

## Requirements

Node 14 or higher.

## Installation

```shell
npm install @openfort/openfort-node
```

```shell
yarn add @openfort/openfort-node
```

## Usage

The package needs to be configured with your account's secret key, which is
available in the [Openfort Dashboard][api-keys]. Require it with the key's
value:

<!-- prettier-ignore -->
```js
const openfort = require('@openfort/openfort-node')('sk_test_...');

openfort.players.createPlayer(
  'Joan McCoain',
  'API created player'
)
  .then(player => console.log(player.body.id))
  .catch(error => console.error(error));
```

Or using ES modules and `async`/`await`:

```js
import Openfort from '@openfort/openfort-node';
const openfort = new Openfort('sk_test_...');

const player = await openfort.players.createPlayer(
  'customer@example.com',
  'API created player'
);

console.log(player.body.id);
```

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

    const transactionIntents = await openfort.transactions.getTransactionIntents();
    for (const intent of transactionIntents.body.data) {
        console.log(`Intent ${intent.id} by ${intent.player}`);
    }
}

example().catch((e) => console.error(e));
```

## Support

New features and bug fixes are released on the latest major version of the `openfort` package. If you are on an older major version, we recommend that you upgrade to the latest in order to use the new features and bug fixes including those for security vulnerabilities. Older major versions of the package will continue to be available for use, but will not be receiving any updates.

[api-keys]: https://dashboard.openfort.xyz/api-keys

<!--
# vim: set tw=79:
-->
