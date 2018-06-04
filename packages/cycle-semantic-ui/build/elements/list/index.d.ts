import { VNode } from "@cycle/dom";
import { Size, VerticalAlignment, Float } from "../../enums";
import { DOMContent, ContentObj, StyleAndContentArgs, ComponentSources, ComponentSinks } from "../../types";
export declare namespace List {
    interface Props {
        bulleted: boolean;
        ordered: boolean;
        horizontal: boolean;
        inverted: boolean;
        selection: boolean;
        animated: boolean;
        relaxed: boolean;
        divided: boolean;
        celled: boolean;
        size: Size | string;
        alignment: VerticalAlignment | string;
        float: Float | string;
    }
    interface ListItem {
        left: DOMContent;
        main: DOMContent;
        icon: DOMContent;
        right: DOMContent;
        header: DOMContent;
        description: DOMContent;
        href: string;
    }
    type Content = Array<Partial<ListItem>>;
    type ListArgs = StyleAndContentArgs<Props, Content, ContentObj<Content>>;
    type ListSources = ComponentSources<Props, Content, ContentObj<Content>>;
    function render(arg1?: ListArgs | Partial<Props> | Content, arg2?: Content): VNode;
    function run(sources: ListSources, scope?: string): ComponentSinks;
    function from(node: VNode, props?: Partial<Props>): VNode;
    function list(args: ListArgs): VNode;
}
