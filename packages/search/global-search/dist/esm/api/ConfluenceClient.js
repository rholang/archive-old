import { __awaiter, __generator } from "tslib";
import { utils, } from '@atlaskit/util-service-support';
import { AnalyticsType, ContentType, ResultType, } from '../model/Result';
var RECENT_PAGES_PATH = 'rest/recentlyviewed/1.0/recent';
var RECENT_SPACE_PATH = 'rest/recentlyviewed/1.0/recent/spaces';
var ConfluenceClientImpl = /** @class */ (function () {
    function ConfluenceClientImpl(url) {
        this.serviceConfig = { url: url };
    }
    ConfluenceClientImpl.prototype.getRecentItems = function () {
        return __awaiter(this, void 0, void 0, function () {
            var recentPages, baseUrl;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.createRecentRequestPromise(RECENT_PAGES_PATH)];
                    case 1:
                        recentPages = _a.sent();
                        baseUrl = this.serviceConfig.url;
                        return [2 /*return*/, recentPages
                                .filter(function (page) { return !!page.title; })
                                .map(function (recentPage) { return recentPageToResult(recentPage, baseUrl); })];
                }
            });
        });
    };
    ConfluenceClientImpl.prototype.getRecentSpaces = function () {
        return __awaiter(this, void 0, void 0, function () {
            var recentSpaces, baseUrl;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.createRecentRequestPromise(RECENT_SPACE_PATH)];
                    case 1:
                        recentSpaces = _a.sent();
                        baseUrl = this.serviceConfig.url;
                        return [2 /*return*/, recentSpaces.map(function (recentSpace) {
                                return recentSpaceToResult(recentSpace, baseUrl);
                            })];
                }
            });
        });
    };
    ConfluenceClientImpl.prototype.createRecentRequestPromise = function (path) {
        var options = {
            path: path,
        };
        return utils.requestService(this.serviceConfig, options);
    };
    return ConfluenceClientImpl;
}());
export default ConfluenceClientImpl;
function recentPageToResult(recentPage, baseUrl) {
    return {
        resultId: String(recentPage.id),
        name: recentPage.title || '',
        href: "" + baseUrl + recentPage.url,
        containerName: recentPage.space,
        analyticsType: AnalyticsType.RecentConfluence,
        resultType: ResultType.ConfluenceObjectResult,
        contentType: "confluence-" + recentPage.contentType,
        iconClass: recentPage.iconClass,
        containerId: recentPage.spaceKey,
        isRecentResult: true,
        friendlyLastModified: undefined,
    };
}
function recentSpaceToResult(recentSpace, baseUrl) {
    return {
        resultId: recentSpace.id,
        name: recentSpace.name,
        href: baseUrl + "/spaces/" + recentSpace.key + "/overview",
        avatarUrl: recentSpace.icon,
        analyticsType: AnalyticsType.RecentConfluence,
        resultType: ResultType.GenericContainerResult,
        contentType: ContentType.ConfluenceSpace,
    };
}
//# sourceMappingURL=ConfluenceClient.js.map