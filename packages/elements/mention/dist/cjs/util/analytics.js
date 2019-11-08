"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var analytics_gas_types_1 = require("@atlaskit/analytics-gas-types");
var _constants_1 = require("../_constants");
var version_json_1 = require("../version.json");
var types_1 = require("../types");
var ComponentNames;
(function (ComponentNames) {
    ComponentNames["TYPEAHEAD"] = "mentionTypeahead";
    ComponentNames["MENTION"] = "mention";
    ComponentNames["TEAM_MENTION_HIGHLIGHT"] = "teamMentionHighlight";
})(ComponentNames = exports.ComponentNames || (exports.ComponentNames = {}));
var Actions;
(function (Actions) {
    Actions["VIEWED"] = "viewed";
    Actions["CLICKED"] = "clicked";
    Actions["CLOSED"] = "closed";
})(Actions = exports.Actions || (exports.Actions = {}));
exports.fireAnalyticsMentionTypeaheadEvent = function (props) { return function (action, duration, userIds, query) {
    if (userIds === void 0) { userIds = []; }
    if (props.createAnalyticsEvent) {
        var eventPayload = {
            action: action,
            actionSubject: ComponentNames.TYPEAHEAD,
            attributes: {
                packageName: version_json_1.name,
                packageVersion: version_json_1.version,
                componentName: ComponentNames.MENTION,
                duration: Math.round(duration),
                userIds: userIds,
                queryLength: query ? query.length : 0,
            },
            eventType: analytics_gas_types_1.OPERATIONAL_EVENT_TYPE,
        };
        var analyticsEvent = props.createAnalyticsEvent(eventPayload);
        analyticsEvent.fire(_constants_1.ELEMENTS_CHANNEL);
    }
}; };
exports.fireAnalyticsTeamMentionHighlightEvent = function (createEvent) { return function (actionSubject, action, source, actionSubjectId, viewedCount) {
    if (createEvent) {
        var eventPayload = {
            action: action,
            actionSubject: actionSubject,
            actionSubjectId: actionSubjectId,
            eventType: analytics_gas_types_1.UI_EVENT_TYPE,
            attributes: {
                source: source,
                packageName: version_json_1.name,
                packageVersion: version_json_1.version,
                componentName: ComponentNames.TEAM_MENTION_HIGHLIGHT,
                viewedCount: viewedCount,
            },
        };
        var analyticsEvent = createEvent(eventPayload);
        analyticsEvent.fire(_constants_1.ELEMENTS_CHANNEL);
    }
}; };
exports.fireAnalyticsMentionEvent = function (createEvent) { return function (actionSubject, action, text, id, accessLevel) {
    var payload = {
        action: action,
        actionSubject: actionSubject,
        eventType: analytics_gas_types_1.UI_EVENT_TYPE,
        attributes: {
            packageName: version_json_1.name,
            packageVersion: version_json_1.version,
            componentName: ComponentNames.MENTION,
            accessLevel: accessLevel,
            isSpecial: types_1.isSpecialMentionText(text),
            userId: id,
        },
    };
    var event = createEvent(payload);
    event.fire(_constants_1.ELEMENTS_CHANNEL);
    return event;
}; };
exports.fireAnalyticsMentionHydrationEvent = function (props) { return function (action, userId, fromCache, duration) {
    if (props.createAnalyticsEvent) {
        var eventPayload = {
            action: action,
            actionSubject: ComponentNames.MENTION,
            actionSubjectId: 'hydration',
            attributes: {
                packageName: version_json_1.name,
                packageVersion: version_json_1.version,
                componentName: ComponentNames.MENTION,
                userId: userId,
                fromCache: fromCache,
                duration: Math.round(duration),
            },
            eventType: analytics_gas_types_1.OPERATIONAL_EVENT_TYPE,
        };
        var analyticsEvent = props.createAnalyticsEvent(eventPayload);
        analyticsEvent.fire(_constants_1.ELEMENTS_CHANNEL);
    }
}; };
// OLD Analytics
var MENTION_ANALYTICS_PREFIX = 'atlassian.fabric.mention';
exports.fireAnalytics = function (firePrivateAnalyticsEvent) { return function (eventName, text, accessLevel) {
    if (firePrivateAnalyticsEvent) {
        firePrivateAnalyticsEvent(MENTION_ANALYTICS_PREFIX + "." + eventName, {
            accessLevel: accessLevel,
            isSpecial: types_1.isSpecialMentionText(text),
        });
    }
}; };
//# sourceMappingURL=analytics.js.map