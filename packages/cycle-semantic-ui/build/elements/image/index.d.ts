import { VNode } from "@cycle/dom";
import { StyleAndContentArgs, ComponentSources, ComponentSinks, ContentObj } from "../../types";
import { Size, VerticalAlignment, Float } from "../../enums";
export declare namespace Image {
    interface Props {
        href: string;
        hidden: boolean;
        disabled: boolean;
        avatar: boolean;
        bordered: boolean;
        spaced: boolean;
        circular: boolean;
        rounded: boolean;
        float: Float | string;
        size: Size | string;
        alignment: VerticalAlignment | string;
    }
    type ImageArgs = StyleAndContentArgs<Props, string, ContentObj<string>>;
    type ImageSources = ComponentSources<Props, string, ContentObj<string>>;
    function run(sources: ImageSources, scope?: string): ComponentSinks;
    function render(arg1?: ImageArgs | Partial<Props> | string, arg2?: string): VNode;
    function from(node: VNode, props?: Partial<Props>): VNode;
    function image(args: ImageArgs): VNode;
}
