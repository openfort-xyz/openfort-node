import {OpenfortClient} from "@openfort/openfort-node";

async function example() {
    const openfortClient = new OpenfortClient("sk_test_XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX");
    const players = await openfortClient.players.getPlayers();
    for (const player of players.body.data) {
        console.log(player.id);
    }

    const newPlayer = await openfortClient.players.createPlayer("Test");
    console.log(newPlayer.body.id)
    await openfortClient.players.createSession(newPlayer.body.id, "public key");

    const transactionIntents = await openfortClient.transactions.getTransactionIntents();
    for (const intent of transactionIntents.body.data) {
        console.log(`Intent ${intent.id} by ${intent.player}`);
    }
}

example().catch((e) => console.error(e));