"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var enums_1 = require("../../enums");
var common_1 = require("../../common");
var utils_1 = require("../../utils");
var isolate_1 = require("@cycle/isolate");
var dom_1 = require("@cycle/dom");
var xstream_1 = require("xstream");
var Menu;
(function (Menu) {
    function render(arg1, arg2) {
        if (arg2 === void 0) { arg2 = []; }
        return common_1.renderPropsAndContent(menu, common_1.makeIsArgs(isContent), isContent, arg1, arg2);
    }
    Menu.render = render;
    function from(node, props) {
        if (props === void 0) { props = {}; }
        return common_1.addClassName(node, getClassname(props, node.children.length));
    }
    Menu.from = from;
    function run(sources, scope) {
        if (scope === void 0) { scope = utils_1.getScope(); }
        function main(sources) {
            sources.content$ = sources.content$ ? sources.content$ : xstream_1.default.of([]);
            sources.props$ = sources.props$ ? sources.props$ : xstream_1.default.of({});
            var click$ = sources.DOM.select(".menu > .item").events("click");
            var items$ = sources.content$.map(function (c) { return isContent(c) ? c : c.main; }).remember();
            var clickedId$ = click$.map(function (ev) { return parseInt(ev.currentTarget.id); })
                .filter(function (n) { return !isNaN(n) && typeof (n) !== "undefined"; });
            var clickedItem$ = items$.map(function (items) { return clickedId$.map(function (id) { return items[id]; }); }).flatten()
                .filter(function (item) { return !item.disabled; });
            var vtree$ = xstream_1.default.combine(sources.props$, items$).map(function (_a) {
                var props = _a[0], content = _a[1];
                return menu({ props: props, content: content });
            });
            return {
                DOM: vtree$,
                events: function (type) { return sources.DOM.select(".menu").events(type); },
                value$: clickedItem$
            };
        }
        if (scope === null) {
            return main(sources);
        }
        var isolatedMain = isolate_1.default(main, scope);
        return isolatedMain(sources);
    }
    Menu.run = run;
    function menu(args) {
        var props = args.props ? args.props : {};
        var content = args.content ? isContent(args.content) ? args.content : args.content.main : [];
        return dom_1.div({ props: { className: getClassname(props, content.length) } }, content.map(renderItem));
    }
    function getClassname(props, length) {
        var className = "ui";
        if (props.secondary) {
            className += " secondary";
        }
        if (props.fluid) {
            className += " fluid";
        }
        if (props.right) {
            className += " right";
        }
        if (props.pointing) {
            className += " pointing";
        }
        if (props.tabular) {
            className += " tabular";
        }
        if (props.text) {
            className += " text";
        }
        if (props.vertical) {
            className += " vertical";
        }
        if (props.pagination) {
            className += " pagination";
        }
        if (props.fixed) {
            className += " fixed";
        }
        if (props.stackable) {
            className += " stackable";
        }
        if (props.inverted) {
            className += " inverted";
        }
        if (props.icon) {
            className += " icon";
        }
        if (props.labeledIcons) {
            className += " labeled icon";
        }
        if (props.compact) {
            className += " compact";
        }
        if (props.borderless) {
            className += " borderless";
        }
        if (props.equalWidth) {
            className += utils_1.numToText(length) + " item";
        }
        if (typeof (props.color) !== "undefined") {
            className += enums_1.Color.ToClassname(props.color);
        }
        if (typeof (props.attachment) !== "undefined") {
            className += enums_1.Attachment.ToClassname(props.attachment);
        }
        if (typeof (props.size) !== "undefined") {
            className += enums_1.Size.ToClassname(props.size);
        }
        className += " menu";
        if (props.submenu) {
            className = className.substring(3);
        }
        return className;
    }
    function getItemClassname(item) {
        var className = "";
        if (item.active) {
            className += " active";
        }
        if (item.header) {
            className += " header";
        }
        if (item.fitted) {
            className += " fitted";
        }
        if (item.verticallyFitted) {
            className += " vertically fitted";
        }
        if (item.horizontallyFitted) {
            className += " horizontally fitted";
        }
        if (item.link) {
            className += " link";
        }
        if (item.icon) {
            className += " icon";
        }
        if (item.disabled) {
            className += " disabled";
        }
        if (typeof (item.float) !== "undefined") {
            className += enums_1.Float.ToClassname(item.float);
        }
        if (typeof (item.color) !== "undefined") {
            className += enums_1.Color.ToClassname(item.color);
        }
        className += " item";
        className = className.substring(1);
        return className;
    }
    function renderItem(item, id) {
        if (item.divider) {
            return dom_1.div({ props: { className: "divider" } });
        }
        if (item.headerOnly) {
            return dom_1.div({ props: { className: "header" } }, item.main);
        }
        if (item.rightMenu) {
            return dom_1.div({ props: { className: "right menu" } }, item.main.map(renderItem));
        }
        if (item.dropdown) {
            var content = item.main;
            content.data.props.className += " " + getItemClassname(item);
            return content;
        }
        if (item.href) {
            return dom_1.a({ props: { className: getItemClassname(item), id: id, href: item.href } }, item.main);
        }
        return dom_1.div({ props: { className: getItemClassname(item), id: id } }, item.main);
    }
    function isContent(obj) {
        return obj instanceof Array && (obj.length === 0 ||
            typeof (obj[0].main) !== "undefined" ||
            typeof (obj[0].divider) !== "undefined" ||
            typeof (obj[0].headerOnly) !== "undefined");
    }
})(Menu = exports.Menu || (exports.Menu = {}));
//# sourceMappingURL=index.js.map