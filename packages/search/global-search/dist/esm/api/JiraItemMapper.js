import { __assign } from "tslib";
import uuid from 'uuid';
import { ResultType, ContentType, } from '../model/Result';
export var mapJiraItemToResult = function (analyticsType) { return function (item) {
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
    issue: ContentType.JiraIssue,
    board: ContentType.JiraBoard,
    filter: ContentType.JiraFilter,
    project: ContentType.JiraProject,
};
var mapJiraItemToResultV2 = function (item, analyticsType) {
    var id = item.id, name = item.name, url = item.url, attributes = item.attributes;
    var contentType = JIRA_TYPE_TO_CONTENT_TYPE[attributes['@type']];
    var resultType = contentType === ContentType.JiraProject
        ? ResultType.JiraProjectResult
        : ResultType.JiraObjectResult;
    return __assign(__assign({ resultId: id, key: uuid(), name: name, href: url, resultType: resultType, containerId: attributes.container && attributes.container.id, analyticsType: analyticsType }, extractSpecificAttributes(attributes)), { avatarUrl: attributes.avatar && extractAvatarUrl(attributes.avatar), contentType: contentType, isRecentResult: mapAnalyticsTypeToRecentResult(analyticsType) });
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
        resultType: ResultType.JiraObjectResult,
        contentType: ContentType.JiraIssue,
        isRecentResult: mapAnalyticsTypeToRecentResult(analyticsType),
    };
};
var mapAnalyticsTypeToRecentResult = function (analyticsType) {
    return analyticsType.startsWith('recent');
};
//# sourceMappingURL=JiraItemMapper.js.map