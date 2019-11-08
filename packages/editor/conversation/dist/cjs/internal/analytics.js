"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
exports.ANALYTICS_CHANNEL = 'editor';
var trackEventActions;
(function (trackEventActions) {
    trackEventActions["created"] = "created";
    trackEventActions["updated"] = "updated";
    trackEventActions["deleted"] = "deleted";
})(trackEventActions = exports.trackEventActions || (exports.trackEventActions = {}));
var actionSubjectIds;
(function (actionSubjectIds) {
    actionSubjectIds["createCommentButton"] = "createCommentButton";
    actionSubjectIds["createCommentInput"] = "createCommentInput";
    actionSubjectIds["editButton"] = "editButton";
    actionSubjectIds["cancelFailedRequestButton"] = "cancelFailedRequestButton";
    actionSubjectIds["retryFailedRequestButton"] = "retryFailedRequestButton";
    actionSubjectIds["deleteButton"] = "deleteButton";
    actionSubjectIds["saveButton"] = "saveButton";
    actionSubjectIds["cancelButton"] = "cancelButton";
    actionSubjectIds["replyButton"] = "replyButton";
})(actionSubjectIds = exports.actionSubjectIds || (exports.actionSubjectIds = {}));
var eventTypes;
(function (eventTypes) {
    eventTypes["UI"] = "ui";
    eventTypes["TRACK"] = "track";
})(eventTypes = exports.eventTypes || (exports.eventTypes = {}));
function fireEvent(analyticsEvent, eventData) {
    analyticsEvent.update(tslib_1.__assign(tslib_1.__assign({}, eventData), { eventType: eventData.eventType || eventTypes.UI, attributes: tslib_1.__assign(tslib_1.__assign({}, analyticsEvent), eventData.attributes) }));
    analyticsEvent.fire(exports.ANALYTICS_CHANNEL);
}
exports.fireEvent = fireEvent;
//# sourceMappingURL=analytics.js.map