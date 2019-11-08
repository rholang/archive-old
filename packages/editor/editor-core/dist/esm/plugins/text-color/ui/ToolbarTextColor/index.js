import { __extends, __makeTemplateObject } from "tslib";
import * as React from 'react';
import { defineMessages, injectIntl } from 'react-intl';
import styled from 'styled-components';
import ExpandIcon from '@atlaskit/icon/glyph/chevron-down';
import { akEditorMenuZIndex } from '@atlaskit/editor-common';
import { borderRadius, colors } from '@atlaskit/theme';
import { withAnalytics } from '../../../../analytics';
import ToolbarButton from '../../../../ui/ToolbarButton';
import ColorPalette from '../../../../ui/ColorPalette';
import Dropdown from '../../../../ui/Dropdown';
import * as commands from '../../commands/change-color';
import { EditorTextColorIcon } from './icon';
import { Separator, TriggerWrapper, MenuWrapper, ExpandIconWrapper, } from '../../../../ui/styles';
export var messages = defineMessages({
    textColor: {
        id: 'fabric.editor.textColor',
        defaultMessage: 'Text color',
        description: '',
    },
});
var TextColorIconWrapper = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: relative;\n"], ["\n  position: relative;\n"])));
var TextColorIconBar = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 16px;\n  margin: auto;\n  width: 12px;\n  height: 3px;\n  border-radius: ", ";\n\n  ", ";\n"], ["\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 16px;\n  margin: auto;\n  width: 12px;\n  height: 3px;\n  border-radius: ", ";\n\n  ",
    ";\n"])), borderRadius() + 'px', function (_a) {
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
    colors.P300,
    colors.T300,
    colors.Y400,
    colors.R400,
]);
var disabledRainbow = createSteppedRainbow([
    colors.N80,
    colors.N60,
    colors.N40,
    colors.N60,
]);
var ToolbarTextColor = /** @class */ (function (_super) {
    __extends(ToolbarTextColor, _super);
    function ToolbarTextColor() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            isOpen: false,
        };
        _this.changeColor = function (color) {
            return commands.changeColor(color)(_this.props.editorView.state, _this.props.editorView.dispatch);
        };
        _this.changeTextColor = withAnalytics('atlassian.editor.format.textcolor.button', function (color, disabled) {
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
        var labelTextColor = formatMessage(messages.textColor);
        return (React.createElement(MenuWrapper, null,
            React.createElement(Dropdown, { mountTo: popupsMountPoint, boundariesElement: popupsBoundariesElement, scrollableElement: popupsScrollableElement, isOpen: isOpen && !pluginState.disabled, handleClickOutside: this.hide, handleEscapeKeydown: this.hide, fitWidth: 242, fitHeight: 80, zIndex: akEditorMenuZIndex, trigger: React.createElement(ToolbarButton, { spacing: isReducedSpacing ? 'none' : 'default', disabled: pluginState.disabled, selected: isOpen, title: labelTextColor, onClick: this.toggleOpen, iconBefore: React.createElement(TriggerWrapper, null,
                        React.createElement(TextColorIconWrapper, null,
                            React.createElement(EditorTextColorIcon, null),
                            React.createElement(TextColorIconBar, { selectedColor: pluginState.color !== pluginState.defaultColor &&
                                    pluginState.color, gradientColors: pluginState.disabled ? disabledRainbow : rainbow })),
                        React.createElement(ExpandIconWrapper, null,
                            React.createElement(ExpandIcon, { label: labelTextColor }))) }) },
                React.createElement(ColorPalette, { palette: pluginState.palette, onClick: function (color) { return _this.changeTextColor(color, pluginState.disabled); }, selectedColor: pluginState.color })),
            React.createElement(Separator, null)));
    };
    return ToolbarTextColor;
}(React.Component));
export default injectIntl(ToolbarTextColor);
var templateObject_1, templateObject_2;
//# sourceMappingURL=index.js.map