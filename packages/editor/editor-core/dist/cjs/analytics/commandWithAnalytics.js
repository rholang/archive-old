"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var service_1 = tslib_1.__importDefault(require("./service"));
function commandWithAnalytics(analyticsEventName, properties) {
    return function (command) { return function (state, dispatch, view) {
        return command(state, function (tr) {
            if (dispatch) {
                service_1.default.trackEvent(analyticsEventName, properties);
                dispatch(tr);
            }
        }, view);
    }; };
}
exports.commandWithAnalytics = commandWithAnalytics;
//# sourceMappingURL=commandWithAnalytics.js.map