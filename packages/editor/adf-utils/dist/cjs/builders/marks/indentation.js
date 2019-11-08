"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var apply_mark_1 = require("../utils/apply-mark");
exports.indentation = function (attrs) { return function (maybeNode) {
    return apply_mark_1.applyMark({ type: 'indentation', attrs: attrs }, maybeNode);
}; };
//# sourceMappingURL=indentation.js.map