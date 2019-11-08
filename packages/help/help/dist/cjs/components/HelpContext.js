"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importStar(require("react"));
var analytics_1 = require("../analytics");
var Requests_1 = require("../model/Requests");
var constants_1 = require("./constants");
var defaultValues = {
    view: constants_1.VIEW.DEFAULT_CONTENT,
    footer: undefined,
    defaultContent: undefined,
    // Article
    articleId: '',
    history: [],
    hasNavigatedToDefaultContent: false,
    // Search values
    searchValue: '',
    searchResult: [],
    searchState: Requests_1.REQUEST_STATE.done,
};
var initialiseHelpData = function (data) {
    return Object.assign(defaultValues, data);
};
var HelpContext = react_1.createContext({});
var HelpContextProviderImplementation = /** @class */ (function (_super) {
    tslib_1.__extends(HelpContextProviderImplementation, _super);
    function HelpContextProviderImplementation(props) {
        var _this = _super.call(this, props) || this;
        _this.onSearch = function (value) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
            var onSearch, searchValue, searchResult, error_1;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        onSearch = this.props.onSearch;
                        searchValue = value;
                        return [4 /*yield*/, this.setState({ searchValue: searchValue })];
                    case 1:
                        _a.sent();
                        if (!onSearch) return [3 /*break*/, 6];
                        if (!(searchValue.length > constants_1.MIN_CHARACTERS_FOR_SEARCH)) return [3 /*break*/, 5];
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 4, , 5]);
                        this.setState({ searchState: Requests_1.REQUEST_STATE.loading });
                        return [4 /*yield*/, onSearch(searchValue)];
                    case 3:
                        searchResult = _a.sent();
                        this.setState({
                            searchResult: searchResult,
                            searchState: Requests_1.REQUEST_STATE.done,
                        });
                        return [3 /*break*/, 5];
                    case 4:
                        error_1 = _a.sent();
                        this.setState({ searchState: Requests_1.REQUEST_STATE.error });
                        return [3 /*break*/, 5];
                    case 5:
                        // If the search input is empty, the search results should be empty and
                        // the state.view should change to VIEW.ARTICLE
                        if (searchValue.length === 0) {
                            this.setState({
                                view: constants_1.VIEW.ARTICLE,
                                searchResult: [],
                                searchState: Requests_1.REQUEST_STATE.done,
                            });
                        }
                        _a.label = 6;
                    case 6: return [2 /*return*/];
                }
            });
        }); };
        _this.loadArticle = function (id) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
            var articleId;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        articleId = id ? id : this.state.articleId;
                        if (!articleId) return [3 /*break*/, 4];
                        if (!this.state.hasNavigatedToDefaultContent) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.setState({
                                hasNavigatedToDefaultContent: false,
                                history: [],
                            })];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2: return [4 /*yield*/, this.setState({
                            view: constants_1.VIEW.ARTICLE,
                        })];
                    case 3:
                        _a.sent();
                        this.getArticle(articleId);
                        return [3 /*break*/, 5];
                    case 4:
                        this.setState({
                            history: [],
                            view: constants_1.VIEW.DEFAULT_CONTENT,
                        });
                        _a.label = 5;
                    case 5: return [2 /*return*/];
                }
            });
        }); };
        _this.updateHistoryItem = function (uid, update) {
            var history = tslib_1.__spread(_this.state.history);
            var index = history.findIndex(function (historyItem) { return historyItem.uid === uid; });
            // update the historyItem only if exist in the state.history array
            if (index !== -1) {
                history[index] = tslib_1.__assign(tslib_1.__assign({}, history[index]), update);
                _this.setState({ history: history });
            }
        };
        _this.getArticle = function (articleId) {
            var newHistoryItemAdded = false;
            var uid = Math.floor(Math.random() * Math.pow(10, 17));
            var updateNewLastItem = function (uid, update) {
                // if the new historyItem wasn't added to the history yet
                // add it and update the values with what it comes from the "update" param
                if (!newHistoryItemAdded) {
                    // New article
                    var newHistoryItem_1 = tslib_1.__assign({ uid: uid, id: articleId, state: Requests_1.REQUEST_STATE.done }, update);
                    _this.setState(function (prevState) { return ({
                        history: tslib_1.__spread(prevState.history, [newHistoryItem_1]),
                    }); }, function () {
                        newHistoryItemAdded = true;
                    });
                }
                else {
                    // if the new historyItem was added already, just update its value
                    // with what it comes from the "update" param
                    _this.updateHistoryItem(uid, update);
                }
            };
            // Execute this function only if onGetArticle was defined
            if (_this.props.onGetArticle) {
                try {
                    // if is the first article we are going to display in the ArticleContent area
                    // (which means the state.history is 0) display loading state after ${LOADING_TIMEOUT}ms
                    // passed after the request. Otherwise, display the loading state immediately
                    if (_this.state.history.length > 0) {
                        _this.requestLoadingTimeout = setTimeout(function () {
                            updateNewLastItem(uid, { state: Requests_1.REQUEST_STATE.loading });
                        }, constants_1.LOADING_TIMEOUT);
                    }
                    else {
                        updateNewLastItem(uid, { state: Requests_1.REQUEST_STATE.loading });
                    }
                    // get the article
                    _this.props.onGetArticle(articleId).then(function (article) {
                        if (article) {
                            // add the article value to the last historyItem
                            // and update the state of the last historyItem to done
                            updateNewLastItem(uid, {
                                state: Requests_1.REQUEST_STATE.done,
                                article: article,
                            });
                        }
                        else {
                            // If we don't get any article, set the state of
                            // the last historyItem to error
                            updateNewLastItem(uid, { state: Requests_1.REQUEST_STATE.error });
                        }
                        clearTimeout(_this.requestLoadingTimeout);
                    });
                }
                catch (error) {
                    updateNewLastItem(uid, { state: Requests_1.REQUEST_STATE.error });
                    clearTimeout(_this.requestLoadingTimeout);
                }
            }
            return undefined;
        };
        _this.navigateBack = function () { return tslib_1.__awaiter(_this, void 0, void 0, function () {
            var history, articleIdSetter;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        history = this.state.history;
                        articleIdSetter = this.props.articleIdSetter;
                        if (!articleIdSetter) return [3 /*break*/, 4];
                        if (!(history.length > 1)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.setState(function (prevState) {
                                var newHistory = tslib_1.__spread(prevState.history.slice(0, -1));
                                articleIdSetter("" + newHistory[newHistory.length - 1].id);
                                return {
                                    history: newHistory,
                                    view: constants_1.VIEW.ARTICLE_NAVIGATION,
                                };
                            })];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 2:
                        if (!(history.length === 1)) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.setState({
                                view: constants_1.VIEW.ARTICLE_NAVIGATION,
                                hasNavigatedToDefaultContent: true,
                            })];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        }); };
        _this.isBackbuttonVisible = function () {
            if ((_this.state.history.length === 1 && !_this.isDefaultContent()) ||
                !_this.props.articleIdSetter) {
                return false;
            }
            return _this.isArticleVisible();
        };
        _this.isSearchVisible = function () {
            if (_this.props.onSearch) {
                return (_this.state.view === constants_1.VIEW.ARTICLE ||
                    _this.state.view === constants_1.VIEW.ARTICLE_NAVIGATION ||
                    _this.state.view === constants_1.VIEW.DEFAULT_CONTENT);
            }
            return false;
        };
        _this.isArticleVisible = function () {
            return ((_this.state.view === constants_1.VIEW.ARTICLE ||
                _this.state.view === constants_1.VIEW.ARTICLE_NAVIGATION) &&
                !_this.state.hasNavigatedToDefaultContent &&
                _this.state.searchValue.length <= constants_1.MIN_CHARACTERS_FOR_SEARCH);
        };
        _this.isFooter = function () {
            return _this.state.footer !== undefined;
        };
        _this.isDefaultContent = function () {
            return _this.state.defaultContent !== undefined;
        };
        _this.getCurrentArticle = function () {
            var currentArticleItem = _this.state.history[_this.state.history.length - 1];
            return currentArticleItem;
        };
        _this.state = initialiseHelpData(tslib_1.__assign(tslib_1.__assign({}, defaultValues), { articleId: _this.props.articleId ? _this.props.articleId : '', footer: _this.props.footer, defaultContent: _this.props.defaultContent }));
        return _this;
    }
    HelpContextProviderImplementation.prototype.componentDidMount = function () {
        if (this.props.articleId !== '') {
            this.loadArticle();
        }
    };
    HelpContextProviderImplementation.prototype.componentWillUnmount = function () {
        clearTimeout(this.requestLoadingTimeout);
    };
    HelpContextProviderImplementation.prototype.componentDidUpdate = function (prevProps, prevState) {
        // sync state.articleId with prop.articleId
        if (this.props.articleId !== prevProps.articleId) {
            this.setState({
                articleId: this.props.articleId ? this.props.articleId : '',
                view: constants_1.VIEW.ARTICLE,
            });
        }
        var lastArticleId = this.state.history.length > 0
            ? this.state.history[this.state.history.length - 1].id
            : '';
        if (this.state.articleId !== prevState.articleId &&
            this.state.view !== constants_1.VIEW.ARTICLE_NAVIGATION &&
            this.state.articleId !== lastArticleId) {
            this.loadArticle();
        }
    };
    HelpContextProviderImplementation.prototype.render = function () {
        var _a = this.state, hasNavigatedToDefaultContent = _a.hasNavigatedToDefaultContent, restState = tslib_1.__rest(_a, ["hasNavigatedToDefaultContent"]);
        return (react_1.default.createElement(HelpContext.Provider, { value: {
                help: tslib_1.__assign(tslib_1.__assign({}, restState), { loadArticle: this.loadArticle, isBackbuttonVisible: this.isBackbuttonVisible, isFooter: this.isFooter, isDefaultContent: this.isDefaultContent, isSearchVisible: this.isSearchVisible, isArticleVisible: this.isArticleVisible, navigateBack: this.navigateBack, articleIdSetter: this.props.articleIdSetter, onSearch: this.onSearch, getCurrentArticle: this.getCurrentArticle, onButtonCloseClick: this.props.onButtonCloseClick, onWasHelpfulSubmit: this.props.onWasHelpfulSubmit, onWasHelpfulYesButtonClick: this.props.onWasHelpfulYesButtonClick, onWasHelpfulNoButtonClick: this.props.onWasHelpfulNoButtonClick, footer: this.props.footer, defaultContent: this.props.defaultContent, articleId: this.state.articleId }),
            }, children: this.props.children }));
    };
    return HelpContextProviderImplementation;
}(react_1.default.Component));
exports.HelpContextProvider = analytics_1.withAnalyticsEvents()(HelpContextProviderImplementation);
exports.HelpContextConsumer = HelpContext.Consumer;
exports.withHelp = function (WrappedComponent) { return function (props) { return (react_1.default.createElement(HelpContext.Consumer, null, function (_a) {
    var help = _a.help;
    return react_1.default.createElement(WrappedComponent, tslib_1.__assign({}, props, { help: help }));
})); }; };
//# sourceMappingURL=HelpContext.js.map