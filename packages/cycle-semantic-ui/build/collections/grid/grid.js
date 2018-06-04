"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var dom_1 = require("@cycle/dom");
var types_1 = require("../../types");
var common_1 = require("../../common");
var enums_1 = require("../../enums");
var utils_1 = require("../../utils");
var Grid;
(function (Grid) {
    function render(arg1, arg2) {
        return common_1.renderPropsAndContent(grid, common_1.makeIsArgs(types_1.isDOMContent), types_1.isDOMContent, arg1, arg2);
    }
    Grid.render = render;
    function run(sources, scope) {
        if (scope === void 0) { scope = utils_1.getScope(); }
        return common_1.runPropsAndContent(sources, grid, ".grid", scope);
    }
    Grid.run = run;
    function from(node, props) {
        if (props === void 0) { props = {}; }
        return common_1.addClassName(node, getClassname(props));
    }
    Grid.from = from;
    function grid(args) {
        var content = args.content ? types_1.isDOMContent(args.content) ? args.content : args.content.main : [];
        var props = typeof (args.props) !== "undefined" ? args.props : {};
        return dom_1.div({ props: { className: getClassname(props) } }, content);
    }
    Grid.grid = grid;
    function getClassname(props) {
        var className = "ui";
        if (props.equalWidth) {
            className += " equal width";
        }
        if (props.divided) {
            className += " divided";
        }
        if (props.verticallyDivided) {
            className += " vertically divided";
        }
        if (props.container) {
            className += " container";
        }
        if (props.celled) {
            className += " celled";
        }
        if (props.intCelled) {
            className += " internally celled";
        }
        if (props.padded) {
            className += " padded";
        }
        if (props.verticallyPadded) {
            className += " vertically padded";
        }
        if (props.horizontallyPadded) {
            className += " horizontally padded";
        }
        if (props.relaxed) {
            className += " relaxed";
        }
        if (props.veryRelaxed) {
            className += " very relaxed";
        }
        if (props.centered) {
            className += " centered";
        }
        if (props.stackable) {
            className += " stackable";
        }
        if (props.doubling) {
            className += " doubling";
        }
        if (props.reversedMobile) {
            className += " mobile reversed";
        }
        if (props.reversedTablet) {
            className += " tablet reversed";
        }
        if (props.reversedComputer) {
            className += " computer reversed";
        }
        if (props.reversedLargescreen) {
            className += " large screen reversed";
        }
        if (props.vertReversedMobile) {
            className += " mobile vertically reversed";
        }
        if (props.vertReversedTablet) {
            className += " tablet vertically reversed";
        }
        if (props.vertReversedComputer) {
            className += " computer vertically reversed";
        }
        if (props.vertReversedLargescreen) {
            className += " large screen vertically reversed";
        }
        if (props.mobileOnly) {
            className += " mobile only";
        }
        if (props.tabletOnly) {
            className += " tablet only";
        }
        if (props.computerOnly) {
            className += " computer only";
        }
        if (props.largescreenOnly) {
            className += " large screen only";
        }
        if (typeof (props.alignment) !== "undefined") {
            className += enums_1.VerticalAlignment.ToClassname(props.alignment);
        }
        if (typeof (props.textAlignment) !== "undefined") {
            className += enums_1.TextAlignment.ToClassname(props.textAlignment);
        }
        if (props.width) {
            className += utils_1.numToText(props.width) + " column";
        }
        className += " grid";
        return className;
    }
    Grid.getClassname = getClassname;
})(Grid = exports.Grid || (exports.Grid = {}));
//# sourceMappingURL=grid.js.map