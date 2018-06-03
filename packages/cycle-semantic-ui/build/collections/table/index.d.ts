import { VNode } from "@cycle/dom";
import { DOMContent, StyleAndContentArgs, ComponentSources, ComponentSinks } from "../../types";
import { Size, Color } from "../../enums";
export declare namespace Table {
    interface Props {
        singleLine: boolean;
        fixed: boolean;
        selectable: boolean;
        striped: boolean;
        celled: boolean;
        basic: boolean;
        veryBasic: boolean;
        collapsing: boolean;
        padded: boolean;
        veryPadded: boolean;
        compact: boolean;
        veryCompact: boolean;
        size: Size | string;
        color: Color | string;
    }
    interface Content {
        header: Array<DOMContent>;
        main: Array<Array<DOMContent>>;
        footer: Array<DOMContent> | DOMContent;
    }
    type TableArgs = StyleAndContentArgs<Props, Array<Array<DOMContent>>, Content>;
    type TableSources = ComponentSources<Props, Array<Array<DOMContent>>, Content>;
    function render(arg1?: Partial<Props> | Array<Array<DOMContent>> | TableArgs, arg2?: Array<Array<DOMContent>>): VNode;
    function run(sources: TableSources, scope?: string): ComponentSinks;
    function from(node: VNode, props?: Partial<Props>): VNode;
}
