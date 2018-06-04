import { Size } from "../../enums";
import { VNode } from "@cycle/dom";
import { ComponentSources, ComponentSinks, StyleAndContentArgs, ContentObj, DOMContent } from "../../types";
export declare namespace Form {
    interface Props {
        equalWidth: boolean;
        inverted: boolean;
        loading: boolean;
        size: Size | string;
    }
    type FormArgs = StyleAndContentArgs<Props, DOMContent, ContentObj<DOMContent>>;
    type FormSources = ComponentSources<Props, DOMContent, ContentObj<DOMContent>>;
    function render(arg1?: Partial<Props> | DOMContent | FormArgs, arg2?: DOMContent): VNode;
    function run(sources: FormSources, scope?: string): ComponentSinks;
}
