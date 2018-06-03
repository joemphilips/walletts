"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var xstream_1 = require("xstream");
var dropRepeats_1 = require("xstream/extra/dropRepeats");
var dom_1 = require("@cycle/dom");
var index_1 = require("../../index");
var Tabs;
(function (Tabs) {
    function run(sources) {
        var menuProps$ = sources.menuProps$ ? sources.menuProps$ : xstream_1.default.of({ tabular: true, attachment: index_1.Attachment.Top });
        var segmentProps$ = sources.segmentProps$ ? sources.segmentProps$ : xstream_1.default.of({ attachment: index_1.Attachment.Bottom });
        var menuValue$ = xstream_1.default.create();
        var activeTab$ = menuValue$.startWith(sources.active ? sources.active : sources.labels[0]).compose(dropRepeats_1.default()).remember();
        var menu = index_1.Menu.run({
            DOM: sources.DOM,
            props$: menuProps$,
            content$: activeTab$.map(function (activeTab) {
                return sources.labels.map(function (label) {
                    return ({
                        link: true,
                        active: activeTab === label,
                        main: label
                    });
                });
            })
        });
        menuValue$.imitate(menu.value$.map(function (x) { return x.body; }));
        var tabContent$ = activeTab$.map(function (tab) { return xstream_1.default.merge(xstream_1.default.of([dom_1.div()]), sources.content[sources.labels.indexOf(tab)]); }).flatten();
        var vTree$ = xstream_1.default.combine(menu.DOM, tabContent$, segmentProps$).map(function (_a) {
            var menu = _a[0], tabcontent = _a[1], segmentProps = _a[2];
            return dom_1.div([
                menu,
                index_1.Segment.render(segmentProps, tabcontent)
            ]);
        });
        return {
            DOM: vTree$,
            active$: activeTab$
        };
    }
    Tabs.run = run;
})(Tabs = exports.Tabs || (exports.Tabs = {}));
//# sourceMappingURL=index.js.map