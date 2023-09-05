import { TransactionIntent } from ".";

export interface WebHookEvent {
    data: TransactionIntent;
    date: number;
}
