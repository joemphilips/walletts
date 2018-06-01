/**
 * Define `Social` Domain entities.
 */

export interface Individual {
  readonly kind: 'Individual';
  readonly name: string;
  readonly knownAddresses: ReadonlyArray<string>;
  readonly nextAddressToPay: string | null;
}

export interface Community {
  readonly kind: 'community';
  readonly name: string;
  readonly knownAddresses: ReadonlyArray<string>;
  readonly nextAddressToPay: string;
}

export enum CommunityStatus {
  Draft = 0,
  Open,
  Failed,
  Active,
  Abandoned,
  Succeeded,
  NotCommunity
}


export interface PublicDomain {
  readonly kind: 'publicDomain';
  readonly knownAddresses: ReadonlyArray<string>;
  readonly nextAddressToPay: string;
}

export function isIndividual(entity: OuterEntity): entity is Individual {
  return entity.kind === 'Individual';
}

export function iSCommunity(entity: OuterEntity): entity is Community {
  return entity.kind === 'community';
}

export function PublicDomain(entity: OuterEntity): entity is OuterEntity {
  return entity.kind === 'publicDomain';
}

export type OuterEntity = Individual | Community | PublicDomain;
