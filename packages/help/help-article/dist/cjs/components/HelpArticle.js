"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var shortcut_1 = tslib_1.__importDefault(require("@atlaskit/icon/glyph/shortcut"));
var styled_1 = require("./styled");
var ArticleBody_1 = tslib_1.__importDefault(require("./ArticleBody"));
var HelpArticle = function (props) {
    var _a = props.title, title = _a === void 0 ? '' : _a, body = props.body, titleLinkUrl = props.titleLinkUrl;
    return (React.createElement(styled_1.ArticleContentInner, null,
        title && (React.createElement(styled_1.ArticleContentTitle, null, titleLinkUrl ? (React.createElement(styled_1.ArticleContentTitleLink, { href: titleLinkUrl, target: "_blank" },
            React.createElement("h2", null,
                title,
                React.createElement("span", null, " "),
                React.createElement(shortcut_1.default, { label: "link icon", size: "small" })))) : (React.createElement("h2", null, title)))),
        React.createElement(ArticleBody_1.default, { body: body })));
};
exports.default = HelpArticle;
//# sourceMappingURL=HelpArticle.js.map