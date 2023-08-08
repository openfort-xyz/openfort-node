import { StartRecoveryRequest as ApiStartRecoveryRequest } from "../generated/model/startRecoveryRequest";

export interface StartRecoveryRequest extends ApiStartRecoveryRequest {
    accountId: string;
}
