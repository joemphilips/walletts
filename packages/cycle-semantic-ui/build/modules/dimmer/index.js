"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var isolate_1 = require("@cycle/isolate");
var xstream_1 = require("xstream");
var dom_1 = require("@cycle/dom");
var transition_1 = require("../../modules/transition");
var utils_1 = require("../../utils");
var enums_1 = require("../../enums");
var types_1 = require("../../types");
var Dimmer;
(function (Dimmer) {
    function run(sources, scope) {
        if (scope === void 0) { scope = utils_1.getScope(); }
        function main(sources) {
            var evt = function (type) { return sources.DOM.select(".dimmable").events(type); };
            var props$ = sources.props$ ? sources.props$ : xstream_1.default.of({});
            var content$ = sources.content$ ? sources.content$.map(function (c) { return types_1.isDOMContent(c) ? c : c.main; }) : xstream_1.default.of([]);
            /*** Create animation$ ***/
            var on$ = sources.args && sources.args.on$ ? sources.args.on$.remember() : onHover(evt);
            var target$ = sources.args && sources.args.target$ ? sources.args.target$.remember() : xstream_1.default.of("page");
            var transition$ = on$
                .fold(function (prevAnim, active) { return prevAnim.direction === enums_1.Direction.None
                ? ({ animation: enums_1.Animation.None, direction: active ? enums_1.Direction.In : enums_1.Direction.Out })
                : {
                    animation: enums_1.Animation.Fade, direction: active ? enums_1.Direction.In : enums_1.Direction.Out
                }; }, ({ animation: enums_1.Animation.None, direction: enums_1.Direction.None }));
            /*** Animate content ***/
            var children$ = xstream_1.default.combine(content$, props$, target$)
                .map(function (_a) {
                var content = _a[0], props = _a[1], target = _a[2];
                return dimmer(content, props, target);
            });
            var animatedContent = transition_1.Transition.run({ DOM: sources.DOM, transition$: transition$, target$: children$ }, scope);
            /*** Render view ***/
            var vTree$ = xstream_1.default.combine(target$, animatedContent.DOM, on$)
                .map(function (_a) {
                var target = _a[0], content = _a[1], active = _a[2];
                return dimElement(target, content, active);
            });
            return {
                DOM: vTree$,
                events: function (type) { return xstream_1.default.merge(sources.DOM.select(".dimmer").events(type), animatedContent.events(type)); }
            };
        }
        if (scope === null) {
            return main(sources);
        }
        var isolatedMain = isolate_1.default(main, scope);
        return isolatedMain(sources);
    }
    Dimmer.run = run;
    function dimmer(content, props, target) {
        if (target === void 0) { target = "page"; }
        return target === "page"
            ? dom_1.div({ props: { className: "ui " + (props.inverted ? "inverted " : "") + "dimmer modals page dimmer" } }, content)
            : dom_1.div({ props: { className: "ui " + (props.inverted ? "inverted " : "") + "targetted dimmer" } }, [
                dom_1.div({ props: { className: "content" } }, [
                    dom_1.div({ props: { className: "center" } }, content)
                ])
            ]);
    }
    function dimElement(targetOrString, content, active) {
        var isPage = typeof (targetOrString) === "string";
        var target = isPage ? content : targetOrString;
        var className = isPage ? "" : "dimmable", c;
        if (active) {
            className += isPage ? "active" : " dimmed";
        }
        var data = utils_1.patchClassList(target, ["dimmable", "dimmed", "inverted", "active"], className);
        if (isPage) {
            if (target.children) {
                c = target.children;
            }
            else if (target.text) {
                c = target.text;
            }
        }
        else {
            c = utils_1.addElement(content, target, "targetted");
        }
        return dom_1.h(target.sel, data, c);
    }
    function onHover(events) {
        return xstream_1.default.merge(events("mouseenter"), events("mouseleave"))
            .map(function (evt) { return evt.type === "mouseenter"; }).startWith(false);
    }
})(Dimmer = exports.Dimmer || (exports.Dimmer = {}));
//# sourceMappingURL=index.js.map