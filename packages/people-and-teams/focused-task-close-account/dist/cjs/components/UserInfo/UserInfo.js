"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var avatar_1 = tslib_1.__importDefault(require("@atlaskit/avatar"));
var Styled = tslib_1.__importStar(require("./styles"));
var UserInfo = /** @class */ (function (_super) {
    tslib_1.__extends(UserInfo, _super);
    function UserInfo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UserInfo.prototype.render = function () {
        var user = this.props.user;
        return (React.createElement(Styled.UserInfoOuter, null,
            React.createElement(Styled.Avatar, null,
                React.createElement(avatar_1.default, { size: "large", src: user.avatarUrl })),
            React.createElement(Styled.UserDetails, null,
                React.createElement(Styled.UserName, null, user.fullName),
                React.createElement(Styled.UserEmail, null, user.email))));
    };
    return UserInfo;
}(React.Component));
exports.UserInfo = UserInfo;
exports.default = UserInfo;
//# sourceMappingURL=UserInfo.js.map