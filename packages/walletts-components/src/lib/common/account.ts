import { DOMElement } from 'react';
import { Entity, EntityID, Satoshi } from 'walletts-core';

export interface AccountUIData {
  readonly webview: null | DOMElement<any, any>;
  readonly member: Record<EntityID, Entity>;
  readonly owners: Record<EntityID, Entity>;
  readonly balance: Satoshi;
  readonly isActive: boolean;
  readonly iconUrl?: string;
}
