import * as React from 'react';
import RelatedArticlesContent from './RelatedArticlesContent';
import RelatedArticlesLoading from './RelatedArticlesLoading';
var RelatedArticles = function (props) {
    var _a = props.isLoading, isLoading = _a === void 0 ? false : _a, _b = props.relatedArticles, relatedArticles = _b === void 0 ? [] : _b, onRelatedArticlesListItemClick = props.onRelatedArticlesListItemClick;
    return isLoading ? (React.createElement(RelatedArticlesLoading, null)) : (React.createElement(RelatedArticlesContent, { relatedArticles: relatedArticles, onRelatedArticlesListItemClick: onRelatedArticlesListItemClick }));
};
export default RelatedArticles;
//# sourceMappingURL=index.js.map