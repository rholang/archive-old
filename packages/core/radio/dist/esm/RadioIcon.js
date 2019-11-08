import { __extends } from "tslib";
import React, { Component } from 'react';
import Icon from '@atlaskit/icon/glyph/radio';
import { IconWrapper } from './styled/Radio';
var RadioIcon = /** @class */ (function (_super) {
    __extends(RadioIcon, _super);
    function RadioIcon() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RadioIcon.prototype.render = function () {
        var _a = this.props, isActive = _a.isActive, isChecked = _a.isChecked, isDisabled = _a.isDisabled, isFocused = _a.isFocused, isHovered = _a.isHovered, isInvalid = _a.isInvalid;
        return (React.createElement(IconWrapper, { isActive: isActive, isChecked: isChecked, isDisabled: isDisabled, isFocused: isFocused, isHovered: isHovered, isInvalid: isInvalid },
            React.createElement(Icon, { label: "", primaryColor: "inherit", secondaryColor: "inherit" })));
    };
    return RadioIcon;
}(Component));
export default RadioIcon;
//# sourceMappingURL=RadioIcon.js.map