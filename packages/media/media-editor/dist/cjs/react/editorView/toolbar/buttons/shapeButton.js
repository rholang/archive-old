"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var react_1 = require("react");
var react_intl_1 = require("react-intl");
var chevron_down_1 = tslib_1.__importDefault(require("@atlaskit/icon/glyph/chevron-down"));
var button_1 = tslib_1.__importDefault(require("@atlaskit/button"));
var tooltip_1 = tslib_1.__importDefault(require("@atlaskit/tooltip"));
var media_ui_1 = require("@atlaskit/media-ui");
var colors_1 = require("@atlaskit/theme/colors");
var toolButton_1 = require("./toolButton");
var shapePopup_1 = require("../popups/shapePopup");
var styles_1 = require("./styles");
var ShapeButton = /** @class */ (function (_super) {
    tslib_1.__extends(ShapeButton, _super);
    function ShapeButton() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ShapeButton.prototype.render = function () {
        var _a = this.props, isActive = _a.isActive, onClick = _a.onClick, activeShape = _a.activeShape, formatMessage = _a.intl.formatMessage;
        var iconPrimaryColor = isActive ? colors_1.N0 : undefined;
        var isShapeTool = shapePopup_1.shapeTools.indexOf(activeShape) > -1;
        var Icon = toolButton_1.toolIcons[isShapeTool ? activeShape : shapePopup_1.shapeTools[0]];
        var iconBefore = (React.createElement(styles_1.DropdownLeftIconWrapper, null,
            React.createElement(Icon, { label: activeShape, size: "medium", primaryColor: iconPrimaryColor })));
        var iconAfter = (React.createElement(styles_1.DropdownRightIconWrapper, null,
            React.createElement(chevron_down_1.default, { label: "chevron-icon", primaryColor: iconPrimaryColor })));
        return (React.createElement(tooltip_1.default, { content: formatMessage(media_ui_1.messages.annotate_tool_shape) },
            React.createElement(button_1.default, { iconBefore: iconBefore, iconAfter: iconAfter, appearance: "subtle", onClick: onClick, isSelected: isActive })));
    };
    return ShapeButton;
}(react_1.Component));
exports.ShapeButton = ShapeButton;
exports.default = react_intl_1.injectIntl(ShapeButton);
//# sourceMappingURL=shapeButton.js.map