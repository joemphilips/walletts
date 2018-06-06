import { Stream } from "xstream";
import { RequestOptions, HTTPSource } from "@cycle/http";

export interface BaseSources {
  readonly ACTION: Stream<any>;
  readonly HTTP: HTTPSource;
}

export interface BaseSinks {
  readonly ACTION?: Stream<any>;
  readonly HTTP?: Stream<RequestOptions>;
}
