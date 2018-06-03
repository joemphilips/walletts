import { VNode } from "@cycle/dom";
import { DOMContent, StyleAndContentArgs, ContentObj, ComponentSources, ComponentSinks } from "../../types";
export declare namespace Divider {
    interface Props {
        horizontal: boolean;
        vertical: boolean;
        inverted: boolean;
        fitted: boolean;
        hidden: boolean;
        section: boolean;
        clearing: boolean;
        header: boolean;
    }
    type DividerArgs = StyleAndContentArgs<Props, DOMContent, ContentObj<DOMContent>>;
    type DividerSources = ComponentSources<Props, DOMContent, ContentObj<DOMContent>>;
    function run(sources: DividerSources, scope?: string): ComponentSinks;
    function render(arg1?: DividerArgs | Partial<Props> | DOMContent, arg2?: DOMContent): VNode;
    function from(node: VNode, props?: Partial<Props>): VNode;
}
