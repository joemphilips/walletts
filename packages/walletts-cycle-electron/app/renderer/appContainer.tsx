import {
  App,
  State as AppState,
  Sources as AppSources,
  Sinks as AppSinks
} from "./app";
import { Sidebar } from "walletts-components";
import { Stream } from "xstream";
import { div, VNode } from "@cycle/dom";
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
  const sidebar = Sidebar.render(sources, state.sidebarContents);
  const vdom$ = view(sources, childSink.DOM, sidebar);

  return {
    ...childSink,
    DOM: vdom$
  };
}

export function view(
  sources: Sources,
  childDom$: Stream<VNode>,
  sidebarDom: VNode
): Stream<VNode> {
  const vdom$ = childDom$.map(main => {
    // TODO: return view
    return div("app-whole", [sidebarDom, main]);
  });

  return vdom$;
}

/**
 * TODO: initialize dynamically
 */
export function makeState() {
  return defaultState;
}