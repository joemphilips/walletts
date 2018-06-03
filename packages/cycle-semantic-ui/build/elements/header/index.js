"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var dom_1 = require("@cycle/dom");
var types_1 = require("../../types");
var enums_1 = require("../../enums");
var common_1 = require("../../common");
var utils_1 = require("../../utils");
var Header;
(function (Header) {
    function run(sources, scope) {
        if (scope === void 0) { scope = utils_1.getScope(); }
        return common_1.runPropsAndContent(sources, header, ".header", scope);
    }
    Header.run = run;
    function render(arg1, arg2) {
        return common_1.renderPropsAndContent(header, isArgs, types_1.isDOMContent, arg1, arg2);
    }
    Header.render = render;
    function from(node, props) {
        if (props === void 0) { props = {}; }
        return common_1.addClassName(node, getClassname(props));
    }
    Header.from = from;
    function header(args) {
        var props = args.props ? args.props : {};
        var content = args.content ? types_1.isDOMContent(args.content) ? { main: args.content } : args.content : { main: [] };
        var children = [].concat(content.main ? content.main : [], content.subtext ? dom_1.div({ props: { className: "sub header" } }, content.subtext) : []);
        return dom_1.div({ props: { className: getClassname(props) } }, content.icon
            ? [].concat(content.icon, dom_1.div({ props: { className: "content" } }, children))
            : children);
    }
    function getClassname(props) {
        var className = "ui";
        if (props.icon) {
            className += " icon";
        }
        if (props.dividing) {
            className += " dividing";
        }
        if (props.divider) {
            className += " divider";
        }
        if (props.block) {
            className += " block";
        }
        if (props.disabled) {
            className += " disabled";
        }
        if (props.inverted) {
            className += " inverted";
        }
        if (typeof (props.size) !== "undefined") {
            className += enums_1.Size.ToClassname(props.size);
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
        if (typeof (props.color) !== "undefined") {
            className += enums_1.Color.ToClassname(props.color);
        }
        className += " header";
        return className;
    }
    function isArgs(obj) {
        return (typeof (obj) !== "undefined") && (typeof (obj.props) !== "undefined" ||
            types_1.isDOMContent(obj.content) || (typeof (obj.content) !== "undefined" && (types_1.isDOMContent(obj.content.main) ||
            types_1.isDOMContent(obj.content.icon) ||
            types_1.isDOMContent(obj.content.subtext))));
    }
})(Header = exports.Header || (exports.Header = {}));
//# sourceMappingURL=index.js.map