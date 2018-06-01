import { DOMSource, VNode } from '@cycle/dom';
import { HTTPSource, RequestOptions } from '@cycle/http';
import { StorageRequest, StorageSource } from '@cycle/storage';
import { TimeSource } from '@cycle/time';
import { HistoryAction, RouterSource } from 'cyclic-router';
import { Stream } from 'xstream';
import { ThemeConfig } from '..';

export interface BaseSources {
  readonly DOM: DOMSource;
  readonly HTTP: HTTPSource;
  readonly time: TimeSource;
  readonly router: RouterSource;
  readonly storage: StorageSource;
  readonly theme: ThemeConfig;
}

export interface BaseSinks {
  readonly DOM?: Stream<VNode>;
  readonly HTTP?: Stream<RequestOptions>;
  readonly router?: Stream<HistoryAction | string>;
  readonly storage?: Stream<StorageRequest>;
  readonly speech?: Stream<string>;
}

export type Component<So extends BaseSources, Si extends BaseSinks> = (
  s: So
) => Si;
