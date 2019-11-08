"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var uuid_1 = tslib_1.__importDefault(require("uuid"));
var Result_1 = require("../model/Result");
exports.mapJiraItemToResult = function (analyticsType) { return function (item) {
    return item.attributes && item.attributes['@type']
        ? mapJiraItemToResultV2(item, analyticsType)
        : mapJiraItemToResultV1(item, analyticsType);
}; };
var extractSpecificAttributes = function (attributes) {
    var type = attributes['@type'];
    switch (type) {
        case 'issue':
            return {
                objectKey: attributes.key,
                containerName: attributes.container && attributes.container.title,
            };
        case 'board':
            return {
                containerName: attributes.containerName,
                containerId: attributes.containerId,
            };
        case 'filter':
            return {
                containerName: attributes.ownerName,
            };
        case 'project':
            return {
                containerName: attributes.projectType,
                projectType: attributes.projectType,
            };
    }
    return null;
};
var extractAvatarUrl = function (_a) {
    var _b = _a === void 0 ? {} : _a, _c = _b.url, url = _c === void 0 ? '' : _c, _d = _b.urls, urls = _d === void 0 ? {} : _d;
    if (url) {
        return url;
    }
    return urls['48x48'] || urls[Object.keys(urls)[0]];
};
var JIRA_TYPE_TO_CONTENT_TYPE = {
    issue: Result_1.ContentType.JiraIssue,
    board: Result_1.ContentType.JiraBoard,
    filter: Result_1.ContentType.JiraFilter,
    project: Result_1.ContentType.JiraProject,
};
var mapJiraItemToResultV2 = function (item, analyticsType) {
    var id = item.id, name = item.name, url = item.url, attributes = item.attributes;
    var contentType = JIRA_TYPE_TO_CONTENT_TYPE[attributes['@type']];
    var resultType = contentType === Result_1.ContentType.JiraProject
        ? Result_1.ResultType.JiraProjectResult
        : Result_1.ResultType.JiraObjectResult;
    return tslib_1.__assign(tslib_1.__assign({ resultId: id, key: uuid_1.default(), name: name, href: url, resultType: resultType, containerId: attributes.container && attributes.container.id, analyticsType: analyticsType }, extractSpecificAttributes(attributes)), { avatarUrl: attributes.avatar && extractAvatarUrl(attributes.avatar), contentType: contentType, isRecentResult: mapAnalyticsTypeToRecentResult(analyticsType) });
};
var mapJiraItemToResultV1 = function (item, analyticsType) {
    return {
        resultId: item.key,
        avatarUrl: item.fields.issuetype.iconUrl,
        name: item.fields.summary,
        href: "/browse/" + item.key,
        containerName: item.fields.project.name,
        objectKey: item.key,
        analyticsType: analyticsType,
        resultType: Result_1.ResultType.JiraObjectResult,
        contentType: Result_1.ContentType.JiraIssue,
        isRecentResult: mapAnalyticsTypeToRecentResult(analyticsType),
    };
};
var mapAnalyticsTypeToRecentResult = function (analyticsType) {
    return analyticsType.startsWith('recent');
};
//# sourceMappingURL=JiraItemMapper.js.map