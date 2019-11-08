"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var bridge_utils_1 = require("./bridge-utils");
var RuntimeBridgeImpl = /** @class */ (function () {
    function RuntimeBridgeImpl() {
    }
    RuntimeBridgeImpl.prototype.call = function (bridge, event) {
        var args = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            args[_i - 2] = arguments[_i];
        }
        bridge_utils_1.sendToBridge.apply(void 0, tslib_1.__spread([bridge, event], args));
    };
    return RuntimeBridgeImpl;
}());
exports.RuntimeBridgeImpl = RuntimeBridgeImpl;
exports.toRuntimeBridge = new RuntimeBridgeImpl();
function errorReporter(event) {
    var message = event.message, filename = event.filename, line = event.lineno, col = event.colno, error = event.error;
    exports.toRuntimeBridge.call('errorBridge', 'sendError', {
        message: message,
        source: filename || '',
        line: line,
        col: col,
        stackTrace: (error &&
            error.stack &&
            error.stack.split('\n').map(function (trace) { return trace.trim(); })) ||
            [],
    });
}
exports.errorReporter = errorReporter;
// Global error listener
window.addEventListener('error', errorReporter);
//# sourceMappingURL=error-reporter.js.map