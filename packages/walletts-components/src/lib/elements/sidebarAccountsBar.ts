import { div, ul, VNode } from '@cycle/dom';
import isolate from '@cycle/isolate';
import * as CSS from 'csstips';
import { makeCollection, StateSource } from 'cycle-onionify';
import { style } from 'typestyle';
import xs, { Stream } from 'xstream';
import { BaseSinks, BaseSources } from '../..';
import { AccountsIcon } from '../collections';
import { SidebarItemProps } from '../collections/accountsIcon';

export interface State {
  readonly items: ReadonlyArray<SidebarItemProps>;
}
const defaultState: State = {
  items: [
    {
      name: 'hoge',
      icon: 'fuga'
    }
  ]
};

export type Reducer = (prev?: State) => State;
const initReducer$: Stream<Reducer> = xs.of(
  prev => (prev ? prev : defaultState)
);
export interface Sources extends BaseSources {
  readonly onion: StateSource<State>;
}
export interface Sinks extends BaseSinks {
  readonly onion: Stream<Reducer>;
}

const Items = makeCollection({
  item: AccountsIcon,
  itemKey: (_, index) => String(index),
  itemScope: key => key,
  collectSinks: instances => ({
    DOM: instances
      .pickCombine('DOM')
      // tslint:disable-next-line
      .debug(x => console.log(`result of pick combine is ${x}`))
      .map(d => ul(d)),
    router: instances.pickMerge('router')
  })
});

export function SidebarAccountsBar(sources: Sources): Sinks {
  const itemsSource = {
    ...sources,
    props: xs.of({ id: '', mainComponentPath: '' })
  };

  const itemsSink = isolate(Items, 'items')(itemsSource);
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
