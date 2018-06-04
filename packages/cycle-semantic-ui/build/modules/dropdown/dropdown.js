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
var enums_1 = require("../../enums");
var utils_1 = require("../../utils");
function run(sources, scope) {
    if (scope === void 0) { scope = utils_1.getScope(); }
    function main(sources) {
        /*** Main streams ***/
        var evt = function (type) { return sources.DOM.select(".dropdown").events(type); };
        var content$ = sources.content$ ? sources.content$.map(function (c) { return c instanceof Array ? c : c.main; }) : xstream_1.default.of([]);
        var props$ = sources.props$ ? sources.props$.remember() : xstream_1.default.of({});
        var value$proxy = xstream_1.default.create();
        var initialValue$ = props$.map(function (props) { return props.initial; }).remember();
        var value$ = initialValue$.map(function (value) { return value$proxy.startWith(value); }).flatten().remember();
        var menuItems$ = xstream_1.default.combine(content$, value$).map(function (_a) {
            var content = _a[0], value = _a[1];
            return content.map(function (item) { return item.value === value ? Object.assign({}, item, { active: true }) : item; });
        }).remember();
        var activeItem$ = menuItems$.map(function (content) { return content.filter(function (item) { return item.active; })[0]; });
        var menu = menu_1.Menu.run({ DOM: sources.DOM, props$: xstream_1.default.of({ submenu: true }), content$: menuItems$ }, scope);
        value$proxy.imitate(menu.value$.map(function (item) { return item.value; }));
        var transition$ = common_1.createTransition$(evt, sources.args);
        var active$ = xstream_1.default.merge(transition$.filter(function (x) { return x.direction === enums_1.Direction.In; }).mapTo(true), transition$.filter(function (x) { return x.direction === enums_1.Direction.Out; }).compose(delay_1.default(250)).mapTo(false));
        var animatedMenu = transition_1.Transition.run({ DOM: sources.DOM, target$: menu.DOM, transition$: transition$ }, scope);
        var vTree$ = xstream_1.default.combine(props$, active$, animatedMenu.DOM, activeItem$).map(function (_a) {
            var props = _a[0], isActive = _a[1], menu = _a[2], activeItem = _a[3];
            return dom_1.div({ props: { className: common_1.getClassName(isActive ? "ui active" : "ui", props) } }, [].concat(common_1.getText(activeItem, props, sources.args && sources.args.static), !props.simple ? icon_1.Icon.render(enums_1.IconType.Dropdown) : [], menu));
        });
        return {
            DOM: vTree$,
            events: function (type) { return xstream_1.default.merge(evt(type), menu.events(type), animatedMenu.events(type)); },
            value$: menu.value$.map(function (item) { return item.value; })
        };
    }
    if (scope === null) {
        return main(sources);
    }
    var isolatedMain = isolate_1.default(main, scope);
    return isolatedMain(sources);
}
exports.default = run;
//# sourceMappingURL=dropdown.js.map