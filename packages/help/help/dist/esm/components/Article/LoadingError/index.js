import * as React from 'react';
import Button from '@atlaskit/button';
import { injectIntl } from 'react-intl';
import { withHelp } from '../../HelpContext';
import { messages } from '../../../messages';
import SomethingWrongImageFile from '../../../assets/SomethingWrong';
import { LoadingErrorMessage, LoadingErrorButtonContainer } from './styled';
export var LoadingError = function (_a) {
    var help = _a.help, formatMessage = _a.intl.formatMessage;
    var handleOnClick = function () {
        help.loadArticle();
    };
    return (React.createElement(LoadingErrorMessage, null,
        React.createElement("div", { dangerouslySetInnerHTML: {
                __html: SomethingWrongImageFile,
            } }),
        React.createElement("h2", null, formatMessage(messages.help_panel_search_error_loading_title)),
        React.createElement("p", null, formatMessage(messages.help_panel_search_error_loading_text)),
        React.createElement(LoadingErrorButtonContainer, null,
            React.createElement(Button, { onClick: handleOnClick }, formatMessage(messages.help_panel_search_error_loading_button_label)))));
};
export default withHelp(injectIntl(LoadingError));
//# sourceMappingURL=index.js.map