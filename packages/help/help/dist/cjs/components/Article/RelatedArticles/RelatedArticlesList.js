"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var ArticleListItem_1 = tslib_1.__importDefault(require("../ArticleListItem"));
var RelatedArticlesList = function (props) {
    var _a = props.relatedArticles, relatedArticles = _a === void 0 ? [] : _a, _b = props.numberOfArticlesToDisplay, numberOfArticlesToDisplay = _b === void 0 ? 5 : _b, onRelatedArticlesListItemClick = props.onRelatedArticlesListItemClick;
    return (relatedArticles && (React.createElement(React.Fragment, null, relatedArticles
        .slice(0, numberOfArticlesToDisplay)
        .map(function (relatedArticle) { return (React.createElement(ArticleListItem_1.default, { id: relatedArticle.id, onClick: onRelatedArticlesListItemClick, title: relatedArticle.title, description: relatedArticle.description, key: relatedArticle.id, href: relatedArticle.href })); }))));
};
exports.default = RelatedArticlesList;
//# sourceMappingURL=RelatedArticlesList.js.map