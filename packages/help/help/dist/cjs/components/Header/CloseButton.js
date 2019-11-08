"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var react_intl_1 = require("react-intl");
var tooltip_1 = tslib_1.__importDefault(require("@atlaskit/tooltip"));
var button_1 = tslib_1.__importDefault(require("@atlaskit/button"));
var version_json_1 = require("../../version.json");
var analytics_1 = require("../../analytics");
var messages_1 = require("../../messages");
var cross_1 = tslib_1.__importDefault(require("@atlaskit/icon/glyph/cross"));
var styled_1 = require("./styled");
var HelpContext_1 = require("../HelpContext");
var iconBefore = React.createElement(cross_1.default, { label: "", size: "medium" });
/**
 * This function will return a CloseButton component only if the function
 * to be executed on the onClick event is passed as a parameter
 *
 * @param onButtonCloseClick - Function executed when the close btn is clicked
 */
var CloseButton = function (props) {
    var onButtonCloseClick = props.help.onButtonCloseClick, formatMessage = props.intl.formatMessage, createAnalyticsEvent = props.createAnalyticsEvent;
    var handleButtonCloseClick = function (event) {
        if (onButtonCloseClick) {
            var analyticsEvent = createAnalyticsEvent({
                action: 'clicked',
            });
            onButtonCloseClick(event, analyticsEvent);
        }
    };
    return onButtonCloseClick ? (React.createElement(styled_1.CloseButtonContainer, null,
        React.createElement(tooltip_1.default, { content: formatMessage(messages_1.messages.help_panel_close), position: "left" },
            React.createElement(button_1.default, { onClick: handleButtonCloseClick, appearance: "subtle", iconBefore: iconBefore })))) : null;
};
exports.default = analytics_1.withAnalyticsContext({
    componentName: 'closeButton',
    packageName: version_json_1.name,
    packageVersion: version_json_1.version,
})(analytics_1.withAnalyticsEvents()(HelpContext_1.withHelp(react_intl_1.injectIntl(CloseButton))));
//# sourceMappingURL=CloseButton.js.map