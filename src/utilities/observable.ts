import type { Observer } from './observer'

export interface Observable {
  subscribe(observer: Observer): void
  get observers(): Observer[]
}
