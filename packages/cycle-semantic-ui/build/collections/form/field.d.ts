import { VNode } from "@cycle/dom";
import { ComponentSources, ComponentSinks, StyleAndContentArgs, DOMContent } from "../../types";
export declare namespace Field {
    interface Props {
        width: number;
        inline: boolean;
        centered: boolean;
        required: boolean;
        error: boolean;
        disabled: boolean;
    }
    interface FieldContentObj {
        main: DOMContent;
        label: DOMContent;
    }
    type FieldArgs = StyleAndContentArgs<Props, DOMContent, FieldContentObj>;
    type FieldSources = ComponentSources<Props, DOMContent, FieldContentObj>;
    function render(arg1?: Partial<Props> | DOMContent | FieldArgs, arg2?: DOMContent): VNode;
    function run(sources: FieldSources, scope?: string): ComponentSinks;
}
