import { Dropdown } from "./index";
import { EventSelector, } from "../../types";
import { Color, Size, Animation, Direction } from "../../enums";
import { Transition } from "../../modules/transition";
import { Menu } from "../../collections/menu";

import xs, { Stream, MemoryStream } from "xstream";
import dropRepeats from "xstream/extra/dropRepeats";
import debounce from "xstream/extra/debounce";
import { div, VNode } from "@cycle/dom";

export function getClassName(className: string, props: Partial<Dropdown.Props>): string {
  if (props.rightAligned) {
    className += " right";
  }
  if (props.selection) {
    className += " selection";
  }
  if (props.inline) {
    className += " inline";
  }
  if (props.floating) {
    className += " floating";
  }
  if (props.loading) {
    className += " loading";
  }
  if (props.disabled) {
    className += " disabled";
  }
  if (props.scrolling) {
    className += " scrolling";
  }
  if (props.compact) {
    className += " compact";
  }
  if (props.pointing) {
    className += " pointing";
  }
  if (typeof (props.size) !== "undefined") {
    className += Size.ToClassname(props.size);
  }
  if (typeof (props.color) !== "undefined") {
    className += Color.ToClassname(props.color);
  }
  return className + " dropdown";
}


export function createTransition$(evt: EventSelector, args): MemoryStream<Transition.Transition> {
  const itemClick$ = evt("click").filter(evt => evt.srcElement.classList.contains("item"));
  const dropdownClick$ = evt("click")
    .filter(evt =>
      !(evt.srcElement as HTMLElement).classList.contains("item") ||
      (evt.srcElement as HTMLElement).classList.contains("dropdown")
    )
    .mapTo(Direction.In);
  const mouseleave$ = xs.merge(evt("mouseleave").filter(
    evt => evt.srcElement.className.indexOf("icon") === -1 && (!(args && args.search) || typeof (document) === "undefined" || !document.activeElement.classList.contains("search"))
  ), evt("mouseenter"))
    .map(evt => (evt as MouseEvent).type === "mouseenter" ? Direction.In : Direction.Out)
    .compose(debounce(250))
    .filter(dir => dir === Direction.Out);

  const inputEnter$ = (evt("keypress") as Stream<KeyboardEvent>).map(evt => (evt.charCode === 13 || evt.charCode === 9) ? Direction.Out : Direction.In);


  return xs.merge(dropdownClick$, itemClick$.mapTo(Direction.Out), mouseleave$, inputEnter$)
    .startWith(Direction.Out)
    .map(dir => ({
      animation: Animation.Fade,
      direction: dir
    }))
    .compose(dropRepeats(
      (a, b) => a.direction === b.direction && a.animation === b.animation
    ))
    .drop(1)
    .startWith({ animation: Animation.None, direction: Direction.Out });
}

export function getText<V>(item: Partial<Dropdown.DropdownItem<V>>, props: Partial<Dropdown.Props>, stat?: boolean, filter?: string): VNode {
  if (typeof (stat) !== "undefined") {
    return div({ props: { className: "text" } }, props.default);
  }
  if (item === null || typeof (item) === "undefined") {
    return div({ props: { className: "default text" } }, props.default);
  }
  if (filter && filter.length > 0) {
    return div({ props: { className: "filtered text" } }, item.main);
  }
  return div({ props: { className: "text" } }, item.main);
}

export function isMenuItem(obj): obj is Partial<Menu.MenuItem> {
  return obj && obj.main;
}