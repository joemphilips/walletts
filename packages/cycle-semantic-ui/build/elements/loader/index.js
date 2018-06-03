"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var xstream_1 = require("xstream");
var isolate_1 = require("@cycle/isolate");
var dom_1 = require("@cycle/dom");
var dimmer_1 = require("../../modules/dimmer");
var types_1 = require("../../types");
var enums_1 = require("../../enums");
var common_1 = require("../../common");
var utils_1 = require("../../utils");
var Loader;
(function (Loader) {
    function render(arg1, arg2) {
        return common_1.renderPropsAndContent(loader, common_1.makeIsArgs(types_1.isDOMContent), types_1.isDOMContent, arg1, arg2);
    }
    Loader.render = render;
    function from(node, props) {
        if (props === void 0) { props = {}; }
        return common_1.addClassName(node, getClassname(props));
    }
    Loader.from = from;
    function run(sources, scope) {
        if (scope === void 0) { scope = utils_1.getScope(); }
        function main(sources) {
            sources.props$ = sources.props$ ? sources.props$ : xstream_1.default.of({ type: LoaderType.Page });
            sources.content$ = sources.content$ ? sources.content$ : xstream_1.default.of(undefined);
            var on$ = sources.args && sources.args.on$ ? sources.args.on$ : xstream_1.default.of(true);
            var props$ = sources.props$.remember();
            var vTree$ = xstream_1.default.combine(props$, sources.content$)
                .map(function (_a) {
                var props = _a[0], content = _a[1];
                return loader({ props: props, content: content });
            });
            var target$ = props$.map(function (props) { return props.type === LoaderType.Page ? xstream_1.default.of("page") : sources.args.element$; }).flatten();
            var dimmer = dimmer_1.Dimmer.run({
                DOM: sources.DOM,
                props$: props$.map(function (props) { return ({ inverted: props.inverted }); }),
                content$: vTree$.map(function (v) { return [v]; }),
                args: { on$: on$, target$: target$ }
            }, scope);
            var result$ = props$.map(function (props) { return props.type === LoaderType.Inline ? vTree$ : dimmer.DOM; }).flatten();
            return {
                DOM: result$,
                events: function (type) { return xstream_1.default.merge(sources.DOM.select(".loader").events(type), dimmer.events(type)); }
            };
        }
        if (scope === null) {
            return main(sources);
        }
        var isolatedMain = isolate_1.default(main, scope);
        return isolatedMain(sources);
    }
    Loader.run = run;
    function loader(args) {
        var props = args.props ? args.props : {};
        var content = args.content ? types_1.isDOMContent(args.content) ? args.content : args.content.main : [];
        return dom_1.div({ props: { className: getClassname(props) } }, content);
    }
    function getClassname(props) {
        var className = "ui";
        if (props.active) {
            className += " active";
        }
        if (props.centered) {
            className += " centered";
        }
        if (props.disabled) {
            className += " disabled";
        }
        if (props.indeterminate) {
            className += " indeterminate";
        }
        if (props.inverted) {
            className += " inverted";
        }
        if (props.text) {
            className += " text";
        }
        if (typeof (props.size) !== "undefined") {
            className += enums_1.Size.ToClassname(props.size);
        }
        className += LoaderType.ToClassname(typeof (props.type) !== "undefined" ? props.type : LoaderType.Page);
        return className;
    }
    var LoaderType;
    (function (LoaderType) {
        LoaderType[LoaderType["Inline"] = 0] = "Inline";
        LoaderType[LoaderType["Page"] = 1] = "Page";
        LoaderType[LoaderType["Content"] = 2] = "Content";
    })(LoaderType = Loader.LoaderType || (Loader.LoaderType = {}));
    (function (LoaderType) {
        function ToEnum(attachmentstring) {
            return typeof (attachmentstring) === "number"
                ? attachmentstring
                : LoaderType[utils_1.capitalize(attachmentstring)];
        }
        LoaderType.ToEnum = ToEnum;
        function ToClassname(type) {
            type = LoaderType.ToEnum(type);
            switch (type) {
                case LoaderType.Inline: return " inline loader";
                case LoaderType.Page: return " loader";
                case LoaderType.Content: return " loader";
            }
        }
        LoaderType.ToClassname = ToClassname;
    })(LoaderType = Loader.LoaderType || (Loader.LoaderType = {}));
})(Loader = exports.Loader || (exports.Loader = {}));
//# sourceMappingURL=index.js.map