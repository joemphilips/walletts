"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var dom_1 = require("@cycle/dom");
var types_1 = require("../../types");
var enums_1 = require("../../enums");
var common_1 = require("../../common");
var utils_1 = require("../../utils");
var Segment;
(function (Segment) {
    function render(arg1, arg2) {
        return common_1.renderPropsAndContent(segment, common_1.makeIsArgs(types_1.isDOMContent), types_1.isDOMContent, arg1, arg2);
    }
    Segment.render = render;
    function run(sources, scope) {
        if (scope === void 0) { scope = utils_1.getScope(); }
        return common_1.runPropsAndContent(sources, segment, ".segment", scope);
    }
    Segment.run = run;
    function from(node, props) {
        if (props === void 0) { props = {}; }
        return common_1.addClassName(node, getClassname(props));
    }
    Segment.from = from;
    function segment(args) {
        var props = args.props ? args.props : {};
        var content = args.content ? types_1.isDOMContent(args.content) ? args.content : args.content.main : [];
        return dom_1.div({ props: { className: getClassname(props) } }, content);
    }
    function getClassname(props) {
        var className = "ui";
        if (props.raised) {
            className += " raised";
        }
        if (props.stacked) {
            className += " stacked";
        }
        if (props.tallStacked) {
            className += " tall stacked";
        }
        if (props.piled) {
            className += " piled";
        }
        if (props.vertical) {
            className += " vertical";
        }
        if (props.loading) {
            className += " loading";
        }
        if (props.inverted) {
            className += " inverted";
        }
        if (props.padded) {
            className += " padded";
        }
        if (props.veryPadded) {
            className += " very padded";
        }
        if (props.compact) {
            className += " compact";
        }
        if (props.circular) {
            className += " circular";
        }
        if (props.clearing) {
            className += " clearing";
        }
        if (props.basic) {
            className += " basic";
        }
        if (typeof (props.color) !== "undefined") {
            className += enums_1.Color.ToClassname(props.color);
        }
        if (typeof (props.attachment) !== "undefined") {
            className += enums_1.Attachment.ToClassname(props.attachment);
        }
        if (typeof (props.float) !== "undefined") {
            className += enums_1.Float.ToClassname(props.float);
        }
        if (typeof (props.textAlignment) !== "undefined") {
            className += enums_1.TextAlignment.ToClassname(props.textAlignment);
        }
        className += " segment";
        return className;
    }
})(Segment = exports.Segment || (exports.Segment = {}));
//# sourceMappingURL=index.js.map