import { HttpError } from "../generated/api/apis";

function parseAndPrepareHttpError<T>(error: T): Error | T {
	if (error instanceof HttpError) {
		const bareError = error.body?.error ?? error.body;

		if (bareError?.details) {
			throw new ValidationError(bareError.message, bareError.details);
		}
		if (bareError?.message) {
			throw new Error(bareError.message);
		}
	}

	throw error;
}

export function httpErrorHandler() {
	return <T, Args extends T[], R>(
		_target: object,
		_propertyKey: string,
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
