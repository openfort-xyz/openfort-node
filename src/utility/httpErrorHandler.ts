import {HttpError} from "../generated/api/apis";
import {Observable} from "./observable";
import {Observer} from "./observer";
import {ValidationError} from "../model/validationError";

function parseAndPrepareHttpError<T>(error: T): Error | T {
    if (error instanceof HttpError) {
        const bareError = error.body?.error ?? error.body;

        if (bareError?.details) {
            return new ValidationError(bareError.message, bareError.details);
        }
        if (bareError?.message) {
            return new Error(bareError.message);
        }
    }

    return error;
}

function processError(error: unknown, observers: Observer[] | undefined, methodName: string): unknown {
    const parsedError = parseAndPrepareHttpError(error);
    if (observers?.length) {
        Promise.all(observers.map((observer) => observer.onError?.(error)));
        if (parsedError instanceof ValidationError) {
            Promise.all(observers.map((observer) => observer.onValidationError?.({...parsedError, methodName})));
        }
    }
    return parsedError;
}

// eslint-disable-next-line @typescript-eslint/ban-types
export function httpErrorHandler(target: Function) {
    const descriptors = Object.getOwnPropertyDescriptors(target.prototype);
    for (const [propertyName, descriptor] of Object.entries(descriptors)) {
        const isMethod = descriptor.value instanceof Function;
        if (!isMethod) continue;

        const targetMethod = descriptor.value;
        descriptor.value = function (...args) {
            try {
                const result = targetMethod.apply(this, args);
                if (result instanceof Promise) {
                    return result.catch((error) => {
                        throw processError(error, (this as Observable).observers, propertyName);
                    });
                }
                return result;
            } catch (error) {
                throw processError(error, (this as Observable).observers, propertyName);
            }
        };

        Object.defineProperty(target.prototype, propertyName, descriptor);
    }
}
