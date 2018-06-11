/**
 * Define `Social` Domain entities.
 */
import { CommunityID, UserID } from './identity';

export interface User {
  readonly kind: 'User';
  readonly id: UserID;
  readonly name: string;
  readonly knownAddresses: ReadonlyArray<string>;
  readonly nextAddressToPay: string;
}

export interface Community {
  readonly kind: 'community';
  readonly id: CommunityID;
  readonly name: string;
  readonly knownAddresses: ReadonlyArray<string>;
  readonly nextAddressToPay: string;
}

/* tslint:disable-next-line */
export interface PublicDomain {
  readonly kind: 'publicDomain';
  readonly knownAddresses: ReadonlyArray<string>;
  readonly nextAddressToPay: string;
}
export function isUser(entity: Entity): entity is User {
  return entity.kind === 'User';
}

export function iSCommunity(entity: Entity): entity is Community {
  return entity.kind === 'community';
}

export function PublicDomain(entity: Entity): entity is PublicDomain {
  return entity.kind === 'publicDomain';
}

export type Entity = User | Community | PublicDomain;
