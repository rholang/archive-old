import { __assign, __extends } from "tslib";
import React, { Component } from 'react';
import { Nav, NavLine, NavWrapper } from '../styled';
var TabsNavigation = /** @class */ (function (_super) {
    __extends(TabsNavigation, _super);
    function TabsNavigation() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.elementRefs = [];
        _this.tabKeyDownHandler = function (e) {
            if (!['ArrowRight', 'ArrowLeft'].includes(e.key)) {
                return;
            }
            var _a = _this.props, selected = _a.selected, tabs = _a.tabs;
            var modifier = e.key === 'ArrowRight' ? 1 : -1;
            var newselectedIndex = tabs.indexOf(selected) + modifier;
            if (newselectedIndex < 0 || newselectedIndex >= tabs.length) {
                return;
            }
            _this.onSelect(tabs[newselectedIndex], newselectedIndex);
            _this.elementRefs[newselectedIndex].focus();
        };
        _this.onSelect = function (selected, selectedIndex) {
            _this.props.onSelect(selected, selectedIndex);
        };
        _this.tabMouseDownHandler = function (e) { return e.preventDefault(); };
        return _this;
    }
    TabsNavigation.prototype.UNSAFE_componentWillReceiveProps = function (newProps) {
        if (newProps.tabs !== this.props.tabs) {
            this.elementRefs = [];
        }
    };
    TabsNavigation.prototype.render = function () {
        var _this = this;
        var _a = this.props, selected = _a.selected, Item = _a.component, tabs = _a.tabs;
        return (React.createElement(NavWrapper, null,
            React.createElement(NavLine, { status: "normal" }),
            React.createElement(Nav, { role: "tablist" }, tabs.map(function (tab, index) {
                var isSelected = tab === selected;
                var elementProps = {
                    'aria-posinset': index + 1,
                    'aria-selected': isSelected,
                    'aria-setsize': tabs.length,
                    'data-testid': tab.testId,
                    onClick: function () { return _this.onSelect(tab, index); },
                    onKeyDown: _this.tabKeyDownHandler,
                    onMouseDown: _this.tabMouseDownHandler,
                    role: 'tab',
                    tabIndex: isSelected ? 0 : -1,
                };
                var innerRef = function (ref) {
                    _this.elementRefs[index] = ref;
                };
                var itemProps = {
                    elementProps: elementProps,
                    innerRef: innerRef,
                    data: tab,
                    isSelected: isSelected,
                };
                // eslint-disable-next-line react/no-array-index-key
                return React.createElement(Item, __assign({ key: index }, itemProps));
            }))));
    };
    return TabsNavigation;
}(Component));
export default TabsNavigation;
//# sourceMappingURL=TabsNavigation.js.map