import { __extends } from "tslib";
import * as React from 'react';
import AdvancedSearchResult from './AdvancedSearchResult';
import { ADVANCED_PEOPLE_SEARCH_RESULT_ID } from './SearchResultsUtil';
import { AnalyticsType } from '../model/Result';
var SearchPeopleItem = /** @class */ (function (_super) {
    __extends(SearchPeopleItem, _super);
    function SearchPeopleItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SearchPeopleItem.prototype.render = function () {
        var _a = this.props, query = _a.query, icon = _a.icon, text = _a.text, analyticsData = _a.analyticsData, isCompact = _a.isCompact;
        // key should change per search to make keyboard nav work
        var key = "search_people_" + Date.now();
        return (React.createElement(AdvancedSearchResult, { href: "/people/search?q=" + encodeURIComponent(query), icon: icon, key: key, analyticsData: analyticsData, resultId: ADVANCED_PEOPLE_SEARCH_RESULT_ID, text: text, type: AnalyticsType.AdvancedSearchPeople, target: "_blank", isCompact: isCompact, onClick: this.props.onClick }));
    };
    return SearchPeopleItem;
}(React.Component));
export default SearchPeopleItem;
//# sourceMappingURL=SearchPeopleItem.js.map