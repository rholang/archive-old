import { __assign, __extends, __makeTemplateObject } from "tslib";
import * as React from 'react';
import { FormattedMessage } from 'react-intl';
import Button from '@atlaskit/button';
import { gridSize } from '@atlaskit/theme';
import styled from 'styled-components';
import { messages } from '../../messages';
import { getJiraAdvancedSearchUrl, JiraEntityTypes, } from '../SearchResultsUtil';
var TextContainer = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  margin-right: ", "px;\n  height: ", "px;\n  line-height: ", "px;\n  white-space: nowrap;\n"], ["\n  margin-right: ", "px;\n  height: ", "px;\n  line-height: ", "px;\n  white-space: nowrap;\n"])), gridSize(), 3 * gridSize(), 3 * gridSize());
var Container = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  margin: ", "px;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: left;\n"], ["\n  margin: ", "px;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: left;\n"])), 1.5 * gridSize());
var ButtonWrapper = styled.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  margin-right: ", "px;\n"], ["\n  margin-right: ", "px;\n"])), 0.5 * gridSize());
var itemI18nKeySuffix = [
    JiraEntityTypes.Issues,
    JiraEntityTypes.Boards,
    JiraEntityTypes.Projects,
    JiraEntityTypes.Filters,
    JiraEntityTypes.People,
];
var getI18nItemName = function (i18nKeySuffix) {
    var id = "jira_advanced_search_" + i18nKeySuffix;
    return React.createElement(FormattedMessage, __assign({}, messages[id]));
};
var JiraAdvancedSearch = /** @class */ (function (_super) {
    __extends(JiraAdvancedSearch, _super);
    function JiraAdvancedSearch() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            entity: JiraEntityTypes.Issues,
        };
        _this.renderLinks = function () {
            return itemI18nKeySuffix
                .filter(function (key) {
                return !_this.props.appPermission ||
                    key !== JiraEntityTypes.Boards ||
                    (_this.props.appPermission &&
                        _this.props.appPermission.hasSoftwareAccess);
            })
                .map(function (item) { return (React.createElement(ButtonWrapper, { key: "btnwrapper_" + item },
                React.createElement(Button, { key: "btn_" + item, spacing: "compact", onMouseEnter: function (e) { return e.stopPropagation(); }, onClick: function (e) { return _this.props.onClick && _this.props.onClick(e, item); }, href: getJiraAdvancedSearchUrl({
                        entityType: item,
                        query: _this.props.query,
                        isJiraPeopleProfilesEnabled: _this.props
                            .isJiraPeopleProfilesEnabled,
                    }) }, getI18nItemName(item)))); });
        };
        return _this;
    }
    JiraAdvancedSearch.prototype.render = function () {
        return (React.createElement(Container, null,
            React.createElement(TextContainer, null,
                React.createElement(FormattedMessage, __assign({}, messages.jira_advanced_search))),
            this.renderLinks()));
    };
    return JiraAdvancedSearch;
}(React.Component));
export default JiraAdvancedSearch;
var templateObject_1, templateObject_2, templateObject_3;
//# sourceMappingURL=JiraAdvancedSearch.js.map