"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var react_intl_1 = require("react-intl");
var avatar_1 = tslib_1.__importDefault(require("@atlaskit/avatar"));
var messages_1 = require("../../messages");
var Styled = tslib_1.__importStar(require("./styled"));
var MessagesIntlProvider_1 = tslib_1.__importDefault(require("../MessagesIntlProvider"));
var DeleteUserContentPreviewScreen = /** @class */ (function (_super) {
    tslib_1.__extends(DeleteUserContentPreviewScreen, _super);
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
        return (React.createElement(MessagesIntlProvider_1.default, null,
            React.createElement(Styled.Screen, null,
                React.createElement(Styled.Title, null,
                    React.createElement(react_intl_1.FormattedMessage, tslib_1.__assign({}, this.selectAdminOrSelfCopy(messages_1.contentPreviewMessages.headingAdmin, messages_1.contentPreviewMessages.headingSelf)))),
                React.createElement(react_intl_1.FormattedMessage, tslib_1.__assign({}, this.selectAdminOrSelfCopy(messages_1.contentPreviewMessages.paragraphSurveyAdmin, messages_1.contentPreviewMessages.paragraphSurveySelf), { tagName: "p" })),
                React.createElement(react_intl_1.FormattedMessage, tslib_1.__assign({}, this.selectAdminOrSelfCopy(messages_1.contentPreviewMessages.lineSurveyAdmin, messages_1.contentPreviewMessages.lineSurveySelf), { tagName: "p" })),
                React.createElement(Styled.SectionCard, { className: "nameSectionCard", onClick: this.handleClickSection('Name', 1), isSelected: 1 === this.state.currentActive },
                    React.createElement(Styled.Avatar, null,
                        React.createElement(avatar_1.default, { size: "large", src: "" })),
                    React.createElement(Styled.UserDetails, null, user.fullName)),
                React.createElement(Styled.SectionCard, { className: "formerUserSectionCard", onClick: this.handleClickSection('Former User', 0), isSelected: 0 === this.state.currentActive },
                    React.createElement(Styled.Avatar, null,
                        React.createElement(avatar_1.default, { size: "large", src: "" })),
                    React.createElement(Styled.UserDetails, null,
                        React.createElement(react_intl_1.FormattedMessage, tslib_1.__assign({}, messages_1.contentPreviewMessages.formerUser)))),
                React.createElement(react_intl_1.FormattedHTMLMessage, tslib_1.__assign({}, this.selectAdminOrSelfCopy(messages_1.contentPreviewMessages.footnoteAdmin, messages_1.contentPreviewMessages.footnoteSelf), { tagName: "p" })))));
    };
    return DeleteUserContentPreviewScreen;
}(React.Component));
exports.DeleteUserContentPreviewScreen = DeleteUserContentPreviewScreen;
exports.default = DeleteUserContentPreviewScreen;
//# sourceMappingURL=DeleteUserContentPreviewScreen.js.map