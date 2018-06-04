import { VNode } from "@cycle/dom";
import { ComponentSources, ComponentSinks, StyleAndContentArgs, ContentObj } from "../../types";
import { Color, Size, IconType } from "../../enums";
export declare namespace Icon {
    interface Props {
        button: boolean;
        bordered: boolean;
        circular: boolean;
        disabled: boolean;
        loading: boolean;
        fitted: boolean;
        link: boolean;
        flipped: boolean;
        rotated: boolean;
        inverted: boolean;
        color: Color | string;
        size: Size | string;
    }
    type IconArgs = StyleAndContentArgs<Props, IconType | string, ContentObj<IconType | string>>;
    type IconSources = ComponentSources<Props, IconType | string, ContentObj<IconType | string>>;
    function run(sources: IconSources, scope?: string): ComponentSinks;
    function render(arg1?: IconArgs | Partial<Props> | IconType | string, arg2?: IconType | string): VNode;
    function from(node: VNode, props?: Partial<Props>, content?: IconType): VNode;
}
