import { __extends, __makeTemplateObject } from "tslib";
import * as React from 'react';
import { Component } from 'react';
import styled from 'styled-components';
import { ButtonGroup } from '@atlaskit/button';
import { borderRadius, gridSize, colors, themed } from '@atlaskit/theme';
import { compareArrays, shallowEqual } from '../utils';
import Button from './Button';
import Dropdown from './Dropdown';
import Select from './Select';
import Separator from './Separator';
import Input from './Input';
var akGridSize = gridSize();
var ToolbarContainer = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  background-color: ", ";\n  border-radius: ", "px;\n  box-shadow: 0 0 1px rgba(9, 30, 66, 0.31),\n    0 4px 8px -2px rgba(9, 30, 66, 0.25);\n  padding: ", "px ", "px;\n  display: flex;\n  line-height: 1;\n  box-sizing: border-box;\n  ", ";\n  & > div {\n    align-items: center;\n  }\n"], ["\n  background-color: ", ";\n  border-radius: ", "px;\n  box-shadow: 0 0 1px rgba(9, 30, 66, 0.31),\n    0 4px 8px -2px rgba(9, 30, 66, 0.25);\n  padding: ", "px ", "px;\n  display: flex;\n  line-height: 1;\n  box-sizing: border-box;\n  ",
    ";\n  & > div {\n    align-items: center;\n  }\n"])), themed({ light: 'white', dark: colors.DN70 }), borderRadius(), akGridSize / 2, akGridSize, function (props) {
    return props.hasCompactLeftPadding ? "padding-left: " + akGridSize / 2 + "px" : '';
});
function makeSameType(_a, _b) {
    return true;
}
var compareItemWithKeys = function (leftItem, rightItem, excludedKeys) {
    if (excludedKeys === void 0) { excludedKeys = []; }
    return Object.keys(leftItem)
        .filter(function (key) { return excludedKeys.indexOf(key) === -1; })
        .every(function (key) {
        return leftItem[key] instanceof Object
            ? shallowEqual(leftItem[key], rightItem[key])
            : leftItem[key] === rightItem[key];
    });
};
export var isSameItem = function (leftItem, rightItem) {
    if (leftItem.type !== rightItem.type) {
        return false;
    }
    switch (leftItem.type) {
        case 'button':
            // Need to typecast `rightItem as typeof leftItem` otherwise we will
            // have to put the `type !==` inside each case.
            return compareItemWithKeys(leftItem, rightItem, [
                'type',
                'onClick',
                'onMouseEnter',
                'onMouseLeave',
            ]);
        case 'input':
            return compareItemWithKeys(leftItem, rightItem, [
                'type',
                'onSubmit',
                'onBlur',
            ]);
        case 'select':
            if (makeSameType(leftItem, rightItem) &&
                Array.isArray(leftItem.options) &&
                Array.isArray(rightItem.options) &&
                !compareArrays(leftItem.options, rightItem.options, function (left, right) {
                    return compareItemWithKeys(left, right);
                })) {
                return false;
            }
            return compareItemWithKeys(leftItem, rightItem, [
                'type',
                'onChange',
                'options',
            ]);
        case 'dropdown':
            if (makeSameType(leftItem, rightItem) &&
                Array.isArray(leftItem.options) &&
                Array.isArray(rightItem.options) &&
                !compareArrays(leftItem.options, rightItem.options, function (left, right) {
                    return compareItemWithKeys(left, right, ['onClick']);
                })) {
                return false;
            }
            return compareItemWithKeys(leftItem, rightItem, [
                'type',
                'options',
            ]);
        case 'custom':
            return false;
        case 'separator':
            return compareItemWithKeys(leftItem, rightItem);
    }
    return true;
};
export var areSameItems = function (leftArr, rightArr) {
    if (leftArr === undefined && rightArr === undefined) {
        return true;
    }
    if (leftArr === undefined || rightArr === undefined) {
        return false;
    }
    if (leftArr.length !== rightArr.length) {
        return false;
    }
    return leftArr.every(function (item, index) { return isSameItem(rightArr[index], item); });
};
var Toolbar = /** @class */ (function (_super) {
    __extends(Toolbar, _super);
    function Toolbar() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Toolbar.prototype.render = function () {
        var _c = this.props, items = _c.items, dispatchAnalyticsEvent = _c.dispatchAnalyticsEvent, dispatchCommand = _c.dispatchCommand, popupsMountPoint = _c.popupsMountPoint, popupsBoundariesElement = _c.popupsBoundariesElement, popupsScrollableElement = _c.popupsScrollableElement, className = _c.className, editorView = _c.editorView;
        if (!items || !items.length) {
            return null;
        }
        // Select has left padding of 4px to the border, everything else 8px
        var firstElementIsSelect = items[0].type === 'select';
        return (React.createElement(ToolbarContainer, { "aria-label": "Floating Toolbar", hasCompactLeftPadding: firstElementIsSelect, className: className },
            React.createElement(ButtonGroup, null, items
                .filter(function (item) { return !item.hidden; })
                .map(function (item, idx) {
                switch (item.type) {
                    case 'button':
                        var ButtonIcon = item.icon;
                        return (React.createElement(Button, { className: item.className, key: idx, title: item.title, href: item.href, icon: item.icon ? (React.createElement(ButtonIcon, { label: item.title })) : (undefined), appearance: item.appearance, target: item.target, onClick: function () { return dispatchCommand(item.onClick); }, onMouseEnter: function () { return dispatchCommand(item.onMouseEnter); }, onMouseLeave: function () { return dispatchCommand(item.onMouseLeave); }, selected: item.selected, disabled: item.disabled }, item.showTitle && item.title));
                    case 'input':
                        return (React.createElement(Input, { key: idx, mountPoint: popupsMountPoint, boundariesElement: popupsBoundariesElement, defaultValue: item.defaultValue, placeholder: item.placeholder, onSubmit: function (value) { return dispatchCommand(item.onSubmit(value)); }, onBlur: function (value) { return dispatchCommand(item.onBlur(value)); } }));
                    case 'custom': {
                        return item.render(editorView, idx, dispatchAnalyticsEvent);
                    }
                    case 'dropdown':
                        var DropdownIcon = item.icon;
                        return (React.createElement(Dropdown, { key: idx, title: item.title, icon: DropdownIcon && React.createElement(DropdownIcon, { label: item.title }), dispatchCommand: dispatchCommand, options: item.options, hideExpandIcon: item.hideExpandIcon, mountPoint: popupsMountPoint, boundariesElement: popupsBoundariesElement, scrollableElement: popupsScrollableElement }));
                    case 'select':
                        return (React.createElement(Select, { key: idx, dispatchCommand: dispatchCommand, options: item.options, hideExpandIcon: item.hideExpandIcon, mountPoint: popupsMountPoint, boundariesElement: popupsBoundariesElement, scrollableElement: popupsScrollableElement, defaultValue: item.defaultValue, placeholder: item.placeholder, onChange: function (selected) {
                                return dispatchCommand(item.onChange(selected));
                            } }));
                    case 'separator':
                        return React.createElement(Separator, { key: idx });
                }
            }))));
    };
    Toolbar.prototype.shouldComponentUpdate = function (nextProps) {
        return (this.props.node.type !== nextProps.node.type ||
            !areSameItems(this.props.items, nextProps.items));
    };
    return Toolbar;
}(Component));
export default Toolbar;
var templateObject_1;
//# sourceMappingURL=Toolbar.js.map