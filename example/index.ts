import Openfort from "@openfort/openfort-node";

async function example() {
  const openfort = new Openfort("sk_test_44b87423-9f53-5cf9-ae18-82b3e8bae139", "http://localhost:3000");
  const players = await openfort.players.list();
  for (const player of players.data) {
    console.log(player.id);
  }

  const newPlayer = await openfort.players.create({name: "Test"});

  const player_id = newPlayer.id;
  const policy = "pol_55814cce-9f5b-463a-a3ac-e20bde85903b";
  const valid_until = 281474976710655;
  const valid_after = 0;
  const chain_id = Number(process.env.NEXTAUTH_OPENFORT_CHAINID!);
  const address = "0x9590Ed0C18190a310f4e93CAccc4CC17270bED40";

  await openfort.players.createSession(
      {
        id: player_id,
        address,
        chain_id,
        valid_until,
        valid_after,
        policy,
      }
  );

  const transactionIntents = await openfort.transactionIntents.list();
  for (const intent of transactionIntents.data) {
    console.log(`Intent ${intent.id} by ${intent.player}`);
  }
}

example().catch((e) => console.error(e));
