"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var react_intl_1 = require("react-intl");
var ResultGroup_1 = tslib_1.__importDefault(require("../ResultGroup"));
var ScreenAnalyticsHelper_1 = require("./ScreenAnalyticsHelper");
var ResultGroupType;
(function (ResultGroupType) {
    ResultGroupType["PreQuery"] = "PreQuery";
    ResultGroupType["PostQuery"] = "PostQuery";
})(ResultGroupType = exports.ResultGroupType || (exports.ResultGroupType = {}));
var ResultGroupsComponent = /** @class */ (function (_super) {
    tslib_1.__extends(ResultGroupsComponent, _super);
    function ResultGroupsComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.mapGroupsToSections = function (resultsToShow, analyticsData) {
            var _a = _this.props, onShowMoreClicked = _a.onShowMoreClicked, onSearchMoreAdvancedSearchClicked = _a.onSearchMoreAdvancedSearchClicked, query = _a.query;
            return resultsToShow
                .filter(function (_a) {
                var items = _a.items;
                return items && items.length;
            })
                .map(function (group, index) { return (React.createElement(ResultGroup_1.default, { key: group.key + "-" + index, title: group.title ? React.createElement(react_intl_1.FormattedMessage, tslib_1.__assign({}, group.title)) : undefined, results: group.items, sectionIndex: index, analyticsData: analyticsData, showTotalSize: group.showTotalSize, totalSize: group.totalSize, showMoreButton: group.showTotalSize, onShowMoreClicked: function () { return onShowMoreClicked(group.key); }, onSearchMoreAdvancedSearch: onSearchMoreAdvancedSearchClicked, query: query })); });
        };
        _this.getAnalyticsData = function () { return ({
            resultCount: _this.props.resultsGroups
                .map(function (_a) {
                var items = _a.items;
                return items.length;
            })
                .reduce(function (total, count) { return total + count; }, 0),
        }); };
        return _this;
    }
    ResultGroupsComponent.prototype.getAnalyticsComponent = function () {
        var _a = this.props, searchSessionId = _a.searchSessionId, screenCounter = _a.screenCounter, referralContextIdentifiers = _a.referralContextIdentifiers, type = _a.type;
        switch (type) {
            case ResultGroupType.PreQuery:
                return (React.createElement(ScreenAnalyticsHelper_1.PreQueryAnalyticsComponent, { key: "pre-query-analytics", screenCounter: screenCounter, searchSessionId: searchSessionId, referralContextIdentifiers: referralContextIdentifiers }));
            case ResultGroupType.PostQuery:
                return (React.createElement(ScreenAnalyticsHelper_1.PostQueryAnalyticsComponent, { key: "post-query-analytics", screenCounter: screenCounter, searchSessionId: searchSessionId, referralContextIdentifiers: referralContextIdentifiers }));
        }
    };
    ResultGroupsComponent.prototype.render = function () {
        var _a = this.props, renderAdvancedSearch = _a.renderAdvancedSearch, resultsGroups = _a.resultsGroups;
        var analyticsData = this.getAnalyticsData();
        return (React.createElement(React.Fragment, null,
            this.mapGroupsToSections(resultsGroups, analyticsData),
            renderAdvancedSearch(analyticsData),
            this.getAnalyticsComponent()));
    };
    return ResultGroupsComponent;
}(React.Component));
exports.default = ResultGroupsComponent;
//# sourceMappingURL=ResultGroupsComponent.js.map