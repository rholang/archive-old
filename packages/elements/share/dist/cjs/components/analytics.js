"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var user_picker_1 = require("@atlaskit/user-picker");
var version_json_1 = require("../version.json");
var buildAttributes = function (attributes) {
    if (attributes === void 0) { attributes = {}; }
    return (tslib_1.__assign({ packageName: version_json_1.name,
        packageVersion: version_json_1.version }, attributes));
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
exports.CHANNEL_ID = 'fabric-elements';
exports.ANALYTICS_SOURCE = 'shareModal';
exports.screenEvent = function () { return createScreenEvent(exports.ANALYTICS_SOURCE); };
exports.errorEncountered = function (actionSubjectId, attributes) {
    if (attributes === void 0) { attributes = {}; }
    return createEvent('operational', 'encountered', 'error', actionSubjectId, tslib_1.__assign(tslib_1.__assign({}, attributes), { source: exports.ANALYTICS_SOURCE }));
};
// = share dialog invoked. Not to be confused with "share submitted"
exports.shareTriggerButtonClicked = function () {
    return createEvent('ui', 'clicked', 'button', 'share');
};
exports.cancelShare = function (start) {
    return createEvent('ui', 'pressed', 'keyboardShortcut', 'cancelShare', {
        source: exports.ANALYTICS_SOURCE,
        duration: duration(start),
    });
};
exports.shortUrlRequested = function () {
    return createEvent('operational', 'requested', 'shortUrl', undefined, {
        source: exports.ANALYTICS_SOURCE,
    });
};
exports.shortUrlGenerated = function (start, tooSlow) {
    return createEvent('operational', 'generated', 'shortUrl', undefined, {
        source: exports.ANALYTICS_SOURCE,
        duration: duration(start),
        tooSlow: tooSlow,
    });
};
exports.copyLinkButtonClicked = function (start, shareContentType, shareOrigin) {
    return createEvent('ui', 'clicked', 'button', 'copyShareLink', tslib_1.__assign({ source: exports.ANALYTICS_SOURCE, duration: duration(start), shortUrl: undefined, contentType: shareContentType }, getOriginTracingAttributes(shareOrigin)));
};
exports.formShareSubmitted = function (start, data, shareContentType, shareOrigin, config) {
    var users = extractIdsByType(data, user_picker_1.isUser);
    var teams = extractIdsByType(data, user_picker_1.isTeam);
    var teamUserCounts = extractMemberCountsFromTeams(data, user_picker_1.isTeam);
    var emails = extractIdsByType(data, user_picker_1.isEmail);
    return createEvent('ui', 'clicked', 'button', 'submitShare', tslib_1.__assign(tslib_1.__assign({}, getOriginTracingAttributes(shareOrigin)), { contentType: shareContentType, duration: duration(start), emailCount: emails.length, teamCount: teams.length, userCount: users.length, users: users,
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