import { Size, Attachment, Color } from "../../enums";
import { VNode } from "@cycle/dom";
import { DOMContent, StyleAndContentArgs, ComponentSources, ComponentSinks } from "../../types";
export declare namespace Label {
    interface Props {
        circular: boolean;
        empty: boolean;
        pointing: boolean;
        leftPointing: boolean;
        rightPointing: boolean;
        basic: boolean;
        leftCorner: boolean;
        rightCorner: boolean;
        tag: boolean;
        ribbon: boolean;
        rightRibbon: boolean;
        horizontal: boolean;
        floating: boolean;
        attachment: Attachment | string;
        size: Size | string;
        color: Color | string;
    }
    interface ContentObj {
        main: DOMContent;
        detail: DOMContent;
    }
    type LabelArgs = StyleAndContentArgs<Props, DOMContent, ContentObj>;
    type LabelSources = ComponentSources<Props, DOMContent, ContentObj>;
    function run(sources: LabelSources, scope?: string): ComponentSinks;
    function render(arg1?: LabelArgs | Partial<Props> | DOMContent, arg2?: DOMContent): VNode;
    function from(node: VNode, props?: Partial<Props>): VNode;
}
