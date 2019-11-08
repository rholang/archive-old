"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var AdvancedSearchResult_1 = tslib_1.__importDefault(require("./AdvancedSearchResult"));
var SearchResultsUtil_1 = require("./SearchResultsUtil");
var Result_1 = require("../model/Result");
var SearchConfluenceItem = /** @class */ (function (_super) {
    tslib_1.__extends(SearchConfluenceItem, _super);
    function SearchConfluenceItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SearchConfluenceItem.prototype.render = function () {
        var _a = this.props, query = _a.query, icon = _a.icon, text = _a.text, showKeyboardLozenge = _a.showKeyboardLozenge, analyticsData = _a.analyticsData, isCompact = _a.isCompact;
        // key should change per search to make keyboard nav work
        var key = "search_confluence_" + Date.now();
        return (React.createElement(AdvancedSearchResult_1.default, { href: SearchResultsUtil_1.getConfluenceAdvancedSearchLink(query), key: key, resultId: SearchResultsUtil_1.ADVANCED_CONFLUENCE_SEARCH_RESULT_ID, text: text, icon: icon, type: Result_1.AnalyticsType.AdvancedSearchConfluence, showKeyboardLozenge: showKeyboardLozenge, analyticsData: analyticsData, isCompact: isCompact, onClick: this.props.onClick }));
    };
    SearchConfluenceItem.defaultProps = {
        showKeyboardLozenge: false,
    };
    return SearchConfluenceItem;
}(React.Component));
exports.default = SearchConfluenceItem;
//# sourceMappingURL=SearchConfluenceItem.js.map