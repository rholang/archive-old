import { __assign, __extends } from "tslib";
import * as React from 'react';
import { FormattedMessage } from 'react-intl';
import { AddOptionAvatar } from './AddOptionAvatar';
import { AvatarItemOption } from './AvatarItemOption';
import { messages } from './i18n';
var getAddEmailMessage = function (validity) {
    return validity === 'POTENTIAL'
        ? messages.continueToAddEmail
        : messages.selectToAddEmail;
};
var EmailOption = /** @class */ (function (_super) {
    __extends(EmailOption, _super);
    function EmailOption() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.renderOption = function (label) { return (React.createElement(AvatarItemOption, { avatar: React.createElement(AddOptionAvatar, { label: label }), primaryText: _this.props.email.id, secondaryText: label })); };
        return _this;
    }
    EmailOption.prototype.render = function () {
        var _this = this;
        var _a = this.props, label = _a.label, emailValidity = _a.emailValidity;
        return label ? (this.renderOption(label)) : (React.createElement(FormattedMessage, __assign({}, getAddEmailMessage(emailValidity)), function (label) { return _this.renderOption(label); }));
    };
    return EmailOption;
}(React.PureComponent));
export { EmailOption };
//# sourceMappingURL=EmailOption.js.map