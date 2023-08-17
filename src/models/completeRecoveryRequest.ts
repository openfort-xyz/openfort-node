import { CompleteRecoveryRequest as ApiCompleteRecoveryRequest } from "../generated";

export interface CompleteRecoveryRequest extends ApiCompleteRecoveryRequest {
    accountId: string;
}
