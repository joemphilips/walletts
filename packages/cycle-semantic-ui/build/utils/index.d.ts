import { VNode, VNodeData } from "@cycle/dom";
export declare function getScope(): string;
export declare function capitalize(string: string): string;
export declare function patchClassList(target: VNode, classes: string[], classesToAdd: string): VNodeData & {
    "props": {
        className: string;
    };
};
/**
 * Adds one VNode to another and handles updates for stream by replacing based on the identifier class.
 * @param  {VNode}  element    The element to be added.
 * @param  {VNode}  target     The target for the element
 * @param  {string} identifier The identifying class for the element to be added.
 * @return {Array} The target element's children with the element added.
 */
export declare function addElement(element: VNode, target: VNode, identifier: string): Array<VNode>;
/**
 * Converts a natural number between 1-16 to text.
 * @param  {number} num The number to convert.
 * @return {string}     That number as text.
 */
export declare function numToText(num: number): string;
export declare function deepArrayCopy(obj: any[]): any;
