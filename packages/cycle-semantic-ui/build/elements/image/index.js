"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var dom_1 = require("@cycle/dom");
var enums_1 = require("../../enums");
var common_1 = require("../../common");
var utils_1 = require("../../utils");
var Image;
(function (Image) {
    function run(sources, scope) {
        if (scope === void 0) { scope = utils_1.getScope(); }
        return common_1.runPropsAndContent(sources, image, ".image", scope);
    }
    Image.run = run;
    function render(arg1, arg2) {
        return common_1.renderPropsAndContent(image, common_1.makeIsArgs(isUrl), isUrl, arg1, arg2);
    }
    Image.render = render;
    function from(node, props) {
        if (props === void 0) { props = {}; }
        return common_1.addClassName(node, getClassname(props));
    }
    Image.from = from;
    function image(args) {
        var props = args.props ? args.props : {};
        var content = args.content ? isUrl(args.content) ? args.content : args.content.main : "";
        var image = dom_1.img({ props: { className: getClassname(props), src: content } });
        return props.href ? dom_1.a({ props: { href: props.href } }, image) : image;
    }
    Image.image = image;
    function getClassname(props) {
        var className = "ui";
        if (props.href) {
            className += " link";
        }
        if (props.hidden) {
            className += " hidden";
        }
        if (props.disabled) {
            className += " disabled";
        }
        if (props.avatar) {
            className += " avatar";
        }
        if (props.bordered) {
            className += " bordered";
        }
        if (props.spaced) {
            className += " spaced";
        }
        if (props.circular) {
            className += " circular";
        }
        if (props.rounded) {
            className += " rounded";
        }
        if (typeof (props.float) !== "undefined") {
            className += enums_1.Float.ToClassname(props.float);
        }
        if (typeof (props.size) !== "undefined") {
            className += enums_1.Size.ToClassname(props.size);
        }
        if (typeof (props.alignment) !== "undefined") {
            className += enums_1.VerticalAlignment.ToClassname(props.alignment);
        }
        return className + " image";
    }
    function isUrl(obj) {
        return typeof (obj) === "string";
    }
})(Image = exports.Image || (exports.Image = {}));
//# sourceMappingURL=index.js.map