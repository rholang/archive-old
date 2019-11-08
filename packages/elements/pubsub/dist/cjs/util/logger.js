"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var debugEnabled = false;
var stacktracesEnabled = false;
var LOG_PREFIX = '[Frontend PubSub] ';
function enableLogger(enable) {
    debugEnabled = enable;
}
exports.enableLogger = enableLogger;
function enableStacktraces(enable) {
    stacktracesEnabled = enable;
}
exports.enableStacktraces = enableStacktraces;
function logStacktrace() {
    if (stacktracesEnabled) {
        // eslint-disable-next-line no-console
        console.log(new Error().stack);
    }
}
exports.logStacktrace = logStacktrace;
function logDebug(msg) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    if (debugEnabled) {
        // eslint-disable-next-line no-console
        console.log.apply(console, tslib_1.__spread([LOG_PREFIX + msg], args));
    }
}
exports.logDebug = logDebug;
function logInfo(msg) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    // eslint-disable-next-line no-console
    console.info.apply(console, tslib_1.__spread([LOG_PREFIX + msg], args));
}
exports.logInfo = logInfo;
function logError(msg) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    // eslint-disable-next-line no-console
    console.error.apply(console, tslib_1.__spread([LOG_PREFIX + msg], args));
}
exports.logError = logError;
//# sourceMappingURL=logger.js.map