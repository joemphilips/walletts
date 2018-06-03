"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var xstream_1 = require("xstream");
var isolate_1 = require("@cycle/isolate");
var dom_1 = require("@cycle/dom");
var icon_1 = require("../../elements/icon");
var transition_1 = require("../../modules/transition");
var types_1 = require("../../types");
var enums_1 = require("../../enums");
var common_1 = require("../../common");
var utils_1 = require("../../utils");
var Message;
(function (Message) {
    function render(arg1, arg2) {
        return common_1.renderPropsAndContent(message, isArgs, types_1.isDOMContent, arg1, arg2);
    }
    Message.render = render;
    function from(node, props) {
        if (props === void 0) { props = {}; }
        return common_1.addClassName(node, getClassname(props));
    }
    Message.from = from;
    function run(sources, scope) {
        if (scope === void 0) { scope = utils_1.getScope(); }
        function main(sources) {
            var props$ = sources.props$ ? sources.props$ : xstream_1.default.of({});
            var content$ = sources.content$ ? sources.content$.map(function (c) { return types_1.isDOMContent(c) ? { main: c } : c; }) : xstream_1.default.of({ main: [] });
            var on$ = sources.args && sources.args.on$ ? sources.args.on$ : xstream_1.default.of(true);
            var vTree$, active$, icon;
            if (sources.args && sources.args.closeable) {
                icon = icon_1.Icon.run({ DOM: sources.DOM, content$: xstream_1.default.of(enums_1.IconType.Close) }, scope);
                var close$ = icon.events("click").mapTo(false);
                vTree$ = xstream_1.default.combine(props$, content$, icon.DOM)
                    .map(function (_a) {
                    var props = _a[0], content = _a[1], closeIcon = _a[2];
                    return message({ props: props, content: content }, closeIcon);
                });
                active$ = xstream_1.default.merge(on$, close$);
            }
            else {
                vTree$ = xstream_1.default.combine(props$, content$).map(function (_a) {
                    var props = _a[0], content = _a[1];
                    return message({ props: props, content: content });
                });
                active$ = on$;
            }
            var transition$ = active$.fold(function (prevAnim, active) { return prevAnim.direction === enums_1.Direction.None
                ? { animation: enums_1.Animation.None, direction: active ? enums_1.Direction.In : enums_1.Direction.Out }
                : { animation: enums_1.Animation.Fade, direction: active ? enums_1.Direction.In : enums_1.Direction.Out }; }, { animation: enums_1.Animation.None, direction: enums_1.Direction.None });
            var animation = transition_1.Transition.run({ DOM: sources.DOM, target$: vTree$, transition$: transition$ }, scope);
            var evt;
            if (sources.args && sources.args.closeable) {
                evt = function (type) { return xstream_1.default.merge(sources.DOM.select(".message").events(type), icon.events(type), animation.events(type)); };
            }
            else {
                evt = function (type) { return sources.DOM.select(".message").events(type); };
            }
            return {
                DOM: animation.DOM,
                events: evt
            };
        }
        if (scope === null) {
            return main(sources);
        }
        var isolatedMain = isolate_1.default(main, scope);
        return isolatedMain(sources);
    }
    Message.run = run;
    function message(args, closeIcon) {
        var props = args.props ? args.props : {};
        var content = args.content ? types_1.isDOMContent(args.content) ? { main: args.content } : args.content : { main: [] };
        if (content.icon) {
            props.icon = true;
        }
        if (typeof (content.main) === "string") {
            content.main = [dom_1.p(content.main)];
        }
        return dom_1.div({ props: { className: getClassname(props) } }, [].concat(content.icon ? content.icon : [], closeIcon ? closeIcon : [], dom_1.div({ props: { className: "content" } }, [].concat(content.header ? dom_1.div({ props: { className: "header" } }, content.header) : [], content.main))));
    }
    function getClassname(props) {
        var className = "ui";
        if (props.icon) {
            className += " icon";
        }
        if (props.floating) {
            className += " floating";
        }
        if (props.compact) {
            className += " compact";
        }
        if (props.forceVisible) {
            className += " visible";
        }
        if (props.hidden) {
            className += " hidden";
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
        className += " message";
        return className;
    }
    function isArgs(obj) {
        return typeof (obj) !== "undefined" && (typeof (obj.props) !== "undefined" || isContent(obj.content) || types_1.isDOMContent(obj.content));
    }
    function isContent(content) {
        return content !== undefined && (types_1.isDOMContent(content.icon) || types_1.isDOMContent(content.header) || types_1.isDOMContent(content.main));
    }
})(Message = exports.Message || (exports.Message = {}));
//# sourceMappingURL=index.js.map