import { __assign } from "tslib";
import { name as packageName, version as packageVersion, } from '../version.json';
export var ANALYTICS_CHANNEL = 'media';
export var MESSAGE_WINDOW_CLOSED = 'The auth window was closed';
export var KEY_WINDOW_CLOSED = 'authWindowClosed';
export var KEY_SENSITIVE_DATA = 'potentialSensitiveData';
export var context = {
    componentName: 'smart-cards',
    packageName: packageName,
    packageVersion: packageVersion,
};
export var fireSmartLinkEvent = function (payload, createAnalyticsEvent) {
    if (createAnalyticsEvent) {
        createAnalyticsEvent(payload).fire(ANALYTICS_CHANNEL);
    }
};
export var resolvedEvent = function (definitionId) { return ({
    action: 'resolved',
    actionSubject: 'smartLink',
    eventType: 'operational',
    attributes: __assign(__assign({}, context), (definitionId ? { definitionId: definitionId } : {})),
}); };
export var unresolvedEvent = function (status, definitionId) { return ({
    action: 'unresolved',
    actionSubject: 'smartLink',
    eventType: 'operational',
    attributes: __assign(__assign(__assign({}, context), (definitionId ? { definitionId: definitionId } : {})), { reason: status }),
}); };
export var connectSucceededEvent = function (definitionId) { return ({
    action: 'connectSucceeded',
    actionSubject: 'smartLink',
    eventType: 'operational',
    attributes: __assign(__assign({}, context), (definitionId ? { definitionId: definitionId } : {})),
}); };
export var connectFailedEvent = function (definitionId, reason) { return ({
    action: 'connectFailed',
    actionSubject: 'smartLink',
    actionSubjectId: reason,
    eventType: 'operational',
    attributes: __assign(__assign(__assign({}, context), (reason ? { reason: reason } : {})), (definitionId ? { definitionId: definitionId } : {})),
}); };
export var trackAppAccountConnected = function (definitionId) { return ({
    action: 'connected',
    actionSubject: 'applicationAccount',
    eventType: 'track',
    attributes: __assign(__assign({}, context), (definitionId ? { definitionId: definitionId } : {})),
}); };
export var uiAuthEvent = function (display, definitionId) { return ({
    action: 'clicked',
    actionSubject: 'button',
    actionSubjectId: 'connectAccount',
    eventType: 'ui',
    attributes: __assign(__assign({}, context), { definitionId: definitionId || '', display: display }),
}); };
export var uiAuthAlternateAccountEvent = function (display, definitionId) { return ({
    action: 'clicked',
    actionSubject: 'smartLink',
    actionSubjectId: 'tryAnotherAccount',
    eventType: 'ui',
    attributes: __assign(__assign({}, context), { definitionId: definitionId || '', display: display }),
}); };
export var uiCardClickedEvent = function (display, definitionId) { return ({
    action: 'clicked',
    actionSubject: 'smartLink',
    eventType: 'ui',
    attributes: __assign(__assign({}, context), { definitionId: definitionId || '', display: display }),
}); };
export var uiClosedAuthEvent = function (display, definitionId) { return ({
    action: 'closed',
    actionSubject: 'consentModal',
    eventType: 'ui',
    attributes: __assign(__assign({}, context), { definitionId: definitionId || '', display: display }),
}); };
export var screenAuthPopupEvent = function (definitionId) { return ({
    actionSubject: 'consentModal',
    eventType: 'screen',
    attributes: __assign(__assign({}, context), { definitionId: definitionId || '' }),
}); };
//# sourceMappingURL=analytics.js.map