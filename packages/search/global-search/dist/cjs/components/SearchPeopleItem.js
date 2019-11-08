"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var AdvancedSearchResult_1 = tslib_1.__importDefault(require("./AdvancedSearchResult"));
var SearchResultsUtil_1 = require("./SearchResultsUtil");
var Result_1 = require("../model/Result");
var SearchPeopleItem = /** @class */ (function (_super) {
    tslib_1.__extends(SearchPeopleItem, _super);
    function SearchPeopleItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SearchPeopleItem.prototype.render = function () {
        var _a = this.props, query = _a.query, icon = _a.icon, text = _a.text, analyticsData = _a.analyticsData, isCompact = _a.isCompact;
        // key should change per search to make keyboard nav work
        var key = "search_people_" + Date.now();
        return (React.createElement(AdvancedSearchResult_1.default, { href: "/people/search?q=" + encodeURIComponent(query), icon: icon, key: key, analyticsData: analyticsData, resultId: SearchResultsUtil_1.ADVANCED_PEOPLE_SEARCH_RESULT_ID, text: text, type: Result_1.AnalyticsType.AdvancedSearchPeople, target: "_blank", isCompact: isCompact, onClick: this.props.onClick }));
    };
    return SearchPeopleItem;
}(React.Component));
exports.default = SearchPeopleItem;
//# sourceMappingURL=SearchPeopleItem.js.map