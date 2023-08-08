import { CompleteRecoveryRequest as ApiCompleteRecoveryRequest } from "../generated/model/completeRecoveryRequest";

export interface CompleteRecoveryRequest extends ApiCompleteRecoveryRequest {
    accountId: string;
}
