import { __assign, __extends } from "tslib";
import * as React from 'react';
import { FormattedMessage, FormattedHTMLMessage } from 'react-intl';
import Avatar from '@atlaskit/avatar';
import { contentPreviewMessages } from '../../messages';
import * as Styled from './styled';
import MessagesIntlProvider from '../MessagesIntlProvider';
var DeleteUserContentPreviewScreen = /** @class */ (function (_super) {
    __extends(DeleteUserContentPreviewScreen, _super);
    function DeleteUserContentPreviewScreen() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            currentActive: -1,
        };
        _this.handleClickSection = function (userName, position) { return function () {
            _this.props.preferenceSelection(userName);
            _this.setState({ currentActive: position });
        }; };
        _this.isCardSelected = function (position) {
            return position === _this.state.currentActive;
        };
        _this.selectAdminOrSelfCopy = function (adminCopy, selfCopy) {
            return _this.props.isCurrentUser ? selfCopy : adminCopy;
        };
        return _this;
    }
    DeleteUserContentPreviewScreen.prototype.componentDidMount = function () {
        this.props.preferenceSelection('');
    };
    DeleteUserContentPreviewScreen.prototype.render = function () {
        var user = this.props.user;
        return (React.createElement(MessagesIntlProvider, null,
            React.createElement(Styled.Screen, null,
                React.createElement(Styled.Title, null,
                    React.createElement(FormattedMessage, __assign({}, this.selectAdminOrSelfCopy(contentPreviewMessages.headingAdmin, contentPreviewMessages.headingSelf)))),
                React.createElement(FormattedMessage, __assign({}, this.selectAdminOrSelfCopy(contentPreviewMessages.paragraphSurveyAdmin, contentPreviewMessages.paragraphSurveySelf), { tagName: "p" })),
                React.createElement(FormattedMessage, __assign({}, this.selectAdminOrSelfCopy(contentPreviewMessages.lineSurveyAdmin, contentPreviewMessages.lineSurveySelf), { tagName: "p" })),
                React.createElement(Styled.SectionCard, { className: "nameSectionCard", onClick: this.handleClickSection('Name', 1), isSelected: 1 === this.state.currentActive },
                    React.createElement(Styled.Avatar, null,
                        React.createElement(Avatar, { size: "large", src: "" })),
                    React.createElement(Styled.UserDetails, null, user.fullName)),
                React.createElement(Styled.SectionCard, { className: "formerUserSectionCard", onClick: this.handleClickSection('Former User', 0), isSelected: 0 === this.state.currentActive },
                    React.createElement(Styled.Avatar, null,
                        React.createElement(Avatar, { size: "large", src: "" })),
                    React.createElement(Styled.UserDetails, null,
                        React.createElement(FormattedMessage, __assign({}, contentPreviewMessages.formerUser)))),
                React.createElement(FormattedHTMLMessage, __assign({}, this.selectAdminOrSelfCopy(contentPreviewMessages.footnoteAdmin, contentPreviewMessages.footnoteSelf), { tagName: "p" })))));
    };
    return DeleteUserContentPreviewScreen;
}(React.Component));
export { DeleteUserContentPreviewScreen };
export default DeleteUserContentPreviewScreen;
//# sourceMappingURL=DeleteUserContentPreviewScreen.js.map