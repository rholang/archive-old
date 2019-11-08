export var FAILURE_ERROR = 'FAILURE_ERROR';
export function isFailureErrorAction(action) {
    return action.type === FAILURE_ERROR;
}
export function failureErrorLogger(payload) {
    return {
        type: FAILURE_ERROR,
        error: payload.error,
        info: payload.info,
    };
}
//# sourceMappingURL=failureErrorLogger.js.map