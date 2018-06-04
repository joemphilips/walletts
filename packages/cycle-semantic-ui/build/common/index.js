"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var xstream_1 = require("xstream");
var isolate_1 = require("@cycle/isolate");
function addClassName(node, className) {
    if (!node.data) {
        node.data = { props: { className: className } };
    }
    else if (node.data.props) {
        if (node.data.props.className === void 0) {
            node.data.props.className = className;
        }
        else if (className.indexOf("ui") !== -1) {
            node.data.props.className = node.data.props.className + className.substr(2);
        }
        else {
            node.data.props.className = node.data.props.className + " " + className;
        }
    }
    else if (node.data.attrs) {
        if (node.data.attrs.className === void 0) {
            node.data.attrs.className = className;
        }
        else if (className.indexOf("ui") !== -1) {
            node.data.attrs.className = node.data.attrs.className + className.substr(2);
        }
        else {
            node.data.attrs.className = node.data.attrs.className + " " + className;
        }
    }
    else {
        node.data.props = { className: className };
    }
    return node;
}
exports.addClassName = addClassName;
//Common render function for all basic Components
//Reformats the various syntaxes into StyleAndContentArgs 
function renderPropsAndContent(renderFn, isArgs, isB, arg1, arg2) {
    if (isArgs(arg1)) {
        return renderFn(arg1);
    }
    var args = {};
    if (isB(arg1)) {
        args.props = {};
        args.content = arg1;
    }
    else {
        args.props = arg1 || {};
        args.content = arg2;
    }
    return renderFn(args);
}
exports.renderPropsAndContent = renderPropsAndContent;
//Common run function for all basic Components
//Isolates the rendered component and exposes events
function runPropsAndContent(sources, render, selector, scope) {
    function main(sources) {
        sources.props$ = sources.props$ ? sources.props$ : xstream_1.default.of({});
        sources.content$ = sources.content$ ? sources.content$ : xstream_1.default.of(undefined);
        var vTree$ = xstream_1.default.combine(sources.props$, sources.content$)
            .map(function (_a) {
            var props = _a[0], content = _a[1];
            return render({ props: props, content: content });
        });
        return {
            DOM: vTree$,
            events: function (type) { return sources.DOM.select(selector).events(type); },
        };
    }
    if (scope === null) {
        return main(sources);
    }
    var isolatedMain = isolate_1.default(main, scope);
    return isolatedMain(sources);
}
exports.runPropsAndContent = runPropsAndContent;
function makeIsArgs(isB) {
    return (function (obj) { return isArgs(obj, isB); });
}
exports.makeIsArgs = makeIsArgs;
function isArgs(obj, isB) {
    return obj && (typeof (obj.props) !== "undefined" ||
        (typeof (obj.content) !== "undefined" && (isB(obj.content) || isB(obj.content.main))));
}
exports.isArgs = isArgs;
//# sourceMappingURL=index.js.map