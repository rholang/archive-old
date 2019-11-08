import { __read, __spread } from "tslib";
var debugEnabled = false;
var stacktracesEnabled = false;
var LOG_PREFIX = '[Frontend PubSub] ';
export function enableLogger(enable) {
    debugEnabled = enable;
}
export function enableStacktraces(enable) {
    stacktracesEnabled = enable;
}
export function logStacktrace() {
    if (stacktracesEnabled) {
        // eslint-disable-next-line no-console
        console.log(new Error().stack);
    }
}
export function logDebug(msg) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    if (debugEnabled) {
        // eslint-disable-next-line no-console
        console.log.apply(console, __spread([LOG_PREFIX + msg], args));
    }
}
export function logInfo(msg) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    // eslint-disable-next-line no-console
    console.info.apply(console, __spread([LOG_PREFIX + msg], args));
}
export function logError(msg) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    // eslint-disable-next-line no-console
    console.error.apply(console, __spread([LOG_PREFIX + msg], args));
}
//# sourceMappingURL=logger.js.map