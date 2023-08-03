import { BaseExpandableListRequest } from "./baseListRequest";

export interface ListSessionsRequest extends BaseExpandableListRequest<ListSessionsFilter, "transactionIntents"> {
    playerId: string;
}

interface ListSessionsFilter {
    address?: string;
}
