"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var icon_1 = tslib_1.__importDefault(require("@atlaskit/icon"));
var search_1 = tslib_1.__importDefault(require("@atlaskit/icon/glyph/search"));
var react_intl_1 = require("react-intl");
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var theme_1 = require("@atlaskit/theme");
var messages_1 = require("../../messages");
var StickyFooter_1 = tslib_1.__importDefault(require("../common/StickyFooter"));
var SearchPeopleItem_1 = tslib_1.__importDefault(require("../SearchPeopleItem"));
var SearchConfluenceItem_1 = tslib_1.__importDefault(require("../SearchConfluenceItem"));
var PeopleIconGlyph_1 = tslib_1.__importDefault(require("../../assets/PeopleIconGlyph"));
var SearchResultsUtil_1 = require("../SearchResultsUtil");
var PeopleSearchWrapper = styled_components_1.default.div(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  margin-top: ", "px;\n"], ["\n  margin-top: ", "px;\n"])), theme_1.math.multiply(theme_1.gridSize, 3));
var AdvancedSearchGroup = /** @class */ (function (_super) {
    tslib_1.__extends(AdvancedSearchGroup, _super);
    function AdvancedSearchGroup() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AdvancedSearchGroup.prototype.render = function () {
        var _this = this;
        var _a = this.props, query = _a.query, analyticsData = _a.analyticsData;
        var text = query.length === 0 ? (React.createElement(react_intl_1.FormattedMessage, tslib_1.__assign({}, messages_1.messages.confluence_advanced_search))) : (React.createElement(react_intl_1.FormattedMessage, tslib_1.__assign({}, messages_1.messages.confluence_advanced_search_for, { values: { query: query } })));
        return [
            React.createElement(PeopleSearchWrapper, { key: "people-search" },
                React.createElement(SearchPeopleItem_1.default, { analyticsData: analyticsData, query: query, text: React.createElement(react_intl_1.FormattedMessage, tslib_1.__assign({}, messages_1.messages.people_advanced_search)), icon: React.createElement(icon_1.default, { glyph: PeopleIconGlyph_1.default, size: "medium", label: "Search people" }), onClick: function (_a) {
                        var event = _a.event;
                        if (_this.props.onClick) {
                            _this.props.onClick(event, SearchResultsUtil_1.ConfluenceAdvancedSearchTypes.People);
                        }
                    } })),
            React.createElement(StickyFooter_1.default, { key: "advanced-search" },
                React.createElement(SearchConfluenceItem_1.default, { analyticsData: analyticsData, query: query, text: text, icon: React.createElement(search_1.default, { size: "medium", label: "Advanced search" }), showKeyboardLozenge: true, onClick: function (_a) {
                        var event = _a.event;
                        if (_this.props.onClick) {
                            _this.props.onClick(event, SearchResultsUtil_1.ConfluenceAdvancedSearchTypes.Content);
                        }
                    } })),
        ];
    };
    return AdvancedSearchGroup;
}(React.Component));
exports.default = AdvancedSearchGroup;
var templateObject_1;
//# sourceMappingURL=AdvancedSearchGroup.js.map