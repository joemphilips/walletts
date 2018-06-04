"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var dom_1 = require("@cycle/dom");
var enums_1 = require("../../enums");
var common_1 = require("../../common");
var utils_1 = require("../../utils");
var Icon;
(function (Icon) {
    function run(sources, scope) {
        if (scope === void 0) { scope = utils_1.getScope(); }
        return common_1.runPropsAndContent(sources, icon, ".icon", scope);
    }
    Icon.run = run;
    function render(arg1, arg2) {
        return common_1.renderPropsAndContent(icon, common_1.makeIsArgs(isIconType), isIconType, arg1, arg2);
    }
    Icon.render = render;
    function from(node, props, content) {
        if (props === void 0) { props = {}; }
        if (content === void 0) { content = -1; }
        return common_1.addClassName(node, getClassname(props, content));
    }
    Icon.from = from;
    function icon(args) {
        var props = args.props ? args.props : {};
        var content = typeof (args.content) !== "undefined" ? isIconType(args.content) ? args.content : args.content.main : -1;
        var className = getClassname(props, content).substring(1);
        return className !== "icon" ? dom_1.i({ props: { className: className } }) : undefined;
    }
    function getClassname(props, content) {
        var className = "";
        if (props.button) {
            className += " button";
        }
        if (props.bordered) {
            className += " bordered";
        }
        if (props.circular) {
            className += " circular";
        }
        if (props.disabled) {
            className += " disabled";
        }
        if (props.loading) {
            className += " loading";
        }
        if (props.fitted) {
            className += " fitted";
        }
        if (props.link) {
            className += " link";
        }
        if (props.flipped) {
            className += " flipped";
        }
        if (props.rotated) {
            className += " rotated";
        }
        if (props.inverted) {
            className += " inverted";
        }
        if (typeof (props.size) !== "undefined") {
            className += enums_1.Size.ToClassname(props.size);
        }
        if (typeof (props.color) !== "undefined") {
            className += enums_1.Color.ToClassname(props.color);
        }
        className += enums_1.IconType.ToClassname(content);
        return className + " icon";
    }
    function isIconType(obj) {
        return typeof (obj) === "string" || typeof (obj) === "number";
    }
})(Icon = exports.Icon || (exports.Icon = {}));
//# sourceMappingURL=index.js.map