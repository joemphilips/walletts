"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var dom_1 = require("@cycle/dom");
var isolate_1 = require("@cycle/isolate");
var xstream_1 = require("xstream");
var types_1 = require("../../types");
var enums_1 = require("../../enums");
var common_1 = require("../../common");
var utils_1 = require("../../utils");
var Textbox;
(function (Textbox) {
    function render(arg1, arg2) {
        return common_1.renderPropsAndContent(textbox, common_1.makeIsArgs(types_1.isDOMContent), types_1.isDOMContent, arg1, arg2);
    }
    Textbox.render = render;
    function from(node, props) {
        if (props === void 0) { props = {}; }
        return common_1.addClassName(node, getClassname(props));
    }
    Textbox.from = from;
    function run(sources, scope) {
        if (scope === void 0) { scope = utils_1.getScope(); }
        function main(sources) {
            sources.props$ = sources.props$ ? sources.props$ : xstream_1.default.of({});
            sources.content$ = sources.content$ ? sources.content$ : xstream_1.default.of([]);
            var evt = function (type) { return sources.DOM.select(".input").events(type); };
            var props$ = sources.props$.remember();
            var value$ = evt("input").map(function (ev) { return ev.target.value; });
            var vtree$ = xstream_1.default.combine(props$, sources.content$).map(function (_a) {
                var props = _a[0], content = _a[1];
                return textbox({ props: props, content: content });
            });
            return {
                DOM: vtree$,
                events: evt,
                value$: value$
            };
        }
        if (scope === null) {
            return main(sources);
        }
        var isolatedMain = isolate_1.default(main, scope);
        return isolatedMain(sources);
    }
    Textbox.run = run;
    function textbox(args) {
        var props = args.props ? args.props : {};
        var content = args.content ? types_1.isDOMContent(args.content) ? args.content : args.content.main : [];
        var textbox = props.rows
            ? dom_1.textarea({ attrs: { rows: props.rows, readonly: props.readonly, placeholder: props.placeholder }, props: { value: props.value } })
            : dom_1.input({ attrs: { readonly: props.readonly, type: props.type ? props.type : "text", placeholder: props.placeholder }, props: { value: props.value } });
        return props.rightContent
            ? dom_1.div({ props: { className: getClassname(props) } }, [].concat(textbox, content))
            : dom_1.div({ props: { className: getClassname(props) } }, [].concat(content, textbox));
    }
    function getClassname(props) {
        var className = "ui";
        if (props.leftContent) {
            className += " left";
        }
        if (props.rightContent) {
            className += " right";
        }
        if (props.icon) {
            className += " icon";
        }
        if (props.labeled) {
            className += " labeled";
        }
        if (props.action) {
            className += " action";
        }
        if (props.transparent) {
            className += " transparent";
        }
        if (props.inverted) {
            className += " inverted";
        }
        if (props.focus) {
            className += " focus";
        }
        if (props.loading) {
            className += " loading";
        }
        if (props.disabled) {
            className += " disabled";
        }
        if (typeof (props.color) !== "undefined") {
            className += enums_1.Color.ToClassname(props.color);
        }
        if (typeof (props.size) !== "undefined") {
            className += enums_1.Size.ToClassname(props.size);
        }
        className += " input";
        return className;
    }
})(Textbox = exports.Textbox || (exports.Textbox = {}));
//# sourceMappingURL=index.js.map