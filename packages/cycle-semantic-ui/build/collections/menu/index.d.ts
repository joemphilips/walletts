import { ComponentSources, ValueComponentSinks, StyleAndContentArgs, DOMContent, ContentObj } from "../../types";
import { Color, Size, Attachment, Float } from "../../enums";
import { VNode } from "@cycle/dom";
export declare namespace Menu {
    interface Props {
        submenu: boolean;
        right: boolean;
        secondary: boolean;
        pointing: boolean;
        tabular: boolean;
        text: boolean;
        vertical: boolean;
        pagination: boolean;
        fixed: boolean;
        stackable: boolean;
        inverted: boolean;
        icon: boolean;
        labeledIcons: boolean;
        compact: boolean;
        equalWidth: boolean;
        borderless: boolean;
        fluid: boolean;
        color: Color | string;
        attachment: Attachment | string;
        size: Size | string;
    }
    type Content = Array<Partial<MenuItem>>;
    interface MenuItem {
        dropdown: boolean;
        link: boolean;
        active: boolean;
        disabled: boolean;
        headerOnly: boolean;
        header: boolean;
        fitted: boolean;
        divider: boolean;
        rightMenu: boolean;
        verticallyFitted: boolean;
        horizontallyFitted: boolean;
        icon: boolean;
        color: Color | string;
        float: Float | string;
        href: string;
        main: DOMContent | Content;
    }
    type MenuArgs = StyleAndContentArgs<Props, Content, ContentObj<Content>>;
    type MenuSources = ComponentSources<Props, Content, ContentObj<Content>>;
    function render(arg1?: MenuArgs | Partial<Props> | Content, arg2?: Content): VNode;
    function from(node: VNode, props?: Partial<Props>): VNode;
    function run<V extends MenuItem>(sources: MenuSources, scope?: string): ValueComponentSinks<Partial<V>>;
}
