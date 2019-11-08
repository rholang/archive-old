"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var react_1 = require("react");
var react_intl_1 = require("react-intl");
var button_1 = tslib_1.__importDefault(require("@atlaskit/button"));
var chevron_down_1 = tslib_1.__importDefault(require("@atlaskit/icon/glyph/chevron-down"));
var tooltip_1 = tslib_1.__importDefault(require("@atlaskit/tooltip"));
var media_ui_1 = require("@atlaskit/media-ui");
var colors_1 = require("@atlaskit/theme/colors");
var styles_1 = require("./styles");
var lineWidthIcon_1 = require("./lineWidthIcon");
var LineWidthButton = /** @class */ (function (_super) {
    tslib_1.__extends(LineWidthButton, _super);
    function LineWidthButton() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LineWidthButton.prototype.render = function () {
        var _a = this.props, isActive = _a.isActive, lineWidth = _a.lineWidth, onClick = _a.onClick, formatMessage = _a.intl.formatMessage;
        var iconPrimaryColor = isActive ? colors_1.N0 : undefined;
        var iconBefore = (React.createElement(styles_1.DropdownLeftIconWrapper, null,
            React.createElement(lineWidthIcon_1.LineWidthIcon, { isActive: isActive, lineWidth: lineWidth, onLineWidthClick: function () { } })));
        var iconAfter = (React.createElement(styles_1.DropdownRightIconWrapper, null,
            React.createElement(chevron_down_1.default, { label: "chevron-icon", primaryColor: iconPrimaryColor })));
        return (React.createElement(tooltip_1.default, { content: formatMessage(media_ui_1.messages.annotate_tool_line_thickness) },
            React.createElement(button_1.default, { iconBefore: iconBefore, iconAfter: iconAfter, appearance: "subtle", onClick: onClick, isSelected: isActive })));
    };
    return LineWidthButton;
}(react_1.Component));
exports.LineWidthButton = LineWidthButton;
exports.default = react_intl_1.injectIntl(LineWidthButton);
//# sourceMappingURL=lineWidthButton.js.map