"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var SearchResultsUtil_1 = require("../SearchResultsUtil");
var NoRecentActivity_1 = tslib_1.__importDefault(require("../NoRecentActivity"));
var ResultGroupsComponent_1 = tslib_1.__importStar(require("./ResultGroupsComponent"));
var ScreenAnalyticsHelper_1 = require("./ScreenAnalyticsHelper");
var PreQueryState = /** @class */ (function (_super) {
    tslib_1.__extends(PreQueryState, _super);
    function PreQueryState() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PreQueryState.prototype.render = function () {
        var _a = this.props, resultsGroups = _a.resultsGroups, searchSessionId = _a.searchSessionId, screenCounter = _a.screenCounter, renderNoRecentActivity = _a.renderNoRecentActivity, referralContextIdentifiers = _a.referralContextIdentifiers, renderAdvancedSearchGroup = _a.renderAdvancedSearchGroup;
        if (resultsGroups.every(function (_a) {
            var items = _a.items;
            return SearchResultsUtil_1.isEmpty(items);
        })) {
            return (React.createElement(React.Fragment, null,
                React.createElement(ScreenAnalyticsHelper_1.PreQueryAnalyticsComponent, { key: "pre-query-analytics", screenCounter: screenCounter, searchSessionId: searchSessionId, referralContextIdentifiers: referralContextIdentifiers }),
                React.createElement(NoRecentActivity_1.default, { key: "no-recent-activity" }, renderNoRecentActivity())));
        }
        return (React.createElement(ResultGroupsComponent_1.default, { key: "prequery-results-groups", type: ResultGroupsComponent_1.ResultGroupType.PreQuery, renderAdvancedSearch: renderAdvancedSearchGroup, resultsGroups: resultsGroups, searchSessionId: searchSessionId, screenCounter: screenCounter, referralContextIdentifiers: referralContextIdentifiers, onShowMoreClicked: function () { }, query: "" }));
    };
    return PreQueryState;
}(React.Component));
exports.default = PreQueryState;
//# sourceMappingURL=PreQueryState.js.map