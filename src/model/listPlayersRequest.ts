import { SortOrder } from "../generated/model/sortOrder";

export interface ListPlayersRequest {
    expand?: string[];
    limit?: number;
    filter?: string;
    order?: SortOrder;
    skip?: number;
}
