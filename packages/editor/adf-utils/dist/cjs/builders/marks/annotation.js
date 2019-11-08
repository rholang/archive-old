"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var apply_mark_1 = require("../utils/apply-mark");
exports.annotation = function (attrs) { return function (maybeNode) {
    return apply_mark_1.applyMark({ type: 'annotation', attrs: attrs }, maybeNode);
}; };
//# sourceMappingURL=annotation.js.map