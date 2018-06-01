import { div, VNode } from '@cycle/dom';
import { StateSource } from 'cycle-onionify';
import xs, { Stream } from 'xstream';
import { BaseSinks, BaseSources, SidebarItemProps } from '../..';

export type State = ReadonlyArray<SidebarItemProps>;
export type Reducer = (prev?: State) => State;
const initReducer$: Stream<Reducer> = xs.of(prev => (prev ? prev : []));
export interface Sources extends BaseSources {
  readonly onion: StateSource<State>;
}
export interface Sinks extends BaseSinks {
  readonly onion: Stream<Reducer>;
}

export function SidebarAccountsBar(sources: Sources): Sinks {
  const vdom$ = view(sources.onion.state$);
  const reducer$: Stream<Reducer> = xs.merge(initReducer$);
  return {
    DOM: vdom$,
    onion: reducer$
  };
}

function view(state$: Stream<State>): Stream<VNode> {
  return state$.mapTo(div(''));
}
