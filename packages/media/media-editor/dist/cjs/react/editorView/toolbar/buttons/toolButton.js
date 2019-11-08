"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var react_1 = require("react");
var button_1 = tslib_1.__importDefault(require("@atlaskit/button"));
var colors_1 = require("@atlaskit/theme/colors");
var arrow_1 = tslib_1.__importDefault(require("@atlaskit/icon/glyph/media-services/arrow"));
var brush_1 = tslib_1.__importDefault(require("@atlaskit/icon/glyph/media-services/brush"));
var line_1 = tslib_1.__importDefault(require("@atlaskit/icon/glyph/media-services/line"));
var blur_1 = tslib_1.__importDefault(require("@atlaskit/icon/glyph/media-services/blur"));
var oval_1 = tslib_1.__importDefault(require("@atlaskit/icon/glyph/media-services/oval"));
var rectangle_1 = tslib_1.__importDefault(require("@atlaskit/icon/glyph/media-services/rectangle"));
var text_1 = tslib_1.__importDefault(require("@atlaskit/icon/glyph/media-services/text"));
var styles_1 = require("./styles");
exports.toolIcons = {
    line: line_1.default,
    blur: blur_1.default,
    arrow: arrow_1.default,
    brush: brush_1.default,
    oval: oval_1.default,
    rectangle: rectangle_1.default,
    text: text_1.default,
};
var ToolButton = /** @class */ (function (_super) {
    tslib_1.__extends(ToolButton, _super);
    function ToolButton() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ToolButton.prototype.render = function () {
        var _a = this.props, tool = _a.tool, activeTool = _a.activeTool, onToolClick = _a.onToolClick;
        var Icon = exports.toolIcons[tool];
        var isActive = tool === activeTool;
        var iconPrimaryColor = isActive ? colors_1.N0 : undefined;
        var onClick = function () {
            onToolClick(tool);
        };
        var iconBefore = (React.createElement(styles_1.ButtonIconWrapper, null,
            React.createElement(Icon, { label: tool, size: "medium", primaryColor: iconPrimaryColor })));
        return (React.createElement(button_1.default, { iconBefore: iconBefore, appearance: "subtle", onClick: onClick, isSelected: isActive }));
    };
    return ToolButton;
}(react_1.Component));
exports.ToolButton = ToolButton;
//# sourceMappingURL=toolButton.js.map