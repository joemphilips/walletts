"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var dom_1 = require("@cycle/dom");
var types_1 = require("../../types");
var enums_1 = require("../../enums");
var common_1 = require("../../common");
var utils_1 = require("../../utils");
var Button;
(function (Button) {
    function render(arg1, arg2) {
        return common_1.renderPropsAndContent(button, isArgs, types_1.isDOMContent, arg1, arg2);
    }
    Button.render = render;
    function run(sources, scope) {
        if (scope === void 0) { scope = utils_1.getScope(); }
        return common_1.runPropsAndContent(sources, button, ".button", scope);
    }
    Button.run = run;
    function from(node, props) {
        if (props === void 0) { props = {}; }
        return common_1.addClassName(node, getClassname(props));
    }
    Button.from = from;
    function button(args) {
        var props = args.props ? args.props : {};
        var content = args.content ? types_1.isDOMContent(args.content) ? { main: args.content } : args.content : { main: [] };
        var children = content.hidden
            ? [dom_1.div({ props: { className: "visible content" } }, content.main),
                dom_1.div({ props: { className: "hidden content" } }, content.hidden)]
            : content.main;
        return props.href
            ? dom_1.a({ props: { href: props.href, className: getClassname(props) } }, children)
            : dom_1.div({ props: { className: getClassname(props) } }, children);
    }
    function getClassname(props) {
        var className = "ui";
        if (props.animated) {
            className += " animated";
        }
        if (props.verticalAnimated) {
            className += " vertical animated";
        }
        if (props.labeled) {
            className += " labeled";
        }
        if (props.rightlabeled) {
            className += " right labeled";
        }
        if (props.icon) {
            className += " icon";
        }
        if (props.basic) {
            className += " basic";
        }
        if (props.inverted) {
            className += " inverted";
        }
        if (props.active) {
            className += " active";
        }
        if (props.disabled) {
            className += " disabled";
        }
        if (props.loading) {
            className += " loading";
        }
        if (props.compact) {
            className += " compact";
        }
        if (props.circular) {
            className += " circular";
        }
        if (props.fluid) {
            className += " fluid";
        }
        if (typeof (props.attachment) !== "undefined") {
            className += enums_1.Attachment.ToClassname(props.attachment);
        }
        if (typeof (props.size) !== "undefined") {
            className += enums_1.Size.ToClassname(props.size);
        }
        if (typeof (props.float) !== "undefined") {
            className += enums_1.Float.ToClassname(props.float);
        }
        if (typeof (props.color) !== "undefined") {
            className += enums_1.Color.ToClassname(props.color);
        }
        className += " button";
        return className;
    }
    function isArgs(obj) {
        return typeof (obj) !== "undefined" && (typeof (obj.props) !== "undefined" ||
            types_1.isDOMContent(obj.content) || (typeof (obj.content) !== "undefined" && (types_1.isDOMContent(obj.content.main) || types_1.isDOMContent(obj.content.hidden))));
    }
})(Button = exports.Button || (exports.Button = {}));
//# sourceMappingURL=index.js.map