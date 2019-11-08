import { __extends } from "tslib";
import * as React from 'react';
import { Component } from 'react';
import CheckIcon from '@atlaskit/icon/glyph/check';
import { ColorSample, CheckArea } from './colorButtonStyles';
import { PICKER_COLORS } from './colorPopup';
var ColorButton = /** @class */ (function (_super) {
    __extends(ColorButton, _super);
    function ColorButton() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ColorButton.prototype.render = function () {
        var _a = this.props, color = _a.color, onColorClick = _a.onClick;
        var onClick = function () { return onColorClick(color); };
        var style = {
            borderColor: PICKER_COLORS[color],
            backgroundColor: color,
        };
        return (React.createElement(ColorSample, { style: style, onClick: onClick }, this.checkMark()));
    };
    ColorButton.prototype.checkMark = function () {
        var isSelected = this.props.isSelected;
        if (isSelected) {
            return (React.createElement(CheckArea, null,
                React.createElement(CheckIcon, { label: "check", size: "medium" })));
        }
        return null;
    };
    return ColorButton;
}(Component));
export { ColorButton };
//# sourceMappingURL=colorButton.js.map