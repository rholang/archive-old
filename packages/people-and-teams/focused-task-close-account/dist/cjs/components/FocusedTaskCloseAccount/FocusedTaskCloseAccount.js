"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var react_intl_1 = require("react-intl");
var button_1 = tslib_1.__importDefault(require("@atlaskit/button"));
var drawer_1 = tslib_1.__importDefault(require("@atlaskit/drawer"));
var cross_1 = tslib_1.__importDefault(require("@atlaskit/icon/glyph/cross"));
var Styled = tslib_1.__importStar(require("./styled"));
var Footer_1 = tslib_1.__importDefault(require("../Footer"));
var messages_1 = require("../../messages");
var MessagesIntlProvider_1 = tslib_1.__importDefault(require("../MessagesIntlProvider"));
var FocusedTaskCloseAccount = /** @class */ (function (_super) {
    tslib_1.__extends(FocusedTaskCloseAccount, _super);
    function FocusedTaskCloseAccount() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            currentScreenIdx: 0,
        };
        _this.nextScreen = function () {
            var screens = _this.props.screens;
            var currentScreenIdx = _this.state.currentScreenIdx;
            var nextScreenIdx = currentScreenIdx < screens.length - 1
                ? currentScreenIdx + 1
                : screens.length - 1;
            _this.setState({ currentScreenIdx: nextScreenIdx });
        };
        _this.previousScreen = function () {
            var currentScreenIdx = _this.state.currentScreenIdx;
            var previousScreenIdx = currentScreenIdx - 1 >= 0 ? currentScreenIdx - 1 : 0;
            _this.setState({ currentScreenIdx: previousScreenIdx });
        };
        _this.renderCurrentScreen = function () {
            var currentScreen = _this.props.screens[_this.state.currentScreenIdx];
            return currentScreen;
        };
        return _this;
    }
    FocusedTaskCloseAccount.prototype.render = function () {
        var _a = this.props, isOpen = _a.isOpen, onClose = _a.onClose, screens = _a.screens, submitButton = _a.submitButton, learnMoreLink = _a.learnMoreLink;
        var currentScreenIdx = this.state.currentScreenIdx;
        return (React.createElement(MessagesIntlProvider_1.default, null,
            React.createElement(drawer_1.default, { icon: function (props) { return React.createElement(cross_1.default, tslib_1.__assign({ label: "" }, props, { size: "medium" })); }, isOpen: isOpen, onClose: onClose, width: "full" },
                React.createElement(Styled.DrawerInner, null,
                    this.renderCurrentScreen(),
                    React.createElement(Footer_1.default, { numScreens: screens.length, currentScreenIdx: currentScreenIdx, onCancel: onClose, onNext: this.nextScreen, onPrevious: this.previousScreen, secondaryActions: learnMoreLink && (React.createElement(button_1.default, { appearance: "subtle-link", spacing: "none", href: learnMoreLink, target: "_blank" },
                            React.createElement(react_intl_1.FormattedMessage, tslib_1.__assign({}, messages_1.commonMessages.learnMore)),
                            ' ')), submitButton: submitButton })))));
    };
    return FocusedTaskCloseAccount;
}(React.Component));
exports.FocusedTaskCloseAccount = FocusedTaskCloseAccount;
exports.default = FocusedTaskCloseAccount;
//# sourceMappingURL=FocusedTaskCloseAccount.js.map