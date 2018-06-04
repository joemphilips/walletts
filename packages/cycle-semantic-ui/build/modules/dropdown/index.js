"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("../../utils");
var searchdropdown_1 = require("./searchdropdown");
var dropdown_1 = require("./dropdown");
var Dropdown;
(function (Dropdown) {
    function run(sources, scope) {
        if (scope === void 0) { scope = utils_1.getScope(); }
        if (sources.args && sources.args.search) {
            return searchdropdown_1.default(sources, scope);
        }
        else {
            return dropdown_1.default(sources, scope);
        }
    }
    Dropdown.run = run;
})(Dropdown = exports.Dropdown || (exports.Dropdown = {}));
//# sourceMappingURL=index.js.map