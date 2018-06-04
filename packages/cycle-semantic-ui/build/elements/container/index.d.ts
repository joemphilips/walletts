import { VNode } from "@cycle/dom";
import { DOMContent, ContentObj, StyleAndContentArgs, ComponentSources, ComponentSinks } from "../../types";
export declare namespace Container {
    type ContainerArgs = StyleAndContentArgs<Object, DOMContent, ContentObj<DOMContent>>;
    type ContainerSources = ComponentSources<Object, DOMContent, ContentObj<DOMContent>>;
    function run(sources: any, scope?: string): ComponentSinks;
    function render(arg1?: ContainerArgs | DOMContent): VNode;
    function from(node: VNode): VNode;
}
