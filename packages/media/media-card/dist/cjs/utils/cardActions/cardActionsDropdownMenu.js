"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var react_1 = require("react");
var more_1 = tslib_1.__importDefault(require("@atlaskit/icon/glyph/more"));
var dropdown_menu_1 = tslib_1.__importStar(require("@atlaskit/dropdown-menu"));
var styled_1 = require("./styled");
var analytics_next_1 = require("@atlaskit/analytics-next");
var analytics_1 = require("../analytics");
var CardActionButtonWithProps = function (props) { return (React.createElement(styled_1.CardActionButton, tslib_1.__assign({}, props))); };
var CardActionButtonWithAnalytics = analytics_next_1.withAnalyticsEvents({
    onClick: analytics_1.createAndFireMediaEvent({
        eventType: 'ui',
        action: 'clicked',
        actionSubject: 'button',
        actionSubjectId: 'mediaCardDropDownMenu',
    }),
})(CardActionButtonWithProps);
var DropdownItemWithProps = function (props) { return (React.createElement(dropdown_menu_1.DropdownItem, tslib_1.__assign({}, props))); };
var createDropdownItemWithAnalytics = function (action, index) {
    var label = action.label, handler = action.handler;
    var DropdownItemWithAnalytics = analytics_next_1.withAnalyticsEvents({
        onClick: analytics_1.createAndFireMediaEvent({
            eventType: 'ui',
            action: 'clicked',
            actionSubject: 'button',
            actionSubjectId: 'mediaCardDropDownMenuItem',
            attributes: {
                label: label,
            },
        }),
    })(DropdownItemWithProps);
    return (React.createElement(DropdownItemWithAnalytics, { key: index, onClick: handler }, label));
};
var CardActionsDropdownMenu = /** @class */ (function (_super) {
    tslib_1.__extends(CardActionsDropdownMenu, _super);
    function CardActionsDropdownMenu() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CardActionsDropdownMenu.prototype.render = function () {
        var _a = this.props, actions = _a.actions, triggerColor = _a.triggerColor, onOpenChange = _a.onOpenChange;
        if (actions.length > 0) {
            return (React.createElement(dropdown_menu_1.default, { onOpenChange: onOpenChange, trigger: React.createElement(CardActionButtonWithAnalytics, { style: { color: triggerColor } },
                    React.createElement(more_1.default, { label: "more" })) },
                React.createElement(dropdown_menu_1.DropdownItemGroup, null, actions.map(createDropdownItemWithAnalytics))));
        }
        else {
            return null;
        }
    };
    return CardActionsDropdownMenu;
}(react_1.Component));
exports.CardActionsDropdownMenu = CardActionsDropdownMenu;
//# sourceMappingURL=cardActionsDropdownMenu.js.map