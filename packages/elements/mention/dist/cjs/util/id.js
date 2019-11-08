"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var uuid_1 = tslib_1.__importDefault(require("uuid"));
exports.default = (function (prefix) {
    if (prefix === void 0) { prefix = ''; }
    return prefix + "_" + uuid_1.default();
});
//# sourceMappingURL=id.js.map