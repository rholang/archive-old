"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var classnames_1 = tslib_1.__importDefault(require("classnames"));
var PropTypes = tslib_1.__importStar(require("prop-types"));
var React = tslib_1.__importStar(require("react"));
var react_1 = require("react");
var react_intl_1 = require("react-intl");
var EmojiRepository_1 = require("../../api/EmojiRepository");
var EmojiResource_1 = require("../../api/EmojiResource");
var constants_1 = require("../../util/constants");
var type_helpers_1 = require("../../util/type-helpers");
var types_1 = require("../../types");
var filters_1 = require("../../util/filters");
var UploadEmoji_1 = require("../common/UploadEmoji");
var RecordSelectionDefault_1 = require("../common/RecordSelectionDefault");
var CategorySelector_1 = tslib_1.__importDefault(require("./CategorySelector"));
var EmojiPickerFooter_1 = tslib_1.__importDefault(require("./EmojiPickerFooter"));
var EmojiPickerList_1 = tslib_1.__importDefault(require("./EmojiPickerList"));
var styles = tslib_1.__importStar(require("./styles"));
var analytics_1 = require("../../util/analytics");
var FREQUENTLY_USED_MAX = 16;
var EmojiPickerComponent = /** @class */ (function (_super) {
    tslib_1.__extends(EmojiPickerComponent, _super);
    function EmojiPickerComponent(props) {
        var _this = _super.call(this, props) || this;
        _this.onEmojiActive = function (_emojiId, emoji) {
            if (_this.state.selectedEmoji !== emoji) {
                _this.setState({
                    selectedEmoji: emoji,
                    showUploadButton: false,
                });
            }
            else {
                _this.setState({
                    showUploadButton: false,
                });
            }
        };
        _this.onCategoryActivated = function (category) {
            if (_this.state.activeCategory !== category) {
                _this.setState({
                    activeCategory: category,
                });
            }
        };
        _this.onCategorySelected = function (categoryId) {
            var emojiProvider = _this.props.emojiProvider;
            if (!categoryId) {
                return;
            }
            emojiProvider.findInCategory(categoryId).then(function (emojisInCategory) {
                var disableCategories = _this.state.disableCategories;
                if (!disableCategories) {
                    var selectedEmoji = void 0;
                    if (emojisInCategory && emojisInCategory.length > 0) {
                        selectedEmoji = EmojiRepository_1.getEmojiVariation(emojisInCategory[0], {
                            skinTone: _this.state.selectedTone,
                        });
                    }
                    var emojiPickerList = _this.refs.emojiPickerList;
                    if (emojiPickerList) {
                        emojiPickerList.reveal(categoryId);
                    }
                    _this.setState({
                        activeCategory: categoryId,
                        selectedEmoji: selectedEmoji,
                    });
                    _this.fireAnalytics(analytics_1.categoryClickedEvent({ category: categoryId }));
                }
            });
        };
        _this.onFileChooserClicked = function () {
            _this.fireAnalytics(analytics_1.selectedFileEvent());
        };
        _this.onEmojiPickerMouseLeave = function () {
            _this.setState({
                showUploadButton: true,
            });
        };
        _this.onEmojiPickerMouseEnter = function () {
            _this.setState({
                showUploadButton: false,
            });
        };
        _this.fireAnalytics = function (analyticsEvent) {
            var createAnalyticsEvent = _this.props.createAnalyticsEvent;
            if (createAnalyticsEvent) {
                analytics_1.createAndFireEventInElementsChannel(analyticsEvent)(createAnalyticsEvent);
            }
        };
        _this.calculateElapsedTime = function () {
            return Date.now() - _this.openTime;
        };
        _this.onUploadSupported = function (supported) {
            _this.setState({
                uploadSupported: supported,
            });
        };
        _this.onSearch = function (query) {
            _this.updateEmojis(query, { skinTone: _this.state.selectedTone });
        };
        _this.onSearchResult = function (searchResults) {
            var frequentlyUsedEmoji = _this.state.frequentlyUsedEmojis || [];
            var searchQuery = searchResults.query || '';
            var emojiToRender = _this.buildQuerySpecificEmojiList(searchQuery, searchResults.emojis, frequentlyUsedEmoji);
            if (searchQuery !== _this.state.query) {
                _this.fireAnalytics(analytics_1.pickerSearchedEvent({
                    queryLength: searchQuery.length,
                    numMatches: emojiToRender.length,
                }));
            }
            _this.setStateAfterEmojiChange(searchQuery, emojiToRender, searchResults.emojis, frequentlyUsedEmoji);
        };
        _this.onFrequentEmojiResult = function (frequentEmoji) {
            var _a = _this.state, query = _a.query, searchEmojis = _a.searchEmojis;
            // change the category of each of the featured emoji
            var recategorised = frequentEmoji.map(function (emoji) {
                var clone = JSON.parse(JSON.stringify(emoji));
                clone.category = constants_1.frequentCategory;
                return clone;
            });
            var emojiToRender = _this.buildQuerySpecificEmojiList(query, searchEmojis, recategorised);
            _this.setStateAfterEmojiChange(query, emojiToRender, searchEmojis, recategorised);
        };
        _this.onDynamicCategoryChange = function (categories) {
            _this.setState({
                dynamicCategories: categories,
            });
        };
        _this.onProviderChange = {
            result: _this.onSearchResult,
        };
        _this.onToneSelected = function (toneValue) {
            _this.setState({
                selectedTone: toneValue,
            });
            _this.props.emojiProvider.setSelectedTone(toneValue);
            var _a = _this.state.query, query = _a === void 0 ? '' : _a;
            _this.updateEmojis(query, { skinTone: toneValue });
        };
        _this.onToneSelectorCancelled = function () {
            _this.fireAnalytics(analytics_1.toneSelectorClosedEvent());
        };
        /**
         * Updates the emoji displayed by the picker. If there is no query specified then we expect to retrieve all emoji for display,
         * by category, in the picker. This differs from when there is a query in which case we expect to receive a sorted result matching
         * the search.
         */
        _this.updateEmojis = function (query, options) {
            // if the query is empty then we want the emoji to be in service defined order, unless specified otherwise
            // and we want emoji for the 'frequently used' category to be refreshed as well.
            if (!query) {
                if (!options) {
                    options = {};
                }
                if (!options.sort) {
                    options.sort = types_1.SearchSort.None;
                }
                // take a copy of search options so that the frequently used can be limited to 16 without affecting the full emoji query
                var frequentOptions = tslib_1.__assign(tslib_1.__assign({}, options), { sort: types_1.SearchSort.None, limit: FREQUENTLY_USED_MAX });
                _this.props.emojiProvider
                    .getFrequentlyUsed(frequentOptions)
                    .then(_this.onFrequentEmojiResult);
            }
            _this.props.emojiProvider.filter(query, options);
        };
        _this.onOpenUpload = function () {
            // Prime upload token so it's ready when the user adds
            var emojiProvider = _this.props.emojiProvider;
            if (EmojiResource_1.supportsUploadFeature(emojiProvider)) {
                emojiProvider.prepareForUpload();
            }
            _this.setState({
                uploadErrorMessage: undefined,
                uploading: true,
            });
            _this.fireAnalytics(analytics_1.uploadBeginButton());
        };
        _this.onUploadEmoji = function (upload, retry) {
            var emojiProvider = _this.props.emojiProvider;
            _this.fireAnalytics(analytics_1.uploadConfirmButton({ retry: retry }));
            var errorSetter = function (message) {
                _this.setState({
                    uploadErrorMessage: message,
                });
            };
            var onSuccess = function (emojiDescription) {
                _this.setState({
                    activeCategory: constants_1.customCategory,
                    selectedEmoji: emojiDescription,
                    uploading: false,
                });
                // this.loadEmoji(emojiProvider, emojiDescription);
                _this.scrollToEndOfList();
            };
            UploadEmoji_1.uploadEmoji(upload, emojiProvider, errorSetter, onSuccess, _this.fireAnalytics);
        };
        _this.onTriggerDelete = function (_emojiId, emoji) {
            _this.fireAnalytics(analytics_1.deleteBeginEvent({ emojiId: _emojiId.id }));
            _this.setState({ emojiToDelete: emoji });
        };
        _this.onCloseDelete = function () {
            var emojiToDelete = _this.state.emojiToDelete;
            _this.fireAnalytics(analytics_1.deleteCancelEvent({
                emojiId: emojiToDelete && emojiToDelete.id,
            }));
            _this.setState({ emojiToDelete: undefined });
        };
        _this.onDeleteEmoji = function (emoji) {
            var _a = _this.state, emojiToDelete = _a.emojiToDelete, query = _a.query, selectedTone = _a.selectedTone;
            _this.fireAnalytics(analytics_1.deleteConfirmEvent({
                emojiId: emojiToDelete && emojiToDelete.id,
            }));
            return _this.props.emojiProvider.deleteSiteEmoji(emoji).then(function (success) {
                if (success) {
                    _this.updateEmojis(query, { skinTone: selectedTone });
                }
                return success;
            });
        };
        _this.scrollToEndOfList = function () {
            var emojiPickerList = _this.refs.emojiPickerList;
            if (emojiPickerList) {
                // Wait a tick to ensure repaint and updated height for picker list
                window.setTimeout(function () {
                    emojiPickerList.scrollToBottom();
                }, 0);
            }
        };
        _this.onUploadCancelled = function () {
            _this.setState({
                uploading: false,
                uploadErrorMessage: undefined,
            });
            _this.fireAnalytics(analytics_1.uploadCancelButton());
        };
        _this.handlePickerRef = function (ref) {
            if (_this.props.onPickerRef) {
                _this.props.onPickerRef(ref);
            }
        };
        _this.onSelectWrapper = function (emojiId, emoji, event) {
            var onSelection = _this.props.onSelection;
            var query = _this.state.query;
            if (onSelection) {
                onSelection(emojiId, emoji, event);
                _this.fireAnalytics(analytics_1.pickerClickedEvent({
                    duration: _this.calculateElapsedTime(),
                    emojiId: emojiId.id || '',
                    category: (emoji && emoji.category) || '',
                    type: (emoji && emoji.type) || '',
                    queryLength: (query && query.length) || 0,
                }));
            }
        };
        var emojiProvider = props.emojiProvider, hideToneSelector = props.hideToneSelector;
        _this.state = {
            filteredEmojis: [],
            searchEmojis: [],
            frequentlyUsedEmojis: [],
            query: '',
            dynamicCategories: [],
            selectedTone: !hideToneSelector
                ? emojiProvider.getSelectedTone()
                : undefined,
            loading: true,
            uploadSupported: false,
            uploading: false,
            showUploadButton: true,
        };
        _this.openTime = 0;
        return _this;
    }
    EmojiPickerComponent.prototype.getChildContext = function () {
        return {
            emoji: {
                emojiProvider: this.props.emojiProvider,
            },
        };
    };
    EmojiPickerComponent.prototype.UNSAFE_componentWillMount = function () {
        this.openTime = Date.now();
        this.fireAnalytics(analytics_1.openedPickerEvent());
    };
    EmojiPickerComponent.prototype.componentDidMount = function () {
        var _this = this;
        var _a = this.props, emojiProvider = _a.emojiProvider, hideToneSelector = _a.hideToneSelector;
        emojiProvider.subscribe(this.onProviderChange);
        this.onSearch(this.state.query);
        if (EmojiResource_1.supportsUploadFeature(emojiProvider)) {
            emojiProvider.isUploadSupported().then(this.onUploadSupported);
        }
        if (!hideToneSelector) {
            var toneEmoji = filters_1.getToneEmoji(emojiProvider);
            if (type_helpers_1.isPromise(toneEmoji)) {
                toneEmoji.then(function (emoji) { return _this.setState({ toneEmoji: emoji }); });
            }
            else if (toneEmoji === undefined || type_helpers_1.isEmojiDescription(toneEmoji)) {
                this.setState({ toneEmoji: toneEmoji });
            }
        }
    };
    EmojiPickerComponent.prototype.componentWillUnmount = function () {
        var emojiProvider = this.props.emojiProvider;
        emojiProvider.unsubscribe(this.onProviderChange);
        this.fireAnalytics(analytics_1.closedPickerEvent({ duration: this.calculateElapsedTime() }));
    };
    EmojiPickerComponent.prototype.UNSAFE_componentWillReceiveProps = function (nextProps) {
        var prevEmojiProvider = this.props.emojiProvider;
        var nextEmojiProvider = nextProps.emojiProvider;
        if (prevEmojiProvider !== nextEmojiProvider) {
            if (EmojiResource_1.supportsUploadFeature(nextEmojiProvider)) {
                nextEmojiProvider.isUploadSupported().then(this.onUploadSupported);
            }
        }
    };
    EmojiPickerComponent.prototype.componentDidUpdate = function (prevProps) {
        var prevEmojiProvider = prevProps.emojiProvider;
        var currentEmojiProvider = this.props.emojiProvider;
        if (prevEmojiProvider !== currentEmojiProvider) {
            prevEmojiProvider.unsubscribe(this.onProviderChange);
            currentEmojiProvider.subscribe(this.onProviderChange);
            // We changed provider which means we subscribed to filter results for a new subscriber.
            // So we refresh the emoji display with onSearch and we do it here, after the new props have
            // been set since onSearch leads to filter being called on the current emojiProvider.
            // (Calling onSearch in a '...Will...' lifecycle method would lead to filter being called on
            // an emojiProvider we have already unsubscribed from)
            this.onSearch(this.state.query);
        }
    };
    /**
     * If there is no user search in the EmojiPicker then it should display all emoji received from the EmojiRepository and should
     * also include a special category of most frequently used emoji (if there are any). This method decides if we are in this 'no search'
     * state and appends the frequent emoji if necessary.
     *
     * @param searchEmoji the emoji last received from the EmojiRepository after a search (may be empty)
     * @param frequentEmoji the frequently used emoji last received from the EmojiRepository (may be empty)
     */
    EmojiPickerComponent.prototype.buildQuerySpecificEmojiList = function (query, searchEmoji, frequentEmoji) {
        // If there are no frequent emoji, or if there was a search query then we want to take the search result exactly as is.
        if (!frequentEmoji.length || query) {
            return searchEmoji;
        }
        return tslib_1.__spread(searchEmoji, frequentEmoji);
    };
    /**
     * Calculate and set the new state of the component in response to the list of emoji changing for some reason (a search has returned
     * or the frequently used emoji have updated.)
     */
    EmojiPickerComponent.prototype.setStateAfterEmojiChange = function (query, emojiToRender, searchEmoji, frequentEmoji) {
        var _this = this;
        var filteredEmojis = this.state.filteredEmojis;
        // Only enable categories for full emoji list (non-search)
        var disableCategories = !!query;
        if (!disableCategories && emojiToRender.length !== filteredEmojis.length) {
            this.getDynamicCategories().then(function (categories) {
                _this.onDynamicCategoryChange(categories);
            });
        }
        var selectedEmoji;
        var activeCategory;
        if (type_helpers_1.containsEmojiId(emojiToRender, this.state.selectedEmoji)) {
            // Keep existing emoji selected if still in results
            selectedEmoji = this.state.selectedEmoji;
            activeCategory = this.state.activeCategory;
        }
        else {
            selectedEmoji = undefined;
            // Only enable categories for full emoji list (non-search)
            activeCategory = undefined;
        }
        this.setState({
            filteredEmojis: emojiToRender,
            searchEmojis: searchEmoji,
            frequentlyUsedEmojis: frequentEmoji,
            selectedEmoji: selectedEmoji,
            activeCategory: activeCategory,
            disableCategories: disableCategories,
            query: query,
            loading: false,
        });
    };
    EmojiPickerComponent.prototype.getDynamicCategories = function () {
        if (!this.props.emojiProvider.calculateDynamicCategories) {
            return Promise.resolve([]);
        }
        return this.props.emojiProvider.calculateDynamicCategories();
    };
    EmojiPickerComponent.prototype.render = function () {
        var emojiProvider = this.props.emojiProvider;
        var _a = this.state, activeCategory = _a.activeCategory, disableCategories = _a.disableCategories, dynamicCategories = _a.dynamicCategories, filteredEmojis = _a.filteredEmojis, loading = _a.loading, query = _a.query, selectedEmoji = _a.selectedEmoji, selectedTone = _a.selectedTone, toneEmoji = _a.toneEmoji, emojiToDelete = _a.emojiToDelete, uploading = _a.uploading, uploadErrorMessage = _a.uploadErrorMessage, uploadSupported = _a.uploadSupported, showUploadButton = _a.showUploadButton;
        var recordUsageOnSelection = RecordSelectionDefault_1.createRecordSelectionDefault(emojiProvider, this.onSelectWrapper);
        var formattedErrorMessage = uploadErrorMessage ? (React.createElement(react_intl_1.FormattedMessage, tslib_1.__assign({}, uploadErrorMessage))) : null;
        var classes = [styles.emojiPicker];
        var picker = (React.createElement("div", { className: classnames_1.default(classes), ref: this.handlePickerRef, "data-emoji-picker-container": true },
            React.createElement(CategorySelector_1.default, { activeCategoryId: activeCategory, dynamicCategories: dynamicCategories, disableCategories: disableCategories, onCategorySelected: this.onCategorySelected }),
            React.createElement(EmojiPickerList_1.default, { emojis: filteredEmojis, currentUser: emojiProvider.getCurrentUser(), onEmojiSelected: recordUsageOnSelection, onEmojiActive: this.onEmojiActive, onEmojiDelete: this.onTriggerDelete, onCategoryActivated: this.onCategoryActivated, onMouseLeave: this.onEmojiPickerMouseLeave, onMouseEnter: this.onEmojiPickerMouseEnter, onSearch: this.onSearch, query: query, selectedTone: selectedTone, loading: loading, ref: "emojiPickerList" }),
            React.createElement(EmojiPickerFooter_1.default, { initialUploadName: query, selectedEmoji: selectedEmoji, selectedTone: selectedTone, onToneSelected: this.onToneSelected, onToneSelectorCancelled: this.onToneSelectorCancelled, toneEmoji: toneEmoji, uploading: uploading, emojiToDelete: emojiToDelete, uploadErrorMessage: formattedErrorMessage, uploadEnabled: uploadSupported && showUploadButton && !uploading, onUploadEmoji: this.onUploadEmoji, onUploadCancelled: this.onUploadCancelled, onDeleteEmoji: this.onDeleteEmoji, onCloseDelete: this.onCloseDelete, onFileChooserClicked: this.onFileChooserClicked, onOpenUpload: this.onOpenUpload })));
        return picker;
    };
    EmojiPickerComponent.childContextTypes = {
        emoji: PropTypes.object,
    };
    EmojiPickerComponent.defaultProps = {
        onSelection: function () { },
    };
    return EmojiPickerComponent;
}(react_1.PureComponent));
exports.default = EmojiPickerComponent;
//# sourceMappingURL=EmojiPickerComponent.js.map