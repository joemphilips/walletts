import { DOMElement } from 'react';
import { AccountID, Entity, EntityID, Satoshi } from 'walletts-core';

export type ChannelID = string;

export interface Channel {
  readonly id: ChannelID;
  readonly name: string;
  readonly url: string;
  readonly iconPng: string;
  readonly iconSVG: string;
  readonly isActive: boolean;
}

export interface AccountUIData {
  readonly id: AccountID;
  readonly webview: null | DOMElement<any, any>;
  readonly member: Record<EntityID, Entity>;
  readonly owners: Record<EntityID, Entity>;
  readonly balance: Satoshi;
  readonly isActive: boolean;
  readonly iconUrl?: string;
  readonly integratedChannels: ReadonlyArray<ChannelID>;
}
