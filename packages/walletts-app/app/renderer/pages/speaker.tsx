import xs, { Stream } from "xstream";
import sampleCombine from "xstream/extra/sampleCombine";
import { button, div, h2, textarea, VNode, DOMSource } from "@cycle/dom";
import { StateSource } from "cycle-onionify";

import { BaseSources, BaseSinks } from "../interfaces";
import { HistoryAction } from "cyclic-router";

// Types
export interface Sources extends BaseSources {
  readonly onion: StateSource<State>;
}
export interface Sinks extends BaseSinks {
  readonly onion: Stream<Reducer>;
}

// State
export interface State {
  readonly text: string;
}
export const defaultState: State = { text: "Edit me!" };
export type Reducer = (prev?: State) => State | undefined;

// Actions
const SPEECH = "speech";
const NAVIGATE = "navigate";
const UPDATE = "update";

interface SpeechAction {
  readonly type: typeof SPEECH;
}
interface NavigationAction {
  readonly type: typeof NAVIGATE;
}
interface UpdateAction {
  readonly type: typeof UPDATE;
  readonly reducer: Reducer;
}
type Action = SpeechAction | NavigationAction | UpdateAction;

export function Speaker({ DOM, onion }: Sources): Sinks {
  const action$: Stream<Action> = intent(DOM);

  return {
    DOM: view(onion.state$),
    speech: speech(action$, onion.state$),
    onion: onionFn(action$),
    router: router(action$) as Stream<HistoryAction>
  };
}

function router(action$: Stream<Action>): Stream<string> {
  return action$.filter(({ type }) => type === NAVIGATE).mapTo("/");
}

function speech(
  action$: Stream<Action>,
  state$: Stream<State>
): Stream<string> {
  return action$
    .filter(({ type }) => type === SPEECH)
    .compose(sampleCombine(state$))
    .map<string>(([_, s]) => s.text);
}

function intent(DOM: DOMSource): Stream<Action> {
  const updateText$: Stream<Action> = DOM.select("#text")
    .events("input")
    .map((ev: any) => ev.target.value)
    .map<Action>((value: string) => ({
      type: UPDATE,
      reducer: () => ({ text: value })
    }));

  const speech$: Stream<Action> = DOM.select('[data-action="speak"]')
    .events("click")
    .mapTo<Action>({ type: SPEECH });

  const navigation$: Stream<Action> = DOM.select('[data-action="navigate"]')
    .events("click")
    .mapTo<Action>({ type: NAVIGATE });

  return xs.merge(updateText$, speech$, navigation$);
}

function onionFn(action$: Stream<Action>): Stream<Reducer> {
  const init$ = xs.of<Reducer>(
    prevState => (prevState === undefined ? defaultState : prevState)
  );

  const update$: Stream<Reducer> = (action$ as Stream<UpdateAction>)
    .filter(({ type }) => type === UPDATE)
    .map<Reducer>((action: UpdateAction) => action.reducer);

  return xs.merge(init$, update$);
}

function view(state$: Stream<State>): Stream<VNode> {
  return state$.map(({ text }) =>
    div([
      h2("My Awesome Cycle.js app - Page 2"),
      textarea("", { props: { id: "text", rows: "3", value: text } }),
      button({ attrs: { "data-action": "speak" } }, "Speak to Me!"),
      button({ attrs: { "data-action": "navigate" } }, "Page1")
    ])
  );
}
