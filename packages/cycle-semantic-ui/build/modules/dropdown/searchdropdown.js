"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var xstream_1 = require("xstream");
var isolate_1 = require("@cycle/isolate");
var delay_1 = require("xstream/extra/delay");
var dom_1 = require("@cycle/dom");
var common_1 = require("./common");
var menu_1 = require("../../collections/menu");
var icon_1 = require("../../elements/icon");
var transition_1 = require("../../modules/transition");
var types_1 = require("../../types");
var enums_1 = require("../../enums");
var utils_1 = require("../../utils");
function run(sources, scope) {
    if (scope === void 0) { scope = utils_1.getScope(); }
    function main(sources) {
        /*** Main streams ***/
        var evt = function (type) { return sources.DOM.select(".dropdown").events(type); };
        var content$ = (sources.content$ ? sources.content$.map(function (c) { return c instanceof Array ? c : c.main; }) : xstream_1.default.of([]));
        var props$ = (sources.props$ ? sources.props$.remember() : xstream_1.default.of({}));
        var value$proxy = xstream_1.default.create();
        var initialValue$ = props$.map(function (props) { return props.initial; }).remember();
        var value$ = initialValue$.map(function (value) { return value$proxy.startWith(value); }).flatten().remember();
        var input$ = sources.DOM.select("input").events("keyup")
            .map(function (ev) { return ev.target.value; });
        var filter$ = xstream_1.default.merge(input$, value$proxy.map(function (v) { return ""; })).startWith("");
        /** Create menu component **/
        var menuItems$ = xstream_1.default.combine(content$, value$).map(function (_a) {
            var content = _a[0], value = _a[1];
            return content.map(function (item) { return item.value === value ? Object.assign({}, item, { active: true }) : item; });
        }).remember();
        var activeItem$ = menuItems$.map(function (content) { return content.filter(function (item) { return item.active; })[0]; });
        var filteredItems$ = xstream_1.default.combine(menuItems$, filter$).map(function (_a) {
            var content = _a[0], filter = _a[1];
            return utils_1.deepArrayCopy(content.filter(function (c) { return filterContent(c, filter); }));
        }).remember();
        var menu = menu_1.Menu.run({ DOM: sources.DOM, props$: xstream_1.default.of({ submenu: true }), content$: filteredItems$ }, scope);
        var inputEnter$ = sources.DOM.select("input").events("keypress");
        var enterValue$ = inputEnter$.map(function (evt) {
            return (evt.charCode === 13 || evt.charCode === 9) ? filteredItems$.map(function (items) { return items[0]; }).take(1) : xstream_1.default.never();
        }).flatten();
        value$proxy.imitate(xstream_1.default.merge(menu.value$, enterValue$).map(function (item) { return item.value; }));
        var transition$ = common_1.createTransition$(evt, sources.args);
        var active$ = xstream_1.default.merge(transition$.filter(function (x) { return x.direction === enums_1.Direction.In; }).mapTo(true), transition$.filter(function (x) { return x.direction === enums_1.Direction.Out; }).compose(delay_1.default(250)).mapTo(false));
        var animatedMenu = transition_1.Transition.run({ DOM: sources.DOM, target$: menu.DOM, transition$: transition$ }, scope);
        var vTree$ = xstream_1.default.combine(props$, active$, animatedMenu.DOM, filter$, activeItem$).map(function (_a) {
            var props = _a[0], isActive = _a[1], menu = _a[2], filter = _a[3], activeItem = _a[4];
            return dom_1.div({ props: { className: common_1.getClassName(isActive ? "ui active search " : "ui search", props) } }, [].concat(dom_1.input({ props: { className: "search", value: filter } }), common_1.getText(activeItem, props, sources.args && sources.args.static, filter), !props.simple ? icon_1.Icon.render(enums_1.IconType.Dropdown) : [], menu));
        });
        return {
            DOM: vTree$,
            events: function (type) { return xstream_1.default.merge(evt(type), menu.events(type), animatedMenu.events(type)); },
            value$: value$proxy
        };
    }
    if (scope === null) {
        return main(sources);
    }
    var isolatedMain = isolate_1.default(main, scope);
    return isolatedMain(sources);
}
exports.default = run;
function filterContent(item, filter) {
    function f(node) {
        if (typeof (node) === "string") {
            return node.indexOf(filter) !== -1 || !filter;
        }
        if (node.text) {
            return node.text.indexOf(filter) !== -1 || !filter;
        }
        else {
            for (var c in node.children) {
                if (f(c)) {
                    return true;
                }
            }
            return false;
        }
    }
    if (typeof (item.main) === "undefined") {
        return true;
    }
    else if (typeof (item.main) === "string") {
        return item.main.indexOf(filter) !== -1 || !filter;
    }
    else if (types_1.isVNode(item.main)) {
        return f(item.main);
    }
    else if (item.main instanceof Array) {
        for (var _i = 0, _a = item.main; _i < _a.length; _i++) {
            var c = _a[_i];
            if (common_1.isMenuItem(c)) {
                return filterContent(c, filter);
            }
            if (f(c)) {
                return true;
            }
        }
    }
    return false;
}
//# sourceMappingURL=searchdropdown.js.map