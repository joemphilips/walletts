import { div, ul, VNode } from '@cycle/dom';
import isolate from '@cycle/isolate';
import * as CSS from 'csstips';
import { makeCollection, StateSource } from 'cycle-onionify';
import { style } from 'typestyle';
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
    itemKey: (_, index) => String(index),
    collectSinks: instances => ({
      DOM: instances.pickCombine('DOM').map(d => ul(d))
    })
  });

  const itemsSource = Object.assign({}, sources, {
    props: xs.of({ id: '', mainComponentPath: '' })
  });

  const itemsSink = isolate(Items)(itemsSource);
  const reducer$: Stream<Reducer> = xs.merge(initReducer$);
  const vdom$ = view(itemsSink.DOM);
  return {
    DOM: vdom$,
    onion: reducer$
  };
}

const tabbarStyle = style(CSS.center);
function view(childvdom: Stream<VNode>): Stream<VNode> {
  return childvdom.map(c => div(`.${tabbarStyle}`, c));
}
