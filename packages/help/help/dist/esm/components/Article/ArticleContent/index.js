import * as React from 'react';
import HelpArticle from '@atlaskit/help-article';
import { LoadingRectangle } from '../styled';
var ArticleContent = function (props) {
    var _a = props.isLoading, isLoading = _a === void 0 ? false : _a, _b = props.title, title = _b === void 0 ? '' : _b, _c = props.body, body = _c === void 0 ? '' : _c, _d = props.titleLinkUrl, titleLinkUrl = _d === void 0 ? '' : _d;
    return isLoading ? (React.createElement(React.Fragment, null,
        React.createElement("div", null,
            React.createElement(LoadingRectangle, { contentHeight: "20px", marginTop: "0" }),
            React.createElement(LoadingRectangle, { contentWidth: "90%" }),
            React.createElement(LoadingRectangle, { contentWidth: "80%" }),
            React.createElement(LoadingRectangle, { contentWidth: "80%" }),
            React.createElement(LoadingRectangle, { contentWidth: "70%" })))) : (React.createElement(HelpArticle, { title: title, body: body, titleLinkUrl: titleLinkUrl }));
};
export default ArticleContent;
//# sourceMappingURL=index.js.map