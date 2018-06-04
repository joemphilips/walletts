import { VNode } from "@cycle/dom";
import { DOMContent, StyleAndContentArgs, ContentObj, ComponentSources, ComponentSinks } from "../../types";
import { Color, Attachment, Float, TextAlignment } from "../../enums";
export declare namespace Segment {
    interface Props {
        raised: boolean;
        stacked: boolean;
        tallStacked: boolean;
        piled: boolean;
        vertical: boolean;
        loading: boolean;
        inverted: boolean;
        padded: boolean;
        veryPadded: boolean;
        compact: boolean;
        circular: boolean;
        clearing: boolean;
        basic: boolean;
        color: Color | string;
        attachment: Attachment | string;
        float: Float | string;
        textAlignment: TextAlignment | string;
    }
    type SegmentArgs = StyleAndContentArgs<Props, DOMContent, ContentObj<DOMContent>>;
    type SegmentSources = ComponentSources<Props, DOMContent, ContentObj<DOMContent>>;
    function render(arg1?: SegmentArgs | Partial<Props> | DOMContent, arg2?: DOMContent): VNode;
    function run(sources: SegmentSources, scope?: string): ComponentSinks;
    function from(node: VNode, props?: Partial<Props>): VNode;
}
