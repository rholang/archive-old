"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var RelatedArticlesContent_1 = tslib_1.__importDefault(require("./RelatedArticlesContent"));
var RelatedArticlesLoading_1 = tslib_1.__importDefault(require("./RelatedArticlesLoading"));
var RelatedArticles = function (props) {
    var _a = props.isLoading, isLoading = _a === void 0 ? false : _a, _b = props.relatedArticles, relatedArticles = _b === void 0 ? [] : _b, onRelatedArticlesListItemClick = props.onRelatedArticlesListItemClick;
    return isLoading ? (React.createElement(RelatedArticlesLoading_1.default, null)) : (React.createElement(RelatedArticlesContent_1.default, { relatedArticles: relatedArticles, onRelatedArticlesListItemClick: onRelatedArticlesListItemClick }));
};
exports.default = RelatedArticles;
//# sourceMappingURL=index.js.map