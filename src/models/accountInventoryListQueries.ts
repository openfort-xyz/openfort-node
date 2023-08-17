import { AccountInventoryListQueries as ApiAccountInventoryListQueries } from "../generated";

export interface AccountInventoryListQueries extends ApiAccountInventoryListQueries {
    accountId: string;
}
