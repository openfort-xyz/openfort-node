import { AccountInventoryListQueries as ApiAccountInventoryListQueries } from "../generated/model/accountInventoryListQueries";

export interface AccountInventoryListQueries extends ApiAccountInventoryListQueries {
    accountId: string;
}
