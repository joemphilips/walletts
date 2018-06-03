import { VNode } from "@cycle/dom";
import { DOMContent, ContentObj, StyleAndContentArgs, ComponentSources, ValueComponentSinks } from "../../types";
export declare namespace Checkbox {
    interface Props {
        name: string;
        readonly: boolean;
        checked: boolean;
        disabled: boolean;
        fitted: boolean;
        radio: boolean;
        toggle: boolean;
        slider: boolean;
    }
    type CheckboxArgs = StyleAndContentArgs<Props, DOMContent, ContentObj<DOMContent>>;
    type CheckboxSources = ComponentSources<Props, DOMContent, ContentObj<DOMContent>>;
    function render(arg1?: CheckboxArgs | Partial<Props> | DOMContent, arg2?: DOMContent): VNode;
    function run(sources: CheckboxSources, scope?: string): ValueComponentSinks<boolean>;
}
