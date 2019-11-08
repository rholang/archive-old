"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var react_1 = require("react");
var Color_1 = tslib_1.__importDefault(require("./Color"));
var styles_1 = require("./styles");
var react_intl_1 = require("react-intl");
var ColorPalette = /** @class */ (function (_super) {
    tslib_1.__extends(ColorPalette, _super);
    function ColorPalette() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ColorPalette.prototype.render = function () {
        var _a = this.props, palette = _a.palette, _b = _a.cols, cols = _b === void 0 ? 7 : _b, onClick = _a.onClick, selectedColor = _a.selectedColor, className = _a.className, checkMarkColor = _a.checkMarkColor, formatMessage = _a.intl.formatMessage;
        return (React.createElement(styles_1.ColorPaletteWrapper, { className: className, style: { maxWidth: cols * 32 } }, palette.map(function (_a) {
            var value = _a.value, label = _a.label, border = _a.border, message = _a.message;
            return (React.createElement(Color_1.default, { key: value, value: value, borderColor: border, label: message ? formatMessage(message) : label, onClick: onClick, isSelected: value === selectedColor, checkMarkColor: checkMarkColor }));
        })));
    };
    return ColorPalette;
}(react_1.PureComponent));
exports.default = react_intl_1.injectIntl(ColorPalette);
//# sourceMappingURL=index.js.map