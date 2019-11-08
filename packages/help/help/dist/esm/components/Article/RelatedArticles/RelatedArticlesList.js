import * as React from 'react';
import RelatedArticlesListItem from '../ArticleListItem';
var RelatedArticlesList = function (props) {
    var _a = props.relatedArticles, relatedArticles = _a === void 0 ? [] : _a, _b = props.numberOfArticlesToDisplay, numberOfArticlesToDisplay = _b === void 0 ? 5 : _b, onRelatedArticlesListItemClick = props.onRelatedArticlesListItemClick;
    return (relatedArticles && (React.createElement(React.Fragment, null, relatedArticles
        .slice(0, numberOfArticlesToDisplay)
        .map(function (relatedArticle) { return (React.createElement(RelatedArticlesListItem, { id: relatedArticle.id, onClick: onRelatedArticlesListItemClick, title: relatedArticle.title, description: relatedArticle.description, key: relatedArticle.id, href: relatedArticle.href })); }))));
};
export default RelatedArticlesList;
//# sourceMappingURL=RelatedArticlesList.js.map