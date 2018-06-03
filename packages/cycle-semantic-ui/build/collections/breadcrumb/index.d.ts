import { VNode } from "@cycle/dom";
import { ComponentSources, ComponentSinks, ContentObj, StyleAndContentArgs, DOMContent } from "../../types";
import { Size } from "../../enums";
export declare namespace Breadcrumb {
    interface Props {
        divider: VNode | string;
        size: Size | string;
    }
    type Content = Array<Partial<BreadCrumbItem>>;
    interface BreadCrumbItem {
        active: boolean;
        text: DOMContent;
        href: string;
    }
    type BreadcrumbArgs = StyleAndContentArgs<Props, Content, ContentObj<Content>>;
    type BreadcrumbSources = ComponentSources<Props, Content, ContentObj<Content>>;
    function render(arg1?: Partial<Props> | Content | BreadcrumbArgs, arg2?: Content): VNode;
    function run(sources: BreadcrumbSources, scope?: string): ComponentSinks;
    function from(node: VNode, props?: Partial<Props>): VNode;
}
