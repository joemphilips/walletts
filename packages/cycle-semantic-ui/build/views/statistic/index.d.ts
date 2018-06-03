import { VNode } from "@cycle/dom";
import { DOMContent, StyleAndContentArgs, ComponentSources, ComponentSinks } from "../../types";
import { Color, Float, Size } from "../../enums";
export declare namespace Statistic {
    interface Props {
        text: boolean;
        horizontal: boolean;
        inverted: boolean;
        color: Color | string;
        size: Size | string;
        float: Float | string;
    }
    interface ContentObj {
        main: DOMContent;
        label: DOMContent;
    }
    type StatisticArgs = StyleAndContentArgs<Props, DOMContent, ContentObj>;
    type StatisticSources = ComponentSources<Props, DOMContent, ContentObj>;
    function render(arg1?: StatisticArgs | Partial<Props> | DOMContent, arg2?: DOMContent): VNode;
    function run(sources: StatisticSources, scope?: string): ComponentSinks;
}
