import { VNode } from "@cycle/dom";
import { ComponentSources, ComponentSinks, StyleAndContentArgs, ContentObj, DOMContent } from "../../types";
import { VerticalAlignment, TextAlignment, Size, Float } from "../../enums";
export declare namespace Column {
    interface Props {
        stretched: true;
        width: number;
        mobile: number;
        tablet: number;
        computer: number;
        largescreen: number;
        mobileOnly: boolean;
        tabletOnly: boolean;
        computerOnly: boolean;
        largescreenOnly: boolean;
        size: Size | string;
        alignment: VerticalAlignment | string;
        textAlignment: TextAlignment | string;
        float: Float | string;
    }
    type ColumnArgs = StyleAndContentArgs<Props, DOMContent, ContentObj<DOMContent>>;
    type ColumnSources = ComponentSources<Props, DOMContent, ContentObj<DOMContent>>;
    function render(arg1?: Partial<Props> | DOMContent | ColumnArgs, arg2?: DOMContent): VNode;
    function run(sources: ColumnSources, scope?: string): ComponentSinks;
    function from(node: VNode, props?: Partial<Props>): VNode;
}
