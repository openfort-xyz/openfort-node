import Openfort, {CreatePlayerRequest, CreatePlayerSessionRequest, PlayersResponse} from "@openfort/openfort-node";

async function example() {
    const openfort = new Openfort("sk_test_44b87423-9f53-5cf9-ae18-82b3e8bae139");
    const players: PlayersResponse = await openfort.players.list();
    for (const player of players.data) {
        console.log(player.id);
    }

    const createPlayerRequest: CreatePlayerRequest = {
        name: "Test",
    };
    const newPlayer = await openfort.players.create(createPlayerRequest);

    const createSessionRequest: CreatePlayerSessionRequest = {
        id: newPlayer.id,
        address: "0x9590Ed0C18190a310f4e93CAccc4CC17270bED40",
        chain_id: Number(process.env.NEXTAUTH_OPENFORT_CHAINID!),
        valid_until: 281474976710655,
        valid_after: 0,
        policy: "pol_55814cce-9f5b-463a-a3ac-e20bde85903b",
    };
    await openfort.players.createSession(createSessionRequest);

    const transactionIntents = await openfort.transactionIntents.list();
    for (const intent of transactionIntents.data) {
        console.log(`Intent ${intent.id} by ${intent.player}`);
    }
}

example().catch((e) => console.error(e));
