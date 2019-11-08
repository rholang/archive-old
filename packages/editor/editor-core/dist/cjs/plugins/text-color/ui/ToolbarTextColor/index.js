"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var react_intl_1 = require("react-intl");
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var chevron_down_1 = tslib_1.__importDefault(require("@atlaskit/icon/glyph/chevron-down"));
var editor_common_1 = require("@atlaskit/editor-common");
var theme_1 = require("@atlaskit/theme");
var analytics_1 = require("../../../../analytics");
var ToolbarButton_1 = tslib_1.__importDefault(require("../../../../ui/ToolbarButton"));
var ColorPalette_1 = tslib_1.__importDefault(require("../../../../ui/ColorPalette"));
var Dropdown_1 = tslib_1.__importDefault(require("../../../../ui/Dropdown"));
var commands = tslib_1.__importStar(require("../../commands/change-color"));
var icon_1 = require("./icon");
var styles_1 = require("../../../../ui/styles");
exports.messages = react_intl_1.defineMessages({
    textColor: {
        id: 'fabric.editor.textColor',
        defaultMessage: 'Text color',
        description: '',
    },
});
var TextColorIconWrapper = styled_components_1.default.div(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  position: relative;\n"], ["\n  position: relative;\n"])));
var TextColorIconBar = styled_components_1.default.div(templateObject_2 || (templateObject_2 = tslib_1.__makeTemplateObject(["\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 16px;\n  margin: auto;\n  width: 12px;\n  height: 3px;\n  border-radius: ", ";\n\n  ", ";\n"], ["\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 16px;\n  margin: auto;\n  width: 12px;\n  height: 3px;\n  border-radius: ", ";\n\n  ",
    ";\n"])), theme_1.borderRadius() + 'px', function (_a) {
    var gradientColors = _a.gradientColors, selectedColor = _a.selectedColor;
    if (selectedColor) {
        return "background: " + selectedColor;
    }
    return "background: " + gradientColors;
});
var createSteppedRainbow = function (colors) {
    return "\n    linear-gradient(\n      to right,\n      " + colors
        .map(function (color, i) {
        var inc = 100 / colors.length;
        var pos = i + 1;
        if (i === 0) {
            return color + " " + pos * inc + "%,";
        }
        if (i === colors.length - 1) {
            return color + " " + (pos - 1) * inc + "%";
        }
        return "\n            " + color + " " + (pos - 1) * inc + "%,\n            " + color + " " + pos * inc + "%,\n          ";
    })
        .join('\n') + "\n    );\n    ";
};
var rainbow = createSteppedRainbow([
    theme_1.colors.P300,
    theme_1.colors.T300,
    theme_1.colors.Y400,
    theme_1.colors.R400,
]);
var disabledRainbow = createSteppedRainbow([
    theme_1.colors.N80,
    theme_1.colors.N60,
    theme_1.colors.N40,
    theme_1.colors.N60,
]);
var ToolbarTextColor = /** @class */ (function (_super) {
    tslib_1.__extends(ToolbarTextColor, _super);
    function ToolbarTextColor() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            isOpen: false,
        };
        _this.changeColor = function (color) {
            return commands.changeColor(color)(_this.props.editorView.state, _this.props.editorView.dispatch);
        };
        _this.changeTextColor = analytics_1.withAnalytics('atlassian.editor.format.textcolor.button', function (color, disabled) {
            if (!disabled) {
                _this.toggleOpen();
                return _this.changeColor(color);
            }
            return false;
        });
        _this.toggleOpen = function () {
            _this.handleOpenChange({ isOpen: !_this.state.isOpen });
        };
        _this.handleOpenChange = function (_a) {
            var isOpen = _a.isOpen;
            _this.setState({ isOpen: isOpen });
        };
        _this.hide = function () {
            if (_this.state.isOpen === true) {
                _this.setState({ isOpen: false });
            }
        };
        return _this;
    }
    ToolbarTextColor.prototype.render = function () {
        var _this = this;
        var isOpen = this.state.isOpen;
        var _a = this.props, popupsMountPoint = _a.popupsMountPoint, popupsBoundariesElement = _a.popupsBoundariesElement, popupsScrollableElement = _a.popupsScrollableElement, isReducedSpacing = _a.isReducedSpacing, pluginState = _a.pluginState, formatMessage = _a.intl.formatMessage;
        var labelTextColor = formatMessage(exports.messages.textColor);
        return (React.createElement(styles_1.MenuWrapper, null,
            React.createElement(Dropdown_1.default, { mountTo: popupsMountPoint, boundariesElement: popupsBoundariesElement, scrollableElement: popupsScrollableElement, isOpen: isOpen && !pluginState.disabled, handleClickOutside: this.hide, handleEscapeKeydown: this.hide, fitWidth: 242, fitHeight: 80, zIndex: editor_common_1.akEditorMenuZIndex, trigger: React.createElement(ToolbarButton_1.default, { spacing: isReducedSpacing ? 'none' : 'default', disabled: pluginState.disabled, selected: isOpen, title: labelTextColor, onClick: this.toggleOpen, iconBefore: React.createElement(styles_1.TriggerWrapper, null,
                        React.createElement(TextColorIconWrapper, null,
                            React.createElement(icon_1.EditorTextColorIcon, null),
                            React.createElement(TextColorIconBar, { selectedColor: pluginState.color !== pluginState.defaultColor &&
                                    pluginState.color, gradientColors: pluginState.disabled ? disabledRainbow : rainbow })),
                        React.createElement(styles_1.ExpandIconWrapper, null,
                            React.createElement(chevron_down_1.default, { label: labelTextColor }))) }) },
                React.createElement(ColorPalette_1.default, { palette: pluginState.palette, onClick: function (color) { return _this.changeTextColor(color, pluginState.disabled); }, selectedColor: pluginState.color })),
            React.createElement(styles_1.Separator, null)));
    };
    return ToolbarTextColor;
}(React.Component));
exports.default = react_intl_1.injectIntl(ToolbarTextColor);
var templateObject_1, templateObject_2;
//# sourceMappingURL=index.js.map