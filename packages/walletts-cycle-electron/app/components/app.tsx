import { driverNames } from "../drivers";
import xs, { Stream } from "xstream";
import { StateSource } from "cycle-onionify";
import isolate from "@cycle/isolate";
import { extractSinks } from "cyclejs-utils";
import { BaseSources, BaseSinks } from "../interfaces";
import { RouteValue, routes } from "../routes";
import { State as CounterState } from "./counter";
import { State as SpeakerState } from "./speaker";
import { VNode } from "@cycle/dom";

export interface Sources extends BaseSources {
  readonly onion: StateSource<State>;
}
export interface Sinks extends BaseSinks {
  readonly onion?: Stream<Reducer>;
  readonly DOM: Stream<VNode>;
}

export type Reducer = (prev?: State) => State | undefined;

export interface State {
  readonly counter?: CounterState;
  readonly speaker?: SpeakerState;
}
export const defaultState: State = {
  counter: { count: 5 },
  speaker: undefined // use default state of component
};

const initReducer$ = xs.of<Reducer>(
  prevState => (prevState === undefined ? defaultState : prevState)
);

export function App(sources: Sources): Sinks {
  const match$ = sources.router.define(routes);

  const componentSinks$ = match$.map(
    ({
      path,
      value
    }: {
      readonly path: string;
      readonly value: RouteValue;
    }) => {
      const { component, scope } = value;
      return isolate(component, scope)({
        ...sources,
        router: sources.router.path(path)
      });
    }
  );

  const currentSinks = extractSinks(componentSinks$, driverNames);
  return {
    ...currentSinks,
    onion: xs.merge(initReducer$, currentSinks.onion) as Stream<Reducer>
  };
}
