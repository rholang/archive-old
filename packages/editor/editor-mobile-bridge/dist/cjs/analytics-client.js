"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.analyticsBridgeClient = function (handleAnalyticsEvent) {
    // Add the eventType to all events before sending them through
    var handleEvent = function (eventType, event) {
        event.eventType = eventType;
        handleAnalyticsEvent(event);
    };
    return {
        sendUIEvent: function (event) { return handleEvent('ui', event); },
        sendOperationalEvent: function (event) { return handleEvent('operational', event); },
        sendTrackEvent: function (event) { return handleEvent('track', event); },
        sendScreenEvent: function (event) { return handleEvent('screen', event); },
    };
};
//# sourceMappingURL=analytics-client.js.map