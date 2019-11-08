"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var apply_mark_1 = require("../utils/apply-mark");
exports.subsup = function (attrs) { return function (maybeNode) { return apply_mark_1.applyMark({ type: 'subsup', attrs: attrs }, maybeNode); }; };
//# sourceMappingURL=subsup.js.map