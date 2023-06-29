import {SortOrder} from "../generated/model/sortOrder";

export interface ListTransactionIntentsRequest {
    expand?: string[];
    limit?: number;
    project?: string;
    filter?: string;
    order?: SortOrder;
    skip?: number;
}
