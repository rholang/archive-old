"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var theme_1 = require("@atlaskit/theme");
var quick_search_1 = require("@atlaskit/quick-search");
var badge_1 = tslib_1.__importDefault(require("@atlaskit/badge"));
var ResultList_1 = tslib_1.__importDefault(require("./ResultList"));
var react_intl_1 = require("react-intl");
var ShowMoreButton_1 = tslib_1.__importDefault(require("./ShowMoreButton"));
var TitlelessGroupWrapper = styled_components_1.default.div(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  margin-top: ", "px;\n"], ["\n  margin-top: ", "px;\n"])), theme_1.gridSize() * 1.5);
var BadgeContainer = styled_components_1.default.span(templateObject_2 || (templateObject_2 = tslib_1.__makeTemplateObject(["\n  margin-left: ", "px;\n"], ["\n  margin-left: ", "px;\n"])), theme_1.gridSize());
var ResultGroup = /** @class */ (function (_super) {
    tslib_1.__extends(ResultGroup, _super);
    function ResultGroup() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ResultGroup.prototype.render = function () {
        var _a = this.props, title = _a.title, results = _a.results, sectionIndex = _a.sectionIndex, showTotalSize = _a.showTotalSize, totalSize = _a.totalSize, showMoreButton = _a.showMoreButton, onShowMoreClicked = _a.onShowMoreClicked, onSearchMoreAdvancedSearch = _a.onSearchMoreAdvancedSearch, query = _a.query;
        if (results.length === 0) {
            return null;
        }
        var moreButton = showMoreButton ? (React.createElement(ShowMoreButton_1.default, { resultLength: results.length, onShowMoreClicked: onShowMoreClicked, onSearchMoreAdvancedSearch: onSearchMoreAdvancedSearch, totalSize: totalSize, query: query, 
            // this will force new show more button every click show more to fix scrolling
            key: "show_more_" + results.length })) : null;
        if (!title) {
            return (React.createElement(TitlelessGroupWrapper, null,
                React.createElement(ResultList_1.default, { analyticsData: this.props.analyticsData, results: results, sectionIndex: sectionIndex }),
                moreButton));
        }
        var titleView = showTotalSize ? (React.createElement(React.Fragment, null,
            React.createElement("span", null, title),
            React.createElement(BadgeContainer, null,
                React.createElement(badge_1.default, { max: 99 }, totalSize)))) : (React.createElement("span", null, title));
        return (React.createElement(quick_search_1.ResultItemGroup, { title: titleView },
            React.createElement(ResultList_1.default, { analyticsData: this.props.analyticsData, results: results, sectionIndex: sectionIndex }),
            moreButton));
    };
    return ResultGroup;
}(React.Component));
exports.ResultGroup = ResultGroup;
exports.default = react_intl_1.injectIntl(ResultGroup);
var templateObject_1, templateObject_2;
//# sourceMappingURL=ResultGroup.js.map