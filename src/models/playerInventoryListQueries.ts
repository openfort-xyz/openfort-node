import { PlayerInventoryListQueries as ApiPlayerInventoryListQueries } from "../generated";

export interface PlayerInventoryListQueries extends ApiPlayerInventoryListQueries {
    playerId: string;
}
