import { VNode } from "@cycle/dom";
import { ComponentSources, ComponentSinks, StyleAndContentArgs, DOMContent } from "../../types";
export declare namespace Fields {
    interface Props {
        equalWidth: boolean;
        grouped: boolean;
        inline: boolean;
        required: boolean;
    }
    interface FieldsContentObj {
        main: DOMContent;
        label: DOMContent;
    }
    type FieldsArgs = StyleAndContentArgs<Props, DOMContent, FieldsContentObj>;
    type FieldsSources = ComponentSources<Props, DOMContent, FieldsContentObj>;
    function render(arg1?: Partial<Props> | DOMContent | FieldsArgs, arg2?: DOMContent): VNode;
    function run(sources: FieldsSources, scope?: string): ComponentSinks;
}
