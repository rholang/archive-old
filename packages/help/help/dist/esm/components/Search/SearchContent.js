import * as React from 'react';
import { MIN_CHARACTERS_FOR_SEARCH } from '../constants';
import { REQUEST_STATE } from '../../model/Requests';
import { withHelp } from '../HelpContext';
import SearchResult from './SearchResults';
import SearchResultsEmpty from './SearchResultsEmpty';
export var SearchContent = function (props) {
    var _a = props.help, searchValue = _a.searchValue, searchResult = _a.searchResult, searchState = _a.searchState;
    if (searchValue.length > MIN_CHARACTERS_FOR_SEARCH) {
        if (searchResult.length > 0) {
            return React.createElement(SearchResult, { searchResult: searchResult });
        }
        else if (searchState !== REQUEST_STATE.loading) {
            return React.createElement(SearchResultsEmpty, null);
        }
    }
    else if (searchResult.length > 0 &&
        searchValue.length <= MIN_CHARACTERS_FOR_SEARCH &&
        searchValue.length > 0) {
        return React.createElement(SearchResult, { searchResult: searchResult });
    }
    return null;
};
export default withHelp(SearchContent);
//# sourceMappingURL=SearchContent.js.map