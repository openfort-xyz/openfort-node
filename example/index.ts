import Openfort, {
    CreatePlayerRequest,
    CreatePlayerSessionRequest,
    PlayerListResponse,
    PolicySchema,
    SponsorSchema,
} from "@openfort/openfort-node";
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
    const createPlayerRequest: CreatePlayerRequest = {
        name: "Test 1234",
    };
    const newPlayer = await openfort.players.create(createPlayerRequest);
    const chainId = Number(getEnvVariable("OPENFORT_CHAINID"));

    const players: PlayerListResponse = await openfort.players.list({ name: "Test 1234" });
    for (const player of players.data) {
        console.info(player.id);
    }

    const account = await openfort.accounts.create({
        player: newPlayer.id,
        chainId,
    });
    console.dir(account);

    const policy = await openfort.policies.create({
        name: "Test policy",
        chainId,
        strategy: {
            sponsorSchema: SponsorSchema.PayForUser,
        },
    });
    console.dir(policy);

    const policyRule = await openfort.policyRules.create({
        type: PolicySchema.AccountFunctions,
        policy: policy.id,
        functionName: null,
        contract: null,
    });
    console.dir(policyRule);

    const contract = await openfort.contracts.create({
        name: "Test contract",
        chainId,
        address: "0x38090d1636069c0ff1af6bc1737fb996b7f63ac0",
    });
    console.dir(contract);

    const createSessionRequest: CreatePlayerSessionRequest = {
        playerId: newPlayer.id,
        address: "0x9590Ed0C18190a310f4e93CAccc4CC17270bED40",
        chainId,
        validUntil: 281474976710655,
        validAfter: 0,
        policy: policy.id,
    };
    await openfort.players.createSession(createSessionRequest);

    const transactionIntents = await openfort.transactionIntents.list({ playerId: [newPlayer.id] });
    for (const intent of transactionIntents.data) {
        console.info(`Intent ${intent.id} by ${intent.player?.id}`);
    }
}

dotenv.config();
example().catch((e) => console.error(e));
