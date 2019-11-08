"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var react_intl_1 = require("react-intl");
var button_1 = tslib_1.__importDefault(require("@atlaskit/button"));
var section_message_1 = tslib_1.__importDefault(require("@atlaskit/section-message"));
var info_1 = tslib_1.__importDefault(require("@atlaskit/icon/glyph/info"));
var messages_1 = require("../../messages");
var StatefulInlineDialog_1 = tslib_1.__importDefault(require("../StatefulInlineDialog"));
var UserInfo_1 = tslib_1.__importDefault(require("../UserInfo"));
var Styled = tslib_1.__importStar(require("./styled"));
var DropdownList_1 = require("../DropdownList");
var MessagesIntlProvider_1 = tslib_1.__importDefault(require("../MessagesIntlProvider"));
var DeleteUserOverviewScreen = /** @class */ (function (_super) {
    tslib_1.__extends(DeleteUserOverviewScreen, _super);
    function DeleteUserOverviewScreen() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.selectAdminOrSelfCopy = function (adminCopy, selfCopy) {
            return _this.props.isCurrentUser ? selfCopy : adminCopy;
        };
        _this.displayFirstListElement = function () {
            var _a = _this.props, accessibleSites = _a.accessibleSites, user = _a.user, isUserDeactivated = _a.isUserDeactivated;
            if (isUserDeactivated) {
                return null;
            }
            var hasAccessibleSites = accessibleSites && accessibleSites.length > 0;
            return (React.createElement("li", null,
                !hasAccessibleSites && (React.createElement(react_intl_1.FormattedHTMLMessage, tslib_1.__assign({}, _this.selectAdminOrSelfCopy(messages_1.overviewMessages.paragraphLoseAccessAdminNoSites, messages_1.overviewMessages.paragraphLoseAccessSelfNoSites), { values: { fullName: user.fullName } }))),
                hasAccessibleSites && (React.createElement(React.Fragment, null,
                    React.createElement(react_intl_1.FormattedHTMLMessage, tslib_1.__assign({}, _this.selectAdminOrSelfCopy(messages_1.overviewMessages.paragraphLoseAccessAdmin, messages_1.overviewMessages.paragraphLoseAccessSelf), { values: { fullName: user.fullName }, tagName: 'p' })),
                    React.createElement(DropdownList_1.DropdownList, { accessibleSites: accessibleSites })))));
        };
        _this.displaySecondListElement = function () {
            return (React.createElement("li", null,
                React.createElement(react_intl_1.FormattedHTMLMessage, tslib_1.__assign({}, _this.selectAdminOrSelfCopy(messages_1.overviewMessages.paragraphPersonalDataWillBeDeletedAdmin, messages_1.overviewMessages.paragraphPersonalDataWillBeDeletedSelf))),
                React.createElement(Styled.IconHoverWrapper, null,
                    React.createElement(StatefulInlineDialog_1.default, { placement: "auto-start", content: React.createElement(Styled.InlineDialogContent, null,
                            React.createElement(react_intl_1.FormattedMessage, tslib_1.__assign({}, _this.selectAdminOrSelfCopy(messages_1.overviewMessages.inlineDialogDataWillBeDeletedP1Admin, messages_1.overviewMessages.inlineDialogDataWillBeDeletedP1Self), { tagName: "p" })),
                            React.createElement(react_intl_1.FormattedMessage, tslib_1.__assign({}, _this.selectAdminOrSelfCopy(messages_1.overviewMessages.inlineDialogDataWillBeDeletedLi1Admin, messages_1.overviewMessages.inlineDialogDataWillBeDeletedLi1Self), { tagName: "li" })),
                            React.createElement(react_intl_1.FormattedMessage, tslib_1.__assign({}, _this.selectAdminOrSelfCopy(messages_1.overviewMessages.inlineDialogDataWillBeDeletedLi2Admin, messages_1.overviewMessages.inlineDialogDataWillBeDeletedLi2Self), { tagName: "li" })),
                            React.createElement(react_intl_1.FormattedMessage, tslib_1.__assign({}, _this.selectAdminOrSelfCopy(messages_1.overviewMessages.inlineDialogDataWillBeDeletedLi3Admin, messages_1.overviewMessages.inlineDialogDataWillBeDeletedLi3Self), { tagName: "li" })),
                            React.createElement(react_intl_1.FormattedMessage, tslib_1.__assign({}, _this.selectAdminOrSelfCopy(messages_1.overviewMessages.inlineDialogDataWillBeDeletedP2Admin, messages_1.overviewMessages.inlineDialogDataWillBeDeletedP2Self), { tagName: "p" })),
                            React.createElement(react_intl_1.FormattedMessage, tslib_1.__assign({}, _this.selectAdminOrSelfCopy(messages_1.overviewMessages.inlineDialogDataWillBeDeletedP3Admin, messages_1.overviewMessages.inlineDialogDataWillBeDeletedP3Self), { tagName: "p" }))) },
                        React.createElement(info_1.default, { label: "", size: "small" })))));
        };
        _this.displayThirdListElement = function () {
            return (React.createElement("li", null,
                React.createElement(react_intl_1.FormattedMessage, tslib_1.__assign({}, _this.selectAdminOrSelfCopy(messages_1.overviewMessages.paragraphListOfAppsWithPersonalDataAdmin, messages_1.overviewMessages.paragraphListOfAppsWithPersonalDataSelf))),
                React.createElement(Styled.IconHoverWrapper, null,
                    React.createElement(StatefulInlineDialog_1.default, { placement: "auto-start", content: React.createElement(react_intl_1.FormattedMessage, tslib_1.__assign({}, _this.selectAdminOrSelfCopy(messages_1.overviewMessages.inlineDialogDataAppsAdmin, messages_1.overviewMessages.inlineDialogDataAppsSelf))) },
                        React.createElement(info_1.default, { label: "", size: "small" })))));
        };
        _this.displayFourthListElement = function () {
            return (React.createElement("li", null,
                React.createElement(react_intl_1.FormattedMessage, tslib_1.__assign({}, _this.selectAdminOrSelfCopy(messages_1.overviewMessages.paragraphContentCreatedAdmin, messages_1.overviewMessages.paragraphContentCreatedSelf))),
                React.createElement(Styled.IconHoverWrapper, null,
                    React.createElement(StatefulInlineDialog_1.default, { placement: "auto-start", content: React.createElement(react_intl_1.FormattedMessage, tslib_1.__assign({}, _this.selectAdminOrSelfCopy(messages_1.overviewMessages.inlineDialogContentCreatedAdmin, messages_1.overviewMessages.inlineDialogContentCreatedSelf))) },
                        React.createElement(info_1.default, { label: "", size: "small" })))));
        };
        return _this;
    }
    DeleteUserOverviewScreen.prototype.render = function () {
        var _a = this.props, user = _a.user, deactivateUserHandler = _a.deactivateUserHandler, isUserDeactivated = _a.isUserDeactivated;
        return (React.createElement(MessagesIntlProvider_1.default, null,
            React.createElement(Styled.Screen, null,
                React.createElement(Styled.Title, null,
                    React.createElement(react_intl_1.FormattedMessage, tslib_1.__assign({}, this.selectAdminOrSelfCopy(messages_1.overviewMessages.headingAdmin, messages_1.overviewMessages.headingSelf)))),
                React.createElement(react_intl_1.FormattedMessage, tslib_1.__assign({}, this.selectAdminOrSelfCopy(messages_1.overviewMessages.firstLineAdmin, messages_1.overviewMessages.firstLineSelf), { tagName: "p" })),
                React.createElement(UserInfo_1.default, { user: user }),
                React.createElement(react_intl_1.FormattedMessage, tslib_1.__assign({}, this.selectAdminOrSelfCopy(messages_1.overviewMessages.paragraphAboutToDeleteAdmin, messages_1.overviewMessages.paragraphAboutToDeleteSelf))),
                React.createElement(Styled.MainInformationList, null,
                    this.displayFirstListElement(),
                    this.displaySecondListElement(),
                    this.displayThirdListElement(),
                    this.displayFourthListElement()),
                deactivateUserHandler && (React.createElement(Styled.SectionMessageOuter, null,
                    React.createElement(section_message_1.default, { appearance: "warning" },
                        React.createElement(react_intl_1.FormattedMessage, tslib_1.__assign({}, (isUserDeactivated
                            ? messages_1.overviewMessages.warningSectionBodyDeactivated
                            : messages_1.overviewMessages.warningSectionBody))),
                        !isUserDeactivated && (React.createElement("p", null,
                            React.createElement(button_1.default, { appearance: "link", spacing: "none", onClick: deactivateUserHandler },
                                React.createElement(react_intl_1.FormattedMessage, tslib_1.__assign({}, messages_1.commonMessages.deactivateAccount)))))))))));
    };
    DeleteUserOverviewScreen.defaultProps = {
        isCurrentUser: false,
    };
    return DeleteUserOverviewScreen;
}(React.Component));
exports.DeleteUserOverviewScreen = DeleteUserOverviewScreen;
exports.default = DeleteUserOverviewScreen;
//# sourceMappingURL=DeleteUserOverviewScreen.js.map