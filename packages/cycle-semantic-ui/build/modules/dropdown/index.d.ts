import { DOMContent, ContentObj, ComponentSources, ValueComponentSinks } from "../../types";
import { Color, Size } from "../../enums";
import { Menu } from "../../collections/menu";
export declare namespace Dropdown {
    interface Props {
        rightAligned: boolean;
        active: boolean;
        initial: any;
        selection: boolean;
        simple: boolean;
        inline: boolean;
        floating: boolean;
        loading: boolean;
        disabled: boolean;
        scrolling: boolean;
        compact: boolean;
        pointing: boolean;
        default: DOMContent;
        size: Size | string;
        color: Color | string;
    }
    type Content<V> = Array<Partial<DropdownItem<V>>>;
    interface DropdownItem<V> extends Menu.MenuItem {
        value: V;
    }
    interface DropdownSources<V> extends ComponentSources<Props, Content<V>, ContentObj<Content<V>>> {
        args?: {
            search?: boolean;
            static?: boolean;
        };
    }
    function run<V>(sources: DropdownSources<V>, scope?: string): ValueComponentSinks<V>;
}
