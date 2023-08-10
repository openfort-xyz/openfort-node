import { PlayerInventoryListQueries as ApiPlayerInventoryListQueries } from "../generated/model/playerInventoryListQueries";

export interface PlayerInventoryListQueries extends ApiPlayerInventoryListQueries {
    playerId: string;
}
