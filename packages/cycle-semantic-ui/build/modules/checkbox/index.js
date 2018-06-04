"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var xstream_1 = require("xstream");
var isolate_1 = require("@cycle/isolate");
var dom_1 = require("@cycle/dom");
var types_1 = require("../../types");
var common_1 = require("../../common");
var utils_1 = require("../../utils");
var Checkbox;
(function (Checkbox) {
    function render(arg1, arg2) {
        return common_1.renderPropsAndContent(checkbox, common_1.makeIsArgs(types_1.isDOMContent), types_1.isDOMContent, arg1, arg2);
    }
    Checkbox.render = render;
    function run(sources, scope) {
        if (scope === void 0) { scope = utils_1.getScope(); }
        function main(sources) {
            sources.props$ = sources.props$ ? sources.props$ : xstream_1.default.of({});
            sources.content$ = sources.content$ ? sources.content$ : xstream_1.default.of("");
            var evt = function (type) { return sources.DOM.select(".checkbox").events(type); };
            var props$ = sources.props$.remember();
            var vTree$ = xstream_1.default.combine(props$, sources.content$).map(function (_a) {
                var props = _a[0], content = _a[1];
                return checkbox({ props: props, content: content });
            });
            var value$ = evt("click").map(function (evt) { return evt.srcElement.checked; });
            return {
                DOM: vTree$,
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
    Checkbox.run = run;
    function checkbox(args) {
        var props = args.props ? args.props : {};
        var content = args.content ? types_1.isDOMContent(args.content) ? args.content : args.content.main : [];
        return dom_1.div({ props: { className: getClassName(props) } }, [
            dom_1.input({
                props: {
                    type: props.radio ? "radio" : "checkbox",
                    name: props.name,
                    checked: props.checked,
                    disabled: props.readonly || props.disabled
                }
            }),
            dom_1.label({ props: { for: props.name } }, props.fitted ? "" : content)
        ]);
    }
    function getClassName(props) {
        var className = "ui";
        if (props.readonly) {
            className += " read-only";
        }
        if (props.checked) {
            className += " checked";
        }
        if (props.disabled) {
            className += " disabled";
        }
        if (props.fitted) {
            className += " fitted";
        }
        if (props.radio) {
            className += " radio";
        }
        if (props.toggle) {
            className += " toggle";
        }
        if (props.slider) {
            className += " slider";
        }
        return className + " checkbox";
    }
})(Checkbox = exports.Checkbox || (exports.Checkbox = {}));
//# sourceMappingURL=index.js.map