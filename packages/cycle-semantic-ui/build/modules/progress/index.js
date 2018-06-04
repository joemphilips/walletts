"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var dom_1 = require("@cycle/dom");
var types_1 = require("../../types");
var enums_1 = require("../../enums");
var common_1 = require("../../common");
var utils_1 = require("../../utils");
var Progress;
(function (Progress) {
    function render(arg1, arg2) {
        return common_1.renderPropsAndContent(progress, common_1.makeIsArgs(types_1.isDOMContent), types_1.isDOMContent, arg1, arg2);
    }
    Progress.render = render;
    function run(sources, scope) {
        if (scope === void 0) { scope = utils_1.getScope(); }
        return common_1.runPropsAndContent(sources, progress, ".progress", scope);
    }
    Progress.run = run;
    function progress(args) {
        var props = args.props ? args.props : { progress: 0 };
        var content = args.content ? types_1.isDOMContent(args.content) ? args.content : args.content.main : [];
        return dom_1.div({ props: { className: getClassname(props) } }, [
            dom_1.div({ props: { className: "bar" }, style: { width: props.progress + "%" } }, [
                dom_1.div({ props: { className: "progress" } }, [props.progress + "%"])
            ]),
            dom_1.div({ props: { className: "label" } }, content)
        ]);
    }
    function getClassname(props) {
        var className = "ui";
        if (props.active) {
            className += " active";
        }
        if (props.disabled) {
            className += " disabled";
        }
        if (props.inverted) {
            className += " inverted";
        }
        if (typeof (props.attachment) !== "undefined") {
            className += enums_1.Attachment.ToClassname(props.attachment);
        }
        if (typeof (props.size) !== "undefined") {
            className += enums_1.Size.ToClassname(props.size);
        }
        if (typeof (props.color) !== "undefined") {
            className += enums_1.Color.ToClassname(props.color);
        }
        className += " progress";
        return className;
    }
})(Progress = exports.Progress || (exports.Progress = {}));
//# sourceMappingURL=index.js.map