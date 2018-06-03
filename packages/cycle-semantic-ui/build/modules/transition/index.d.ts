import { Stream } from "xstream";
import { VNode, DOMSource } from "@cycle/dom";
import { ComponentSinks } from "../../types";
import { Animation, AnimationDirection, Direction } from "../../enums";
export declare namespace Transition {
    interface Transition {
        animation: Animation | string;
        direction?: Direction | string;
        animationDirection?: AnimationDirection | string;
    }
    interface TransitionSources {
        DOM: DOMSource;
        target$: Stream<VNode>;
        transition$: Stream<Transition>;
    }
    function run(sources: TransitionSources, scope?: string): ComponentSinks;
    function render(target: VNode, args?: Transition): VNode;
}
