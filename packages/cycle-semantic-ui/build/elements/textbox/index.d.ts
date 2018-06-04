import { VNode } from "@cycle/dom";
import { DOMContent, ContentObj, StyleAndContentArgs, ComponentSources, ValueComponentSinks } from "../../types";
import { Color, Size } from "../../enums";
export declare namespace Textbox {
    interface Props {
        value: string;
        placeholder: string;
        icon: boolean;
        labeled: boolean;
        action: boolean;
        leftContent: boolean;
        rightContent: boolean;
        transparent: boolean;
        inverted: boolean;
        focus: boolean;
        loading: boolean;
        disabled: boolean;
        readonly: boolean;
        rows: number;
        type: string;
        color: Color | string;
        size: Size | string;
    }
    type TextboxArgs = StyleAndContentArgs<Props, DOMContent, ContentObj<DOMContent>>;
    type TextboxSources = ComponentSources<Props, DOMContent, ContentObj<DOMContent>>;
    function render(arg1?: TextboxArgs | Partial<Props> | DOMContent, arg2?: DOMContent): VNode;
    function from(node: VNode, props?: Partial<Props>): VNode;
    function run(sources: TextboxSources, scope?: string): ValueComponentSinks<string>;
}
