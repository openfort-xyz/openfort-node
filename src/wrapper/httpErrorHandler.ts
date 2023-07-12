import {HttpError} from "../generated/api/apis";

function parseAndPrepareHttpError<T>(error: T): Error | T {
    if (error instanceof HttpError) {
        if (error.body?.error?.message) {
            throw new Error(error.body?.error?.message);
        }
        if (error.body?.message) {
            throw new ValidationError(error.body?.message, error.body?.details);
        }
    }

    throw error;
}

export function httpErrorHandler() {
    return <T, Args extends T[], R>(
        target: object,
        propertyKey: string,
        descriptor: TypedPropertyDescriptor<(...args: Args) => Promise<R>>,
    ) => {
        const targetMethod = descriptor.value;
        if (targetMethod) {
            descriptor.value = function (...args: Args) {
                try {
                    const result = targetMethod.apply(this, args);
                    if (result instanceof Promise) {
                        return result.catch((error) => {
                            throw parseAndPrepareHttpError(error);
                        });
                    }
                    return result;
                } catch (error) {
                    throw parseAndPrepareHttpError(error);
                }
            };
        }
    };
}

export class ValidationError extends Error {
    public constructor(message: string, public readonly details?: string) {
        super(message);
    }
}
