import { __extends } from "tslib";
import * as React from 'react';
import { Component } from 'react';
import { injectIntl } from 'react-intl';
import Button from '@atlaskit/button';
import ChevronDownIcon from '@atlaskit/icon/glyph/chevron-down';
import Tooltip from '@atlaskit/tooltip';
import { messages } from '@atlaskit/media-ui';
import { N0 } from '@atlaskit/theme/colors';
import { DropdownRightIconWrapper, DropdownLeftIconWrapper } from './styles';
import { LineWidthIcon } from './lineWidthIcon';
var LineWidthButton = /** @class */ (function (_super) {
    __extends(LineWidthButton, _super);
    function LineWidthButton() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LineWidthButton.prototype.render = function () {
        var _a = this.props, isActive = _a.isActive, lineWidth = _a.lineWidth, onClick = _a.onClick, formatMessage = _a.intl.formatMessage;
        var iconPrimaryColor = isActive ? N0 : undefined;
        var iconBefore = (React.createElement(DropdownLeftIconWrapper, null,
            React.createElement(LineWidthIcon, { isActive: isActive, lineWidth: lineWidth, onLineWidthClick: function () { } })));
        var iconAfter = (React.createElement(DropdownRightIconWrapper, null,
            React.createElement(ChevronDownIcon, { label: "chevron-icon", primaryColor: iconPrimaryColor })));
        return (React.createElement(Tooltip, { content: formatMessage(messages.annotate_tool_line_thickness) },
            React.createElement(Button, { iconBefore: iconBefore, iconAfter: iconAfter, appearance: "subtle", onClick: onClick, isSelected: isActive })));
    };
    return LineWidthButton;
}(Component));
export { LineWidthButton };
export default injectIntl(LineWidthButton);
//# sourceMappingURL=lineWidthButton.js.map