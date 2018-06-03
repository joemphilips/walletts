"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function isDOMContent(content) {
    if (!content) {
        return false;
    }
    if (typeof (content) === "string") {
        return true;
    }
    if (isVNode(content)) {
        return true;
    }
    if (content instanceof Array) {
        if (content.length === 0) {
            return true;
        }
        else {
            return isVNode(content[0]) || typeof (content[0]) === "string";
        }
        ;
    }
    return false;
}
exports.isDOMContent = isDOMContent;
function isVNode(obj) {
    return obj && obj.sel !== undefined;
}
exports.isVNode = isVNode;
//# sourceMappingURL=domcontent.js.map