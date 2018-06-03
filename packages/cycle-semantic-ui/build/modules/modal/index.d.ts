import { VNode } from "@cycle/dom";
import { Stream } from "xstream";
import { DOMContent, ComponentSources, ComponentSinks } from "../../types";
export declare namespace Modal {
    interface Props {
        inverted: boolean;
    }
    interface ContentObj {
        main: DOMContent;
        header: DOMContent;
        actions: DOMContent;
    }
    interface ModalSources extends ComponentSources<Props, DOMContent, ContentObj> {
        args?: {
            on$?: Stream<boolean>;
            target$?: Stream<VNode>;
        };
    }
    function run(sources: ModalSources, scope?: string): ComponentSinks;
}
