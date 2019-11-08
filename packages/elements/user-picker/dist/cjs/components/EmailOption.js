"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var react_intl_1 = require("react-intl");
var AddOptionAvatar_1 = require("./AddOptionAvatar");
var AvatarItemOption_1 = require("./AvatarItemOption");
var i18n_1 = require("./i18n");
var getAddEmailMessage = function (validity) {
    return validity === 'POTENTIAL'
        ? i18n_1.messages.continueToAddEmail
        : i18n_1.messages.selectToAddEmail;
};
var EmailOption = /** @class */ (function (_super) {
    tslib_1.__extends(EmailOption, _super);
    function EmailOption() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.renderOption = function (label) { return (React.createElement(AvatarItemOption_1.AvatarItemOption, { avatar: React.createElement(AddOptionAvatar_1.AddOptionAvatar, { label: label }), primaryText: _this.props.email.id, secondaryText: label })); };
        return _this;
    }
    EmailOption.prototype.render = function () {
        var _this = this;
        var _a = this.props, label = _a.label, emailValidity = _a.emailValidity;
        return label ? (this.renderOption(label)) : (React.createElement(react_intl_1.FormattedMessage, tslib_1.__assign({}, getAddEmailMessage(emailValidity)), function (label) { return _this.renderOption(label); }));
    };
    return EmailOption;
}(React.PureComponent));
exports.EmailOption = EmailOption;
//# sourceMappingURL=EmailOption.js.map