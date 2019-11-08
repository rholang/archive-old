"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var react_intl_1 = require("react-intl");
var button_1 = tslib_1.__importDefault(require("@atlaskit/button"));
var version_json_1 = require("../../../version.json");
var analytics_1 = require("../../../analytics");
var messages_1 = require("../../../messages");
var HelpContext_1 = require("../../HelpContext");
var ArticleWasHelpfulNoButton = function (props) {
    var onWasHelpfulNoButtonClick = props.help.onWasHelpfulNoButtonClick, formatMessage = props.intl.formatMessage, createAnalyticsEvent = props.createAnalyticsEvent, isSelected = props.isSelected, onClick = props.onClick;
    var handleButtonClick = function (event) {
        if (onClick) {
            onClick();
        }
        if (onWasHelpfulNoButtonClick) {
            var analyticsEvent = createAnalyticsEvent({
                action: 'clicked',
            });
            onWasHelpfulNoButtonClick(event, analyticsEvent);
        }
    };
    return (React.createElement(button_1.default, { onClick: handleButtonClick, isSelected: isSelected }, formatMessage(messages_1.messages.help_panel_article_rating_option_no)));
};
exports.default = analytics_1.withAnalyticsContext({
    componentName: 'ArticleWasHelpfulNoButton',
    packageName: version_json_1.name,
    packageVersion: version_json_1.version,
})(analytics_1.withAnalyticsEvents()(HelpContext_1.withHelp(react_intl_1.injectIntl(ArticleWasHelpfulNoButton))));
//# sourceMappingURL=WasHelpfulNoButton.js.map