"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var react_intl_1 = require("react-intl");
var button_1 = tslib_1.__importDefault(require("@atlaskit/button"));
var theme_1 = require("@atlaskit/theme");
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var messages_1 = require("../../messages");
var SearchResultsUtil_1 = require("../SearchResultsUtil");
var TextContainer = styled_components_1.default.div(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  margin-right: ", "px;\n  height: ", "px;\n  line-height: ", "px;\n  white-space: nowrap;\n"], ["\n  margin-right: ", "px;\n  height: ", "px;\n  line-height: ", "px;\n  white-space: nowrap;\n"])), theme_1.gridSize(), 3 * theme_1.gridSize(), 3 * theme_1.gridSize());
var Container = styled_components_1.default.div(templateObject_2 || (templateObject_2 = tslib_1.__makeTemplateObject(["\n  margin: ", "px;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: left;\n"], ["\n  margin: ", "px;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: left;\n"])), 1.5 * theme_1.gridSize());
var ButtonWrapper = styled_components_1.default.div(templateObject_3 || (templateObject_3 = tslib_1.__makeTemplateObject(["\n  margin-right: ", "px;\n"], ["\n  margin-right: ", "px;\n"])), 0.5 * theme_1.gridSize());
var itemI18nKeySuffix = [
    SearchResultsUtil_1.JiraEntityTypes.Issues,
    SearchResultsUtil_1.JiraEntityTypes.Boards,
    SearchResultsUtil_1.JiraEntityTypes.Projects,
    SearchResultsUtil_1.JiraEntityTypes.Filters,
    SearchResultsUtil_1.JiraEntityTypes.People,
];
var getI18nItemName = function (i18nKeySuffix) {
    var id = "jira_advanced_search_" + i18nKeySuffix;
    return React.createElement(react_intl_1.FormattedMessage, tslib_1.__assign({}, messages_1.messages[id]));
};
var JiraAdvancedSearch = /** @class */ (function (_super) {
    tslib_1.__extends(JiraAdvancedSearch, _super);
    function JiraAdvancedSearch() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            entity: SearchResultsUtil_1.JiraEntityTypes.Issues,
        };
        _this.renderLinks = function () {
            return itemI18nKeySuffix
                .filter(function (key) {
                return !_this.props.appPermission ||
                    key !== SearchResultsUtil_1.JiraEntityTypes.Boards ||
                    (_this.props.appPermission &&
                        _this.props.appPermission.hasSoftwareAccess);
            })
                .map(function (item) { return (React.createElement(ButtonWrapper, { key: "btnwrapper_" + item },
                React.createElement(button_1.default, { key: "btn_" + item, spacing: "compact", onMouseEnter: function (e) { return e.stopPropagation(); }, onClick: function (e) { return _this.props.onClick && _this.props.onClick(e, item); }, href: SearchResultsUtil_1.getJiraAdvancedSearchUrl({
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
                React.createElement(react_intl_1.FormattedMessage, tslib_1.__assign({}, messages_1.messages.jira_advanced_search))),
            this.renderLinks()));
    };
    return JiraAdvancedSearch;
}(React.Component));
exports.default = JiraAdvancedSearch;
var templateObject_1, templateObject_2, templateObject_3;
//# sourceMappingURL=JiraAdvancedSearch.js.map