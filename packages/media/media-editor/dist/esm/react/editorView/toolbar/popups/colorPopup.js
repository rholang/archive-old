var _a;
import { __extends } from "tslib";
import * as React from 'react';
import { Component } from 'react';
import InlineDialog from '@atlaskit/inline-dialog';
import * as colors from '@atlaskit/theme/colors';
import { ColorButton } from './colorButton';
import { ColorPopupContentWrapper } from './popupStyles';
export var PICKER_COLORS = (_a = {},
    _a[colors.R300] = colors.R200,
    _a[colors.Y300] = colors.Y200,
    _a[colors.G300] = colors.G200,
    _a[colors.B300] = colors.B200,
    _a[colors.R100] = colors.R75,
    _a[colors.Y75] = colors.Y50,
    _a[colors.G100] = colors.G200,
    _a[colors.B100] = colors.B100,
    _a[colors.P100] = colors.P75,
    _a[colors.T300] = colors.T100,
    _a[colors.N60] = colors.N40,
    _a[colors.N800] = colors.N200,
    _a);
export var DEFAULT_COLOR = colors.R300;
var ColorPopup = /** @class */ (function (_super) {
    __extends(ColorPopup, _super);
    function ColorPopup() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.closeSoon = function () {
            var onClose = _this.props.onClose;
            _this.closeSoonTimeout = window.setTimeout(onClose, 1500);
        };
        _this.cancelCloseSoon = function () {
            if (_this.closeSoonTimeout) {
                window.clearTimeout(_this.closeSoonTimeout);
                _this.closeSoonTimeout = undefined;
            }
        };
        return _this;
    }
    ColorPopup.prototype.componentWillUnmount = function () {
        this.cancelCloseSoon();
    };
    ColorPopup.prototype.render = function () {
        var _a = this.props, isOpen = _a.isOpen, children = _a.children, onClose = _a.onClose;
        var content = (React.createElement(ColorPopupContentWrapper, { onMouseLeave: this.closeSoon, onMouseEnter: this.cancelCloseSoon }, this.renderButtons()));
        return (React.createElement(InlineDialog, { onContentBlur: onClose, isOpen: isOpen, placement: "top-start", content: content }, children));
    };
    ColorPopup.prototype.renderButtons = function () {
        var _a = this.props, onPickColor = _a.onPickColor, currentColor = _a.color;
        return Object.keys(PICKER_COLORS).map(function (color, index) { return (React.createElement(ColorButton, { key: "" + index, color: color, isSelected: currentColor.toLowerCase() === color.toLowerCase(), onClick: onPickColor })); });
    };
    return ColorPopup;
}(Component));
export { ColorPopup };
//# sourceMappingURL=colorPopup.js.map