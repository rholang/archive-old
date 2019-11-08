"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var version_json_1 = require("../version.json");
exports.ANALYTICS_CHANNEL = 'media';
exports.MESSAGE_WINDOW_CLOSED = 'The auth window was closed';
exports.KEY_WINDOW_CLOSED = 'authWindowClosed';
exports.KEY_SENSITIVE_DATA = 'potentialSensitiveData';
exports.context = {
    componentName: 'smart-cards',
    packageName: version_json_1.name,
    packageVersion: version_json_1.version,
};
exports.fireSmartLinkEvent = function (payload, createAnalyticsEvent) {
    if (createAnalyticsEvent) {
        createAnalyticsEvent(payload).fire(exports.ANALYTICS_CHANNEL);
    }
};
exports.resolvedEvent = function (definitionId) { return ({
    action: 'resolved',
    actionSubject: 'smartLink',
    eventType: 'operational',
    attributes: tslib_1.__assign(tslib_1.__assign({}, exports.context), (definitionId ? { definitionId: definitionId } : {})),
}); };
exports.unresolvedEvent = function (status, definitionId) { return ({
    action: 'unresolved',
    actionSubject: 'smartLink',
    eventType: 'operational',
    attributes: tslib_1.__assign(tslib_1.__assign(tslib_1.__assign({}, exports.context), (definitionId ? { definitionId: definitionId } : {})), { reason: status }),
}); };
exports.connectSucceededEvent = function (definitionId) { return ({
    action: 'connectSucceeded',
    actionSubject: 'smartLink',
    eventType: 'operational',
    attributes: tslib_1.__assign(tslib_1.__assign({}, exports.context), (definitionId ? { definitionId: definitionId } : {})),
}); };
exports.connectFailedEvent = function (definitionId, reason) { return ({
    action: 'connectFailed',
    actionSubject: 'smartLink',
    actionSubjectId: reason,
    eventType: 'operational',
    attributes: tslib_1.__assign(tslib_1.__assign(tslib_1.__assign({}, exports.context), (reason ? { reason: reason } : {})), (definitionId ? { definitionId: definitionId } : {})),
}); };
exports.trackAppAccountConnected = function (definitionId) { return ({
    action: 'connected',
    actionSubject: 'applicationAccount',
    eventType: 'track',
    attributes: tslib_1.__assign(tslib_1.__assign({}, exports.context), (definitionId ? { definitionId: definitionId } : {})),
}); };
exports.uiAuthEvent = function (display, definitionId) { return ({
    action: 'clicked',
    actionSubject: 'button',
    actionSubjectId: 'connectAccount',
    eventType: 'ui',
    attributes: tslib_1.__assign(tslib_1.__assign({}, exports.context), { definitionId: definitionId || '', display: display }),
}); };
exports.uiAuthAlternateAccountEvent = function (display, definitionId) { return ({
    action: 'clicked',
    actionSubject: 'smartLink',
    actionSubjectId: 'tryAnotherAccount',
    eventType: 'ui',
    attributes: tslib_1.__assign(tslib_1.__assign({}, exports.context), { definitionId: definitionId || '', display: display }),
}); };
exports.uiCardClickedEvent = function (display, definitionId) { return ({
    action: 'clicked',
    actionSubject: 'smartLink',
    eventType: 'ui',
    attributes: tslib_1.__assign(tslib_1.__assign({}, exports.context), { definitionId: definitionId || '', display: display }),
}); };
exports.uiClosedAuthEvent = function (display, definitionId) { return ({
    action: 'closed',
    actionSubject: 'consentModal',
    eventType: 'ui',
    attributes: tslib_1.__assign(tslib_1.__assign({}, exports.context), { definitionId: definitionId || '', display: display }),
}); };
exports.screenAuthPopupEvent = function (definitionId) { return ({
    actionSubject: 'consentModal',
    eventType: 'screen',
    attributes: tslib_1.__assign(tslib_1.__assign({}, exports.context), { definitionId: definitionId || '' }),
}); };
//# sourceMappingURL=analytics.js.map