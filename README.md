![Illustration_04 1-min](https://github.com/user-attachments/assets/84796219-8196-40fb-a28a-6ca24a388818)

<div align="center">
  <h4>
    <a href="https://www.openfort.xyz/">
      Website
    </a>
    <span> | </span>
    <a href="https://www.openfort.xyz/docs">
      Documentation
    </a>
    <span> | </span>
    <a href="https://www.openfort.xyz/docs/reference/api/authentication">
      API Docs
    </a>
    <span> | </span>
    <a href="https://twitter.com/openfortxyz">
      Twitter
    </a>
  </h4>
</div>


# Openfort Node.js Library

[![Version](https://img.shields.io/npm/v/@openfort/openfort-node.svg)](https://www.npmjs.org/package/@openfort/openfort-node)

The Openfort Node library provides convenient access to the Openfort API from applications written in server-side JavaScript.

## Documentation

See the [`openfort-node` API docs]([https://openfort.xyz/docs/api?lang=node](https://www.openfort.xyz/docs/reference/api/introduction)) for Node.js.

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

openfort.players.create({
    name: 'Joan McCoain',
    description: 'API created player'
})
  .then(player => console.log(player.id))
  .catch(error => console.error(error));
```

Or using ES modules and `async`/`await`:

```js
import Openfort from '@openfort/openfort-node';
const openfort = new Openfort('sk_test_...');

const player = await openfort.players.create({
    name: 'customer@example.com',
    description: 'API created player'
});

console.log(player.id);
```

Below code snippet shows exemplary usage of the configuration and the API. 

```typescript
import Openfort from "@openfort/openfort-node";

async function example() {
    const openfort = new Openfort("sk_test_XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX");
    const players = await openfort.players.list();
    for (const player of players.data) {
        console.log(player.id);
    }

    const newPlayer = await openfort.players.create({name: "Test"});
    console.log(newPlayer.id)

    const transactionIntents = await openfort.transactionIntents.list();
    for (const intent of transactionIntents.data) {
        console.log(`Intent ${intent.id} by ${intent.player.name}`);
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
