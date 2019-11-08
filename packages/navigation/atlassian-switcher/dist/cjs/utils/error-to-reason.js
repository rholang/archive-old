"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function errorToReason(error) {
    var _a = error || {}, _b = _a.name, name = _b === void 0 ? 'Unknown' : _b, _c = _a.status, status = _c === void 0 ? undefined : _c;
    return {
        name: name,
        status: status,
    };
}
exports.errorToReason = errorToReason;
//# sourceMappingURL=error-to-reason.js.map