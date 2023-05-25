import Openfort from "@openfort/openfort-node";

async function example() {
    const openfort = new Openfort("sk_test_44b87423-9f53-5cf9-ae18-82b3e8bae139");
    const players = await openfort.players.getPlayers();
    for (const player of players.body.data) {
        console.log(player.id);
    }

    const newPlayer = await openfort.players.createPlayer("Test");
    console.log(newPlayer.body.id)

    await openfort.players.createPlayerSession(newPlayer.body.id,
        '0x9590Ed0C18190a310f4e93CAccc4CC17270bED40',
        80001,
        281474976710655,
        0,
        "pol_55814cce-9f5b-463a-a3ac-e20bde85903b"
        );

    const transactionIntents = await openfort.transactions.getTransactionIntents();
    for (const intent of transactionIntents.body.data) {
        console.log(`Intent ${intent.id} by ${intent.player}`);
    }
}

example().catch((e) => console.error(e));