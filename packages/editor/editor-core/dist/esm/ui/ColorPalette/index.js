import { __extends } from "tslib";
import * as React from 'react';
import { PureComponent } from 'react';
import Color from './Color';
import { ColorPaletteWrapper } from './styles';
import { injectIntl } from 'react-intl';
var ColorPalette = /** @class */ (function (_super) {
    __extends(ColorPalette, _super);
    function ColorPalette() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ColorPalette.prototype.render = function () {
        var _a = this.props, palette = _a.palette, _b = _a.cols, cols = _b === void 0 ? 7 : _b, onClick = _a.onClick, selectedColor = _a.selectedColor, className = _a.className, checkMarkColor = _a.checkMarkColor, formatMessage = _a.intl.formatMessage;
        return (React.createElement(ColorPaletteWrapper, { className: className, style: { maxWidth: cols * 32 } }, palette.map(function (_a) {
            var value = _a.value, label = _a.label, border = _a.border, message = _a.message;
            return (React.createElement(Color, { key: value, value: value, borderColor: border, label: message ? formatMessage(message) : label, onClick: onClick, isSelected: value === selectedColor, checkMarkColor: checkMarkColor }));
        })));
    };
    return ColorPalette;
}(PureComponent));
export default injectIntl(ColorPalette);
//# sourceMappingURL=index.js.map