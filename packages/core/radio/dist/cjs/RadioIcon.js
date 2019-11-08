"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importStar(require("react"));
var radio_1 = tslib_1.__importDefault(require("@atlaskit/icon/glyph/radio"));
var Radio_1 = require("./styled/Radio");
var RadioIcon = /** @class */ (function (_super) {
    tslib_1.__extends(RadioIcon, _super);
    function RadioIcon() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RadioIcon.prototype.render = function () {
        var _a = this.props, isActive = _a.isActive, isChecked = _a.isChecked, isDisabled = _a.isDisabled, isFocused = _a.isFocused, isHovered = _a.isHovered, isInvalid = _a.isInvalid;
        return (react_1.default.createElement(Radio_1.IconWrapper, { isActive: isActive, isChecked: isChecked, isDisabled: isDisabled, isFocused: isFocused, isHovered: isHovered, isInvalid: isInvalid },
            react_1.default.createElement(radio_1.default, { label: "", primaryColor: "inherit", secondaryColor: "inherit" })));
    };
    return RadioIcon;
}(react_1.Component));
exports.default = RadioIcon;
//# sourceMappingURL=RadioIcon.js.map