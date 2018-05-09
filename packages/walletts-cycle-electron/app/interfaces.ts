import { Stream } from "xstream";
import { DOMSource, VNode } from "@cycle/dom";
import { StorageSource, StorageRequest } from "@cycle/storage";
import { HTTPSource, RequestOptions } from "@cycle/http";
import { TimeSource } from "@cycle/time";
import { RouterSource, HistoryAction } from "cyclic-router";

export type Component<So extends BaseSources, Si extends BaseSinks> = (
  s: So
) => Si;

export interface BaseSources {
  readonly DOM: DOMSource;
  readonly HTTP: HTTPSource;
  readonly time: TimeSource;
  readonly router: RouterSource;
  readonly storage: StorageSource;
}

export interface BaseSinks {
  readonly DOM?: Stream<VNode>;
  readonly HTTP?: Stream<RequestOptions>;
  readonly router?: Stream<HistoryAction | string>;
  readonly storage?: Stream<StorageRequest>;
  readonly speech?: Stream<string>;
}
