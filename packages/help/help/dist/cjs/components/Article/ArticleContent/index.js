"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var help_article_1 = tslib_1.__importDefault(require("@atlaskit/help-article"));
var styled_1 = require("../styled");
var ArticleContent = function (props) {
    var _a = props.isLoading, isLoading = _a === void 0 ? false : _a, _b = props.title, title = _b === void 0 ? '' : _b, _c = props.body, body = _c === void 0 ? '' : _c, _d = props.titleLinkUrl, titleLinkUrl = _d === void 0 ? '' : _d;
    return isLoading ? (React.createElement(React.Fragment, null,
        React.createElement("div", null,
            React.createElement(styled_1.LoadingRectangle, { contentHeight: "20px", marginTop: "0" }),
            React.createElement(styled_1.LoadingRectangle, { contentWidth: "90%" }),
            React.createElement(styled_1.LoadingRectangle, { contentWidth: "80%" }),
            React.createElement(styled_1.LoadingRectangle, { contentWidth: "80%" }),
            React.createElement(styled_1.LoadingRectangle, { contentWidth: "70%" })))) : (React.createElement(help_article_1.default, { title: title, body: body, titleLinkUrl: titleLinkUrl }));
};
exports.default = ArticleContent;
//# sourceMappingURL=index.js.map