import { AccountID, Entity, Satoshi } from ".";

export interface Account {
  readonly id: AccountID
  readonly balance: Satoshi
  readonly owners: ReadonlyArray<Entity>
}