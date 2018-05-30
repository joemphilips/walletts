import { DOMElement } from 'react';
import { Account, Entity } from 'walletts-core';

export interface AccountUIData extends Account {
  readonly icon: string;
  readonly webview: null | DOMElement<any, any>;
  readonly member: ReadonlyArray<Entity>;
  readonly iconUrl?: string;
}
