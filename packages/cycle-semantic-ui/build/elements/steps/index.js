"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var dom_1 = require("@cycle/dom");
var enums_1 = require("../../enums");
var utils_1 = require("../../utils");
var common_1 = require("../../common");
var Steps;
(function (Steps) {
    function render(arg1, arg2) {
        return common_1.renderPropsAndContent(steps, common_1.makeIsArgs(isContent), isContent, arg1, arg2);
    }
    Steps.render = render;
    function run(sources, scope) {
        if (scope === void 0) { scope = utils_1.getScope(); }
        return common_1.runPropsAndContent(sources, steps, ".steps", scope);
    }
    Steps.run = run;
    function from(node, props) {
        if (props === void 0) { props = {}; }
        return common_1.addClassName(node, getClassname(props, node.children.length));
    }
    Steps.from = from;
    function steps(args) {
        var props = args.props ? args.props : {};
        var content = args.content ? isContent(args.content) ? args.content : args.content.main : [];
        return dom_1.div({ props: { className: getClassname(props, content.length) } }, content.map(stepItem));
    }
    function stepItem(item, i) {
        var icon = item.icon ? item.icon : [];
        var header = item.header ? dom_1.div({ props: { className: "title" } }, item.header) : [];
        var description = item.description ? dom_1.div({ props: { className: "description" } }, item.description) : [];
        var content = [].concat(header, description);
        var children = [].concat(icon, content.length > 0 ? [dom_1.div({ props: { className: "content" } }, content)] : []);
        return item.href
            ? dom_1.a({ props: { id: i, className: getStepClassname(item), href: item.href } }, children)
            : dom_1.div({ props: { id: i, className: getStepClassname(item) } }, children);
    }
    function getClassname(props, length) {
        var className = "ui";
        if (props.vertical) {
            className += " vertical";
        }
        if (props.stackable) {
            className += " stackable";
        }
        if (props.fluid) {
            className += " fluid";
        }
        if (props.equalWidth) {
            className += utils_1.numToText(length);
        }
        if (typeof (props.size) !== "undefined") {
            className += enums_1.Size.ToClassname(props.size);
        }
        if (typeof (props.attachment) !== "undefined") {
            className += enums_1.Attachment.ToClassname(props.attachment);
        }
        className += " steps";
        return className;
    }
    function getStepClassname(item) {
        var className = "";
        if (item.active) {
            className += "active";
        }
        if (item.completed) {
            className += " completed";
        }
        if (item.disabled) {
            className += " disabled";
        }
        if (item.link) {
            className += " link";
        }
        className += " step";
        return className;
    }
    function isContent(obj) {
        return obj instanceof Array;
    }
})(Steps = exports.Steps || (exports.Steps = {}));
//# sourceMappingURL=index.js.map