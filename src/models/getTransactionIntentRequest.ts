export interface GetTransactionIntentRequest {
    id: string;
    expand: Array<"nextAction" | "policy" | "player" | "account">;
}
