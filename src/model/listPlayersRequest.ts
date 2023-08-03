import { BaseExpandableListRequest } from "./baseListRequest";

export type ListPlayersRequest = BaseExpandableListRequest<ListPlayersFilter, "transactionIntents" | "accounts">;

export interface ListPlayersFilter {
    name?: string;
}
