"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var analytics_web_client_wrapper_1 = require("../analytics-web-client-wrapper");
var process_event_payload_1 = require("./process-event-payload");
exports.handleEvent = function (event, tag, logger, client) {
    if (!event.payload) {
        return;
    }
    var payload = process_event_payload_1.processEventPayload(event, tag);
    analytics_web_client_wrapper_1.sendEvent(logger, client)(payload);
};
//# sourceMappingURL=handle-event.js.map