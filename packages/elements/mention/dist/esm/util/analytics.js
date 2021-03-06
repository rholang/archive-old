import { OPERATIONAL_EVENT_TYPE, UI_EVENT_TYPE, } from '@atlaskit/analytics-gas-types';
import { ELEMENTS_CHANNEL } from '../_constants';
import { name as packageName, version as packageVersion, } from '../version.json';
import { isSpecialMentionText } from '../types';
export var ComponentNames;
(function (ComponentNames) {
    ComponentNames["TYPEAHEAD"] = "mentionTypeahead";
    ComponentNames["MENTION"] = "mention";
    ComponentNames["TEAM_MENTION_HIGHLIGHT"] = "teamMentionHighlight";
})(ComponentNames || (ComponentNames = {}));
export var Actions;
(function (Actions) {
    Actions["VIEWED"] = "viewed";
    Actions["CLICKED"] = "clicked";
    Actions["CLOSED"] = "closed";
})(Actions || (Actions = {}));
export var fireAnalyticsMentionTypeaheadEvent = function (props) { return function (action, duration, userIds, query) {
    if (userIds === void 0) { userIds = []; }
    if (props.createAnalyticsEvent) {
        var eventPayload = {
            action: action,
            actionSubject: ComponentNames.TYPEAHEAD,
            attributes: {
                packageName: packageName,
                packageVersion: packageVersion,
                componentName: ComponentNames.MENTION,
                duration: Math.round(duration),
                userIds: userIds,
                queryLength: query ? query.length : 0,
            },
            eventType: OPERATIONAL_EVENT_TYPE,
        };
        var analyticsEvent = props.createAnalyticsEvent(eventPayload);
        analyticsEvent.fire(ELEMENTS_CHANNEL);
    }
}; };
export var fireAnalyticsTeamMentionHighlightEvent = function (createEvent) { return function (actionSubject, action, source, actionSubjectId, viewedCount) {
    if (createEvent) {
        var eventPayload = {
            action: action,
            actionSubject: actionSubject,
            actionSubjectId: actionSubjectId,
            eventType: UI_EVENT_TYPE,
            attributes: {
                source: source,
                packageName: packageName,
                packageVersion: packageVersion,
                componentName: ComponentNames.TEAM_MENTION_HIGHLIGHT,
                viewedCount: viewedCount,
            },
        };
        var analyticsEvent = createEvent(eventPayload);
        analyticsEvent.fire(ELEMENTS_CHANNEL);
    }
}; };
export var fireAnalyticsMentionEvent = function (createEvent) { return function (actionSubject, action, text, id, accessLevel) {
    var payload = {
        action: action,
        actionSubject: actionSubject,
        eventType: UI_EVENT_TYPE,
        attributes: {
            packageName: packageName,
            packageVersion: packageVersion,
            componentName: ComponentNames.MENTION,
            accessLevel: accessLevel,
            isSpecial: isSpecialMentionText(text),
            userId: id,
        },
    };
    var event = createEvent(payload);
    event.fire(ELEMENTS_CHANNEL);
    return event;
}; };
export var fireAnalyticsMentionHydrationEvent = function (props) { return function (action, userId, fromCache, duration) {
    if (props.createAnalyticsEvent) {
        var eventPayload = {
            action: action,
            actionSubject: ComponentNames.MENTION,
            actionSubjectId: 'hydration',
            attributes: {
                packageName: packageName,
                packageVersion: packageVersion,
                componentName: ComponentNames.MENTION,
                userId: userId,
                fromCache: fromCache,
                duration: Math.round(duration),
            },
            eventType: OPERATIONAL_EVENT_TYPE,
        };
        var analyticsEvent = props.createAnalyticsEvent(eventPayload);
        analyticsEvent.fire(ELEMENTS_CHANNEL);
    }
}; };
// OLD Analytics
var MENTION_ANALYTICS_PREFIX = 'atlassian.fabric.mention';
export var fireAnalytics = function (firePrivateAnalyticsEvent) { return function (eventName, text, accessLevel) {
    if (firePrivateAnalyticsEvent) {
        firePrivateAnalyticsEvent(MENTION_ANALYTICS_PREFIX + "." + eventName, {
            accessLevel: accessLevel,
            isSpecial: isSpecialMentionText(text),
        });
    }
}; };
//# sourceMappingURL=analytics.js.map