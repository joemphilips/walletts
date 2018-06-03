import { VNode } from "@cycle/dom";
import { ComponentSources, ComponentSinks, StyleAndContentArgs, ContentObj, DOMContent } from "../../types";
import { TextAlignment, VerticalAlignment } from "../../enums";
export declare namespace Row {
    interface Props {
        width: number;
        doubling: boolean;
        centered: boolean;
        stretched: boolean;
        mobileOnly: boolean;
        tabletOnly: boolean;
        computerOnly: boolean;
        largescreenOnly: boolean;
        equalWidth: boolean;
        alignment: VerticalAlignment | string;
        textAlignment: TextAlignment | string;
    }
    type RowArgs = StyleAndContentArgs<Props, DOMContent, ContentObj<DOMContent>>;
    type RowSources = ComponentSources<Props, DOMContent, ContentObj<DOMContent>>;
    function render(arg1?: Partial<Props> | DOMContent | RowArgs, arg2?: DOMContent): VNode;
    function run(sources: RowSources, scope?: string): ComponentSinks;
    function from(node: VNode, props?: Partial<Props>): VNode;
    function row(args: any): VNode;
}
