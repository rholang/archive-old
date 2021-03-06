"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Result_1 = require("../model/Result");
var types_1 = require("./types");
function removeHighlightTags(text) {
    return text.replace(/@@@hl@@@|@@@endhl@@@/g, '');
}
exports.removeHighlightTags = removeHighlightTags;
function mapConfluenceItemToResultObject(item, experimentId) {
    return {
        resultId: item.content.id,
        name: removeHighlightTags(item.title),
        href: "" + item.baseUrl + item.url,
        containerName: item.container.title,
        analyticsType: Result_1.AnalyticsType.ResultConfluence,
        contentType: "confluence-" + item.content.type,
        resultType: Result_1.ResultType.ConfluenceObjectResult,
        containerId: item.content.space && item.content.space.id
            ? item.content.space.id
            : 'UNAVAILABLE',
        iconClass: item.iconCssClass,
        experimentId: experimentId,
        friendlyLastModified: item.friendlyLastModified,
    };
}
function mapConfluenceItemToResultSpace(spaceItem, experimentId) {
    return {
        resultId: "space-" + spaceItem.space.key,
        avatarUrl: "" + spaceItem.baseUrl + spaceItem.space.icon.path,
        name: spaceItem.container.title,
        href: "" + (spaceItem.baseUrl || '') + spaceItem.container.displayUrl,
        analyticsType: Result_1.AnalyticsType.ResultConfluence,
        resultType: Result_1.ResultType.GenericContainerResult,
        contentType: Result_1.ContentType.ConfluenceSpace,
        experimentId: experimentId,
        key: spaceItem.space.key,
    };
}
function mapConfluenceItemToResult(scope, item) {
    var mapper = scope === types_1.Scope.ConfluenceSpace
        ? mapConfluenceItemToResultSpace
        : mapConfluenceItemToResultObject;
    return mapper(item);
}
exports.mapConfluenceItemToResult = mapConfluenceItemToResult;
//# sourceMappingURL=ConfluenceItemMapper.js.map