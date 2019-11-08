"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MentionType;
(function (MentionType) {
    MentionType[MentionType["SELF"] = 0] = "SELF";
    MentionType[MentionType["RESTRICTED"] = 1] = "RESTRICTED";
    MentionType[MentionType["DEFAULT"] = 2] = "DEFAULT";
})(MentionType = exports.MentionType || (exports.MentionType = {}));
var UserAccessLevel;
(function (UserAccessLevel) {
    UserAccessLevel[UserAccessLevel["NONE"] = 0] = "NONE";
    UserAccessLevel[UserAccessLevel["SITE"] = 1] = "SITE";
    UserAccessLevel[UserAccessLevel["APPLICATION"] = 2] = "APPLICATION";
    UserAccessLevel[UserAccessLevel["CONTAINER"] = 3] = "CONTAINER";
})(UserAccessLevel = exports.UserAccessLevel || (exports.UserAccessLevel = {}));
var UserType;
(function (UserType) {
    UserType[UserType["DEFAULT"] = 0] = "DEFAULT";
    UserType[UserType["SPECIAL"] = 1] = "SPECIAL";
    UserType[UserType["APP"] = 2] = "APP";
    UserType[UserType["TEAM"] = 3] = "TEAM";
    UserType[UserType["SYSTEM"] = 4] = "SYSTEM";
})(UserType = exports.UserType || (exports.UserType = {}));
var MentionNameStatus;
(function (MentionNameStatus) {
    MentionNameStatus[MentionNameStatus["UNKNOWN"] = 0] = "UNKNOWN";
    MentionNameStatus[MentionNameStatus["SERVICE_ERROR"] = 1] = "SERVICE_ERROR";
    MentionNameStatus[MentionNameStatus["OK"] = 2] = "OK";
})(MentionNameStatus = exports.MentionNameStatus || (exports.MentionNameStatus = {}));
function isRestricted(accessLevel) {
    return (!!accessLevel && accessLevel !== UserAccessLevel[UserAccessLevel.CONTAINER]);
}
exports.isRestricted = isRestricted;
function isSpecialMention(mention) {
    return !!mention.userType && mention.userType === UserType[UserType.SPECIAL];
}
exports.isSpecialMention = isSpecialMention;
function isAppMention(mention) {
    return mention.userType && mention.userType === UserType[UserType.APP];
}
exports.isAppMention = isAppMention;
function isTeamMention(mention) {
    return mention.userType && mention.userType === UserType[UserType.TEAM];
}
exports.isTeamMention = isTeamMention;
function isSpecialMentionText(mentionText) {
    return mentionText && (mentionText === '@all' || mentionText === '@here');
}
exports.isSpecialMentionText = isSpecialMentionText;
exports.isPromise = function (p) { return !!(p && p.then); };
//# sourceMappingURL=types.js.map