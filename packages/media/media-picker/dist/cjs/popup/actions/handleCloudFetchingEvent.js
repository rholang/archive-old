"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HANDLE_CLOUD_FETCHING_EVENT = 'HANDLE_CLOUD_FETCHING_EVENT';
function isHandleCloudFetchingEventAction(action) {
    return action.type === exports.HANDLE_CLOUD_FETCHING_EVENT;
}
exports.isHandleCloudFetchingEventAction = isHandleCloudFetchingEventAction;
function handleCloudFetchingEvent(file, event, payload) {
    return {
        type: exports.HANDLE_CLOUD_FETCHING_EVENT,
        file: file,
        event: event,
        payload: payload,
    };
}
exports.handleCloudFetchingEvent = handleCloudFetchingEvent;
//# sourceMappingURL=handleCloudFetchingEvent.js.map