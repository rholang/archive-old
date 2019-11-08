"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var react_intl_1 = require("react-intl");
var messages_1 = require("../../messages");
var UserInfo_1 = tslib_1.__importDefault(require("../UserInfo"));
var Styled = tslib_1.__importStar(require("./styled"));
var DropdownList_1 = require("../DropdownList");
var MessagesIntlProvider_1 = tslib_1.__importDefault(require("../MessagesIntlProvider"));
var DeactivateUserOverviewScreen = /** @class */ (function (_super) {
    tslib_1.__extends(DeactivateUserOverviewScreen, _super);
    function DeactivateUserOverviewScreen() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.selectAdminOrSelfCopy = function (adminCopy, selfCopy) {
            return _this.props.isCurrentUser ? selfCopy : adminCopy;
        };
        _this.renderLoseAccessListElement = function () {
            var _a = _this.props, accessibleSites = _a.accessibleSites, user = _a.user;
            var hasAccessibleSites = accessibleSites && accessibleSites.length > 0;
            return (React.createElement("li", null,
                !hasAccessibleSites && (React.createElement(react_intl_1.FormattedHTMLMessage, tslib_1.__assign({}, _this.selectAdminOrSelfCopy(messages_1.deactivateUserOverviewMessages.paragraphLoseAccessAdminNoSites, messages_1.deactivateUserOverviewMessages.paragraphLoseAccessSelfNoSites), { values: { fullName: user.fullName } }))),
                hasAccessibleSites && (React.createElement(React.Fragment, null,
                    React.createElement(react_intl_1.FormattedHTMLMessage, tslib_1.__assign({}, _this.selectAdminOrSelfCopy(messages_1.deactivateUserOverviewMessages.paragraphLoseAccessAdmin, messages_1.deactivateUserOverviewMessages.paragraphLoseAccessSelf), { values: { fullName: user.fullName }, tagName: 'p' })),
                    React.createElement(Styled.AccessibleSitesWrapper, null,
                        React.createElement(DropdownList_1.DropdownList, { accessibleSites: accessibleSites }))))));
        };
        _this.renderPersonalDataListElement = function () {
            return (React.createElement("li", null,
                React.createElement(react_intl_1.FormattedHTMLMessage, tslib_1.__assign({}, _this.selectAdminOrSelfCopy(messages_1.deactivateUserOverviewMessages.paragraphPersonalDataAdmin, messages_1.deactivateUserOverviewMessages.paragraphPersonalDataSelf)))));
        };
        _this.renderBillingListElement = function () {
            return (React.createElement("li", null,
                React.createElement(react_intl_1.FormattedMessage, tslib_1.__assign({}, _this.selectAdminOrSelfCopy(messages_1.deactivateUserOverviewMessages.paragraphBillingAdmin, messages_1.deactivateUserOverviewMessages.paragraphBillingSelf)))));
        };
        return _this;
    }
    DeactivateUserOverviewScreen.prototype.render = function () {
        var user = this.props.user;
        return (React.createElement(MessagesIntlProvider_1.default, null,
            React.createElement(Styled.Screen, null,
                React.createElement(Styled.Title, null,
                    React.createElement(react_intl_1.FormattedMessage, tslib_1.__assign({}, this.selectAdminOrSelfCopy(messages_1.deactivateUserOverviewMessages.headingAdmin, messages_1.deactivateUserOverviewMessages.headingSelf)))),
                React.createElement(react_intl_1.FormattedMessage, tslib_1.__assign({}, this.selectAdminOrSelfCopy(messages_1.deactivateUserOverviewMessages.firstLineAdmin, messages_1.deactivateUserOverviewMessages.firstLineSelf), { tagName: "p" })),
                React.createElement(UserInfo_1.default, { user: user }),
                React.createElement(react_intl_1.FormattedMessage, tslib_1.__assign({}, this.selectAdminOrSelfCopy(messages_1.deactivateUserOverviewMessages.paragraphAboutToDeactivateAdmin, messages_1.deactivateUserOverviewMessages.paragraphAboutToDeactivateSelf))),
                React.createElement(Styled.MainInformationList, null,
                    this.renderLoseAccessListElement(),
                    this.renderPersonalDataListElement(),
                    this.renderBillingListElement()),
                React.createElement(react_intl_1.FormattedMessage, tslib_1.__assign({}, this.selectAdminOrSelfCopy(messages_1.deactivateUserOverviewMessages.lastLineAdmin, messages_1.deactivateUserOverviewMessages.lastLineSelf), { tagName: "p" })))));
    };
    DeactivateUserOverviewScreen.defaultProps = {
        isCurrentUser: false,
    };
    return DeactivateUserOverviewScreen;
}(React.Component));
exports.DeactivateUserOverviewScreen = DeactivateUserOverviewScreen;
exports.default = DeactivateUserOverviewScreen;
//# sourceMappingURL=DeactivateUserOverviewScreen.js.map