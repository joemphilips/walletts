"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var counter = 0;
function getScope() {
    return "cs-ui" + ++counter;
}
exports.getScope = getScope;
function capitalize(string) {
    return string ? string.charAt(0).toUpperCase() + string.slice(1) : string;
}
exports.capitalize = capitalize;
function patchClassList(target, classes, classesToAdd) {
    var className = "";
    if (target.data) {
        var props = target.data.props ? target.data.props : { className: target.sel.split(".").join(" ") };
        var classList = props.className.split(" ");
        classList.forEach(function (item) {
            if (classes.indexOf(item) === -1) {
                className += item + " ";
            }
        });
    }
    className += classesToAdd;
    return Object.assign({}, target.data, {
        "props": {
            className: className
        }
    });
}
exports.patchClassList = patchClassList;
/**
 * Adds one VNode to another and handles updates for stream by replacing based on the identifier class.
 * @param  {VNode}  element    The element to be added.
 * @param  {VNode}  target     The target for the element
 * @param  {string} identifier The identifying class for the element to be added.
 * @return {Array} The target element's children with the element added.
 */
function addElement(element, target, identifier) {
    var c = [];
    if (target.children) {
        c = target.children;
    }
    if (target.text) {
        c.push(target.text);
    }
    for (var i = 0; i < c.length; i++) {
        var child = c[i];
        var cProps = child.data ? child.data.props ? child.data.props : {} : {};
        if (typeof (child) !== "undefined" && typeof (cProps.className) !== "undefined") {
            var classList = child.data.props.className.split(" ");
            for (var _i = 0, classList_1 = classList; _i < classList_1.length; _i++) {
                var s = classList_1[_i];
                if (s === identifier) {
                    c.splice(i, 1);
                }
            }
        }
    }
    c.push(element);
    return c;
}
exports.addElement = addElement;
/**
 * Converts a natural number between 1-16 to text.
 * @param  {number} num The number to convert.
 * @return {string}     That number as text.
 */
function numToText(num) {
    switch (num) {
        case 1: return " one";
        case 2: return " two";
        case 3: return " three";
        case 4: return " four";
        case 5: return " five";
        case 6: return " six";
        case 7: return " seven";
        case 8: return " eight";
        case 9: return " nine";
        case 10: return " ten";
        case 11: return " eleven";
        case 12: return " twelve";
        case 13: return " thirteen";
        case 14: return " fourteen";
        case 15: return " fifteen";
        case 16: return " sixteen";
        default: return " one";
    }
}
exports.numToText = numToText;
function deepArrayCopy(obj) {
    return JSON.parse(JSON.stringify(obj));
}
exports.deepArrayCopy = deepArrayCopy;
//# sourceMappingURL=index.js.map