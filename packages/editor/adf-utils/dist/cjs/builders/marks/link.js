"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var apply_mark_1 = require("../utils/apply-mark");
exports.link = function (attrs) { return function (maybeNode) {
    return apply_mark_1.applyMark({ type: 'link', attrs: attrs }, maybeNode);
}; };
//# sourceMappingURL=link.js.map