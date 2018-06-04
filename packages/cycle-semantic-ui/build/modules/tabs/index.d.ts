import xs, { MemoryStream, Stream } from "xstream";
import { VNode, DOMSource } from "@cycle/dom";
import { Menu, Segment } from "../../index";
import { DOMContent } from "../../types";
export declare namespace Tabs {
    interface TabsSources {
        DOM: DOMSource;
        labels: string[];
        content: Stream<DOMContent>[];
        active?: string;
        menuProps$?: Stream<Partial<Menu.Props>>;
        segmentProps$?: Stream<Partial<Segment.Props>>;
    }
    function run(sources: TabsSources): {
        DOM: xs<VNode>;
        active$: MemoryStream<string>;
    };
}
