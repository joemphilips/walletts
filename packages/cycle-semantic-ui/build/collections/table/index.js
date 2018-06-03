"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var dom_1 = require("@cycle/dom");
var types_1 = require("../../types");
var enums_1 = require("../../enums");
var common_1 = require("../../common");
var utils_1 = require("../../utils");
var Table;
(function (Table) {
    function render(arg1, arg2) {
        return common_1.renderPropsAndContent(tableR, isArgs, isMain, arg1, arg2);
    }
    Table.render = render;
    function run(sources, scope) {
        if (scope === void 0) { scope = utils_1.getScope(); }
        return common_1.runPropsAndContent(sources, tableR, ".table", scope);
    }
    Table.run = run;
    function from(node, props) {
        if (props === void 0) { props = {}; }
        return common_1.addClassName(node, getClassname(props));
    }
    Table.from = from;
    function tableR(args) {
        var props = args.props ? args.props : {};
        var content = args.content ? isContent(args.content) ? args.content : { main: args.content } : { main: [] };
        var header = content.header ? dom_1.thead([dom_1.tr(content.header.map(function (h) { return dom_1.th(h); }))]) : [];
        var footer;
        if (types_1.isDOMContent(content.footer)) {
            footer = dom_1.tfoot(content.footer);
        }
        else {
            footer = content.footer ? dom_1.tfoot([dom_1.tr(content.footer.map(function (f) { return dom_1.th(f); }))]) : [];
        }
        return dom_1.table({ props: { className: getClassname(props) } }, [].concat(header, dom_1.tbody(content.main.map(function (r) { return dom_1.tr(r.map(function (c) { return dom_1.td(c); })); })), footer));
    }
    function getClassname(props) {
        var className = "ui";
        if (props.singleLine) {
            className += " single line";
        }
        if (props.fixed) {
            className += " fixed";
        }
        if (props.selectable) {
            className += " selectable";
        }
        if (props.striped) {
            className += " striped";
        }
        if (props.celled) {
            className += " celled";
        }
        if (props.basic) {
            className += " basic";
        }
        if (props.veryBasic) {
            className += " very basic";
        }
        if (props.collapsing) {
            className += " collapsing";
        }
        if (props.padded) {
            className += " padded";
        }
        if (props.veryPadded) {
            className += " very padded";
        }
        if (props.compact) {
            className += " compact";
        }
        if (props.veryCompact) {
            className += " very compact";
        }
        if (typeof (props.size) !== "undefined") {
            className += enums_1.Size.ToClassname(props.size);
        }
        if (typeof (props.color) !== "undefined") {
            className += enums_1.Color.ToClassname(props.color);
        }
        className += " table";
        return className;
    }
    function isArgs(obj) {
        return typeof (obj) !== "undefined" && (typeof (obj.props) !== "undefined" ||
            (typeof (obj.content) !== "undefined" && (isContent(obj.content) || isMain(obj.content))));
    }
    function isContent(content) {
        return content !== undefined && (content.main !== undefined ||
            (content.header !== undefined ||
                content.footer !== undefined));
    }
    function isMain(obj) {
        return typeof (obj) !== "undefined" && obj instanceof Array;
    }
})(Table = exports.Table || (exports.Table = {}));
//# sourceMappingURL=index.js.map