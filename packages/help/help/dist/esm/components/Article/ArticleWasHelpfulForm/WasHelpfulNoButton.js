import * as React from 'react';
import { injectIntl } from 'react-intl';
import Button from '@atlaskit/button';
import { name as packageName, version as packageVersion, } from '../../../version.json';
import { withAnalyticsEvents, withAnalyticsContext } from '../../../analytics';
import { messages } from '../../../messages';
import { withHelp } from '../../HelpContext';
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
    return (React.createElement(Button, { onClick: handleButtonClick, isSelected: isSelected }, formatMessage(messages.help_panel_article_rating_option_no)));
};
export default withAnalyticsContext({
    componentName: 'ArticleWasHelpfulNoButton',
    packageName: packageName,
    packageVersion: packageVersion,
})(withAnalyticsEvents()(withHelp(injectIntl(ArticleWasHelpfulNoButton))));
//# sourceMappingURL=WasHelpfulNoButton.js.map