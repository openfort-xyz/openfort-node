export interface GetTransactionIntentRequest {
  id: string
  expand?: Array<'policy' | 'player' | 'account'>
}
