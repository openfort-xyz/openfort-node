import { BaseExpandableListRequest } from "./baseListRequest";

export type ListPoliciesRequest = BaseExpandableListRequest<ListPoliciesFilter, "transactionIntents" | "policyRules">;

interface ListPoliciesFilter {
    name?: string;
    deleted?: boolean;
    chainId?: number;
}
