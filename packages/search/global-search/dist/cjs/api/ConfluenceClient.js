"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var util_service_support_1 = require("@atlaskit/util-service-support");
var Result_1 = require("../model/Result");
var RECENT_PAGES_PATH = 'rest/recentlyviewed/1.0/recent';
var RECENT_SPACE_PATH = 'rest/recentlyviewed/1.0/recent/spaces';
var ConfluenceClientImpl = /** @class */ (function () {
    function ConfluenceClientImpl(url) {
        this.serviceConfig = { url: url };
    }
    ConfluenceClientImpl.prototype.getRecentItems = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var recentPages, baseUrl;
            return tslib_1.__generator(this, function (_a) {
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
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var recentSpaces, baseUrl;
            return tslib_1.__generator(this, function (_a) {
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
        return util_service_support_1.utils.requestService(this.serviceConfig, options);
    };
    return ConfluenceClientImpl;
}());
exports.default = ConfluenceClientImpl;
function recentPageToResult(recentPage, baseUrl) {
    return {
        resultId: String(recentPage.id),
        name: recentPage.title || '',
        href: "" + baseUrl + recentPage.url,
        containerName: recentPage.space,
        analyticsType: Result_1.AnalyticsType.RecentConfluence,
        resultType: Result_1.ResultType.ConfluenceObjectResult,
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
        analyticsType: Result_1.AnalyticsType.RecentConfluence,
        resultType: Result_1.ResultType.GenericContainerResult,
        contentType: Result_1.ContentType.ConfluenceSpace,
    };
}
//# sourceMappingURL=ConfluenceClient.js.map