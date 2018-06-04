import { Stream } from "xstream";
import { VNode } from "@cycle/dom";
import { DOMContent, StyleAndContentArgs, ComponentSources, ComponentSinks } from "../../types";
import { Size, Color, Attachment } from "../../enums";
export declare namespace Message {
    interface Props {
        icon: boolean;
        floating: boolean;
        compact: boolean;
        hidden: boolean;
        forceVisible: boolean;
        attachment: Attachment | string;
        size: Size | string;
        color: Color | string;
    }
    interface Content {
        icon: DOMContent;
        header: DOMContent;
        main: DOMContent;
    }
    type MessageArgs = StyleAndContentArgs<Props, DOMContent, Content>;
    interface MessageSources extends ComponentSources<Props, DOMContent, Content> {
        args?: {
            closeable?: true;
            on$?: Stream<boolean>;
        };
    }
    function render(arg1?: Partial<Props> | DOMContent | MessageArgs, arg2?: DOMContent): VNode;
    function from(node: VNode, props?: Partial<Props>): VNode;
    function run(sources: MessageSources, scope?: string): ComponentSinks;
}
