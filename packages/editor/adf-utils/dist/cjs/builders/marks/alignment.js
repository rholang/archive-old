"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var apply_mark_1 = require("../utils/apply-mark");
exports.alignment = function (attrs) { return function (maybeNode) {
    return apply_mark_1.applyMark({ type: 'alignment', attrs: attrs }, maybeNode);
}; };
//# sourceMappingURL=alignment.js.map