"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var select_1 = tslib_1.__importStar(require("@atlaskit/select"));
var React = tslib_1.__importStar(require("react"));
var BaseUserPicker_1 = require("./BaseUserPicker");
var styles_1 = require("./styles");
var components_1 = require("./components");
var creatable_1 = require("./creatable");
var UserPicker = /** @class */ (function (_super) {
    tslib_1.__extends(UserPicker, _super);
    function UserPicker() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UserPicker.prototype.render = function () {
        var _a = this.props, allowEmail = _a.allowEmail, isMulti = _a.isMulti, isValidEmail = _a.isValidEmail, anchor = _a.anchor;
        var width = this.props.width;
        var SelectComponent = allowEmail ? select_1.CreatableSelect : select_1.default;
        var pickerProps = allowEmail ? creatable_1.getCreatableProps(isValidEmail) : {};
        return (React.createElement(BaseUserPicker_1.BaseUserPicker, tslib_1.__assign({}, this.props, { width: width, SelectComponent: SelectComponent, styles: styles_1.getStyles(width), components: components_1.getComponents(isMulti, anchor), pickerProps: pickerProps })));
    };
    UserPicker.defaultProps = {
        width: 350,
    };
    return UserPicker;
}(React.Component));
exports.UserPicker = UserPicker;
//# sourceMappingURL=UserPicker.js.map