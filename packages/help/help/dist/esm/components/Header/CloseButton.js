import * as React from 'react';
import { injectIntl } from 'react-intl';
import Tooltip from '@atlaskit/tooltip';
import Button from '@atlaskit/button';
import { name as packageName, version as packageVersion, } from '../../version.json';
import { withAnalyticsEvents, withAnalyticsContext } from '../../analytics';
import { messages } from '../../messages';
import CrossIcon from '@atlaskit/icon/glyph/cross';
import { CloseButtonContainer } from './styled';
import { withHelp } from '../HelpContext';
var iconBefore = React.createElement(CrossIcon, { label: "", size: "medium" });
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
    return onButtonCloseClick ? (React.createElement(CloseButtonContainer, null,
        React.createElement(Tooltip, { content: formatMessage(messages.help_panel_close), position: "left" },
            React.createElement(Button, { onClick: handleButtonCloseClick, appearance: "subtle", iconBefore: iconBefore })))) : null;
};
export default withAnalyticsContext({
    componentName: 'closeButton',
    packageName: packageName,
    packageVersion: packageVersion,
})(withAnalyticsEvents()(withHelp(injectIntl(CloseButton))));
//# sourceMappingURL=CloseButton.js.map