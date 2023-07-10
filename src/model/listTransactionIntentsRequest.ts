import {SortOrder} from "../generated/model/sortOrder";

export interface ListTransactionIntentsRequest {
    expand?: string[];
    limit?: number;
    filter?: string;
    order?: SortOrder;
    skip?: number;
}
