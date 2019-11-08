"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PANEL_TYPE;
(function (PANEL_TYPE) {
    PANEL_TYPE["INFO"] = "info";
    PANEL_TYPE["SUCCESS"] = "success";
    PANEL_TYPE["NOTE"] = "note";
    PANEL_TYPE["WARNING"] = "warning";
    PANEL_TYPE["ERROR"] = "error";
})(PANEL_TYPE = exports.PANEL_TYPE || (exports.PANEL_TYPE = {}));
var USER_CONTEXT;
(function (USER_CONTEXT) {
    USER_CONTEXT["EDIT"] = "edit";
    USER_CONTEXT["NEW"] = "new";
})(USER_CONTEXT = exports.USER_CONTEXT || (exports.USER_CONTEXT = {}));
var LINK_STATUS;
(function (LINK_STATUS) {
    LINK_STATUS["RESOLVED"] = "resolved";
    LINK_STATUS["UNRESOLVED"] = "unresolved";
})(LINK_STATUS = exports.LINK_STATUS || (exports.LINK_STATUS = {}));
var LINK_REPRESENTATION;
(function (LINK_REPRESENTATION) {
    LINK_REPRESENTATION["TEXT"] = "text";
    LINK_REPRESENTATION["INLINE_CARD"] = "inlineCard";
    LINK_REPRESENTATION["BLOCK_CARD"] = "blockCard";
    LINK_REPRESENTATION["EMBED"] = "embed";
})(LINK_REPRESENTATION = exports.LINK_REPRESENTATION || (exports.LINK_REPRESENTATION = {}));
var LINK_RESOURCE;
(function (LINK_RESOURCE) {
    LINK_RESOURCE["JIRA"] = "jiraIssue";
    LINK_RESOURCE["CONFLUENCE"] = "confluencePage";
    LINK_RESOURCE["BITBUCKET_PR"] = "bitbucketPR";
    LINK_RESOURCE["BITBUCKET_REPO"] = "bitbucketRepo";
    LINK_RESOURCE["TRELLO_CARD"] = "trelloCard";
    LINK_RESOURCE["TRELLO_BOARD"] = "trelloBoard";
    LINK_RESOURCE["STATUS_PAGE"] = "statusPage";
    LINK_RESOURCE["BOX"] = "boxFile";
    LINK_RESOURCE["DROPBOX"] = "dropboxFile";
    LINK_RESOURCE["OFFICE"] = "office";
    LINK_RESOURCE["DRIVE"] = "drive";
    LINK_RESOURCE["YOUTUBE"] = "youtubeVideo";
    LINK_RESOURCE["TWITTER"] = "twitterTweet";
    LINK_RESOURCE["OTHER"] = "other";
})(LINK_RESOURCE = exports.LINK_RESOURCE || (exports.LINK_RESOURCE = {}));
//# sourceMappingURL=insert-events.js.map