"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var dom_1 = require("@cycle/dom");
var enums_1 = require("../../enums");
var common_1 = require("../../common");
var utils_1 = require("../../utils");
var List;
(function (List) {
    function render(arg1, arg2) {
        return common_1.renderPropsAndContent(list, common_1.makeIsArgs(isContent), isContent, arg1, arg2);
    }
    List.render = render;
    function run(sources, scope) {
        if (scope === void 0) { scope = utils_1.getScope(); }
        return common_1.runPropsAndContent(sources, list, ".list", scope);
    }
    List.run = run;
    function from(node, props) {
        if (props === void 0) { props = {}; }
        return common_1.addClassName(node, getClassname(props));
    }
    List.from = from;
    function list(args) {
        var props = args.props ? args.props : {};
        var content = args.content ? isContent(args.content) ? args.content : args.content.main : [];
        return dom_1.div({ props: { className: getClassname(props) } }, content.map(function (_a) {
            var header = _a.header, icon = _a.icon, main = _a.main, description = _a.description, href = _a.href, left = _a.left, right = _a.right;
            var l = left ? dom_1.div({ props: { className: "left floated content" } }, left) : [];
            var r = right ? dom_1.div({ props: { className: "right floated content" } }, right) : [];
            var h = header ? dom_1.div({ props: { className: "header" } }, header) : [];
            var d = description ? dom_1.div({ props: { className: "description" } }, description) : [];
            var i = icon ? icon : [];
            var c = (header || description) ? dom_1.div({ props: { className: "content" } }, [].concat(h, d, main)) : main;
            var children = [].concat(l, r, i, c);
            return href
                ? dom_1.a({ props: { className: "item", href: href } }, children)
                : dom_1.div({ props: { className: "item" } }, children);
        }));
    }
    List.list = list;
    function getClassname(props) {
        var className = "ui";
        if (props.bulleted) {
            className += " bulleted";
        }
        if (props.ordered) {
            className += " ordered";
        }
        if (props.horizontal) {
            className += " horizontal";
        }
        if (props.inverted) {
            className += " inverted";
        }
        if (props.selection) {
            className += " selection";
        }
        if (props.animated) {
            className += " animated";
        }
        if (props.relaxed) {
            className += " relaxed";
        }
        if (props.divided) {
            className += " divided";
        }
        if (props.celled) {
            className += " celled";
        }
        if (typeof (props.size) !== "undefined") {
            className += enums_1.Size.ToClassname(props.size);
        }
        if (typeof (props.alignment) !== "undefined") {
            className += enums_1.VerticalAlignment.ToClassname(props.alignment);
        }
        if (typeof (props.float) !== "undefined") {
            className += enums_1.Float.ToClassname(props.float);
        }
        className += " list";
        return className;
    }
    function isContent(obj) {
        return obj instanceof Array;
    }
})(List = exports.List || (exports.List = {}));
//# sourceMappingURL=index.js.map