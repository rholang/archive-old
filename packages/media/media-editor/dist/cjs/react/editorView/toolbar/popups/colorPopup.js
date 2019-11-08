"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var react_1 = require("react");
var inline_dialog_1 = tslib_1.__importDefault(require("@atlaskit/inline-dialog"));
var colors = tslib_1.__importStar(require("@atlaskit/theme/colors"));
var colorButton_1 = require("./colorButton");
var popupStyles_1 = require("./popupStyles");
exports.PICKER_COLORS = (_a = {},
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
exports.DEFAULT_COLOR = colors.R300;
var ColorPopup = /** @class */ (function (_super) {
    tslib_1.__extends(ColorPopup, _super);
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
        var content = (React.createElement(popupStyles_1.ColorPopupContentWrapper, { onMouseLeave: this.closeSoon, onMouseEnter: this.cancelCloseSoon }, this.renderButtons()));
        return (React.createElement(inline_dialog_1.default, { onContentBlur: onClose, isOpen: isOpen, placement: "top-start", content: content }, children));
    };
    ColorPopup.prototype.renderButtons = function () {
        var _a = this.props, onPickColor = _a.onPickColor, currentColor = _a.color;
        return Object.keys(exports.PICKER_COLORS).map(function (color, index) { return (React.createElement(colorButton_1.ColorButton, { key: "" + index, color: color, isSelected: currentColor.toLowerCase() === color.toLowerCase(), onClick: onPickColor })); });
    };
    return ColorPopup;
}(react_1.Component));
exports.ColorPopup = ColorPopup;
//# sourceMappingURL=colorPopup.js.map