"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var enums_1 = require("../../enums");
var dom_1 = require("@cycle/dom");
var types_1 = require("../../types");
var common_1 = require("../../common");
var utils_1 = require("../../utils");
var Label;
(function (Label) {
    function run(sources, scope) {
        if (scope === void 0) { scope = utils_1.getScope(); }
        return common_1.runPropsAndContent(sources, label, ".label", scope);
    }
    Label.run = run;
    function render(arg1, arg2) {
        return common_1.renderPropsAndContent(label, isArgs, types_1.isDOMContent, arg1, arg2);
    }
    Label.render = render;
    function from(node, props) {
        if (props === void 0) { props = {}; }
        return common_1.addClassName(node, getClassname(props));
    }
    Label.from = from;
    function label(args) {
        var props = args.props ? args.props : {};
        var content = args.content ? types_1.isDOMContent(args.content) ? { main: args.content } : args.content : { main: [] };
        var children = [].concat(content.main ? content.main : [], content.detail ? dom_1.div({ props: { className: "detail" } }, content.detail) : []);
        return dom_1.div({ props: { className: getClassname(props) } }, children);
    }
    function getClassname(props) {
        var className = "ui";
        if (props.circular) {
            className += " circular";
        }
        if (props.empty) {
            className += " empty";
        }
        if (props.pointing) {
            className += " pointing";
        }
        if (props.leftPointing) {
            className += " left pointing";
        }
        if (props.rightPointing) {
            className += " right pointing";
        }
        if (props.basic) {
            className += " basic";
        }
        if (props.leftCorner) {
            className += " left corner";
        }
        if (props.rightCorner) {
            className += " right corner";
        }
        if (props.tag) {
            className += " tag";
        }
        if (props.ribbon) {
            className += " ribbon";
        }
        if (props.rightRibbon) {
            className += " right ribbon";
        }
        if (props.horizontal) {
            className += " horizontal";
        }
        if (props.floating) {
            className += " floating";
        }
        if (typeof (props.attachment) !== "undefined") {
            className += enums_1.Attachment.ToClassname(props.attachment);
        }
        if (typeof (props.size) !== "undefined") {
            className += enums_1.Size.ToClassname(props.size);
        }
        if (typeof (props.color) !== "undefined") {
            className += enums_1.Color.ToClassname(props.color);
        }
        className += " label";
        return className;
    }
    function isArgs(obj) {
        return typeof (obj) !== "undefined" && (typeof (obj.props) !== "undefined" ||
            typeof (obj.content) !== "undefined" && (types_1.isDOMContent(obj.content) || (types_1.isDOMContent(obj.content.main) || types_1.isDOMContent(obj.content.detail))));
    }
})(Label = exports.Label || (exports.Label = {}));
//# sourceMappingURL=index.js.map