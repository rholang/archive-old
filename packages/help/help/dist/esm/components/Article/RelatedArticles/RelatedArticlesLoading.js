import * as React from 'react';
import { LoadingRectangle } from '../styled';
import { LoadignRelatedArticleList, LoadignRelatedArticleListItem, LoadignRelatedArticleListItemText, LoadignRelatedArticleSection, } from './styled';
var RelatedArticlesLoading = function () {
    return (React.createElement(LoadignRelatedArticleSection, null,
        React.createElement(LoadingRectangle, { contentHeight: "8px", contentWidth: "40px", marginTop: "0" }),
        React.createElement(LoadignRelatedArticleList, null,
            React.createElement(LoadignRelatedArticleListItem, null,
                React.createElement(LoadingRectangle, { contentWidth: "40px", contentHeight: "40px", marginTop: "0" }),
                React.createElement(LoadignRelatedArticleListItemText, null,
                    React.createElement(LoadingRectangle, { marginTop: "0", contentWidth: "100%" }),
                    React.createElement(LoadingRectangle, { contentWidth: "100%" }))),
            React.createElement(LoadignRelatedArticleListItem, null,
                React.createElement(LoadingRectangle, { contentWidth: "40px", contentHeight: "40px", marginTop: "0" }),
                React.createElement(LoadignRelatedArticleListItemText, null,
                    React.createElement(LoadingRectangle, { marginTop: "0", contentWidth: "100%" }),
                    React.createElement(LoadingRectangle, { contentWidth: "100%" }))),
            React.createElement(LoadignRelatedArticleListItem, null,
                React.createElement(LoadingRectangle, { contentWidth: "40px", contentHeight: "40px", marginTop: "0" }),
                React.createElement(LoadignRelatedArticleListItemText, null,
                    React.createElement(LoadingRectangle, { marginTop: "0", contentWidth: "100%" }),
                    React.createElement(LoadingRectangle, { contentWidth: "100%" }))))));
};
export default RelatedArticlesLoading;
//# sourceMappingURL=RelatedArticlesLoading.js.map