import { VNode } from "@cycle/dom";
import { DOMContent, ContentObj, StyleAndContentArgs, ComponentSources, ComponentSinks } from "../../types";
import { Size, Attachment } from "../../enums";
export declare namespace Steps {
    interface Props {
        vertical: boolean;
        stackable: boolean;
        equalWidth: boolean;
        fluid: boolean;
        size: Size | string;
        attachment: Attachment | string;
    }
    type Content = Array<Partial<StepItem>>;
    interface StepItem {
        icon: DOMContent;
        header: DOMContent;
        description: DOMContent;
        completed: boolean;
        active: boolean;
        disabled: boolean;
        link: boolean;
        href: string;
    }
    type StepArgs = StyleAndContentArgs<Props, Content, ContentObj<Content>>;
    type StepSources = ComponentSources<Props, Content, ContentObj<Content>>;
    function render(arg1?: StepArgs | Partial<Props> | Content, arg2?: Content): VNode;
    function run(sources: StepSources, scope?: string): ComponentSinks;
    function from(node: VNode, props?: Partial<Props>): VNode;
}
