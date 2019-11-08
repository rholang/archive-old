import { __extends } from "tslib";
import * as React from 'react';
import { Component } from 'react';
import ChevronDownIcon from '@atlaskit/icon/glyph/chevron-down';
import Tooltip from '@atlaskit/tooltip';
import Button from '@atlaskit/button';
import { N0 } from '@atlaskit/theme/colors';
import { ColorSample, DropdownRightIconWrapper, DropdownLeftIconWrapper, } from './styles';
import { messages } from '@atlaskit/media-ui';
import { injectIntl } from 'react-intl';
import { PICKER_COLORS } from '../popups/colorPopup';
var ColorButton = /** @class */ (function (_super) {
    __extends(ColorButton, _super);
    function ColorButton() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ColorButton.prototype.render = function () {
        var _a = this.props, color = _a.color, isActive = _a.isActive, onClick = _a.onClick, formatMessage = _a.intl.formatMessage;
        var iconPrimaryColor = isActive ? N0 : undefined;
        var style = { backgroundColor: color, borderColor: PICKER_COLORS[color] };
        var iconBefore = (React.createElement(DropdownLeftIconWrapper, null,
            React.createElement(ColorSample, { style: style })));
        var iconAfter = (React.createElement(DropdownRightIconWrapper, null,
            React.createElement(ChevronDownIcon, { label: "chevron-icon", primaryColor: iconPrimaryColor })));
        return (React.createElement(Tooltip, { content: formatMessage(messages.annotate_tool_color) },
            React.createElement(Button, { iconBefore: iconBefore, iconAfter: iconAfter, appearance: "subtle", onClick: onClick, isSelected: isActive })));
    };
    return ColorButton;
}(Component));
export { ColorButton };
export default injectIntl(ColorButton);
//# sourceMappingURL=colorButton.js.map