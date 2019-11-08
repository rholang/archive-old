"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var styled_components_1 = tslib_1.__importStar(require("styled-components"));
var item_1 = tslib_1.__importStar(require("@atlaskit/item"));
var theme_1 = require("@atlaskit/theme");
var fallback_1 = tslib_1.__importDefault(require("../../quick-insert/assets/fallback"));
var styles_1 = require("../../../ui/styles");
var itemTheme = (_a = {},
    _a[item_1.itemThemeNamespace] = {
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
            background: theme_1.colors.transparent,
            text: theme_1.colors.text,
            secondaryText: theme_1.colors.N200,
        },
        selected: {
            background: theme_1.themed({ light: theme_1.colors.N20, dark: theme_1.colors.DN70 }),
            text: theme_1.themed({ light: theme_1.colors.N800, dark: theme_1.colors.DN600 }),
            secondaryText: theme_1.themed({ light: theme_1.colors.N200, dark: theme_1.colors.DN300 }),
        },
    },
    _a);
exports.ItemIcon = styled_components_1.default.div(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  width: 40px;\n  height: 40px;\n  overflow: hidden;\n  border: 1px solid rgba(223, 225, 229, 0.5); /* N60 at 50% */\n  border-radius: ", "px;\n  box-sizing: border-box;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  div {\n    width: 40px;\n    height: 40px;\n  }\n"], ["\n  width: 40px;\n  height: 40px;\n  overflow: hidden;\n  border: 1px solid rgba(223, 225, 229, 0.5); /* N60 at 50% */\n  border-radius: ", "px;\n  box-sizing: border-box;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  div {\n    width: 40px;\n    height: 40px;\n  }\n"])), theme_1.borderRadius());
var ItemBody = styled_components_1.default.div(templateObject_2 || (templateObject_2 = tslib_1.__makeTemplateObject(["\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  justify-content: space-between;\n  line-height: 1.4;\n"], ["\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  justify-content: space-between;\n  line-height: 1.4;\n"])));
var ItemText = styled_components_1.default.div(templateObject_3 || (templateObject_3 = tslib_1.__makeTemplateObject(["\n  white-space: initial;\n  .item-description {\n    font-size: 11.67px;\n    color: ", ";\n    margin-top: 4px;\n  }\n"], ["\n  white-space: initial;\n  .item-description {\n    font-size: 11.67px;\n    color: ", ";\n    margin-top: 4px;\n  }\n"])), theme_1.colors.N200);
var ItemAfter = styled_components_1.default.div(templateObject_4 || (templateObject_4 = tslib_1.__makeTemplateObject(["\n  flex: 0 0 auto;\n"], ["\n  flex: 0 0 auto;\n"])));
var fallbackIcon = function (label) {
    return React.createElement(fallback_1.default, { label: label });
};
function scrollIntoViewIfNeeded(element) {
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
exports.scrollIntoViewIfNeeded = scrollIntoViewIfNeeded;
function TypeAheadItemsList(_a) {
    var items = _a.items, currentIndex = _a.currentIndex, insertByIndex = _a.insertByIndex, setCurrentIndex = _a.setCurrentIndex;
    if (!Array.isArray(items)) {
        return null;
    }
    return (React.createElement(styled_components_1.ThemeProvider, { theme: itemTheme },
        React.createElement(item_1.ItemGroup, null, items.map(function (item, index) { return (React.createElement(TypeAheadItemComponent, { key: item.key || item.title, item: item, index: index, currentIndex: currentIndex, insertByIndex: insertByIndex, setCurrentIndex: setCurrentIndex })); }))));
}
exports.TypeAheadItemsList = TypeAheadItemsList;
var TypeAheadItemComponent = /** @class */ (function (_super) {
    tslib_1.__extends(TypeAheadItemComponent, _super);
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
            React.createElement(item.render, { onClick: this.insertByIndex, onHover: this.setCurrentIndex, isSelected: this.isSelected(this.props) }))) : (React.createElement(item_1.default, { onClick: this.insertByIndex, onMouseEnter: this.setCurrentIndex, elemBefore: React.createElement(exports.ItemIcon, null, item.icon ? item.icon() : fallbackIcon(item.title)), isSelected: this.isSelected(this.props), "aria-describedby": item.title, ref: this.handleRef },
            React.createElement(ItemBody, null,
                React.createElement(ItemText, null,
                    React.createElement("div", { className: "item-title" }, item.title),
                    item.description && (React.createElement("div", { className: "item-description" }, item.description))),
                React.createElement(ItemAfter, null, item.keyshortcut && React.createElement(styles_1.Shortcut, null, item.keyshortcut)))));
    };
    return TypeAheadItemComponent;
}(React.Component));
exports.TypeAheadItemComponent = TypeAheadItemComponent;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
//# sourceMappingURL=TypeAheadItemsList.js.map