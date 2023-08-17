import { StartRecoveryRequest as ApiStartRecoveryRequest } from "../generated";

export interface StartRecoveryRequest extends ApiStartRecoveryRequest {
    accountId: string;
}
