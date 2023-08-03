import { BaseListRequest } from "./baseListRequest";

export type ListContractsRequest = BaseListRequest<ListContractsFilter>;

interface ListContractsFilter {
    name?: string;
    deleted?: boolean;
    chainId?: number;
    address?: string;
}
