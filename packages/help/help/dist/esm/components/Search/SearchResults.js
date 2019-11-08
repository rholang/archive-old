import * as React from 'react';
import { ObjectResult } from '@atlaskit/quick-search';
import * as colors from '@atlaskit/theme/colors';
import DocumentFilledIcon from '@atlaskit/icon/glyph/document-filled';
import { SearchResultsList } from './styled';
export var SearchResults = function (props) {
    var _a = props.searchResult, searchResult = _a === void 0 ? [] : _a;
    return (React.createElement(SearchResultsList, null, searchResult.map(function (searchResultItem) {
        var id = searchResultItem.id, _a = searchResultItem.title, title = _a === void 0 ? '' : _a, _b = searchResultItem.description, description = _b === void 0 ? '' : _b;
        return (React.createElement(ObjectResult, { resultId: id, name: title, key: id, containerName: description, avatar: React.createElement(DocumentFilledIcon, { primaryColor: colors.P500, size: "medium", label: title }) }));
    })));
};
export default SearchResults;
//# sourceMappingURL=SearchResults.js.map