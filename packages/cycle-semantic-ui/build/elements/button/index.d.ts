import { VNode } from "@cycle/dom";
import { DOMContent, StyleAndContentArgs, ComponentSinks, ComponentSources } from "../../types";
import { Color, Size, Attachment, Float } from "../../enums";
export declare namespace Button {
    interface Props {
        animated: boolean;
        verticalAnimated: boolean;
        labeled: boolean;
        rightlabeled: boolean;
        icon: boolean;
        basic: boolean;
        inverted: boolean;
        active: boolean;
        disabled: boolean;
        loading: boolean;
        compact: boolean;
        circular: boolean;
        fluid: boolean;
        href: string;
        attachment: Attachment | string;
        size: Size | string;
        float: Float | string;
        color: Color | string;
    }
    interface ContentObj {
        main: DOMContent;
        hidden: DOMContent;
    }
    type ButtonArgs = StyleAndContentArgs<Props, DOMContent, ContentObj>;
    type ButtonSources = ComponentSources<Props, DOMContent, ContentObj>;
    function render(arg1?: ButtonArgs | Partial<Props> | DOMContent, arg2?: DOMContent): VNode;
    function run(sources: ButtonSources, scope?: string): ComponentSinks;
    function from(node: VNode, props?: Partial<Props>): VNode;
}
