"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var quick_search_1 = require("@atlaskit/quick-search");
var button_1 = tslib_1.__importDefault(require("@atlaskit/button"));
var messages_1 = require("../../messages");
var react_intl_1 = require("react-intl");
var SpaceFilter_1 = tslib_1.__importDefault(require("./SpaceFilter"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var analytics_event_helper_1 = require("../../util/analytics-event-helper");
var analytics_next_1 = require("@atlaskit/analytics-next");
var Container = styled_components_1.default.span(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  display: inline-flex;\n  align-items: center;\n  max-width: 100%;\n"], ["\n  display: inline-flex;\n  align-items: center;\n  max-width: 100%;\n"])));
var ButtonContainer = styled_components_1.default.div(templateObject_2 || (templateObject_2 = tslib_1.__makeTemplateObject(["\n  flex-shrink: 0;\n"], ["\n  flex-shrink: 0;\n"])));
var FilterContainer = styled_components_1.default.div(templateObject_3 || (templateObject_3 = tslib_1.__makeTemplateObject(["\n  flex-shrink: 1;\n  overflow: hidden;\n"], ["\n  flex-shrink: 1;\n  overflow: hidden;\n"])));
var ConfluenceFilterGroup = /** @class */ (function (_super) {
    tslib_1.__extends(ConfluenceFilterGroup, _super);
    function ConfluenceFilterGroup() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.onMoreFiltersClick = function (event) {
            var _a = _this.props, onAdvancedSearch = _a.onAdvancedSearch, createAnalyticsEvent = _a.createAnalyticsEvent, searchSessionId = _a.searchSessionId;
            analytics_event_helper_1.fireMoreFiltersButtonClickEvent(searchSessionId, createAnalyticsEvent);
            onAdvancedSearch(event);
        };
        return _this;
    }
    ConfluenceFilterGroup.prototype.render = function () {
        return (React.createElement(quick_search_1.ResultItemGroup, { title: React.createElement(react_intl_1.FormattedMessage, tslib_1.__assign({}, messages_1.messages.confluence_space_filter)) },
            React.createElement(Container, null,
                React.createElement(FilterContainer, null,
                    React.createElement(SpaceFilter_1.default, tslib_1.__assign({}, this.props))),
                React.createElement(ButtonContainer, null,
                    React.createElement(button_1.default, { appearance: "link", onClick: this.onMoreFiltersClick },
                        React.createElement(react_intl_1.FormattedMessage, tslib_1.__assign({}, messages_1.messages.confluence_more_filters)))))));
    };
    return ConfluenceFilterGroup;
}(React.Component));
exports.ConfluenceFilterGroup = ConfluenceFilterGroup;
exports.default = analytics_next_1.withAnalyticsEvents()(ConfluenceFilterGroup);
var templateObject_1, templateObject_2, templateObject_3;
//# sourceMappingURL=ConfluenceFilterGroup.js.map