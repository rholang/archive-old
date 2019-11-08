import { __extends, __makeTemplateObject } from "tslib";
import * as React from 'react';
import styled from 'styled-components';
import { gridSize } from '@atlaskit/theme';
import { ResultItemGroup } from '@atlaskit/quick-search';
import Badge from '@atlaskit/badge';
import ResultList from './ResultList';
import { injectIntl } from 'react-intl';
import ShowMoreButton from './ShowMoreButton';
var TitlelessGroupWrapper = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  margin-top: ", "px;\n"], ["\n  margin-top: ", "px;\n"])), gridSize() * 1.5);
var BadgeContainer = styled.span(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  margin-left: ", "px;\n"], ["\n  margin-left: ", "px;\n"])), gridSize());
var ResultGroup = /** @class */ (function (_super) {
    __extends(ResultGroup, _super);
    function ResultGroup() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ResultGroup.prototype.render = function () {
        var _a = this.props, title = _a.title, results = _a.results, sectionIndex = _a.sectionIndex, showTotalSize = _a.showTotalSize, totalSize = _a.totalSize, showMoreButton = _a.showMoreButton, onShowMoreClicked = _a.onShowMoreClicked, onSearchMoreAdvancedSearch = _a.onSearchMoreAdvancedSearch, query = _a.query;
        if (results.length === 0) {
            return null;
        }
        var moreButton = showMoreButton ? (React.createElement(ShowMoreButton, { resultLength: results.length, onShowMoreClicked: onShowMoreClicked, onSearchMoreAdvancedSearch: onSearchMoreAdvancedSearch, totalSize: totalSize, query: query, 
            // this will force new show more button every click show more to fix scrolling
            key: "show_more_" + results.length })) : null;
        if (!title) {
            return (React.createElement(TitlelessGroupWrapper, null,
                React.createElement(ResultList, { analyticsData: this.props.analyticsData, results: results, sectionIndex: sectionIndex }),
                moreButton));
        }
        var titleView = showTotalSize ? (React.createElement(React.Fragment, null,
            React.createElement("span", null, title),
            React.createElement(BadgeContainer, null,
                React.createElement(Badge, { max: 99 }, totalSize)))) : (React.createElement("span", null, title));
        return (React.createElement(ResultItemGroup, { title: titleView },
            React.createElement(ResultList, { analyticsData: this.props.analyticsData, results: results, sectionIndex: sectionIndex }),
            moreButton));
    };
    return ResultGroup;
}(React.Component));
export { ResultGroup };
export default injectIntl(ResultGroup);
var templateObject_1, templateObject_2;
//# sourceMappingURL=ResultGroup.js.map