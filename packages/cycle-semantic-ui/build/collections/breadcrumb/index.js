"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var dom_1 = require("@cycle/dom");
var enums_1 = require("../../enums");
var common_1 = require("../../common");
var utils_1 = require("../../utils");
var Breadcrumb;
(function (Breadcrumb) {
    function render(arg1, arg2) {
        return common_1.renderPropsAndContent(breadcrumb, common_1.makeIsArgs(isContent), isContent, arg1, arg2);
    }
    Breadcrumb.render = render;
    function run(sources, scope) {
        if (scope === void 0) { scope = utils_1.getScope(); }
        return common_1.runPropsAndContent(sources, breadcrumb, ".breadcrumb", scope);
    }
    Breadcrumb.run = run;
    function from(node, props) {
        if (props === void 0) { props = {}; }
        return common_1.addClassName(node, getClassName(props));
    }
    Breadcrumb.from = from;
    function breadcrumb(args) {
        var props = args.props ? args.props : { divider: "/" };
        var content = [];
        if (args.content) {
            if (isContent(args.content)) {
                content = args.content;
            }
            else if (isContent(args.content.main)) {
                content = args.content.main;
            }
        }
        if (!props.divider) {
            props.divider = "/";
        }
        var children = content.map(function (c) { return [
            section(c), divider(props)
        ]; }).reduce(function (a, n) { return a.concat(n); }, []);
        children.splice(-1, 1);
        return dom_1.div({ props: { className: getClassName(props) } }, children);
    }
    function getClassName(props) {
        var className = "ui";
        if (typeof (props.size) !== "undefined") {
            className += enums_1.Size.ToClassname(props.size);
        }
        return className + " breadcrumb";
    }
    function section(section) {
        return section.active
            ? dom_1.div({ props: { className: "active section" } }, section.text)
            : section.href
                ? dom_1.a({ props: { className: "section", href: section.href } }, section.text)
                : dom_1.div({ props: { className: "section" } }, section.text);
    }
    function divider(props) {
        if (typeof (props.divider) === "string") {
            return dom_1.span({ props: { className: "divider" } }, props.divider);
        }
        if (props.divider.data.props.className.indexOf("ui") !== -1) {
            props.divider.data.props.className = props.divider.data.props.className.substring(3);
        }
        if (props.divider.data.props.className.indexOf("divider") === -1) {
            props.divider.data.props.className += " divider";
        }
        return props.divider;
    }
    function isContent(obj) {
        return obj instanceof Array;
    }
})(Breadcrumb = exports.Breadcrumb || (exports.Breadcrumb = {}));
//# sourceMappingURL=index.js.map