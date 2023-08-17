import { SortOrder } from "../generated";

export interface BaseListRequest<TFilter> {
    limit?: number;
    skip?: number;
    order?: SortOrder;
    filter?: TFilter;
}

export interface BaseExpandableListRequest<TFilter, TExpandable> extends BaseListRequest<TFilter> {
    expand?: TExpandable[];
}
