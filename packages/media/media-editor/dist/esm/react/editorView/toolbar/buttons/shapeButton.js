import { __extends } from "tslib";
import * as React from 'react';
import { Component } from 'react';
import { injectIntl } from 'react-intl';
import ChevronDownIcon from '@atlaskit/icon/glyph/chevron-down';
import Button from '@atlaskit/button';
import Tooltip from '@atlaskit/tooltip';
import { messages } from '@atlaskit/media-ui';
import { N0 } from '@atlaskit/theme/colors';
import { toolIcons } from './toolButton';
import { shapeTools } from '../popups/shapePopup';
import { DropdownLeftIconWrapper, DropdownRightIconWrapper } from './styles';
var ShapeButton = /** @class */ (function (_super) {
    __extends(ShapeButton, _super);
    function ShapeButton() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ShapeButton.prototype.render = function () {
        var _a = this.props, isActive = _a.isActive, onClick = _a.onClick, activeShape = _a.activeShape, formatMessage = _a.intl.formatMessage;
        var iconPrimaryColor = isActive ? N0 : undefined;
        var isShapeTool = shapeTools.indexOf(activeShape) > -1;
        var Icon = toolIcons[isShapeTool ? activeShape : shapeTools[0]];
        var iconBefore = (React.createElement(DropdownLeftIconWrapper, null,
            React.createElement(Icon, { label: activeShape, size: "medium", primaryColor: iconPrimaryColor })));
        var iconAfter = (React.createElement(DropdownRightIconWrapper, null,
            React.createElement(ChevronDownIcon, { label: "chevron-icon", primaryColor: iconPrimaryColor })));
        return (React.createElement(Tooltip, { content: formatMessage(messages.annotate_tool_shape) },
            React.createElement(Button, { iconBefore: iconBefore, iconAfter: iconAfter, appearance: "subtle", onClick: onClick, isSelected: isActive })));
    };
    return ShapeButton;
}(Component));
export { ShapeButton };
export default injectIntl(ShapeButton);
//# sourceMappingURL=shapeButton.js.map