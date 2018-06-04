"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var dom_1 = require("@cycle/dom");
var types_1 = require("../../types");
var common_1 = require("../../common");
var enums_1 = require("../../enums");
var utils_1 = require("../../utils");
var Row;
(function (Row) {
    function render(arg1, arg2) {
        return common_1.renderPropsAndContent(row, common_1.makeIsArgs(types_1.isDOMContent), types_1.isDOMContent, arg1, arg2);
    }
    Row.render = render;
    function run(sources, scope) {
        if (scope === void 0) { scope = utils_1.getScope(); }
        return common_1.runPropsAndContent(sources, row, ".row", scope);
    }
    Row.run = run;
    function from(node, props) {
        if (props === void 0) { props = {}; }
        return common_1.addClassName(node, getClassname(props));
    }
    Row.from = from;
    function row(args) {
        var props = args.props ? args.props : {};
        var content = args.content ? types_1.isDOMContent(args.content) ? args.content : args.content.main : [];
        return dom_1.div({ props: { className: getClassname(props) } }, content);
    }
    Row.row = row;
    function getClassname(props) {
        var className = "ui";
        if (props.doubling) {
            className += " doubling";
        }
        if (props.centered) {
            className += " centered";
        }
        if (props.stretched) {
            className += " stretched";
        }
        if (props.mobileOnly) {
            className += " mobile only";
        }
        if (props.tabletOnly) {
            className += " tablet only";
        }
        if (props.computerOnly) {
            className += " computer only";
        }
        if (props.largescreenOnly) {
            className += " large screen only";
        }
        if (props.equalWidth) {
            className += " equal width";
        }
        if (props.width) {
            className += utils_1.numToText(props.width) + " column";
        }
        if (typeof (props.textAlignment) !== "undefined") {
            className += enums_1.TextAlignment.ToClassname(props.textAlignment);
        }
        if (typeof (props.alignment) !== "undefined") {
            className += enums_1.VerticalAlignment.ToClassname(props.alignment);
        }
        className += " row";
        return className;
    }
})(Row = exports.Row || (exports.Row = {}));
//# sourceMappingURL=row.js.map