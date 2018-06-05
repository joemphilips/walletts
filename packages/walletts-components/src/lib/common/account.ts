import { DOMElement } from 'react';
import { AccountID, EntityID, Satoshi } from 'walletts-core';
import { ChannelID } from './channel';

export interface AccountUIData {
  readonly id: AccountID;
  readonly webview: null | DOMElement<any, any>;
  readonly member: ReadonlyArray<EntityID>;
  readonly owners: ReadonlyArray<EntityID>;
  readonly balance: Satoshi;
  readonly isActive: boolean;
  readonly iconUrl?: string;
  readonly integratedChannels: ReadonlyArray<ChannelID>;
  readonly visibleChannel: ChannelID;
}
