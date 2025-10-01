import type { TransactionIntent } from '.'

export interface WebHookEvent {
  data: TransactionIntent
  date: number
  type: WebhookEventType
}

export enum WebhookEventType {
  TRANSACTION_INTENT_SUCCEEDED = 'transaction_intent.succeeded',
  TRANSACTION_INTENT_FAILED = 'transaction_intent.failed',
}
