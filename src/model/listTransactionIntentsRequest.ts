import { SortOrder } from "../generated/model/sortOrder";

export interface ListTransactionIntentsRequest {
    expand?: Array<"nextAction" | "policy" | "player" | "account">;
    limit?: number;
    filter?: string;
    order?: SortOrder;
    skip?: number;
}
