"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var react_1 = require("react");
var react_redux_1 = require("react-redux");
var lodash_debounce_1 = tslib_1.__importDefault(require("lodash.debounce"));
var react_intl_1 = require("react-intl");
var media_ui_1 = require("@atlaskit/media-ui");
var field_text_1 = tslib_1.__importDefault(require("@atlaskit/field-text"));
var button_1 = tslib_1.__importDefault(require("@atlaskit/button"));
var spinner_1 = tslib_1.__importDefault(require("@atlaskit/spinner"));
var media_card_1 = require("@atlaskit/media-card");
var bricksGrid_1 = require("./bricksGrid");
var fileClick_1 = require("../../../actions/fileClick");
var gridCellScaler_1 = tslib_1.__importDefault(require("../../../tools/gridCellScaler"));
var searchGiphy_1 = require("../../../actions/searchGiphy");
var styles_1 = require("./styles");
var icons_1 = require("../../../../icons");
var NUMBER_OF_COLUMNS = 4;
var GAP_SIZE = 5;
var CONTAINER_WIDTH = 677;
var GiphyView = /** @class */ (function (_super) {
    tslib_1.__extends(GiphyView, _super);
    function GiphyView(props) {
        var _this = _super.call(this, props) || this;
        _this.getContent = function () {
            var _a = _this.props, hasError = _a.hasError, isLoading = _a.isLoading, cardModels = _a.cardModels;
            if (hasError) {
                return _this.renderError();
            }
            if (!isLoading && cardModels.length === 0) {
                return _this.renderEmptyState();
            }
            return _this.renderSearchResults();
        };
        _this.renderError = function () {
            return (React.createElement(styles_1.WarningContainer, null,
                React.createElement(styles_1.WarningIconWrapper, null, icons_1.errorIcon),
                React.createElement(styles_1.WarningHeading, null,
                    React.createElement(react_intl_1.FormattedMessage, tslib_1.__assign({}, media_ui_1.messages.cant_retrieve_gifs))),
                React.createElement(styles_1.WarningSuggestion, null,
                    React.createElement(react_intl_1.FormattedMessage, tslib_1.__assign({}, media_ui_1.messages.check_your_network))),
                React.createElement(button_1.default, { onClick: _this.handleRetryButtonClick },
                    React.createElement(react_intl_1.FormattedMessage, tslib_1.__assign({}, media_ui_1.messages.try_again)))));
        };
        _this.renderEmptyState = function () {
            var query = _this.state.query;
            // The GIF used in this error state is too large to store as a data URI (> 3.2 MB)
            return (React.createElement(styles_1.WarningContainer, null,
                React.createElement(styles_1.WarningImage, { src: "https://media1.giphy.com/media/10YK5Hh53nC3dK/200w.gif" }),
                React.createElement(styles_1.WarningHeading, null,
                    React.createElement(react_intl_1.FormattedMessage, tslib_1.__assign({}, media_ui_1.messages.no_gifs_found))),
                React.createElement(styles_1.WarningSuggestion, null,
                    React.createElement(react_intl_1.FormattedMessage, tslib_1.__assign({}, media_ui_1.messages.no_gifs_found_suggestion, { values: { query: query } })))));
        };
        _this.renderSearchResults = function () {
            var _a = _this.props, isLoading = _a.isLoading, cardModels = _a.cardModels, totalResultCount = _a.totalResultCount;
            var isThereAreMoreResults = totalResultCount === undefined ||
                cardModels.length < totalResultCount - 1;
            var shouldShowLoadMoreButton = isLoading || isThereAreMoreResults;
            var loadMoreButton = shouldShowLoadMoreButton && _this.renderLoadMoreButton();
            return (React.createElement("div", null,
                _this.renderMasonaryLayout(_this.props.cardModels),
                loadMoreButton));
        };
        _this.renderMasonaryLayout = function (cardModels) {
            if (cardModels.length === 0) {
                return null;
            }
            var cards = cardModels.map(function (cardModel, i) {
                var dataURI = cardModel.dataURI, metadata = cardModel.metadata, actualDimensions = cardModel.dimensions;
                var selectedItems = _this.props.selectedItems;
                var selected = selectedItems.some(function (item) { return item.id === metadata.id && item.serviceName === 'giphy'; });
                var dimensions = gridCellScaler_1.default(tslib_1.__assign(tslib_1.__assign({}, actualDimensions), { gapSize: GAP_SIZE, containerWidth: CONTAINER_WIDTH, numberOfColumns: NUMBER_OF_COLUMNS }));
                var identifier = {
                    mediaItemType: 'external-image',
                    dataURI: dataURI,
                    name: metadata.name,
                };
                return (React.createElement(styles_1.GridCell, { key: i + "-metadata.id", width: dimensions.width },
                    React.createElement(media_card_1.Card, { identifier: identifier, mediaClientConfig: {}, dimensions: dimensions, selectable: true, selected: selected, onClick: _this.createClickHandler(cardModel) })));
            });
            return (React.createElement(bricksGrid_1.BricksLayout, { id: "mediapicker-gif-layout", sizes: [{ columns: NUMBER_OF_COLUMNS, gutter: GAP_SIZE }] }, cards));
        };
        _this.renderLoadMoreButton = function () {
            var isLoading = _this.props.isLoading;
            var iconAfter = isLoading ? React.createElement(spinner_1.default, null) : undefined;
            return (React.createElement(styles_1.ButtonContainer, null,
                React.createElement(button_1.default, { onClick: _this.handleLoadMoreButtonClick, isDisabled: isLoading, iconAfter: iconAfter },
                    React.createElement(react_intl_1.FormattedMessage, tslib_1.__assign({}, media_ui_1.messages.load_more_gifs)))));
        };
        _this.createSearchChangeHandler = function () {
            var onSearchQueryChange = _this.props.onSearchQueryChange;
            var debouncedOnSearchQueryChange = lodash_debounce_1.default(onSearchQueryChange, 1000);
            return function (e) {
                var query = e.currentTarget.value;
                _this.setState({
                    query: query,
                });
                debouncedOnSearchQueryChange(query);
            };
        };
        _this.createClickHandler = function (cardModel) { return function () {
            var onCardClick = _this.props.onCardClick;
            onCardClick(cardModel);
        }; };
        _this.handleLoadMoreButtonClick = function () {
            var onLoadMoreButtonClick = _this.props.onLoadMoreButtonClick;
            onLoadMoreButtonClick(_this.state.query, true);
        };
        _this.handleRetryButtonClick = function () {
            var onSearchQueryChange = _this.props.onSearchQueryChange;
            onSearchQueryChange(_this.state.query);
        };
        _this.state = {
            query: '',
        };
        _this.searchChangeHandler = _this.createSearchChangeHandler();
        return _this;
    }
    GiphyView.prototype.componentDidUpdate = function (_a) {
        var oldOnSearchQueryChange = _a.onSearchQueryChange;
        var newOnSearchQueryChange = this.props.onSearchQueryChange;
        if (oldOnSearchQueryChange !== newOnSearchQueryChange) {
            this.createSearchChangeHandler();
        }
    };
    GiphyView.prototype.render = function () {
        var formatMessage = this.props.intl.formatMessage;
        var query = this.state.query;
        return (React.createElement(styles_1.Container, { id: "mediapicker-giphy-container" },
            React.createElement(styles_1.Title, null, "GIPHY"),
            React.createElement(field_text_1.default, { label: "", placeholder: formatMessage(media_ui_1.messages.search_all_gifs), onChange: this.searchChangeHandler, shouldFitContainer: true, value: query }),
            this.getContent()));
    };
    return GiphyView;
}(react_1.Component));
exports.GiphyView = GiphyView;
exports.default = react_redux_1.connect(function (state) { return ({
    hasError: state.view.hasError,
    isLoading: state.view.isLoading,
    cardModels: state.giphy.imageCardModels,
    totalResultCount: state.giphy.totalResultCount,
    selectedItems: state.selectedItems,
}); }, function (dispatch) { return ({
    onSearchQueryChange: function (query) { return dispatch(searchGiphy_1.searchGiphy(query, false)); },
    onLoadMoreButtonClick: function (query, shouldAppendResults) {
        return dispatch(searchGiphy_1.searchGiphy(query, shouldAppendResults));
    },
    onCardClick: function (cardModel) {
        var _a = cardModel.metadata, id = _a.id, name = _a.name, size = _a.size;
        dispatch(fileClick_1.fileClick({
            mimeType: 'image/gif',
            id: id || '',
            name: name || '',
            size: size || 0,
            date: Date.now(),
        }, 'giphy'));
    },
}); })(react_intl_1.injectIntl(GiphyView));
//# sourceMappingURL=giphyView.js.map