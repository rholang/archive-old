"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var select_1 = require("@atlaskit/select");
var React = tslib_1.__importStar(require("react"));
var EmailOption_1 = require("./EmailOption");
var TeamOption_1 = require("./TeamOption");
var UserOption_1 = require("./UserOption");
var GroupOption_1 = require("./GroupOption");
var utils_1 = require("./utils");
var emailValidation_1 = require("./emailValidation");
var dataOption = function (_a) {
    var data = _a.data.data, isSelected = _a.isSelected, status = _a.status, selectProps = _a.selectProps;
    if (utils_1.isUser(data)) {
        return React.createElement(UserOption_1.UserOption, { user: data, status: status, isSelected: isSelected });
    }
    if (utils_1.isEmail(data)) {
        return (React.createElement(EmailOption_1.EmailOption, { email: data, emailValidity: emailValidation_1.isValidEmail(data.id), isSelected: isSelected, label: selectProps.emailLabel }));
    }
    if (utils_1.isTeam(data)) {
        return React.createElement(TeamOption_1.TeamOption, { team: data, isSelected: isSelected });
    }
    if (utils_1.isGroup(data)) {
        return React.createElement(GroupOption_1.GroupOption, { group: data, isSelected: isSelected });
    }
    return null;
};
exports.Option = function (props) { return (React.createElement(select_1.components.Option, tslib_1.__assign({}, props), dataOption(props))); };
//# sourceMappingURL=Option.js.map