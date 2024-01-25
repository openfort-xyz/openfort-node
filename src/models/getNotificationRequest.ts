export interface GetNotificationRequest {
    id: string;
    expand?: Array<"subscriptions" | "triggers">;
}
