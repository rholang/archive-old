"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FAILURE_ERROR = 'FAILURE_ERROR';
function isFailureErrorAction(action) {
    return action.type === exports.FAILURE_ERROR;
}
exports.isFailureErrorAction = isFailureErrorAction;
function failureErrorLogger(payload) {
    return {
        type: exports.FAILURE_ERROR,
        error: payload.error,
        info: payload.info,
    };
}
exports.failureErrorLogger = failureErrorLogger;
//# sourceMappingURL=failureErrorLogger.js.map