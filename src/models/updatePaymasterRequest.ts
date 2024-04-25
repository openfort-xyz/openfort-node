import { CreatePaymasterRequest } from "../generated";

export interface UpdatePaymasterRequest extends CreatePaymasterRequest {
    id: string;
}
