import { VNode } from "@cycle/dom";
import { Stream } from "xstream";
import { DOMContent, ComponentSources, ComponentSinks } from "../../types";
import { Size, Color } from "../../enums";
export declare namespace Popup {
    interface Props {
        wide: boolean;
        veryWide: boolean;
        flowing: boolean;
        inverted: boolean;
        size: Size | string;
        attachment: Popup.Attachment | string;
        color: Color | string;
    }
    interface ContentObj {
        main: DOMContent;
        header: DOMContent;
    }
    interface PopupSources extends ComponentSources<Props, DOMContent, ContentObj> {
        args: {
            target$: Stream<VNode | Element>;
            on$?: Stream<boolean>;
            timeout?: number;
        };
    }
    function run(sources: PopupSources, scope?: string): ComponentSinks;
    enum Attachment {
        TopLeft = 0,
        TopMiddle = 1,
        TopRight = 2,
        LeftCenter = 3,
        RightCenter = 4,
        BottomLeft = 5,
        BottomMiddle = 6,
        BottomRight = 7,
        Center = 8,
    }
    namespace Attachment {
        function ToEnum(attachmentstring: Attachment | string): Attachment;
        function ToClassname(attachment: Attachment | string): " top left" | " top center" | " top right" | " left center" | " right center" | " bottom left" | " bottom center" | " bottom right" | " center";
        function ToTether(attachment: Attachment | string): "center" | "top left" | "top center" | "top right" | "left middle" | "right middle" | "bottom left" | "bottom center" | "bottom right";
        function ToOppositeTether(attachment: Attachment | string): "center" | "top left" | "top center" | "top right" | "left middle" | "right middle" | "bottom left" | "bottom center" | "bottom right";
    }
}
