"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var theme_1 = require("@atlaskit/theme");
var search_1 = tslib_1.__importDefault(require("@atlaskit/icon/glyph/search"));
var quick_search_1 = require("@atlaskit/quick-search");
var react_intl_1 = require("react-intl");
var messages_1 = require("../messages");
var Result_1 = require("../model/Result");
var styled_1 = require("./styled");
var confluence_avatar_util_1 = require("../util/confluence-avatar-util");
var jira_avatar_util_1 = require("../util/jira-avatar-util");
var DarkReturn_1 = tslib_1.__importDefault(require("../assets/DarkReturn"));
var Return_1 = tslib_1.__importDefault(require("../assets/Return"));
var FeaturesProvider_1 = require("./FeaturesProvider");
var extractAvatarData = function (jiraResult) {
    return jiraResult.avatarUrl
        ? { avatarUrl: jiraResult.avatarUrl }
        : {
            avatar: jira_avatar_util_1.getDefaultAvatar(jiraResult.contentType),
        };
};
var selectedIcon = (React.createElement(styled_1.SelectedIcon, null,
    React.createElement(DarkReturn_1.default, null)));
var getI18nJiraContainerName = function (projectType) {
    switch (projectType) {
        case Result_1.JiraProjectType.Business: {
            return (React.createElement(react_intl_1.FormattedMessage, tslib_1.__assign({}, messages_1.messages.jira_project_type_business_project)));
        }
        case Result_1.JiraProjectType.Software: {
            return (React.createElement(react_intl_1.FormattedMessage, tslib_1.__assign({}, messages_1.messages.jira_project_type_software_project)));
        }
        case Result_1.JiraProjectType.ServiceDesk: {
            return (React.createElement(react_intl_1.FormattedMessage, tslib_1.__assign({}, messages_1.messages.jira_project_type_service_desk_project)));
        }
        case Result_1.JiraProjectType.Ops: {
            return React.createElement(react_intl_1.FormattedMessage, tslib_1.__assign({}, messages_1.messages.jira_project_type_ops_project));
        }
    }
};
var getI18nJiraContentType = function (contentType) {
    switch (contentType) {
        case Result_1.ContentType.JiraBoard: {
            return React.createElement(react_intl_1.FormattedMessage, tslib_1.__assign({}, messages_1.messages.jira_result_type_board));
        }
        case Result_1.ContentType.JiraFilter: {
            return React.createElement(react_intl_1.FormattedMessage, tslib_1.__assign({}, messages_1.messages.jira_result_type_filter));
        }
    }
    return undefined;
};
// Being tested as part of the 'complex' experiment, to improve scannability when there
// is lots of text.
var LightSubtextWrapper = styled_components_1.default.span(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  color: ", ";\n"], ["\n  color: ", ";\n"])), theme_1.colors.N90);
var getI18nConfluenceContainerSubtext = function (containerName, friendlyLastModified) {
    var containerText = friendlyLastModified ? (React.createElement(react_intl_1.FormattedMessage, tslib_1.__assign({}, messages_1.messages.confluence_container_subtext_with_modified_date, { values: {
            containerName: containerName,
            friendlyLastModified: friendlyLastModified,
        } }))) : (containerName);
    return React.createElement(LightSubtextWrapper, null, containerText);
};
exports.getUniqueResultId = function (result) {
    return result.key ? result.key : result.contentType + "-" + result.resultId;
};
var ResultList = /** @class */ (function (_super) {
    tslib_1.__extends(ResultList, _super);
    function ResultList() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ResultList.prototype.render = function () {
        var _this = this;
        var _a = this.props, results = _a.results, sectionIndex = _a.sectionIndex, features = _a.features;
        return results.map(function (result, index) {
            var resultType = result.resultType;
            var analyticsData = tslib_1.__assign(tslib_1.__assign({ sectionIndex: sectionIndex, indexWithinSection: index, containerId: result.containerId, experimentId: result.experimentId }, _this.props.analyticsData), { contentType: result.contentType, resultId: result.resultId, isRecentResult: !!result.isRecentResult });
            // Make sure that key and resultId are unique across all search results
            var uniqueResultId = exports.getUniqueResultId(result);
            var uniqueKey = uniqueResultId + "_" + Date.now(); // same result might appear on two successive search
            switch (resultType) {
                case Result_1.ResultType.ConfluenceObjectResult: {
                    var confluenceResult = result;
                    var subText = getI18nConfluenceContainerSubtext(confluenceResult.containerName, confluenceResult.friendlyLastModified);
                    return (React.createElement(quick_search_1.ObjectResult, { key: uniqueKey, resultId: uniqueResultId, name: confluenceResult.name, href: confluenceResult.href, type: confluenceResult.analyticsType, containerName: subText, avatar: confluence_avatar_util_1.getAvatarForConfluenceObjectResult(confluenceResult), analyticsData: analyticsData, selectedIcon: selectedIcon }));
                }
                case Result_1.ResultType.JiraProjectResult: {
                    var jiraResult = result;
                    var avatarData = extractAvatarData(jiraResult);
                    var containerNameElement = jiraResult.projectType
                        ? getI18nJiraContainerName(jiraResult.projectType)
                        : null;
                    return (React.createElement(quick_search_1.ContainerResult, tslib_1.__assign({ key: uniqueKey, resultId: uniqueResultId, name: jiraResult.name, href: jiraResult.href, type: jiraResult.analyticsType, subText: containerNameElement }, avatarData, { analyticsData: analyticsData, selectedIcon: selectedIcon })));
                }
                case Result_1.ResultType.JiraObjectResult: {
                    var jiraResult = result;
                    var avatarData = extractAvatarData(jiraResult);
                    var objectKey = jiraResult.contentType === 'jira-board' ||
                        jiraResult.contentType === 'jira-filter'
                        ? getI18nJiraContentType(jiraResult.contentType)
                        : jiraResult.objectKey;
                    return (React.createElement(quick_search_1.ObjectResult, tslib_1.__assign({ key: uniqueKey, resultId: uniqueResultId, name: jiraResult.name, href: jiraResult.href, type: jiraResult.analyticsType, objectKey: objectKey, containerName: jiraResult.containerName }, avatarData, { analyticsData: analyticsData, selectedIcon: selectedIcon })));
                }
                case Result_1.ResultType.GenericContainerResult: {
                    var containerResult = result;
                    return (React.createElement(quick_search_1.ContainerResult, { key: uniqueKey, resultId: uniqueResultId, name: containerResult.name, href: containerResult.href, type: containerResult.analyticsType, avatarUrl: containerResult.avatarUrl, analyticsData: analyticsData, selectedIcon: selectedIcon }));
                }
                case Result_1.ResultType.PersonResult: {
                    var personResult = result;
                    var presenceMessage = features.complexSearchExtensionsEnabled ? (React.createElement(LightSubtextWrapper, null, personResult.presenceMessage)) : (personResult.presenceMessage);
                    return (React.createElement(quick_search_1.PersonResult, { key: uniqueKey, resultId: uniqueResultId, name: personResult.name, href: personResult.href, type: personResult.analyticsType, avatarUrl: personResult.avatarUrl, mentionName: personResult.mentionName, presenceMessage: presenceMessage, analyticsData: analyticsData, selectedIcon: selectedIcon, target: "_blank" }));
                }
                case Result_1.ResultType.JiraIssueAdvancedSearch: {
                    return (React.createElement(quick_search_1.ResultBase, { href: result.href, resultId: "jira-advanced-issue-search", text: React.createElement(react_intl_1.FormattedMessage, tslib_1.__assign({}, messages_1.messages.jira_view_all_issues)), icon: React.createElement(search_1.default, { size: "medium", label: "View all issues" }), type: Result_1.AnalyticsType.LinkPostQueryAdvancedSearchJira, key: uniqueKey, elemAfter: React.createElement(Return_1.default, null) }));
                }
                default: {
                    // Make the TS compiler verify that all enums have been matched
                    var _nonExhaustiveMatch = resultType;
                    throw new Error("Non-exhaustive match for result type: " + _nonExhaustiveMatch);
                }
            }
        });
    };
    return ResultList;
}(React.Component));
exports.UnwrappedResultList = ResultList;
exports.default = FeaturesProvider_1.injectFeatures(ResultList);
var templateObject_1;
//# sourceMappingURL=ResultList.js.map