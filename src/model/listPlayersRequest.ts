import { SortOrder } from "../generated/model/sortOrder";

export interface ListPlayersRequest {
	expand?: string[];
	limit?: number;
	filter?: ListPlayersFilter;
	order?: SortOrder;
	skip?: number;
}

export interface ListPlayersFilter {
	name?: string;
}
