import * as React from 'react';
import { injectIntl } from 'react-intl';
import { messages } from '../../messages';
import NoResultsImage from '../../assets/NoResultsImage';
import { SearchResultEmptyMessage } from './styled';
export var SearchResultsEmpty = function (props) {
    var formatMessage = props.intl.formatMessage;
    return (React.createElement(SearchResultEmptyMessage, null,
        React.createElement(NoResultsImage, null),
        React.createElement("p", null, formatMessage(messages.help_panel_search_results_no_results))));
};
export default injectIntl(SearchResultsEmpty);
//# sourceMappingURL=SearchResultsEmpty.js.map