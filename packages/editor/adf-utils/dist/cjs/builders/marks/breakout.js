"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var apply_mark_1 = require("../utils/apply-mark");
exports.breakout = function (attrs) { return function (maybeNode) {
    return apply_mark_1.applyMark({ type: 'breakout', attrs: attrs }, maybeNode);
}; };
//# sourceMappingURL=breakout.js.map