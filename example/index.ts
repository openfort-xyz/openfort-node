import Openfort, {CreatePlayerRequest, CreatePlayerSessionRequest, PlayersResponse} from "@openfort/openfort-node";
import * as dotenv from "dotenv";

function getEnvVariable(name: string): string {
    const result = process.env[name];
    if (!result) {
        throw Error(`Environment variable is missing: ${name}`);
    }
    return result;
}

async function example() {
    const openfort = new Openfort(getEnvVariable("OPENFORT_APIKEY"), process.env.OPENFORT_BASEURL);
    const players: PlayersResponse = await openfort.players.list();
    for (const player of players.data) {
        console.log(player.id);
    }

    const createPlayerRequest: CreatePlayerRequest = {
        name: "Test",
    };
    const newPlayer = await openfort.players.create(createPlayerRequest);

    const createSessionRequest: CreatePlayerSessionRequest = {
        player_id: newPlayer.id,
        address: "0x9590Ed0C18190a310f4e93CAccc4CC17270bED40",
        chain_id: Number(getEnvVariable("OPENFORT_CHAINID")),
        valid_until: 281474976710655,
        valid_after: 0,
        policy: getEnvVariable("OPENFORT_POLICY"),
    };
    await openfort.players.createSession(createSessionRequest);

    const transactionIntents = await openfort.transactionIntents.list();
    for (const intent of transactionIntents.data) {
        console.log(`Intent ${intent.id} by ${intent.player}`);
    }
}

dotenv.config();
example().catch((e) => console.error(e));
