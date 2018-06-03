import { DOMElement } from 'react';
import { AccountID, Entity, EntityID, Satoshi } from 'walletts-core';

export interface AccountUIData {
  readonly id: AccountID;
  readonly webview: null | DOMElement<any, any>;
  readonly member: Record<EntityID, Entity>;
  readonly owners: Record<EntityID, Entity>;
  readonly balance: Satoshi;
  readonly isActive: boolean;
  readonly iconUrl?: string;
}
