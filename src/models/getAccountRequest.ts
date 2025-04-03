import { AccountResponseExpandable } from "../generated";

export interface GetAccountRequest {
    id: string;
    expand?: AccountResponseExpandable[];
}
