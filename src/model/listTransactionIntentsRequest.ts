import { BaseExpandableListRequest } from "./baseListRequest";

export type ListTransactionIntentsRequest = BaseExpandableListRequest<
    ListTransactionIntentsFilter,
    "nextAction" | "policy" | "player" | "account"
>;

interface ListTransactionIntentsFilter {
    accountId?: string;
    chainId?: number;
    playerId?: string;
    policyId?: string;
}
