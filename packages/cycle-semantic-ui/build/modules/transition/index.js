"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var xstream_1 = require("xstream");
var isolate_1 = require("@cycle/isolate");
var dom_1 = require("@cycle/dom");
var enums_1 = require("../../enums");
var utils_1 = require("../../utils");
var Transition;
(function (Transition) {
    function run(sources, scope) {
        if (scope === void 0) { scope = utils_1.getScope(); }
        function main(sources) {
            var evt = function (type) { return sources.DOM.select(".transition").events(type); };
            var animationEnd$ = evt("animationend").map(function (evt) { return ({
                animation: enums_1.Animation.None,
                direction: evt.currentTarget.classList.contains("out") ? enums_1.Direction.Out : enums_1.Direction.In
            }); });
            var animation$ = xstream_1.default.merge(sources.transition$, animationEnd$);
            var vTree$ = xstream_1.default.combine(animation$, sources.target$).map(function (_a) {
                var transition = _a[0], target = _a[1];
                return render(target, transition);
            });
            return {
                DOM: vTree$,
                events: evt
            };
        }
        if (scope === null) {
            return main(sources);
        }
        var isolatedMain = isolate_1.default(main, scope);
        return isolatedMain(sources);
    }
    Transition.run = run;
    function render(target, args) {
        if (args === void 0) { args = { animation: enums_1.Animation.None }; }
        var c;
        var data = utils_1.patchClassList(target, ["hidden", "visible", "animating", "transition"], getClassName(args));
        if (target.children) {
            c = target.children;
        }
        if (target.text) {
            c = target.text;
        }
        return dom_1.h(target.sel, data, c);
    }
    Transition.render = render;
    function getClassName(transition) {
        if (transition.animation === enums_1.Animation.None) {
            return transition.direction === enums_1.Direction.Out ? "transition hidden" : "transition visible";
        }
        var animation = enums_1.Animation.ToClassname(transition.animation);
        if (enums_1.Animation.isStatic(transition.animation)) {
            return "visible animating transition " + animation;
        }
        var direction = enums_1.Direction.ToClassname(transition.direction);
        if (enums_1.Animation.isDirectional(transition.animation)) {
            animation += enums_1.AnimationDirection.ToClassname(transition.animationDirection);
        }
        return "visible transition animating " + direction + animation;
    }
})(Transition = exports.Transition || (exports.Transition = {}));
//# sourceMappingURL=index.js.map