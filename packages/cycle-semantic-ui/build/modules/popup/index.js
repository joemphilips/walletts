"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var dom_1 = require("@cycle/dom");
var xstream_1 = require("xstream");
var isolate_1 = require("@cycle/isolate");
var debounce_1 = require("xstream/extra/debounce");
var dropRepeats_1 = require("xstream/extra/dropRepeats");
var delay_1 = require("xstream/extra/delay");
var Tether = require("tether");
var types_1 = require("../../types");
var enums_1 = require("../../enums");
var transition_1 = require("../../modules/transition");
var utils_1 = require("../../utils");
var Popup;
(function (Popup) {
    function run(sources, scope) {
        if (scope === void 0) { scope = utils_1.getScope(); }
        function main(sources) {
            if (!(sources.args && sources.args.target$)) {
                throw ("Popups must be attached to an element");
            }
            var props$ = sources.props$ ? sources.props$ : xstream_1.default.of({ attachment: Attachment.BottomLeft });
            var content$ = sources.content$ ? sources.content$.map(function (c) { return types_1.isDOMContent(c) ? { main: c } : c; }) : xstream_1.default.of({ main: [] });
            var on$ = sources.args.on$ ? sources.args.on$ : xstream_1.default.of(true);
            var timeout = sources.args.timeout === void 0 ? 1000 : sources.args.timeout;
            var evt = function (type) { return sources.DOM.select(".popup").events(type); };
            var vTree$ = xstream_1.default.combine(props$, content$, sources.args.target$).map(function (_a) {
                var props = _a[0], content = _a[1], target = _a[2];
                return popup(props, content, target);
            });
            var mouseenter$proxy = xstream_1.default.create();
            var mouseleave$proxy = xstream_1.default.create();
            var mouserInteract$ = xstream_1.default.merge(mouseleave$proxy, mouseenter$proxy)
                .map(function (evt) { return evt.type === "mouseenter" ? enums_1.Direction.In : enums_1.Direction.Out; })
                .compose(debounce_1.default(200))
                .filter(function (dir) { return dir === enums_1.Direction.Out; });
            var active$ = on$.map(function (active) { return active ? enums_1.Direction.In : enums_1.Direction.Out; }).drop(1);
            var timer$ = active$.map(function (dir) { return dir === enums_1.Direction.Out ? xstream_1.default.never()
                : timeout === null ? xstream_1.default.never() : xstream_1.default.of(enums_1.Direction.Out).compose(delay_1.default(timeout)).endWhen(mouseenter$proxy); }).flatten();
            var transition$ = xstream_1.default.merge(active$, mouserInteract$, timer$)
                .map(function (dir) { return ({
                animation: enums_1.Animation.Fade,
                direction: dir
            }); })
                .compose(dropRepeats_1.default(function (a, b) { return a.direction === b.direction
                && a.animation === b.animation; }))
                .startWith({ animation: enums_1.Animation.None, direction: enums_1.Direction.Out });
            var animatedPopup = transition_1.Transition.run({ DOM: sources.DOM, target$: vTree$, transition$: transition$ }, scope);
            mouseenter$proxy.imitate(animatedPopup.events("mouseenter"));
            mouseleave$proxy.imitate(animatedPopup.events("mouseleave"));
            return {
                DOM: animatedPopup.DOM,
                events: function (type) { return xstream_1.default.merge(evt(type), animatedPopup.events(type)); }
            };
        }
        if (scope === null) {
            return main(sources);
        }
        var isolatedMain = isolate_1.default(main, scope);
        return isolatedMain(sources);
    }
    Popup.run = run;
    function popup(props, content, target) {
        return dom_1.div({
            props: { className: getClassname(props) }, hook: {
                insert: function (vnode) {
                    new Tether({
                        element: vnode.elm,
                        target: target.hasOwnProperty("elm") ? target["elm"] : target,
                        attachment: Attachment.ToOppositeTether(props.attachment),
                        targetAttachment: Attachment.ToTether(props.attachment)
                    });
                }
            }
        }, [].concat(content.header ? dom_1.div({ props: { className: "header" } }, content.header) : [], content.main));
    }
    function getClassname(props) {
        var className = "ui";
        if (props.wide) {
            className += " wide";
        }
        if (props.veryWide) {
            className += " very wide";
        }
        if (props.flowing) {
            className += " flowing";
        }
        if (props.inverted) {
            className += " inverted";
        }
        if (typeof (props.size) !== "undefined") {
            className += enums_1.Size.ToClassname(props.size);
        }
        if (typeof (props.color) !== "undefined") {
            className += enums_1.Color.ToClassname(props.color);
        }
        className += Attachment.ToClassname(props.attachment) + " popup";
        return className;
    }
    var Attachment;
    (function (Attachment) {
        Attachment[Attachment["TopLeft"] = 0] = "TopLeft";
        Attachment[Attachment["TopMiddle"] = 1] = "TopMiddle";
        Attachment[Attachment["TopRight"] = 2] = "TopRight";
        Attachment[Attachment["LeftCenter"] = 3] = "LeftCenter";
        Attachment[Attachment["RightCenter"] = 4] = "RightCenter";
        Attachment[Attachment["BottomLeft"] = 5] = "BottomLeft";
        Attachment[Attachment["BottomMiddle"] = 6] = "BottomMiddle";
        Attachment[Attachment["BottomRight"] = 7] = "BottomRight";
        Attachment[Attachment["Center"] = 8] = "Center";
    })(Attachment = Popup.Attachment || (Popup.Attachment = {}));
    (function (Attachment) {
        function ToEnum(attachmentstring) {
            if (typeof (attachmentstring) === "number") {
                return attachmentstring;
            }
            return Attachment[attachmentstring.split(" ").map(utils_1.capitalize).join("")];
        }
        Attachment.ToEnum = ToEnum;
        function ToClassname(attachment) {
            attachment = Attachment.ToEnum(attachment);
            switch (attachment) {
                case Attachment.TopLeft: return " top left";
                case Attachment.TopMiddle: return " top center";
                case Attachment.TopRight: return " top right";
                case Attachment.LeftCenter: return " left center";
                case Attachment.RightCenter: return " right center";
                case Attachment.BottomLeft: return " bottom left";
                case Attachment.BottomMiddle: return " bottom center";
                case Attachment.BottomRight: return " bottom right";
                case Attachment.Center: return " center";
                default: return " bottom left";
            }
        }
        Attachment.ToClassname = ToClassname;
        function ToTether(attachment) {
            attachment = Attachment.ToEnum(attachment);
            switch (attachment) {
                case Attachment.TopLeft: return "top left";
                case Attachment.TopMiddle: return "top center";
                case Attachment.TopRight: return "top right";
                case Attachment.LeftCenter: return "left middle";
                case Attachment.RightCenter: return "right middle";
                case Attachment.BottomLeft: return "bottom left";
                case Attachment.BottomMiddle: return "bottom center";
                case Attachment.BottomRight: return "bottom right";
                case Attachment.Center: return "center";
                default: return "bottom left";
            }
        }
        Attachment.ToTether = ToTether;
        function ToOppositeTether(attachment) {
            attachment = Attachment.ToEnum(attachment);
            switch (attachment) {
                case Attachment.TopLeft: return "bottom right";
                case Attachment.TopMiddle: return "bottom center";
                case Attachment.TopRight: return "bottom left";
                case Attachment.LeftCenter: return "right middle";
                case Attachment.RightCenter: return "left middle";
                case Attachment.BottomLeft: return "top right";
                case Attachment.BottomMiddle: return "top center";
                case Attachment.BottomRight: return "top left";
                case Attachment.Center: return "center";
                default: return "bottom left";
            }
        }
        Attachment.ToOppositeTether = ToOppositeTether;
    })(Attachment = Popup.Attachment || (Popup.Attachment = {}));
})(Popup = exports.Popup || (exports.Popup = {}));
//# sourceMappingURL=index.js.map