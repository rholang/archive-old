import { ResultType, AnalyticsType, ContentType, } from '../model/Result';
import { Scope } from './types';
export function removeHighlightTags(text) {
    return text.replace(/@@@hl@@@|@@@endhl@@@/g, '');
}
function mapConfluenceItemToResultObject(item, experimentId) {
    return {
        resultId: item.content.id,
        name: removeHighlightTags(item.title),
        href: "" + item.baseUrl + item.url,
        containerName: item.container.title,
        analyticsType: AnalyticsType.ResultConfluence,
        contentType: "confluence-" + item.content.type,
        resultType: ResultType.ConfluenceObjectResult,
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
        analyticsType: AnalyticsType.ResultConfluence,
        resultType: ResultType.GenericContainerResult,
        contentType: ContentType.ConfluenceSpace,
        experimentId: experimentId,
        key: spaceItem.space.key,
    };
}
export function mapConfluenceItemToResult(scope, item) {
    var mapper = scope === Scope.ConfluenceSpace
        ? mapConfluenceItemToResultSpace
        : mapConfluenceItemToResultObject;
    return mapper(item);
}
//# sourceMappingURL=ConfluenceItemMapper.js.map