import { __extends } from "tslib";
import * as React from 'react';
import { Component } from 'react';
import Button from '@atlaskit/button';
import { N0 } from '@atlaskit/theme/colors';
import ArrowIcon from '@atlaskit/icon/glyph/media-services/arrow';
import BrushIcon from '@atlaskit/icon/glyph/media-services/brush';
import LineIcon from '@atlaskit/icon/glyph/media-services/line';
import BlurIcon from '@atlaskit/icon/glyph/media-services/blur';
import OvalIcon from '@atlaskit/icon/glyph/media-services/oval';
import RectIcon from '@atlaskit/icon/glyph/media-services/rectangle';
import TextIcon from '@atlaskit/icon/glyph/media-services/text';
import { ButtonIconWrapper } from './styles';
export var toolIcons = {
    line: LineIcon,
    blur: BlurIcon,
    arrow: ArrowIcon,
    brush: BrushIcon,
    oval: OvalIcon,
    rectangle: RectIcon,
    text: TextIcon,
};
var ToolButton = /** @class */ (function (_super) {
    __extends(ToolButton, _super);
    function ToolButton() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ToolButton.prototype.render = function () {
        var _a = this.props, tool = _a.tool, activeTool = _a.activeTool, onToolClick = _a.onToolClick;
        var Icon = toolIcons[tool];
        var isActive = tool === activeTool;
        var iconPrimaryColor = isActive ? N0 : undefined;
        var onClick = function () {
            onToolClick(tool);
        };
        var iconBefore = (React.createElement(ButtonIconWrapper, null,
            React.createElement(Icon, { label: tool, size: "medium", primaryColor: iconPrimaryColor })));
        return (React.createElement(Button, { iconBefore: iconBefore, appearance: "subtle", onClick: onClick, isSelected: isActive }));
    };
    return ToolButton;
}(Component));
export { ToolButton };
//# sourceMappingURL=toolButton.js.map