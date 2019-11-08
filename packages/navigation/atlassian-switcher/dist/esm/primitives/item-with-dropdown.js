import { __assign, __extends, __makeTemplateObject, __rest } from "tslib";
import * as React from 'react';
import styled from 'styled-components';
import ChevronDownIcon from '@atlaskit/icon/glyph/chevron-down';
import ChevronUpIcon from '@atlaskit/icon/glyph/chevron-up';
import { Toggle, ItemWrapper } from './themed-top-level-item';
import SwitcherThemedItem from './themed-item';
import SwitcherThemedChildItem from './themed-child-item';
import { gridSize } from '@atlaskit/theme';
import * as colors from '@atlaskit/theme/colors';
import Tooltip from '@atlaskit/tooltip';
import Avatar from './avatar';
import { FadeIn } from './fade-in';
import { createAndFireNavigationEvent, withAnalyticsEvents, UI_EVENT_TYPE, SWITCHER_CHILD_ITEM_SUBJECT, SWITCHER_ITEM_SUBJECT, SWITCHER_ITEM_EXPAND_SUBJECT, } from '../utils/analytics';
var ItemContainer = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  box-sizing: border-box;\n  border-radius: 3px;\n"], ["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  box-sizing: border-box;\n  border-radius: 3px;\n"])));
var ChildItemsContainer = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  margin: 2px 0;\n  border-radius: 3px;\n  background-color: ", ";\n"], ["\n  margin: 2px 0;\n  border-radius: 3px;\n  background-color: ", ";\n"])), colors.N20A);
var gridSizeResult = gridSize();
var IconWrapper = styled.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  width: ", "px;\n  height: ", "px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-right: -", "px;\n  margin-bottom: -1px;\n"], ["\n  width: ", "px;\n  height: ", "px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-right: -", "px;\n  margin-bottom: -1px;\n"])), gridSizeResult * 4, gridSizeResult * 4, gridSizeResult);
var SwitcherItemWithDropDown = /** @class */ (function (_super) {
    __extends(SwitcherItemWithDropDown, _super);
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
        var _a = this.props, icon = _a.icon, description = _a.description, childItems = _a.childItems, childIcon = _a.childIcon, onItemClick = _a.onItemClick, onChildItemClick = _a.onChildItemClick, rest = __rest(_a, ["icon", "description", "childItems", "childIcon", "onItemClick", "onChildItemClick"]);
        var _b = this.state, showChildItems = _b.showChildItems, itemHovered = _b.itemHovered;
        var childItemsExist = childItems && childItems.length > 0;
        return (React.createElement(FadeIn, null,
            React.createElement(React.Fragment, null,
                React.createElement(ItemContainer, { onMouseEnter: this.onMouseEnter, onMouseLeave: this.onMouseLeave },
                    React.createElement(ItemWrapper, { isParentHovered: itemHovered },
                        React.createElement(SwitcherThemedItem, __assign({ icon: icon, description: childItemsExist ? description : null, onClick: onItemClick }, rest))),
                    childItemsExist && this.renderToggle(showChildItems, itemHovered)),
                showChildItems && childItems && (React.createElement(ChildItemsContainer, null, childItems.map(function (item) { return (React.createElement(SwitcherThemedChildItem, { icon: React.createElement(Avatar, { avatarUrl: item.avatar, fallbackComponent: childIcon }), href: item.href, key: item.label, onClick: onChildItemClick, "data-test-id": "switcher-child-item" }, item.label)); }))))));
    };
    SwitcherItemWithDropDown.prototype.renderToggle = function (showChildItems, isParentHovered) {
        var _this = this;
        var icon = (React.createElement(IconWrapper, null, showChildItems ? (React.createElement(ChevronUpIcon, { label: "Collapse" })) : (React.createElement(ChevronDownIcon, { label: "Expand" }))));
        var toggle = (React.createElement(Toggle, { isParentHovered: isParentHovered },
            React.createElement(SwitcherThemedItem, { "data-test-id": "switcher-expand-toggle", onClick: this.toggleChildItemsVisibility, onKeyDown: function (e) {
                    return e.key === 'Enter' && _this.toggleChildItemsVisibility();
                }, children: undefined, icon: icon })));
        return showChildItems ? (toggle) : (React.createElement(Tooltip, { content: this.props.tooltipContent, hideTooltipOnMouseDown: true, position: "top" }, toggle));
    };
    return SwitcherItemWithDropDown;
}(React.Component));
var SwitcherItemWithDropDownWithEvents = withAnalyticsEvents({
    onChildItemClick: createAndFireNavigationEvent({
        eventType: UI_EVENT_TYPE,
        action: 'clicked',
        actionSubject: SWITCHER_CHILD_ITEM_SUBJECT,
    }),
    onExpandClick: createAndFireNavigationEvent({
        eventType: UI_EVENT_TYPE,
        action: 'clicked',
        actionSubject: SWITCHER_ITEM_EXPAND_SUBJECT,
    }),
    onItemClick: createAndFireNavigationEvent({
        eventType: UI_EVENT_TYPE,
        action: 'clicked',
        actionSubject: SWITCHER_ITEM_SUBJECT,
    }),
})(SwitcherItemWithDropDown);
export default SwitcherItemWithDropDownWithEvents;
var templateObject_1, templateObject_2, templateObject_3;
//# sourceMappingURL=item-with-dropdown.js.map