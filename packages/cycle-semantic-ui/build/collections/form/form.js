"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var enums_1 = require("../../enums");
var dom_1 = require("@cycle/dom");
var types_1 = require("../../types");
var common_1 = require("../../common");
var utils_1 = require("../../utils");
var Form;
(function (Form) {
    function render(arg1, arg2) {
        return common_1.renderPropsAndContent(form, common_1.makeIsArgs(types_1.isDOMContent), types_1.isDOMContent, arg1, arg2);
    }
    Form.render = render;
    function run(sources, scope) {
        if (scope === void 0) { scope = utils_1.getScope(); }
        return common_1.runPropsAndContent(sources, form, ".form", scope);
    }
    Form.run = run;
    function form(args) {
        var content = args.content ? types_1.isDOMContent(args.content) ? args.content : args.content.main : [];
        var props = typeof (args.props) !== "undefined" ? args.props : {};
        return dom_1.div({ props: { className: getClassname(props) } }, content);
    }
    function getClassname(props) {
        var className = "ui";
        if (props.loading) {
            className += " loading";
        }
        if (props.equalWidth) {
            className += " equal width";
        }
        if (props.inverted) {
            className += " inverted";
        }
        if (typeof (props.size) !== "undefined") {
            className += enums_1.Size.ToClassname(props.size);
        }
        className += " form";
        return className;
    }
})(Form = exports.Form || (exports.Form = {}));
//# sourceMappingURL=form.js.map