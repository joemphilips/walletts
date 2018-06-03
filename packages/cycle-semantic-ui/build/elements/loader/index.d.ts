import { Stream } from "xstream";
import { VNode } from "@cycle/dom";
import { DOMContent, StyleAndContentArgs, ComponentSources, ComponentSinks, ContentObj } from "../../types";
import { Size } from "../../enums";
export declare namespace Loader {
    interface Props {
        type: LoaderType | string;
        centered: boolean;
        active: boolean;
        disabled: boolean;
        indeterminate: boolean;
        inverted: boolean;
        text: boolean;
        size: Size | string;
    }
    type LoaderArgs = StyleAndContentArgs<Props, DOMContent, ContentObj<DOMContent>>;
    interface LoaderSources extends ComponentSources<Props, DOMContent, ContentObj<DOMContent>> {
        args?: {
            element$?: Stream<VNode>;
            on$?: Stream<boolean>;
        };
    }
    function render(arg1?: LoaderArgs | Partial<Props> | DOMContent, arg2?: DOMContent): VNode;
    function from(node: VNode, props?: Partial<Props>): VNode;
    function run(sources: LoaderSources, scope?: string): ComponentSinks;
    enum LoaderType {
        Inline = 0,
        Page = 1,
        Content = 2,
    }
    namespace LoaderType {
        function ToEnum(attachmentstring: LoaderType | string): LoaderType;
        function ToClassname(type: LoaderType | string): " inline loader" | " loader";
    }
}
