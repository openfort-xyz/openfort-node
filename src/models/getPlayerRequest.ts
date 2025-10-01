export interface GetPlayerRequest {
  id: string
  expand?: Array<'transactionIntents' | 'accounts'>
}
