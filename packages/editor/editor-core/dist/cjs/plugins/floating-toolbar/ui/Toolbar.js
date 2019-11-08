"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var react_1 = require("react");
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var button_1 = require("@atlaskit/button");
var theme_1 = require("@atlaskit/theme");
var utils_1 = require("../utils");
var Button_1 = tslib_1.__importDefault(require("./Button"));
var Dropdown_1 = tslib_1.__importDefault(require("./Dropdown"));
var Select_1 = tslib_1.__importDefault(require("./Select"));
var Separator_1 = tslib_1.__importDefault(require("./Separator"));
var Input_1 = tslib_1.__importDefault(require("./Input"));
var akGridSize = theme_1.gridSize();
var ToolbarContainer = styled_components_1.default.div(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  background-color: ", ";\n  border-radius: ", "px;\n  box-shadow: 0 0 1px rgba(9, 30, 66, 0.31),\n    0 4px 8px -2px rgba(9, 30, 66, 0.25);\n  padding: ", "px ", "px;\n  display: flex;\n  line-height: 1;\n  box-sizing: border-box;\n  ", ";\n  & > div {\n    align-items: center;\n  }\n"], ["\n  background-color: ", ";\n  border-radius: ", "px;\n  box-shadow: 0 0 1px rgba(9, 30, 66, 0.31),\n    0 4px 8px -2px rgba(9, 30, 66, 0.25);\n  padding: ", "px ", "px;\n  display: flex;\n  line-height: 1;\n  box-sizing: border-box;\n  ",
    ";\n  & > div {\n    align-items: center;\n  }\n"])), theme_1.themed({ light: 'white', dark: theme_1.colors.DN70 }), theme_1.borderRadius(), akGridSize / 2, akGridSize, function (props) {
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
            ? utils_1.shallowEqual(leftItem[key], rightItem[key])
            : leftItem[key] === rightItem[key];
    });
};
exports.isSameItem = function (leftItem, rightItem) {
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
                !utils_1.compareArrays(leftItem.options, rightItem.options, function (left, right) {
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
                !utils_1.compareArrays(leftItem.options, rightItem.options, function (left, right) {
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
exports.areSameItems = function (leftArr, rightArr) {
    if (leftArr === undefined && rightArr === undefined) {
        return true;
    }
    if (leftArr === undefined || rightArr === undefined) {
        return false;
    }
    if (leftArr.length !== rightArr.length) {
        return false;
    }
    return leftArr.every(function (item, index) { return exports.isSameItem(rightArr[index], item); });
};
var Toolbar = /** @class */ (function (_super) {
    tslib_1.__extends(Toolbar, _super);
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
            React.createElement(button_1.ButtonGroup, null, items
                .filter(function (item) { return !item.hidden; })
                .map(function (item, idx) {
                switch (item.type) {
                    case 'button':
                        var ButtonIcon = item.icon;
                        return (React.createElement(Button_1.default, { className: item.className, key: idx, title: item.title, href: item.href, icon: item.icon ? (React.createElement(ButtonIcon, { label: item.title })) : (undefined), appearance: item.appearance, target: item.target, onClick: function () { return dispatchCommand(item.onClick); }, onMouseEnter: function () { return dispatchCommand(item.onMouseEnter); }, onMouseLeave: function () { return dispatchCommand(item.onMouseLeave); }, selected: item.selected, disabled: item.disabled }, item.showTitle && item.title));
                    case 'input':
                        return (React.createElement(Input_1.default, { key: idx, mountPoint: popupsMountPoint, boundariesElement: popupsBoundariesElement, defaultValue: item.defaultValue, placeholder: item.placeholder, onSubmit: function (value) { return dispatchCommand(item.onSubmit(value)); }, onBlur: function (value) { return dispatchCommand(item.onBlur(value)); } }));
                    case 'custom': {
                        return item.render(editorView, idx, dispatchAnalyticsEvent);
                    }
                    case 'dropdown':
                        var DropdownIcon = item.icon;
                        return (React.createElement(Dropdown_1.default, { key: idx, title: item.title, icon: DropdownIcon && React.createElement(DropdownIcon, { label: item.title }), dispatchCommand: dispatchCommand, options: item.options, hideExpandIcon: item.hideExpandIcon, mountPoint: popupsMountPoint, boundariesElement: popupsBoundariesElement, scrollableElement: popupsScrollableElement }));
                    case 'select':
                        return (React.createElement(Select_1.default, { key: idx, dispatchCommand: dispatchCommand, options: item.options, hideExpandIcon: item.hideExpandIcon, mountPoint: popupsMountPoint, boundariesElement: popupsBoundariesElement, scrollableElement: popupsScrollableElement, defaultValue: item.defaultValue, placeholder: item.placeholder, onChange: function (selected) {
                                return dispatchCommand(item.onChange(selected));
                            } }));
                    case 'separator':
                        return React.createElement(Separator_1.default, { key: idx });
                }
            }))));
    };
    Toolbar.prototype.shouldComponentUpdate = function (nextProps) {
        return (this.props.node.type !== nextProps.node.type ||
            !exports.areSameItems(this.props.items, nextProps.items));
    };
    return Toolbar;
}(react_1.Component));
exports.default = Toolbar;
var templateObject_1;
//# sourceMappingURL=Toolbar.js.map