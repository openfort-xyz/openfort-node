import { ApiException } from '../generated'
import { ValidationError } from '../models/validationError'
import type { Observable } from './observable'
import type { Observer } from './observer'

function parseAndPrepareHttpError<T>(error: T): Error | T {
  if (error instanceof ApiException) {
    const bareError = error?.body?.error ?? error.body ?? error.message

    if (bareError?.details) {
      return new ValidationError(bareError.message, bareError.details)
    }
    if (bareError?.message) {
      return new Error(bareError.message)
    }
  }

  return error
}

function processError(
  error: unknown,
  observers: Observer[] | undefined,
  methodName: string,
): unknown {
  const parsedError = parseAndPrepareHttpError(error)
  if (observers?.length) {
    Promise.all(
      observers.map((observer) =>
        observer.onError?.({
          message: (parsedError as Error)?.message,
          methodName,
        }),
      ),
    )
    if (parsedError instanceof ValidationError) {
      Promise.all(
        observers.map((observer) =>
          observer.onValidationError?.({ ...parsedError, methodName }),
        ),
      )
    }
  }
  return parsedError
}

export function httpErrorHandler(target: Function) {
  const descriptors = Object.getOwnPropertyDescriptors(target.prototype)
  for (const [propertyName, descriptor] of Object.entries(descriptors)) {
    const isMethod = descriptor.value instanceof Function
    if (!isMethod) continue

    const targetMethod = descriptor.value
    descriptor.value = function (...args) {
      try {
        const result = targetMethod.apply(this, args)
        if (result instanceof Promise) {
          return result.catch((error) => {
            throw processError(
              error,
              (this as Observable).observers,
              `${target.name}.${propertyName}`,
            )
          })
        }
        return result
      } catch (error) {
        throw processError(
          error,
          (this as Observable).observers,
          `${target.name}.${propertyName}`,
        )
      }
    }

    Object.defineProperty(target.prototype, propertyName, descriptor)
  }
}
