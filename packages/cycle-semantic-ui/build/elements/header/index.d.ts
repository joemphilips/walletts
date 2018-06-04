import { VNode } from "@cycle/dom";
import { DOMContent, StyleAndContentArgs, ComponentSources, ComponentSinks } from "../../types";
import { Size, Attachment, Float, TextAlignment, Color } from "../../enums";
export declare namespace Header {
    interface Props {
        icon: boolean;
        divider: boolean;
        dividing: boolean;
        block: boolean;
        disabled: boolean;
        inverted: boolean;
        attachment: Attachment | string;
        float: Float | string;
        textAlignment: TextAlignment | string;
        size: Size | string;
        color: Color | string;
    }
    interface ContentObj {
        main: DOMContent;
        subtext: DOMContent;
        icon: DOMContent;
    }
    type HeaderArgs = StyleAndContentArgs<Props, DOMContent, ContentObj>;
    type HeaderSources = ComponentSources<Props, DOMContent, ContentObj>;
    function run(sources: HeaderSources, scope?: string): ComponentSinks;
    function render(arg1?: HeaderArgs | Partial<Props> | DOMContent, arg2?: DOMContent): VNode;
    function from(node: VNode, props?: Partial<Props>): VNode;
}
