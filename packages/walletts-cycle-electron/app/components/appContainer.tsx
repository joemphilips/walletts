import {
  App,
  State as AppState,
  Sources as AppSources,
  Sinks as AppSinks
} from "./app";
import { Sidebar } from "./sidebar";
import xs, { Stream } from "xstream";
import { VNode } from "@cycle/dom";
import { IconType } from "cycle-semantic-ui";

export interface Sources extends AppSources {}

export interface Sinks extends AppSinks {}

export interface State extends AppState {
  readonly sidebarContents: Sidebar.SideBarContents;
}
const defaultState: State = {
  sidebarContents: [
    {
      name: "default sidebar content",
      icon: IconType.Bitcoin
    }
  ]
};

/**
 * main entry point which wraps app by sidebar (and possibly other things like header, footer)
 * @param sources
 */
export function AppContainer(sources: Sources): Sinks {
  const childSink = App(sources);
  const state = makeState();
  const sidebarSink = Sidebar.render(sources, state.sidebarContents);
  const vdom$ = view(sources, childSink.DOM, sidebarSink.DOM);

  return {
    ...childSink,
    DOM: vdom$
  };
}

export function view(
  sources: Sources,
  childDom$: Stream<VNode>,
  sidebarDom$: Stream<VNode>
): Stream<VNode> {
  const vdom$ = xs.combine(sidebarDom$, childDom$).map(([sidebar, main]) => {
    // TODO: return view
    return div();
  });

  return vdom$;
}

/**
 * TODO: initialize dynamically
 */
export function makeState() {
  return defaultState;
}
