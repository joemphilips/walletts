"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var dom_1 = require("@cycle/dom");
var types_1 = require("../../types");
var common_1 = require("../../common");
var utils_1 = require("../../utils");
var Divider;
(function (Divider) {
    function run(sources, scope) {
        if (scope === void 0) { scope = utils_1.getScope(); }
        return common_1.runPropsAndContent(sources, divider, ".divider", scope);
    }
    Divider.run = run;
    function render(arg1, arg2) {
        return common_1.renderPropsAndContent(divider, common_1.makeIsArgs(types_1.isDOMContent), types_1.isDOMContent, arg1, arg2);
    }
    Divider.render = render;
    function from(node, props) {
        if (props === void 0) { props = {}; }
        return common_1.addClassName(node, getClassName(props));
    }
    Divider.from = from;
    function divider(args) {
        var props = args.props ? args.props : {};
        var content = args.content ? types_1.isDOMContent(args.content) ? args.content : args.content.main : [];
        return dom_1.div({ props: { className: getClassName(props) } }, content);
    }
    function getClassName(props) {
        var className = "ui";
        if (props.vertical) {
            className += " vertical";
        }
        else if (props.horizontal) {
            className += " horizontal";
        }
        if (props.inverted) {
            className += " inverted";
        }
        if (props.fitted) {
            className += " fitted";
        }
        if (props.hidden) {
            className += " hidden";
        }
        if (props.section) {
            className += " section";
        }
        if (props.clearing) {
            className += " clearing";
        }
        if (props.header) {
            className += " header";
        }
        className += " divider";
        return className;
    }
})(Divider = exports.Divider || (exports.Divider = {}));
//# sourceMappingURL=index.js.map