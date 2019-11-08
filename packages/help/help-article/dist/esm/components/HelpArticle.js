import * as React from 'react';
import ShortcutIcon from '@atlaskit/icon/glyph/shortcut';
import { ArticleContentInner, ArticleContentTitle, ArticleContentTitleLink, } from './styled';
import ArticleBody from './ArticleBody';
var HelpArticle = function (props) {
    var _a = props.title, title = _a === void 0 ? '' : _a, body = props.body, titleLinkUrl = props.titleLinkUrl;
    return (React.createElement(ArticleContentInner, null,
        title && (React.createElement(ArticleContentTitle, null, titleLinkUrl ? (React.createElement(ArticleContentTitleLink, { href: titleLinkUrl, target: "_blank" },
            React.createElement("h2", null,
                title,
                React.createElement("span", null, " "),
                React.createElement(ShortcutIcon, { label: "link icon", size: "small" })))) : (React.createElement("h2", null, title)))),
        React.createElement(ArticleBody, { body: body })));
};
export default HelpArticle;
//# sourceMappingURL=HelpArticle.js.map