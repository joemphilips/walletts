"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var dom_1 = require("@cycle/dom");
var types_1 = require("../../types");
var utils_1 = require("../../utils");
var common_1 = require("../../common");
var Fields;
(function (Fields) {
    function render(arg1, arg2) {
        return common_1.renderPropsAndContent(fields, isArgs, types_1.isDOMContent, arg1, arg2);
    }
    Fields.render = render;
    function run(sources, scope) {
        if (scope === void 0) { scope = utils_1.getScope(); }
        return common_1.runPropsAndContent(sources, fields, ".fields", scope);
    }
    Fields.run = run;
    function fields(args) {
        var props = typeof (args.props) === "undefined" ? {} : args.props;
        var lbl = "";
        var content = [];
        if (typeof (args.content) !== "undefined") {
            if (types_1.isDOMContent(args.content)) {
                content = args.content;
            }
            else {
                lbl = args.content.label ? args.content.label : "";
                content = args.content.main ? args.content.main : [];
            }
        }
        return dom_1.div({ props: { className: getClassname(props, content) } }, [].concat(lbl ? dom_1.label(lbl) : [], content));
    }
    function getClassname(props, content) {
        var className = "ui";
        if (props.equalWidth && content.length) {
            className += utils_1.numToText(content.length);
        }
        if (props.inline) {
            className += " inline";
        }
        if (props.grouped) {
            className += " grouped";
        }
        if (props.required) {
            className += " required";
        }
        className += " fields";
        return className;
    }
    function isArgs(obj) {
        return obj && (typeof (obj.props) !== "undefined" ||
            (typeof (obj.content) !== "undefined" &&
                (types_1.isDOMContent(obj.content) || types_1.isDOMContent(obj.content.main) || types_1.isDOMContent(obj.content.label))));
    }
})(Fields = exports.Fields || (exports.Fields = {}));
//# sourceMappingURL=fields.js.map