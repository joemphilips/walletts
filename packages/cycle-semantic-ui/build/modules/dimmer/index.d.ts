import { Stream } from "xstream";
import { VNode } from "@cycle/dom";
import { DOMContent, ContentObj, ComponentSources, ComponentSinks } from "../../types";
export declare namespace Dimmer {
    interface Props {
        inverted: boolean;
    }
    interface DimmerSources extends ComponentSources<Props, DOMContent, ContentObj<DOMContent>> {
        args?: {
            on$?: Stream<boolean>;
            target$?: Stream<string | VNode>;
        };
    }
    function run(sources: DimmerSources, scope?: string): ComponentSinks;
}
