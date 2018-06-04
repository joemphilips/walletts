import { VNode } from "@cycle/dom";
export declare type DOMContent = string | VNode | Array<string | VNode>;
export declare function isDOMContent(content: any): content is DOMContent;
export declare function isVNode(obj: any): obj is VNode;
