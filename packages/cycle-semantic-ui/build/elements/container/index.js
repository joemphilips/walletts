"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var dom_1 = require("@cycle/dom");
var types_1 = require("../../types");
var common_1 = require("../../common");
var utils_1 = require("../../utils");
var Container;
(function (Container) {
    function run(sources, scope) {
        if (scope === void 0) { scope = utils_1.getScope(); }
        return common_1.runPropsAndContent(sources, container, ".container", scope);
    }
    Container.run = run;
    function render(arg1) {
        return common_1.renderPropsAndContent(container, common_1.makeIsArgs(types_1.isDOMContent), types_1.isDOMContent, arg1);
    }
    Container.render = render;
    function from(node) {
        return common_1.addClassName(node, "container");
    }
    Container.from = from;
    function container(args) {
        var content = args.content ? types_1.isDOMContent(args.content) ? args.content : args.content.main : [];
        return dom_1.div({ props: { className: "ui container" } }, content);
    }
})(Container = exports.Container || (exports.Container = {}));
//# sourceMappingURL=index.js.map