"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var react_1 = require("react");
var check_1 = tslib_1.__importDefault(require("@atlaskit/icon/glyph/check"));
var colorButtonStyles_1 = require("./colorButtonStyles");
var colorPopup_1 = require("./colorPopup");
var ColorButton = /** @class */ (function (_super) {
    tslib_1.__extends(ColorButton, _super);
    function ColorButton() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ColorButton.prototype.render = function () {
        var _a = this.props, color = _a.color, onColorClick = _a.onClick;
        var onClick = function () { return onColorClick(color); };
        var style = {
            borderColor: colorPopup_1.PICKER_COLORS[color],
            backgroundColor: color,
        };
        return (React.createElement(colorButtonStyles_1.ColorSample, { style: style, onClick: onClick }, this.checkMark()));
    };
    ColorButton.prototype.checkMark = function () {
        var isSelected = this.props.isSelected;
        if (isSelected) {
            return (React.createElement(colorButtonStyles_1.CheckArea, null,
                React.createElement(check_1.default, { label: "check", size: "medium" })));
        }
        return null;
    };
    return ColorButton;
}(react_1.Component));
exports.ColorButton = ColorButton;
//# sourceMappingURL=colorButton.js.map