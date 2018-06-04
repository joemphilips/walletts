"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var dom_1 = require("@cycle/dom");
var types_1 = require("../../types");
var enums_1 = require("../../enums");
var common_1 = require("../../common");
var utils_1 = require("../../utils");
var Statistic;
(function (Statistic) {
    function render(arg1, arg2) {
        return common_1.renderPropsAndContent(statistic, isArgs, types_1.isDOMContent, arg1, arg2);
    }
    Statistic.render = render;
    function run(sources, scope) {
        if (scope === void 0) { scope = utils_1.getScope(); }
        return common_1.runPropsAndContent(sources, statistic, ".statistic", scope);
    }
    Statistic.run = run;
    function statistic(args) {
        var props = args.props ? args.props : {};
        var content = args.content ? types_1.isDOMContent(args.content) ? { main: args.content } : args.content : { main: [] };
        return dom_1.div({ props: { className: getClassname(props) } }, [].concat(dom_1.div({ props: { className: props.text ? "text value" : "value" } }, content.main), content.label ? dom_1.div({ props: { className: "label" } }, content.label) : []));
    }
    function getClassname(props) {
        var className = "ui";
        if (props.horizontal) {
            className += " horizontal";
        }
        if (props.text) {
            className += " text";
        }
        if (props.inverted) {
            className += " inverted";
        }
        if (typeof (props.color) !== "undefined") {
            className += enums_1.Color.ToClassname(props.color);
        }
        if (typeof (props.size) !== "undefined") {
            className += enums_1.Size.ToClassname(props.size);
        }
        if (typeof (props.float) !== "undefined") {
            className += enums_1.Float.ToClassname(props.float);
        }
        className += " statistic";
        return className;
    }
    function isArgs(obj) {
        return typeof (obj) !== "undefined" && (typeof (obj.props) !== "undefined" ||
            typeof (obj.content) !== "undefined" && (types_1.isDOMContent(obj.content) ||
                types_1.isDOMContent(obj.content.main) || types_1.isDOMContent(obj.content.label)));
    }
})(Statistic = exports.Statistic || (exports.Statistic = {}));
//# sourceMappingURL=index.js.map