"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var react_1 = require("react");
var react_transition_group_1 = require("react-transition-group");
var Requests_1 = require("../../model/Requests");
var HelpContext_1 = require("../HelpContext");
var ArticleContent_1 = tslib_1.__importDefault(require("./ArticleContent"));
var ArticleWasHelpfulForm_1 = tslib_1.__importDefault(require("./ArticleWasHelpfulForm"));
var RelatedArticles_1 = tslib_1.__importDefault(require("./RelatedArticles"));
var LoadingError_1 = tslib_1.__importDefault(require("./LoadingError"));
var styled_1 = require("./styled");
var constants_1 = require("../constants");
var defaultStyle = {
    transition: "left " + constants_1.TRANSITION_DURATION_MS + "ms",
    left: "100%",
};
var transitionStyles = {
    entered: { left: 0 },
    exited: { left: "100%" },
};
var Article = /** @class */ (function (_super) {
    tslib_1.__extends(Article, _super);
    function Article(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            article: _this.props.help.getCurrentArticle(),
            skipArticleFadeInAnimation: false,
        };
        _this.refArticleContainer = React.createRef();
        _this.onArticleEntered = _this.onArticleEntered.bind(_this);
        _this.onArticleExited = _this.onArticleExited.bind(_this);
        _this.renderArticleContent = _this.renderArticleContent.bind(_this);
        return _this;
    }
    Article.prototype.componentDidMount = function () {
        // if helpContext.articleId is defined when this component is mounted,
        // set skipArticleFadeInAnimation = true to skip the initial slide-in
        this.setState({
            skipArticleFadeInAnimation: this.props.help.articleId !== '',
        });
    };
    Article.prototype.componentDidUpdate = function (prevProps) {
        // if an articleId is updated, then we don't need to skip the fade-in animation
        if (prevProps.help.articleId !== this.props.help.articleId) {
            this.setState({ skipArticleFadeInAnimation: false });
        }
        // Scroll ArticleContainer to the top when the article changes
        if (prevProps.help.history !== this.props.help.history &&
            this.refArticleContainer.current) {
            this.refArticleContainer.current.scrollTop = 0;
        }
    };
    Article.prototype.onArticleEntered = function () {
        // if skipArticleFadeInAnimation is true, set to false after the
        // first slide-in animation
        // NOTE: skipArticleFadeInAnimation could be true only after the mounting
        var skipArticleFadeInAnimation = this.state.skipArticleFadeInAnimation;
        if (skipArticleFadeInAnimation) {
            this.setState({ skipArticleFadeInAnimation: false });
        }
    };
    Article.prototype.onArticleExited = function () {
        // when the user navigates back to the default content and the animation finished,
        // set the articleId to ''
        if (this.props.help.articleIdSetter) {
            this.props.help.articleIdSetter('');
        }
    };
    Article.prototype.renderArticleContent = function () {
        var _this = this;
        var currentArticle = this.props.help.getCurrentArticle();
        var handleOnClick = function (articleId) {
            _this.props.help.loadArticle(articleId);
        };
        if (currentArticle) {
            var article = currentArticle.article;
            if (currentArticle.state === Requests_1.REQUEST_STATE.error) {
                return React.createElement(LoadingError_1.default, null);
            }
            else if (article && currentArticle.state === Requests_1.REQUEST_STATE.done) {
                return (React.createElement(React.Fragment, null,
                    React.createElement(ArticleContent_1.default, { title: article.title, body: article.body, titleLinkUrl: article.productUrl }),
                    React.createElement(ArticleWasHelpfulForm_1.default, null),
                    React.createElement(RelatedArticles_1.default, { relatedArticles: article.relatedArticles, onRelatedArticlesListItemClick: handleOnClick })));
            }
            else {
                return (React.createElement(React.Fragment, null,
                    React.createElement(ArticleContent_1.default, { isLoading: true }),
                    React.createElement(RelatedArticles_1.default, { isLoading: true })));
            }
        }
        return null;
    };
    Article.prototype.render = function () {
        var _this = this;
        var skipArticleFadeInAnimation = this.state.skipArticleFadeInAnimation;
        return (React.createElement(react_transition_group_1.Transition, { in: this.props.help.isArticleVisible(), timeout: constants_1.TRANSITION_DURATION_MS, enter: !skipArticleFadeInAnimation, onEntered: this.onArticleEntered, onExited: this.onArticleExited, mountOnEnter: true, unmountOnExit: true }, function (state) { return (React.createElement(styled_1.ArticleContainer, { ref: _this.refArticleContainer, isSearchVisible: _this.props.help.isSearchVisible(), style: tslib_1.__assign(tslib_1.__assign({}, defaultStyle), transitionStyles[state]) }, _this.renderArticleContent())); }));
    };
    return Article;
}(react_1.Component));
exports.Article = Article;
exports.default = HelpContext_1.withHelp(Article);
//# sourceMappingURL=index.js.map