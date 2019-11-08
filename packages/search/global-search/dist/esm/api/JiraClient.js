var _a;
import { __assign, __awaiter, __generator, __read, __spread } from "tslib";
import { utils, } from '@atlaskit/util-service-support';
import { AnalyticsType, ContentType, ResultType, } from '../model/Result';
var RECENT_ITEMS_PATH = 'rest/internal/2/productsearch/recent';
var PERMISSIONS_PATH = 'rest/api/2/mypermissions?permissions=USER_PICKER';
export var DEFAULT_RECENT_ITEMS_COUNT = {
    issues: 8,
    boards: 2,
    projects: 2,
    filters: 2,
};
var JiraResponseGroup;
(function (JiraResponseGroup) {
    JiraResponseGroup["Issues"] = "quick-search-issues";
    JiraResponseGroup["Projects"] = "quick-search-projects";
    JiraResponseGroup["Boards"] = "quick-search-boards";
    JiraResponseGroup["Filters"] = "quick-search-filters";
})(JiraResponseGroup || (JiraResponseGroup = {}));
var JiraResponseGroupToContentType = (_a = {},
    _a[JiraResponseGroup.Issues] = ContentType.JiraIssue,
    _a[JiraResponseGroup.Boards] = ContentType.JiraBoard,
    _a[JiraResponseGroup.Filters] = ContentType.JiraFilter,
    _a[JiraResponseGroup.Projects] = ContentType.JiraProject,
    _a);
var JiraClientImpl = /** @class */ (function () {
    function JiraClientImpl(url, cloudId, isUserAnonymous) {
        this.serviceConfig = { url: url };
        this.cloudId = cloudId;
        this.isUserAnonymous = isUserAnonymous;
    }
    // Unused, just to mute ts lint
    JiraClientImpl.prototype.getCloudId = function () {
        return this.cloudId;
    };
    /**
     *
     * @param searchSessionId unique id for each session
     * @param recentItemCounts number of items to return for every recent item type defaults to {@link #defaultRecentItemCounts}
     * @returns a promise resolved to recent items array throws if any error occurs in reqeust or if parsing or transforming response fails
     */
    JiraClientImpl.prototype.getRecentItems = function (searchSessionId, recentItemCounts) {
        if (recentItemCounts === void 0) { recentItemCounts = DEFAULT_RECENT_ITEMS_COUNT; }
        return __awaiter(this, void 0, void 0, function () {
            var options, recentItems, reduced;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this.isUserAnonymous) {
                            return [2 /*return*/, []];
                        }
                        options = {
                            path: RECENT_ITEMS_PATH,
                            queryParams: {
                                counts: this.getRecentCountQueryParam(recentItemCounts),
                                search_id: searchSessionId,
                            },
                        };
                        return [4 /*yield*/, utils.requestService(this.serviceConfig, options)];
                    case 1:
                        recentItems = (_a.sent()) || [];
                        reduced = recentItems
                            .filter(function (group) { return JiraResponseGroupToContentType.hasOwnProperty(group.id); })
                            .map(function (group) { return _this.recentItemGroupToItems(group); })
                            .reduce(function (acc, item) { return __spread(acc, item); }, []);
                        return [2 /*return*/, reduced];
                }
            });
        });
    };
    JiraClientImpl.prototype.canSearchUsers = function () {
        return __awaiter(this, void 0, void 0, function () {
            var options, permissionsResponse;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this.isUserAnonymous) {
                            return [2 /*return*/, false];
                        }
                        if (typeof this.canSearchUsersCache === 'boolean') {
                            return [2 /*return*/, Promise.resolve(this.canSearchUsersCache)];
                        }
                        options = {
                            path: PERMISSIONS_PATH,
                        };
                        return [4 /*yield*/, utils.requestService(this.serviceConfig, options)];
                    case 1:
                        permissionsResponse = _a.sent();
                        this.canSearchUsersCache =
                            permissionsResponse &&
                                permissionsResponse.permissions &&
                                permissionsResponse.permissions.USER_PICKER &&
                                permissionsResponse.permissions.USER_PICKER.havePermission;
                        return [2 /*return*/, !!this.canSearchUsersCache];
                }
            });
        });
    };
    JiraClientImpl.prototype.recentItemGroupToItems = function (group) {
        var _this = this;
        var id = group.id, items = group.items;
        return items.map(function (item) { return _this.recentItemToResultItem(item, id); });
    };
    JiraClientImpl.prototype.recentItemToResultItem = function (item, jiraGroup) {
        var containerId = this.getContainerId(item, jiraGroup);
        var contentType = JiraResponseGroupToContentType[jiraGroup];
        var resultId = '' + item.id;
        return __assign({ resultType: ResultType.JiraObjectResult, resultId: resultId, name: item.title, href: item.url, analyticsType: AnalyticsType.RecentJira, avatarUrl: item.avatarUrl, containerId: containerId, contentType: contentType }, this.getTypeSpecificAttributes(item, jiraGroup));
    };
    JiraClientImpl.prototype.getContainerId = function (item, jiraGroup) {
        return jiraGroup === JiraResponseGroup.Filters
            ? item.attributes &&
                item.attributes.ownerId
            : item.attributes &&
                item.attributes.containerId;
    };
    JiraClientImpl.prototype.getTypeSpecificAttributes = function (item, jiraGroup) {
        switch (jiraGroup) {
            case JiraResponseGroup.Filters:
                return {
                    containerName: item.metadata,
                    objectKey: 'Filters',
                };
            case JiraResponseGroup.Projects:
                return {
                    containerName: item.metadata,
                };
            case JiraResponseGroup.Issues:
                var issueType = item.attributes &&
                    item.attributes.issueTypeName;
                return {
                    containerName: issueType ? issueType : item.metadata,
                    objectKey: issueType ? item.metadata : undefined,
                };
            case JiraResponseGroup.Boards:
                return {
                    containerName: item.attributes
                        ? item.attributes.containerName
                        : item.metadata,
                };
        }
    };
    /**
     * Private method to construct a valid value for the 'counts' query param
     * for the Jira recent API. The format is as follows:
     *
     * ?counts=issues=8,boards=2,projects=2,filters=2
     *
     * @param recentCounts
     */
    JiraClientImpl.prototype.getRecentCountQueryParam = function (recentCounts) {
        var keys = Object.keys(recentCounts);
        return keys.map(function (key) { return key + "=" + recentCounts[key]; }).join(',');
    };
    return JiraClientImpl;
}());
export default JiraClientImpl;
//# sourceMappingURL=JiraClient.js.map