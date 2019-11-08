"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var react_1 = require("react");
var chevron_down_1 = tslib_1.__importDefault(require("@atlaskit/icon/glyph/chevron-down"));
var tooltip_1 = tslib_1.__importDefault(require("@atlaskit/tooltip"));
var button_1 = tslib_1.__importDefault(require("@atlaskit/button"));
var colors_1 = require("@atlaskit/theme/colors");
var styles_1 = require("./styles");
var media_ui_1 = require("@atlaskit/media-ui");
var react_intl_1 = require("react-intl");
var colorPopup_1 = require("../popups/colorPopup");
var ColorButton = /** @class */ (function (_super) {
    tslib_1.__extends(ColorButton, _super);
    function ColorButton() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ColorButton.prototype.render = function () {
        var _a = this.props, color = _a.color, isActive = _a.isActive, onClick = _a.onClick, formatMessage = _a.intl.formatMessage;
        var iconPrimaryColor = isActive ? colors_1.N0 : undefined;
        var style = { backgroundColor: color, borderColor: colorPopup_1.PICKER_COLORS[color] };
        var iconBefore = (React.createElement(styles_1.DropdownLeftIconWrapper, null,
            React.createElement(styles_1.ColorSample, { style: style })));
        var iconAfter = (React.createElement(styles_1.DropdownRightIconWrapper, null,
            React.createElement(chevron_down_1.default, { label: "chevron-icon", primaryColor: iconPrimaryColor })));
        return (React.createElement(tooltip_1.default, { content: formatMessage(media_ui_1.messages.annotate_tool_color) },
            React.createElement(button_1.default, { iconBefore: iconBefore, iconAfter: iconAfter, appearance: "subtle", onClick: onClick, isSelected: isActive })));
    };
    return ColorButton;
}(react_1.Component));
exports.ColorButton = ColorButton;
exports.default = react_intl_1.injectIntl(ColorButton);
//# sourceMappingURL=colorButton.js.map