"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var chevron_down_1 = tslib_1.__importDefault(require("@atlaskit/icon/glyph/chevron-down"));
var chevron_up_1 = tslib_1.__importDefault(require("@atlaskit/icon/glyph/chevron-up"));
var themed_top_level_item_1 = require("./themed-top-level-item");
var themed_item_1 = tslib_1.__importDefault(require("./themed-item"));
var themed_child_item_1 = tslib_1.__importDefault(require("./themed-child-item"));
var theme_1 = require("@atlaskit/theme");
var colors = tslib_1.__importStar(require("@atlaskit/theme/colors"));
var tooltip_1 = tslib_1.__importDefault(require("@atlaskit/tooltip"));
var avatar_1 = tslib_1.__importDefault(require("./avatar"));
var fade_in_1 = require("./fade-in");
var analytics_1 = require("../utils/analytics");
var ItemContainer = styled_components_1.default.div(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  box-sizing: border-box;\n  border-radius: 3px;\n"], ["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  box-sizing: border-box;\n  border-radius: 3px;\n"])));
var ChildItemsContainer = styled_components_1.default.div(templateObject_2 || (templateObject_2 = tslib_1.__makeTemplateObject(["\n  margin: 2px 0;\n  border-radius: 3px;\n  background-color: ", ";\n"], ["\n  margin: 2px 0;\n  border-radius: 3px;\n  background-color: ", ";\n"])), colors.N20A);
var gridSizeResult = theme_1.gridSize();
var IconWrapper = styled_components_1.default.div(templateObject_3 || (templateObject_3 = tslib_1.__makeTemplateObject(["\n  width: ", "px;\n  height: ", "px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-right: -", "px;\n  margin-bottom: -1px;\n"], ["\n  width: ", "px;\n  height: ", "px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-right: -", "px;\n  margin-bottom: -1px;\n"])), gridSizeResult * 4, gridSizeResult * 4, gridSizeResult);
var SwitcherItemWithDropDown = /** @class */ (function (_super) {
    tslib_1.__extends(SwitcherItemWithDropDown, _super);
    function SwitcherItemWithDropDown() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            itemHovered: false,
            showChildItems: false,
        };
        _this.toggleChildItemsVisibility = function (event) {
            event && event.preventDefault();
            _this.setState({
                showChildItems: !_this.state.showChildItems,
            });
            if (!_this.state.showChildItems) {
                _this.props.onExpandClick && _this.props.onExpandClick();
            }
        };
        _this.setItemHovered = function (value) {
            _this.setState({
                itemHovered: value,
            });
        };
        _this.onMouseEnter = function () { return _this.setItemHovered(true); };
        _this.onMouseLeave = function () { return _this.setItemHovered(false); };
        return _this;
    }
    SwitcherItemWithDropDown.prototype.render = function () {
        var _a = this.props, icon = _a.icon, description = _a.description, childItems = _a.childItems, childIcon = _a.childIcon, onItemClick = _a.onItemClick, onChildItemClick = _a.onChildItemClick, rest = tslib_1.__rest(_a, ["icon", "description", "childItems", "childIcon", "onItemClick", "onChildItemClick"]);
        var _b = this.state, showChildItems = _b.showChildItems, itemHovered = _b.itemHovered;
        var childItemsExist = childItems && childItems.length > 0;
        return (React.createElement(fade_in_1.FadeIn, null,
            React.createElement(React.Fragment, null,
                React.createElement(ItemContainer, { onMouseEnter: this.onMouseEnter, onMouseLeave: this.onMouseLeave },
                    React.createElement(themed_top_level_item_1.ItemWrapper, { isParentHovered: itemHovered },
                        React.createElement(themed_item_1.default, tslib_1.__assign({ icon: icon, description: childItemsExist ? description : null, onClick: onItemClick }, rest))),
                    childItemsExist && this.renderToggle(showChildItems, itemHovered)),
                showChildItems && childItems && (React.createElement(ChildItemsContainer, null, childItems.map(function (item) { return (React.createElement(themed_child_item_1.default, { icon: React.createElement(avatar_1.default, { avatarUrl: item.avatar, fallbackComponent: childIcon }), href: item.href, key: item.label, onClick: onChildItemClick, "data-test-id": "switcher-child-item" }, item.label)); }))))));
    };
    SwitcherItemWithDropDown.prototype.renderToggle = function (showChildItems, isParentHovered) {
        var _this = this;
        var icon = (React.createElement(IconWrapper, null, showChildItems ? (React.createElement(chevron_up_1.default, { label: "Collapse" })) : (React.createElement(chevron_down_1.default, { label: "Expand" }))));
        var toggle = (React.createElement(themed_top_level_item_1.Toggle, { isParentHovered: isParentHovered },
            React.createElement(themed_item_1.default, { "data-test-id": "switcher-expand-toggle", onClick: this.toggleChildItemsVisibility, onKeyDown: function (e) {
                    return e.key === 'Enter' && _this.toggleChildItemsVisibility();
                }, children: undefined, icon: icon })));
        return showChildItems ? (toggle) : (React.createElement(tooltip_1.default, { content: this.props.tooltipContent, hideTooltipOnMouseDown: true, position: "top" }, toggle));
    };
    return SwitcherItemWithDropDown;
}(React.Component));
var SwitcherItemWithDropDownWithEvents = analytics_1.withAnalyticsEvents({
    onChildItemClick: analytics_1.createAndFireNavigationEvent({
        eventType: analytics_1.UI_EVENT_TYPE,
        action: 'clicked',
        actionSubject: analytics_1.SWITCHER_CHILD_ITEM_SUBJECT,
    }),
    onExpandClick: analytics_1.createAndFireNavigationEvent({
        eventType: analytics_1.UI_EVENT_TYPE,
        action: 'clicked',
        actionSubject: analytics_1.SWITCHER_ITEM_EXPAND_SUBJECT,
    }),
    onItemClick: analytics_1.createAndFireNavigationEvent({
        eventType: analytics_1.UI_EVENT_TYPE,
        action: 'clicked',
        actionSubject: analytics_1.SWITCHER_ITEM_SUBJECT,
    }),
})(SwitcherItemWithDropDown);
exports.default = SwitcherItemWithDropDownWithEvents;
var templateObject_1, templateObject_2, templateObject_3;
//# sourceMappingURL=item-with-dropdown.js.map