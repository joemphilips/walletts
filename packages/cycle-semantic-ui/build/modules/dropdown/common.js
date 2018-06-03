"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var types_1 = require("../../types");
var enums_1 = require("../../enums");
var xstream_1 = require("xstream");
var dropRepeats_1 = require("xstream/extra/dropRepeats");
var debounce_1 = require("xstream/extra/debounce");
var dom_1 = require("@cycle/dom");
var utils_1 = require("../../utils");
function getClassName(className, props) {
    if (props.rightAligned) {
        className += " right";
    }
    if (props.selection) {
        className += " selection";
    }
    if (props.inline) {
        className += " inline";
    }
    if (props.floating) {
        className += " floating";
    }
    if (props.loading) {
        className += " loading";
    }
    if (props.disabled) {
        className += " disabled";
    }
    if (props.scrolling) {
        className += " scrolling";
    }
    if (props.compact) {
        className += " compact";
    }
    if (props.pointing) {
        className += " pointing";
    }
    if (typeof (props.size) !== "undefined") {
        className += enums_1.Size.ToClassname(props.size);
    }
    if (typeof (props.color) !== "undefined") {
        className += enums_1.Color.ToClassname(props.color);
    }
    return className + " dropdown";
}
exports.getClassName = getClassName;
function createTransition$(evt, args) {
    var itemClick$ = evt("click").filter(function (evt) { return evt.srcElement.classList.contains("item") && !evt.srcElement.classList.contains("dropdown"); });
    var dropdownClick$ = evt("click")
        .filter(function (evt) {
        return !evt.srcElement.classList.contains("item") ||
            evt.srcElement.classList.contains("dropdown");
    })
        .mapTo(enums_1.Direction.In);
    var mouseleave$ = xstream_1.default.merge(evt("mouseleave").filter(function (evt) { return !isDropdownIcon(evt) && !searchIsActive(args); }), evt("mouseenter"))
        .map(function (evt) { return evt.type === "mouseenter" ? enums_1.Direction.In : enums_1.Direction.Out; })
        .compose(debounce_1.default(250))
        .filter(function (dir) { return dir === enums_1.Direction.Out; });
    var inputEnter$ = evt("keypress").map(function (evt) { return (evt.charCode === 13 || evt.charCode === 9) ? enums_1.Direction.Out : enums_1.Direction.In; });
    return xstream_1.default.merge(dropdownClick$, itemClick$.mapTo(enums_1.Direction.Out), mouseleave$, inputEnter$)
        .startWith(enums_1.Direction.Out)
        .map(function (dir) { return ({
        animation: enums_1.Animation.Fade,
        direction: dir
    }); })
        .compose(dropRepeats_1.default(function (a, b) { return a.direction === b.direction && a.animation === b.animation; }))
        .drop(1)
        .startWith({ animation: enums_1.Animation.None, direction: enums_1.Direction.Out });
}
exports.createTransition$ = createTransition$;
function getText(item, props, stat, filter) {
    if (typeof (stat) !== "undefined") {
        if (types_1.isVNode(props.default)) {
            return props.default;
        }
        return dom_1.div({ props: { className: "text" } }, props.default);
    }
    if (item === null || typeof (item) === "undefined") {
        if (types_1.isVNode(props.default)) {
            return props.default;
        }
        return dom_1.div({ props: { className: "default text" } }, props.default);
    }
    if (filter && filter.length > 0) {
        if (types_1.isVNode(item.main)) {
            return item.main;
        }
        return dom_1.div({ props: { className: "filtered text" } }, utils_1.deepArrayCopy(item.main));
    }
    if (types_1.isVNode(item.main)) {
        return item.main;
    }
    return dom_1.div({ props: { className: "text" } }, utils_1.deepArrayCopy(item.main));
}
exports.getText = getText;
function isMenuItem(obj) {
    return obj && obj.main;
}
exports.isMenuItem = isMenuItem;
function isDropdownIcon(evt) {
    return evt.srcElement.className.indexOf("dropdown icon") !== -1 && !evt.srcElement.classList.contains("ui");
}
function searchIsActive(args) {
    return (args && args.search && typeof (document) !== "undefined" && document.activeElement.classList.contains("search"));
}
//# sourceMappingURL=common.js.map