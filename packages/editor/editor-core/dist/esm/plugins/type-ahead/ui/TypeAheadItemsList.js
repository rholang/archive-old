var _a;
import { __extends, __makeTemplateObject } from "tslib";
import * as React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import Item, { ItemGroup, itemThemeNamespace } from '@atlaskit/item';
import { colors, borderRadius, themed } from '@atlaskit/theme';
import IconFallback from '../../quick-insert/assets/fallback';
import { Shortcut } from '../../../ui/styles';
var itemTheme = (_a = {},
    _a[itemThemeNamespace] = {
        padding: {
            default: {
                bottom: 12,
                left: 12,
                right: 12,
                top: 12,
            },
        },
        beforeItemSpacing: {
            default: function () { return 12; },
        },
        borderRadius: function () { return 0; },
        hover: {
            background: colors.transparent,
            text: colors.text,
            secondaryText: colors.N200,
        },
        selected: {
            background: themed({ light: colors.N20, dark: colors.DN70 }),
            text: themed({ light: colors.N800, dark: colors.DN600 }),
            secondaryText: themed({ light: colors.N200, dark: colors.DN300 }),
        },
    },
    _a);
export var ItemIcon = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  width: 40px;\n  height: 40px;\n  overflow: hidden;\n  border: 1px solid rgba(223, 225, 229, 0.5); /* N60 at 50% */\n  border-radius: ", "px;\n  box-sizing: border-box;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  div {\n    width: 40px;\n    height: 40px;\n  }\n"], ["\n  width: 40px;\n  height: 40px;\n  overflow: hidden;\n  border: 1px solid rgba(223, 225, 229, 0.5); /* N60 at 50% */\n  border-radius: ", "px;\n  box-sizing: border-box;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  div {\n    width: 40px;\n    height: 40px;\n  }\n"])), borderRadius());
var ItemBody = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  justify-content: space-between;\n  line-height: 1.4;\n"], ["\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  justify-content: space-between;\n  line-height: 1.4;\n"])));
var ItemText = styled.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  white-space: initial;\n  .item-description {\n    font-size: 11.67px;\n    color: ", ";\n    margin-top: 4px;\n  }\n"], ["\n  white-space: initial;\n  .item-description {\n    font-size: 11.67px;\n    color: ", ";\n    margin-top: 4px;\n  }\n"])), colors.N200);
var ItemAfter = styled.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  flex: 0 0 auto;\n"], ["\n  flex: 0 0 auto;\n"])));
var fallbackIcon = function (label) {
    return React.createElement(IconFallback, { label: label });
};
export function scrollIntoViewIfNeeded(element) {
    var offsetTop = element.offsetTop, offsetHeight = element.offsetHeight, offsetParent = element.offsetParent;
    var _a = offsetParent, offsetParentHeight = _a.offsetHeight, scrollTop = _a.scrollTop;
    var direction = offsetTop + offsetHeight > offsetParentHeight + scrollTop
        ? 1
        : scrollTop > offsetTop
            ? -1
            : 0;
    if (direction !== 0 && offsetParent) {
        offsetParent.scrollTop =
            direction === 1
                ? offsetTop + offsetHeight - offsetParentHeight
                : offsetTop;
    }
}
export function TypeAheadItemsList(_a) {
    var items = _a.items, currentIndex = _a.currentIndex, insertByIndex = _a.insertByIndex, setCurrentIndex = _a.setCurrentIndex;
    if (!Array.isArray(items)) {
        return null;
    }
    return (React.createElement(ThemeProvider, { theme: itemTheme },
        React.createElement(ItemGroup, null, items.map(function (item, index) { return (React.createElement(TypeAheadItemComponent, { key: item.key || item.title, item: item, index: index, currentIndex: currentIndex, insertByIndex: insertByIndex, setCurrentIndex: setCurrentIndex })); }))));
}
var TypeAheadItemComponent = /** @class */ (function (_super) {
    __extends(TypeAheadItemComponent, _super);
    function TypeAheadItemComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = { ref: null };
        _this.insertByIndex = function () {
            _this.props.insertByIndex(_this.props.index);
        };
        _this.setCurrentIndex = function () {
            _this.props.setCurrentIndex(_this.props.index);
        };
        _this.handleRef = function (ref) {
            var hasRef = function (ref) { return ref && ref.ref; };
            _this.setState({ ref: hasRef(ref) ? ref.ref : ref });
        };
        return _this;
    }
    TypeAheadItemComponent.prototype.shouldComponentUpdate = function (nextProps) {
        return (nextProps.item !== this.props.item ||
            this.isSelected(this.props) !== this.isSelected(nextProps));
    };
    TypeAheadItemComponent.prototype.isSelected = function (props) {
        return props.index === props.currentIndex;
    };
    TypeAheadItemComponent.prototype.componentDidUpdate = function () {
        var ref = this.state.ref;
        if (this.props.index === this.props.currentIndex && ref) {
            scrollIntoViewIfNeeded(ref);
        }
    };
    TypeAheadItemComponent.prototype.render = function () {
        var item = this.props.item;
        return item.render ? (React.createElement("div", { ref: this.handleRef, style: { overflow: 'hidden' } },
            React.createElement(item.render, { onClick: this.insertByIndex, onHover: this.setCurrentIndex, isSelected: this.isSelected(this.props) }))) : (React.createElement(Item, { onClick: this.insertByIndex, onMouseEnter: this.setCurrentIndex, elemBefore: React.createElement(ItemIcon, null, item.icon ? item.icon() : fallbackIcon(item.title)), isSelected: this.isSelected(this.props), "aria-describedby": item.title, ref: this.handleRef },
            React.createElement(ItemBody, null,
                React.createElement(ItemText, null,
                    React.createElement("div", { className: "item-title" }, item.title),
                    item.description && (React.createElement("div", { className: "item-description" }, item.description))),
                React.createElement(ItemAfter, null, item.keyshortcut && React.createElement(Shortcut, null, item.keyshortcut)))));
    };
    return TypeAheadItemComponent;
}(React.Component));
export { TypeAheadItemComponent };
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
//# sourceMappingURL=TypeAheadItemsList.js.map