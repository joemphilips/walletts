import { VNode } from "@cycle/dom";
import { DOMContent, ContentObj, StyleAndContentArgs, ComponentSources, ComponentSinks } from "../../types";
import { Size, Attachment, Color } from "../../enums";
export declare namespace Progress {
    interface Props {
        progress: number;
        active: boolean;
        disabled: boolean;
        inverted: boolean;
        attachment: Attachment | string;
        size: Size | string;
        color: Color | string;
    }
    type ProgressBarArgs = StyleAndContentArgs<Props, DOMContent, ContentObj<DOMContent>>;
    type ProgressBarSources = ComponentSources<Props, DOMContent, ContentObj<DOMContent>>;
    function render(arg1?: ProgressBarArgs | Partial<Props> | DOMContent, arg2?: DOMContent): VNode;
    function run(sources: ProgressBarSources, scope?: string): ComponentSinks;
}
