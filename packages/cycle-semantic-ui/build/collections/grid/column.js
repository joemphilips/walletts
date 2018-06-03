"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var dom_1 = require("@cycle/dom");
var types_1 = require("../../types");
var common_1 = require("../../common");
var enums_1 = require("../../enums");
var utils_1 = require("../../utils");
var Column;
(function (Column) {
    function render(arg1, arg2) {
        return common_1.renderPropsAndContent(column, common_1.makeIsArgs(types_1.isDOMContent), types_1.isDOMContent, arg1, arg2);
    }
    Column.render = render;
    function run(sources, scope) {
        if (scope === void 0) { scope = utils_1.getScope(); }
        return common_1.runPropsAndContent(sources, column, ".column", scope);
    }
    Column.run = run;
    function from(node, props) {
        if (props === void 0) { props = {}; }
        return common_1.addClassName(node, getClassname(props));
    }
    Column.from = from;
    function column(args) {
        var props = args.props ? args.props : {};
        var content = args.content ? types_1.isDOMContent(args.content) ? args.content : args.content.main : [];
        return dom_1.div({ props: { className: getClassname(props) } }, content);
    }
    function getClassname(props) {
        var className = "ui";
        if (props.width) {
            className += utils_1.numToText(props.width) + " wide";
        }
        if (props.mobile) {
            className += utils_1.numToText(props.mobile) + " wide mobile";
        }
        if (props.tablet) {
            className += utils_1.numToText(props.tablet) + " wide tablet";
        }
        if (props.computer) {
            className += utils_1.numToText(props.computer) + " wide computer";
        }
        if (props.largescreen) {
            className += utils_1.numToText(props.largescreen) + " wide large screen";
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
        if (props.stretched) {
            className += " stretched";
        }
        if (typeof (props.size) !== "undefined") {
            className += enums_1.Size.ToClassname(props.size);
        }
        if (typeof (props.alignment) !== "undefined") {
            className += enums_1.VerticalAlignment.ToClassname(props.alignment);
        }
        if (typeof (props.textAlignment) !== "undefined") {
            className += enums_1.TextAlignment.ToClassname(props.textAlignment);
        }
        if (typeof (props.float) !== "undefined") {
            className += enums_1.Float.ToClassname(props.float);
        }
        className += " column";
        return className;
    }
})(Column = exports.Column || (exports.Column = {}));
//# sourceMappingURL=column.js.map