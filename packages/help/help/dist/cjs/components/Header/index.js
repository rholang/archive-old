"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var arrow_left_1 = tslib_1.__importDefault(require("@atlaskit/icon/glyph/arrow-left"));
var colors = tslib_1.__importStar(require("@atlaskit/theme/colors"));
var constants_1 = require("@atlaskit/theme/constants");
var react_transition_group_1 = require("react-transition-group");
var react_intl_1 = require("react-intl");
var button_1 = tslib_1.__importDefault(require("@atlaskit/button"));
var messages_1 = require("../../messages");
var constants_2 = require("../constants");
var HelpContext_1 = require("../HelpContext");
var CloseButton_1 = tslib_1.__importDefault(require("./CloseButton"));
var styled_1 = require("./styled");
var buttonTheme = {
    color: colors.N90,
};
var defaultStyle = {
    transition: "left " + constants_2.TRANSITION_DURATION_MS + "ms, opacity " + constants_2.TRANSITION_DURATION_MS + "ms",
    left: constants_1.gridSize() * 3 + "px",
    opacity: 0,
};
var transitionStyles = {
    entered: { left: constants_1.gridSize() + "px", opacity: 1 },
    exited: { left: constants_1.gridSize() + "px", opacity: 0 },
};
exports.HelpContent = function (props) {
    var help = props.help, formatMessage = props.intl.formatMessage;
    return (React.createElement(styled_1.HeaderContainer, null,
        React.createElement(react_transition_group_1.Transition, { in: help.isBackbuttonVisible(), timeout: constants_2.TRANSITION_DURATION_MS, mountOnEnter: true, unmountOnExit: true }, function (state) { return (React.createElement(styled_1.BackButtonContainer, { style: tslib_1.__assign(tslib_1.__assign({}, defaultStyle), transitionStyles[state]) },
            React.createElement(button_1.default, { onClick: help.navigateBack, appearance: "subtle", theme: function (currentTheme, themeProps) {
                    var _a = currentTheme(themeProps), buttonStyles = _a.buttonStyles, rest = tslib_1.__rest(_a, ["buttonStyles"]);
                    return tslib_1.__assign({ buttonStyles: tslib_1.__assign(tslib_1.__assign({}, buttonStyles), buttonTheme) }, rest);
                }, iconBefore: React.createElement(arrow_left_1.default, { label: "back", size: "medium" }) }, formatMessage(messages_1.messages.help_panel_navigation_back)))); }),
        React.createElement(styled_1.HeaderTitle, null, formatMessage(messages_1.messages.help_panel_header)),
        React.createElement(CloseButton_1.default, null)));
};
exports.default = HelpContext_1.withHelp(react_intl_1.injectIntl(exports.HelpContent));
//# sourceMappingURL=index.js.map