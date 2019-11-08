"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var service_1 = tslib_1.__importDefault(require("./service"));
/**
 * Returns a sequence of tracking analytics event and the provided function.
 *
 * Usage:
 *
 *     let doSomething = function(a, b) { // ... }
 *     doSomething = trackAndInvoke('atlassian.editor.dosomething', doSomething);
 *
 *     doSomething(); // This will send analytics event and call the original function.
 *
 */
function trackAndInvoke(analyticsEventName, fn) {
    return function (a, b, c, d) {
        var result = fn(a, b, c, d);
        if (result) {
            service_1.default.trackEvent(analyticsEventName);
        }
        return result;
    };
}
exports.default = trackAndInvoke;
//# sourceMappingURL=trackAndInvoke.js.map