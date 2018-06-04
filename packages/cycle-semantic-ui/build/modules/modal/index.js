"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var isolate_1 = require("@cycle/isolate");
var dom_1 = require("@cycle/dom");
var xstream_1 = require("xstream");
var enums_1 = require("../../enums");
var dimmer_1 = require("../../modules/dimmer");
var icon_1 = require("../../elements/icon");
var transition_1 = require("../../modules/transition");
var types_1 = require("../../types");
var utils_1 = require("../../utils");
var Modal;
(function (Modal) {
    function run(sources, scope) {
        if (scope === void 0) { scope = utils_1.getScope(); }
        function main(sources) {
            var props$ = sources.props$ ? sources.props$ : xstream_1.default.of({});
            var content$ = sources.content$ ? sources.content$.map(function (c) { return types_1.isDOMContent(c) ? { main: c } : c; }) : xstream_1.default.of({ main: [] });
            var target$ = sources.args && sources.args.target$ ? sources.args.target$ : xstream_1.default.of("page");
            var show$ = sources.args && sources.args.on$ ? sources.args.on$ : xstream_1.default.of(true);
            var closeIcon = icon_1.Icon.run({ DOM: sources.DOM, props$: xstream_1.default.of({ link: true }), content$: xstream_1.default.of(enums_1.IconType.Close) }, scope);
            var close$ = closeIcon.events("click").mapTo(false);
            /*** Render modal ***/
            var dimmerclick$proxy = xstream_1.default.create();
            var on$ = xstream_1.default.merge(show$, dimmerclick$proxy, close$).remember();
            var modal$ = xstream_1.default.combine(content$, closeIcon.DOM).map(function (_a) {
                var content = _a[0], icon = _a[1];
                return dom_1.div({ props: { className: "ui scrolling active modal" } }, [].concat(icon, content.header ? dom_1.div({ props: { className: "header" } }, content.header) : [], dom_1.div({ props: { className: "content" } }, content.main), content.actions ? dom_1.div({ props: { className: "actions" } }, content.actions) : []));
            }).remember();
            /*** Animation ***/
            var transition$ = on$
                .fold(function (prevAnim, active) { return prevAnim.direction === enums_1.Direction.None
                ? ({ animation: enums_1.Animation.None, direction: active ? enums_1.Direction.In : enums_1.Direction.Out })
                : {
                    animation: enums_1.Animation.Scale, direction: active ? enums_1.Direction.In : enums_1.Direction.Out
                }; }, ({ animation: enums_1.Animation.None, direction: enums_1.Direction.None }));
            var animatedContent = transition_1.Transition.run({ DOM: sources.DOM, target$: modal$, transition$: transition$ }, scope === null ? "transition" : scope + "_transition");
            /*** Activate dimmer ***/
            var dimmerContent$ = animatedContent.DOM.map(function (x) { return [x]; });
            var dimmer = dimmer_1.Dimmer.run({
                DOM: sources.DOM,
                props$: props$.map(function (x) { return ({ inverted: x.inverted }); }),
                content$: dimmerContent$,
                args: { target$: target$, on$: on$ }
            }, scope);
            var dimmerclick$ = dimmer.events("mousedown")
                .filter(function (evt) { return evt.srcElement === evt.currentTarget; })
                .mapTo(false);
            dimmerclick$proxy.imitate(dimmerclick$);
            return {
                DOM: dimmer.DOM,
                events: function (type) { return xstream_1.default.merge(sources.DOM.select(".modal").events(type), dimmer.events(type), closeIcon.events(type)); }
            };
        }
        if (scope === null) {
            return main(sources);
        }
        var isolatedMain = isolate_1.default(main, scope);
        return isolatedMain(sources);
    }
    Modal.run = run;
})(Modal = exports.Modal || (exports.Modal = {}));
//# sourceMappingURL=index.js.map