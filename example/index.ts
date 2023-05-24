import Openfort from "@openfort/openfort-node";
import { CreateSessionPlayerRequest } from "../src/model/createSessionPlayerRequest";

async function example() {
    const openfort = new Openfort("sk_test_44b87423-9f53-5cf9-ae18-82b3e8bae139");
    const players = await openfort.players.getPlayers();
    for (const player of players.body.data) {
        console.log(player.id);
    }

    const newPlayer = await openfort.players.createPlayer("Test");
    console.log(newPlayer.body.id)
    const params: CreateSessionPlayerRequest = {
        address: '0x9590Ed0C18190a310f4e93CAccc4CC17270bED40',
        validUntil: 281474976710655,
        validAfter: 0,
        policy: "pol_55814cce-9f5b-463a-a3ac-e20bde85903b",
        chainId: 80001
    }

    await openfort.players.createPlayerSession(newPlayer.body.id, params);




    const transactionIntents = await openfort.transactions.getTransactionIntents();
    for (const intent of transactionIntents.body.data) {
        console.log(`Intent ${intent.id} by ${intent.player}`);
    }
}

example().catch((e) => console.error(e));