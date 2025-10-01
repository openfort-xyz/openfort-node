export class ValidationError extends Error {
  public constructor(
    message: string,
    public readonly details?: string,
  ) {
    super(message)
  }
}
