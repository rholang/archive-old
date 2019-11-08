"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var analytics_gas_types_1 = require("@atlaskit/analytics-gas-types");
var resource_1 = require("@atlaskit/mention/resource");
var version_json_1 = require("../../version.json");
var utils_1 = require("./utils");
var componentName = 'mention';
exports.buildAnalyticsPayload = function (actionSubject, action, eventType, sessionId, otherAttributes) {
    if (otherAttributes === void 0) { otherAttributes = {}; }
    return ({
        action: action,
        actionSubject: actionSubject,
        eventType: eventType,
        attributes: tslib_1.__assign({ packageName: version_json_1.name,
            packageVersion: version_json_1.version,
            componentName: componentName,
            sessionId: sessionId }, otherAttributes),
    });
};
var emptyQueryResponse = {
    queryLength: 0,
    spaceInQuery: false,
};
var extractAttributesFromQuery = function (query) {
    if (query) {
        return {
            queryLength: query.length,
            spaceInQuery: query.indexOf(' ') !== -1,
        };
    }
    return emptyQueryResponse;
};
exports.buildTypeAheadCancelPayload = function (duration, upKeyCount, downKeyCount, sessionId, query) {
    var _a = extractAttributesFromQuery(query), queryLength = _a.queryLength, spaceInQuery = _a.spaceInQuery;
    return exports.buildAnalyticsPayload('mentionTypeahead', 'cancelled', analytics_gas_types_1.UI_EVENT_TYPE, sessionId, {
        duration: duration,
        downKeyCount: downKeyCount,
        upKeyCount: upKeyCount,
        queryLength: queryLength,
        spaceInQuery: spaceInQuery,
    });
};
var getPosition = function (mentionList, selectedMention) {
    if (mentionList) {
        var index = mentionList.findIndex(function (mention) { return mention.id === selectedMention.id; });
        return index === -1 ? undefined : index;
    }
    return;
};
var isClicked = function (insertType) { return insertType === 'selected'; };
exports.buildTypeAheadInsertedPayload = function (duration, upKeyCount, downKeyCount, sessionId, insertType, mention, mentionList, query) {
    var _a = extractAttributesFromQuery(query), queryLength = _a.queryLength, spaceInQuery = _a.spaceInQuery;
    return exports.buildAnalyticsPayload('mentionTypeahead', isClicked(insertType) ? 'clicked' : 'pressed', analytics_gas_types_1.UI_EVENT_TYPE, sessionId, {
        duration: duration,
        position: getPosition(mentionList, mention),
        keyboardKey: isClicked(insertType) ? undefined : insertType,
        queryLength: queryLength,
        spaceInQuery: spaceInQuery,
        isSpecial: resource_1.isSpecialMention(mention),
        accessLevel: mention.accessLevel || '',
        userType: mention.userType,
        userId: mention.id,
        upKeyCount: upKeyCount,
        downKeyCount: downKeyCount,
        memberCount: utils_1.isTeamType(mention.userType) && mention.context
            ? mention.context.memberCount
            : null,
        includesYou: utils_1.isTeamType(mention.userType) && mention.context
            ? mention.context.includesYou
            : null,
    });
};
exports.buildTypeAheadRenderedPayload = function (duration, userIds, query, teams) {
    var _a = extractAttributesFromQuery(query), queryLength = _a.queryLength, spaceInQuery = _a.spaceInQuery;
    var actionSubject = userIds ? 'mentionTypeahead' : 'teamMentionTypeahead';
    return {
        action: 'rendered',
        actionSubject: actionSubject,
        eventType: analytics_gas_types_1.OPERATIONAL_EVENT_TYPE,
        attributes: {
            packageName: version_json_1.name,
            packageVersion: version_json_1.version,
            componentName: componentName,
            duration: duration,
            userIds: userIds,
            teams: teams,
            queryLength: queryLength,
            spaceInQuery: spaceInQuery,
        },
    };
};
//# sourceMappingURL=analytics.js.map