import * as React from 'react';
import { injectIntl } from 'react-intl';
import Button from '@atlaskit/button';
import { name as packageName, version as packageVersion, } from '../../../version.json';
import { withAnalyticsEvents, withAnalyticsContext } from '../../../analytics';
import { messages } from '../../../messages';
import { withHelp } from '../../HelpContext';
var ArticleWasHelpfulYesButton = function (props) {
    var onWasHelpfulYesButtonClick = props.help.onWasHelpfulYesButtonClick, formatMessage = props.intl.formatMessage, createAnalyticsEvent = props.createAnalyticsEvent, isSelected = props.isSelected, onClick = props.onClick;
    var handleButtonClick = function (event) {
        if (onClick) {
            onClick();
        }
        if (onWasHelpfulYesButtonClick) {
            var analyticsEvent = createAnalyticsEvent({
                action: 'clicked',
            });
            onWasHelpfulYesButtonClick(event, analyticsEvent);
        }
    };
    return (React.createElement(Button, { onClick: handleButtonClick, isSelected: isSelected }, formatMessage(messages.help_panel_article_rating_option_yes)));
};
export default withAnalyticsContext({
    componentName: 'ArticleWasHelpfulYesButton',
    packageName: packageName,
    packageVersion: packageVersion,
})(withAnalyticsEvents()(withHelp(injectIntl(ArticleWasHelpfulYesButton))));
//# sourceMappingURL=WasHelpfulYesButton.js.map