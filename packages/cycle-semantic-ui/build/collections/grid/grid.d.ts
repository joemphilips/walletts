import { VNode } from "@cycle/dom";
import { ComponentSources, ComponentSinks, StyleAndContentArgs, ContentObj, DOMContent } from "../../types";
import { VerticalAlignment, TextAlignment } from "../../enums";
export declare namespace Grid {
    interface Props {
        width: number;
        equalWidth: boolean;
        divided: boolean;
        verticallyDivided: boolean;
        container: boolean;
        celled: boolean;
        intCelled: boolean;
        padded: boolean;
        verticallyPadded: boolean;
        horizontallyPadded: boolean;
        relaxed: boolean;
        veryRelaxed: boolean;
        centered: boolean;
        stackable: boolean;
        doubling: boolean;
        reversedMobile: boolean;
        reversedTablet: boolean;
        reversedComputer: boolean;
        reversedLargescreen: boolean;
        vertReversedMobile: boolean;
        vertReversedTablet: boolean;
        vertReversedComputer: boolean;
        vertReversedLargescreen: boolean;
        mobileOnly: boolean;
        tabletOnly: boolean;
        computerOnly: boolean;
        largescreenOnly: boolean;
        alignment: VerticalAlignment | string;
        textAlignment: TextAlignment | string;
    }
    type GridArgs = StyleAndContentArgs<Props, DOMContent, ContentObj<DOMContent>>;
    type GridSources = ComponentSources<Props, DOMContent, ContentObj<DOMContent>>;
    function render(arg1?: Partial<Props> | DOMContent | GridArgs, arg2?: DOMContent): VNode;
    function run(sources: GridSources, scope?: string): ComponentSinks;
    function from(node: VNode, props?: Partial<Props>): VNode;
    function grid(args: GridArgs): VNode;
    function getClassname(props: Partial<Props>): string;
}
