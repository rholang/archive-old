import { __extends } from "tslib";
import * as React from 'react';
import Avatar from '@atlaskit/avatar';
import * as Styled from './styles';
var UserInfo = /** @class */ (function (_super) {
    __extends(UserInfo, _super);
    function UserInfo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UserInfo.prototype.render = function () {
        var user = this.props.user;
        return (React.createElement(Styled.UserInfoOuter, null,
            React.createElement(Styled.Avatar, null,
                React.createElement(Avatar, { size: "large", src: user.avatarUrl })),
            React.createElement(Styled.UserDetails, null,
                React.createElement(Styled.UserName, null, user.fullName),
                React.createElement(Styled.UserEmail, null, user.email))));
    };
    return UserInfo;
}(React.Component));
export { UserInfo };
export default UserInfo;
//# sourceMappingURL=UserInfo.js.map