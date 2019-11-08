import { __assign } from "tslib";
import { isEmail, isTeam, isUser, } from '@atlaskit/user-picker';
import { name as packageName, version as packageVersion, } from '../version.json';
var buildAttributes = function (attributes) {
    if (attributes === void 0) { attributes = {}; }
    return (__assign({ packageName: packageName,
        packageVersion: packageVersion }, attributes));
};
var createEvent = function (eventType, action, actionSubject, actionSubjectId, attributes) {
    if (attributes === void 0) { attributes = {}; }
    return ({
        eventType: eventType,
        action: action,
        actionSubject: actionSubject,
        actionSubjectId: actionSubjectId,
        attributes: buildAttributes(attributes),
    });
};
var createScreenEvent = function (name, attributes) {
    if (attributes === void 0) { attributes = {}; }
    return ({
        eventType: 'screen',
        name: name,
        attributes: buildAttributes(attributes),
    });
};
export var CHANNEL_ID = 'fabric-elements';
export var ANALYTICS_SOURCE = 'shareModal';
export var screenEvent = function () { return createScreenEvent(ANALYTICS_SOURCE); };
export var errorEncountered = function (actionSubjectId, attributes) {
    if (attributes === void 0) { attributes = {}; }
    return createEvent('operational', 'encountered', 'error', actionSubjectId, __assign(__assign({}, attributes), { source: ANALYTICS_SOURCE }));
};
// = share dialog invoked. Not to be confused with "share submitted"
export var shareTriggerButtonClicked = function () {
    return createEvent('ui', 'clicked', 'button', 'share');
};
export var cancelShare = function (start) {
    return createEvent('ui', 'pressed', 'keyboardShortcut', 'cancelShare', {
        source: ANALYTICS_SOURCE,
        duration: duration(start),
    });
};
export var shortUrlRequested = function () {
    return createEvent('operational', 'requested', 'shortUrl', undefined, {
        source: ANALYTICS_SOURCE,
    });
};
export var shortUrlGenerated = function (start, tooSlow) {
    return createEvent('operational', 'generated', 'shortUrl', undefined, {
        source: ANALYTICS_SOURCE,
        duration: duration(start),
        tooSlow: tooSlow,
    });
};
export var copyLinkButtonClicked = function (start, shareContentType, shareOrigin) {
    return createEvent('ui', 'clicked', 'button', 'copyShareLink', __assign({ source: ANALYTICS_SOURCE, duration: duration(start), shortUrl: undefined, contentType: shareContentType }, getOriginTracingAttributes(shareOrigin)));
};
export var formShareSubmitted = function (start, data, shareContentType, shareOrigin, config) {
    var users = extractIdsByType(data, isUser);
    var teams = extractIdsByType(data, isTeam);
    var teamUserCounts = extractMemberCountsFromTeams(data, isTeam);
    var emails = extractIdsByType(data, isEmail);
    return createEvent('ui', 'clicked', 'button', 'submitShare', __assign(__assign({}, getOriginTracingAttributes(shareOrigin)), { contentType: shareContentType, duration: duration(start), emailCount: emails.length, teamCount: teams.length, userCount: users.length, users: users,
        teams: teams,
        teamUserCounts: teamUserCounts, messageLength: config &&
            config.allowComment &&
            data.comment &&
            data.comment.format === 'plain_text'
            ? data.comment.value.length
            : 0, isMessageEnabled: config ? config.allowComment : false }));
};
var duration = function (start) { return Date.now() - start; };
var getOriginTracingAttributes = function (origin) {
    return origin ? origin.toAnalyticsAttributes({ hasGeneratedId: true }) : {};
};
var extractIdsByType = function (data, checker) { return data.users.filter(checker).map(function (option) { return option.id; }); };
var extractMemberCountsFromTeams = function (data, checker) {
    // teams with zero memberships cannot exist in share, so we use that
    // as the default value for undefined team member counts
    return data.users.filter(checker).map(function (option) { return option.memberCount || 0; });
};
//# sourceMappingURL=analytics.js.map