import { div, VNode } from '@cycle/dom';
import { makeCollection, StateSource } from 'cycle-onionify';
import xs, { Stream } from 'xstream';
import { BaseSinks, BaseSources, SidebarItemProps } from '../..';
import { AccountsIcon } from '../collections';

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
  const Items = makeCollection({
    item: AccountsIcon,
    itemKey: (childState, index) => String(index),
    collectSinks: instances => ({ DOM: instances.pickCombine('DOM') })
  });
  const itemsSink = Items(sources);
  const reducer$: Stream<Reducer> = xs.merge(initReducer$);
  const vdom$ = view(sources.onion.state$);
  return {
    DOM: vdom$,
    onion: reducer$
  };
}

function view(state$: Stream<State>): Stream<VNode> {
  return state$.mapTo(div(''));
}
