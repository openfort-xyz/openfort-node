import { ValidationError } from "../model/validationError";

/**
 * Interface introduce the ability to observe the messages from the observable class
 */
export interface Observer {
    /**
     * Triggers when any error is happening on sending request to the server.
     * @param error Error object with the all details of the request
     */
    onError?(error: ErrorMessage): Promise<void> | void;
    /**
     * Triggers when any validation request error is occuring
     * @param error Contains information about calling method and happened error
     */
    onValidationError?(error: ValidationErrorMessage): Promise<void> | void;
}

export class ValidationErrorMessage extends ValidationError {
    public methodName?: string;
}

export interface ErrorMessage {
    methodName: string;
    message: string;
}
