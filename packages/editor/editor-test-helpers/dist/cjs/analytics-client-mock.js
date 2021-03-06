"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.analyticsClient = function (analyticsEventHandler) {
    if (analyticsEventHandler === void 0) { analyticsEventHandler = jest.fn(); }
    return {
        sendUIEvent: analyticsEventHandler,
        sendOperationalEvent: analyticsEventHandler,
        sendTrackEvent: analyticsEventHandler,
        sendScreenEvent: analyticsEventHandler,
    };
};
//# sourceMappingURL=analytics-client-mock.js.map