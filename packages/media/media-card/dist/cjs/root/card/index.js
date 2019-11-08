"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var ReactDOM = tslib_1.__importStar(require("react-dom"));
var react_1 = require("react");
var analytics_next_1 = require("@atlaskit/analytics-next");
var download_1 = tslib_1.__importDefault(require("@atlaskit/icon/glyph/download"));
var media_client_1 = require("@atlaskit/media-client");
var media_viewer_1 = require("@atlaskit/media-viewer");
var react_intl_1 = require("react-intl");
var cardView_1 = require("../cardView");
var lazyContent_1 = require("../../utils/lazyContent");
var getDataURIDimension_1 = require("../../utils/getDataURIDimension");
var getDataURIFromFileState_1 = require("../../utils/getDataURIFromFileState");
var metadata_1 = require("../../utils/metadata");
var dimensionComparer_1 = require("../../utils/dimensionComparer");
var getCardStatus_1 = require("./getCardStatus");
var inlinePlayer_1 = require("../inlinePlayer");
var analytics_1 = require("../../utils/analytics");
var CardBase = /** @class */ (function (_super) {
    tslib_1.__extends(CardBase, _super);
    function CardBase() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.hasBeenMounted = false;
        _this.lastAction = undefined;
        _this.lastErrorState = {};
        _this.resolvedId = '';
        _this.cardRef = React.createRef();
        _this.state = {
            status: 'loading',
            isCardVisible: !_this.props.isLazy,
            previewOrientation: 1,
            isPlayingFile: false,
        };
        // we add a listener for each of the cards on the page
        // and then check if the triggered listener is from the card
        // that contains a div in current window.getSelection()
        // won't work in IE11
        _this.onCopyListener = function () {
            if (typeof window.getSelection === 'function') {
                var selection = window.getSelection();
                if (_this.cardRef.current &&
                    _this.cardRef.current.divRef.current instanceof Node &&
                    selection &&
                    selection.containsNode &&
                    selection.containsNode(_this.cardRef.current.divRef.current, true)) {
                    _this.fireAnalytics();
                }
            }
        };
        _this.fireAnalytics = function () { return tslib_1.__awaiter(_this, void 0, void 0, function () {
            var _a, createAnalyticsEvent, identifier, _b, _c, _d;
            return tslib_1.__generator(this, function (_e) {
                switch (_e.label) {
                    case 0:
                        _a = this.props, createAnalyticsEvent = _a.createAnalyticsEvent, identifier = _a.identifier;
                        _b = analytics_1.createAndFireCustomMediaEvent;
                        _c = {
                            eventType: 'ui',
                            action: 'copied',
                            actionSubject: 'file'
                        };
                        if (!(identifier.mediaItemType === 'file')) return [3 /*break*/, 2];
                        return [4 /*yield*/, identifier.id];
                    case 1:
                        _d = _e.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        _d = identifier.mediaItemType;
                        _e.label = 3;
                    case 3:
                        _b.apply(void 0, [(_c.actionSubjectId = _d,
                                _c), createAnalyticsEvent]);
                        return [2 /*return*/];
                }
            });
        }); };
        _this.shouldRefetchImage = function (current, next) {
            if (!current || !next) {
                return false;
            }
            return dimensionComparer_1.isBigger(current, next);
        };
        _this.releaseDataURI = function () {
            var identifier = _this.props.identifier;
            var dataURI = _this.state.dataURI;
            // we don't want to release external previews, since it might be reused later on
            if (dataURI && identifier.mediaItemType !== 'external-image') {
                URL.revokeObjectURL(dataURI);
            }
        };
        _this.onLoadingChangeCallback = function () {
            var onLoadingChange = _this.props.onLoadingChange;
            if (onLoadingChange) {
                var _a = _this.state, status_1 = _a.status, error = _a.error, metadata = _a.metadata;
                var state = {
                    type: status_1,
                    payload: error || metadata,
                };
                onLoadingChange(state);
            }
        };
        _this.shouldFireAnalyticsEvent = function (action, errorState) {
            var previousFailReason = _this.lastErrorState && _this.lastErrorState.failReason;
            var previousErrorMessage = _this.lastErrorState && _this.lastErrorState.error;
            var isDifferentErrorState = errorState.failReason !== previousFailReason ||
                errorState.error !== previousErrorMessage;
            var isDifferentAction = action !== _this.lastAction;
            return isDifferentAction || isDifferentErrorState;
        };
        _this.fireLoadingStatusAnalyticsEvent = function (_a) {
            var resolvedId = _a.resolvedId, status = _a.status, fileState = _a.fileState, metadata = _a.metadata, error = _a.error;
            var createAnalyticsEvent = _this.props.createAnalyticsEvent;
            var action = getCardStatus_1.getAnalyticsStatusFromCardStatus(status);
            var errorState = getCardStatus_1.getAnalyticsErrorStateAttributes(fileState, error);
            if (action && _this.shouldFireAnalyticsEvent(action, errorState)) {
                _this.lastAction = action;
                _this.lastErrorState = errorState;
                analytics_1.createAndFireCustomMediaEvent({
                    eventType: 'operational',
                    action: action,
                    actionSubject: 'mediaCardRender',
                    actionSubjectId: resolvedId,
                    attributes: tslib_1.__assign({ fileAttributes: analytics_1.getFileAttributes(metadata) }, errorState),
                }, createAnalyticsEvent);
            }
        };
        _this.notifyStateChange = function (state) {
            if (_this.hasBeenMounted) {
                _this.setState(state, _this.onLoadingChangeCallback);
            }
        };
        _this.unsubscribe = function () {
            if (_this.subscription) {
                _this.subscription.unsubscribe();
            }
            if (_this.hasBeenMounted) {
                _this.setState({ dataURI: undefined });
            }
            _this.lastAction = undefined;
            _this.lastErrorState = {};
        };
        // This method is called when card fails and user press 'Retry'
        _this.onRetry = function () {
            var _a = _this.props, identifier = _a.identifier, mediaClient = _a.mediaClient;
            _this.lastAction = undefined;
            _this.lastErrorState = {};
            _this.subscribe(identifier, mediaClient);
        };
        _this.onCardViewClick = function (event, analyticsEvent) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
            var _a, identifier, useInlinePlayer, shouldOpenMediaViewer, metadata, isVideo, mediaViewerSelectedItem, _b;
            return tslib_1.__generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _a = this.props, identifier = _a.identifier, useInlinePlayer = _a.useInlinePlayer, shouldOpenMediaViewer = _a.shouldOpenMediaViewer;
                        metadata = this.state.metadata;
                        this.onClick(event, analyticsEvent);
                        if (!metadata) {
                            return [2 /*return*/];
                        }
                        isVideo = metadata && metadata.mediaType === 'video';
                        if (!(useInlinePlayer && isVideo)) return [3 /*break*/, 1];
                        this.setState({
                            isPlayingFile: true,
                        });
                        return [3 /*break*/, 5];
                    case 1:
                        if (!shouldOpenMediaViewer) return [3 /*break*/, 5];
                        mediaViewerSelectedItem = void 0;
                        if (!media_client_1.isFileIdentifier(identifier)) return [3 /*break*/, 3];
                        _b = {};
                        return [4 /*yield*/, identifier.id];
                    case 2:
                        mediaViewerSelectedItem = (_b.id = _c.sent(),
                            _b.mediaItemType = 'file',
                            _b.collectionName = identifier.collectionName,
                            _b.occurrenceKey = identifier.occurrenceKey,
                            _b);
                        return [3 /*break*/, 4];
                    case 3:
                        mediaViewerSelectedItem = {
                            mediaItemType: 'external-image',
                            dataURI: identifier.dataURI,
                            name: identifier.name,
                        };
                        _c.label = 4;
                    case 4:
                        this.setState({
                            mediaViewerSelectedItem: mediaViewerSelectedItem,
                        });
                        _c.label = 5;
                    case 5: return [2 /*return*/];
                }
            });
        }); };
        _this.onInlinePlayerError = function () {
            _this.setState({
                isPlayingFile: false,
            });
        };
        _this.renderInlinePlayer = function () {
            var _a = _this.props, identifier = _a.identifier, mediaClient = _a.mediaClient, dimensions = _a.dimensions, selected = _a.selected;
            return (React.createElement(inlinePlayer_1.InlinePlayer, { mediaClient: mediaClient, dimensions: dimensions || {}, identifier: identifier, onError: _this.onInlinePlayerError, onClick: _this.onClick, selected: selected, ref: _this.cardRef }));
        };
        _this.onMediaViewerClose = function () {
            _this.setState({
                mediaViewerSelectedItem: undefined,
            });
        };
        _this.onDisplayImage = function () { return tslib_1.__awaiter(_this, void 0, void 0, function () {
            var identifier, payloadPart, _a;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        identifier = this.props.identifier;
                        if (!media_client_1.isFileIdentifier(identifier)) return [3 /*break*/, 2];
                        _a = {};
                        return [4 /*yield*/, identifier.id];
                    case 1:
                        payloadPart = (_a.fileId = _b.sent(),
                            _a.isUserCollection = identifier.collectionName === media_client_1.RECENTS_COLLECTION,
                            _a);
                        return [3 /*break*/, 3];
                    case 2:
                        payloadPart = {
                            fileId: identifier.dataURI,
                            isUserCollection: false,
                        };
                        _b.label = 3;
                    case 3:
                        media_client_1.globalMediaEventEmitter.emit('media-viewed', tslib_1.__assign({ viewingLevel: 'minimal' }, payloadPart));
                        return [2 /*return*/];
                }
            });
        }); };
        _this.renderMediaViewer = function () {
            var mediaViewerSelectedItem = _this.state.mediaViewerSelectedItem;
            var _a = _this.props, mediaClient = _a.mediaClient, identifier = _a.identifier, mediaViewerDataSource = _a.mediaViewerDataSource;
            if (!mediaViewerSelectedItem) {
                return;
            }
            var collectionName = media_client_1.isFileIdentifier(identifier)
                ? identifier.collectionName || ''
                : '';
            var dataSource = mediaViewerDataSource || {
                list: [],
            };
            return ReactDOM.createPortal(React.createElement(media_viewer_1.MediaViewer, { collectionName: collectionName, dataSource: dataSource, mediaClientConfig: mediaClient.config, selectedItem: mediaViewerSelectedItem, onClose: _this.onMediaViewerClose }), document.body);
        };
        _this.renderCard = function () {
            var _a = _this.props, isLazy = _a.isLazy, appearance = _a.appearance, resizeMode = _a.resizeMode, dimensions = _a.dimensions, selectable = _a.selectable, selected = _a.selected, onSelectChange = _a.onSelectChange, disableOverlay = _a.disableOverlay, alt = _a.alt;
            var _b = _this.state, progress = _b.progress, metadata = _b.metadata, dataURI = _b.dataURI, previewOrientation = _b.previewOrientation;
            var _c = _this, onRetry = _c.onRetry, onCardViewClick = _c.onCardViewClick, onDisplayImage = _c.onDisplayImage, actions = _c.actions, onMouseEnter = _c.onMouseEnter;
            var status = getCardStatus_1.getCardStatus(_this.state, _this.props);
            var card = (React.createElement(cardView_1.CardView, { status: status, metadata: metadata, dataURI: dataURI, alt: alt, appearance: appearance, resizeMode: resizeMode, dimensions: dimensions, actions: actions, selectable: selectable, selected: selected, onClick: onCardViewClick, onMouseEnter: onMouseEnter, onSelectChange: onSelectChange, disableOverlay: disableOverlay, progress: progress, onRetry: onRetry, onDisplayImage: onDisplayImage, previewOrientation: previewOrientation, ref: _this.cardRef }));
            return isLazy ? (React.createElement(lazyContent_1.LazyContent, { placeholder: card, onRender: _this.onCardInViewport }, card)) : (card);
        };
        _this.onCardInViewport = function () {
            _this.setState({ isCardVisible: true }, function () {
                var _a = _this.props, identifier = _a.identifier, mediaClient = _a.mediaClient;
                _this.subscribe(identifier, mediaClient);
            });
        };
        _this.onClick = function (event, analyticsEvent) {
            var onClick = _this.props.onClick;
            var metadata = _this.state.metadata;
            if (onClick) {
                var cardEvent = {
                    event: event,
                    mediaItemDetails: metadata,
                };
                onClick(cardEvent, analyticsEvent);
            }
        };
        _this.onMouseEnter = function (event) {
            var onMouseEnter = _this.props.onMouseEnter;
            var metadata = _this.state.metadata;
            if (onMouseEnter) {
                var cardEvent = {
                    event: event,
                    mediaItemDetails: metadata,
                };
                onMouseEnter(cardEvent);
            }
        };
        return _this;
    }
    CardBase.prototype.componentDidMount = function () {
        var _a = this.props, identifier = _a.identifier, mediaClient = _a.mediaClient;
        this.hasBeenMounted = true;
        this.subscribe(identifier, mediaClient);
        document.addEventListener('copy', this.onCopyListener);
    };
    CardBase.prototype.UNSAFE_componentWillReceiveProps = function (nextProps) {
        var _a = this.props, currentMediaClient = _a.mediaClient, currentIdentifier = _a.identifier, currentDimensions = _a.dimensions;
        var nextMediaClient = nextProps.mediaClient, nextIdenfifier = nextProps.identifier, nextDimensions = nextProps.dimensions;
        var isDifferent = media_client_1.isDifferentIdentifier(currentIdentifier, nextIdenfifier);
        if (currentMediaClient !== nextMediaClient ||
            isDifferent ||
            this.shouldRefetchImage(currentDimensions, nextDimensions)) {
            this.subscribe(nextIdenfifier, nextMediaClient);
        }
    };
    CardBase.prototype.componentWillUnmount = function () {
        this.hasBeenMounted = false;
        this.unsubscribe();
        this.releaseDataURI();
        document.removeEventListener('copy', this.onCopyListener);
    };
    CardBase.prototype.subscribe = function (identifier, mediaClient) {
        var isCardVisible = this.state.isCardVisible;
        if (!isCardVisible) {
            return;
        }
        if (identifier.mediaItemType === 'external-image') {
            this.subscribeExternalFile(identifier);
        }
        else {
            this.subscribeInternalFile(identifier, mediaClient);
        }
    };
    CardBase.prototype.subscribeExternalFile = function (identifier) {
        var createAnalyticsEvent = this.props.createAnalyticsEvent;
        var dataURI = identifier.dataURI, name = identifier.name, mediaItemType = identifier.mediaItemType;
        this.resolvedId = mediaItemType;
        analytics_1.createAndFireCustomMediaEvent({
            eventType: 'operational',
            action: 'commenced',
            actionSubject: 'mediaCardRender',
            actionSubjectId: mediaItemType,
        }, createAnalyticsEvent);
        this.setState({
            status: 'complete',
            dataURI: dataURI,
            metadata: {
                id: mediaItemType,
                name: name || dataURI,
                mediaType: 'image',
            },
        });
    };
    CardBase.prototype.subscribeInternalFile = function (identifier, mediaClient) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var id, collectionName, occurrenceKey, createAnalyticsEvent, _a;
            var _this = this;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        id = identifier.id, collectionName = identifier.collectionName, occurrenceKey = identifier.occurrenceKey;
                        createAnalyticsEvent = this.props.createAnalyticsEvent;
                        _a = this;
                        return [4 /*yield*/, id];
                    case 1:
                        _a.resolvedId = _b.sent();
                        analytics_1.createAndFireCustomMediaEvent({
                            eventType: 'operational',
                            action: 'commenced',
                            actionSubject: 'mediaCardRender',
                            actionSubjectId: this.resolvedId,
                        }, createAnalyticsEvent);
                        this.unsubscribe();
                        this.subscription = mediaClient.file
                            .getFileState(this.resolvedId, { collectionName: collectionName, occurrenceKey: occurrenceKey })
                            .subscribe({
                            next: function (fileState) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
                                var _a, status, progress, dataURI, _b, previewOrientation, _c, contextId, alt, metadata, _d, src, orientation_1, shouldFetchRemotePreview, _e, appearance, dimensions, resizeMode, alt_1, options, width, height, mode, blob, e_1;
                                return tslib_1.__generator(this, function (_f) {
                                    switch (_f.label) {
                                        case 0:
                                            _a = this.state, status = _a.status, progress = _a.progress, dataURI = _a.dataURI, _b = _a.previewOrientation, previewOrientation = _b === void 0 ? 1 : _b;
                                            _c = this.props, contextId = _c.contextId, alt = _c.alt;
                                            metadata = metadata_1.extendMetadata(fileState, this.state.metadata);
                                            if (!!dataURI) return [3 /*break*/, 2];
                                            return [4 /*yield*/, getDataURIFromFileState_1.getDataURIFromFileState(fileState)];
                                        case 1:
                                            _d = _f.sent(), src = _d.src, orientation_1 = _d.orientation;
                                            previewOrientation = orientation_1 || 1;
                                            dataURI = src;
                                            if (dataURI && contextId) {
                                                dataURI = media_client_1.addFileAttrsToUrl(dataURI, {
                                                    id: this.resolvedId,
                                                    collection: collectionName,
                                                    contextId: contextId,
                                                    mimeType: metadata.mimeType,
                                                    name: metadata.name,
                                                    size: metadata.size,
                                                    alt: alt,
                                                });
                                            }
                                            _f.label = 2;
                                        case 2:
                                            shouldFetchRemotePreview = !dataURI &&
                                                media_client_1.isImageRepresentationReady(fileState) &&
                                                metadata.mediaType &&
                                                media_client_1.isPreviewableType(metadata.mediaType);
                                            if (!shouldFetchRemotePreview) return [3 /*break*/, 6];
                                            _e = this.props, appearance = _e.appearance, dimensions = _e.dimensions, resizeMode = _e.resizeMode, alt_1 = _e.alt;
                                            options = {
                                                appearance: appearance,
                                                dimensions: dimensions,
                                                component: this,
                                            };
                                            width = getDataURIDimension_1.getDataURIDimension('width', options);
                                            height = getDataURIDimension_1.getDataURIDimension('height', options);
                                            _f.label = 3;
                                        case 3:
                                            _f.trys.push([3, 5, , 6]);
                                            mode = resizeMode === 'stretchy-fit' ? 'full-fit' : resizeMode;
                                            return [4 /*yield*/, mediaClient.getImage(this.resolvedId, {
                                                    collection: collectionName,
                                                    mode: mode,
                                                    height: height,
                                                    width: width,
                                                    allowAnimated: true,
                                                })];
                                        case 4:
                                            blob = _f.sent();
                                            dataURI = URL.createObjectURL(blob);
                                            if (contextId) {
                                                dataURI = media_client_1.addFileAttrsToUrl(dataURI, {
                                                    id: this.resolvedId,
                                                    collection: collectionName,
                                                    contextId: contextId,
                                                    mimeType: metadata.mimeType,
                                                    name: metadata.name,
                                                    size: metadata.size,
                                                    width: width,
                                                    height: height,
                                                    alt: alt_1,
                                                });
                                            }
                                            this.releaseDataURI();
                                            return [3 /*break*/, 6];
                                        case 5:
                                            e_1 = _f.sent();
                                            return [3 /*break*/, 6];
                                        case 6:
                                            status = getCardStatus_1.getCardStatusFromFileState(fileState, dataURI);
                                            progress =
                                                getCardStatus_1.getCardProgressFromFileState(fileState, dataURI) || progress;
                                            this.fireLoadingStatusAnalyticsEvent({
                                                resolvedId: this.resolvedId,
                                                status: status,
                                                fileState: fileState,
                                                metadata: metadata,
                                            });
                                            this.notifyStateChange({
                                                metadata: metadata,
                                                status: status,
                                                progress: progress,
                                                dataURI: dataURI,
                                                previewOrientation: previewOrientation,
                                            });
                                            return [2 /*return*/];
                                    }
                                });
                            }); },
                            error: function (error) {
                                _this.fireLoadingStatusAnalyticsEvent({
                                    resolvedId: _this.resolvedId,
                                    status: 'error',
                                    error: error,
                                });
                                _this.notifyStateChange({ error: error, status: 'error' });
                            },
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    Object.defineProperty(CardBase.prototype, "actions", {
        get: function () {
            var _this = this;
            var _a = this.props, _b = _a.actions, actions = _b === void 0 ? [] : _b, identifier = _a.identifier;
            var _c = this.state, status = _c.status, metadata = _c.metadata;
            if (media_client_1.isFileIdentifier(identifier) && status === 'failed-processing') {
                var downloadAction = {
                    label: 'Download',
                    icon: React.createElement(download_1.default, { label: "Download" }),
                    handler: function () { return tslib_1.__awaiter(_this, void 0, void 0, function () {
                        var _a, _b;
                        return tslib_1.__generator(this, function (_c) {
                            switch (_c.label) {
                                case 0:
                                    _b = (_a = this.props.mediaClient.file).downloadBinary;
                                    return [4 /*yield*/, identifier.id];
                                case 1: return [2 /*return*/, _b.apply(_a, [_c.sent(),
                                        metadata.name,
                                        identifier.collectionName])];
                            }
                        });
                    }); },
                };
                return tslib_1.__spread([downloadAction], actions);
            }
            else {
                return actions;
            }
        },
        enumerable: true,
        configurable: true
    });
    CardBase.prototype.renderContent = function () {
        var _a = this.state, isPlayingFile = _a.isPlayingFile, mediaViewerSelectedItem = _a.mediaViewerSelectedItem;
        var innerContent = isPlayingFile
            ? this.renderInlinePlayer()
            : this.renderCard();
        return this.context.intl ? (innerContent) : (React.createElement(react_intl_1.IntlProvider, { locale: "en" },
            React.createElement(React.Fragment, null,
                innerContent,
                mediaViewerSelectedItem ? this.renderMediaViewer() : null)));
    };
    CardBase.prototype.render = function () {
        var metadata = this.state.metadata;
        return (
        /*
            Second context provides data to be merged with any other context down in the tree and the event's payload.
            This data is usually not available at the time of firing the event, though it is needed to be sent to the backend.
         */
        React.createElement(analytics_next_1.AnalyticsContext, { data: analytics_1.getUIAnalyticsContext(this.resolvedId, metadata) }, this.renderContent()));
    };
    CardBase.defaultProps = {
        appearance: 'auto',
        resizeMode: 'crop',
        isLazy: true,
        disableOverlay: false,
    };
    return CardBase;
}(react_1.Component));
exports.CardBase = CardBase;
/*
  This Context provides data needed to build packageHierarchy in Atlaskit Analytics Listener and Media Analytics Listener.
  This data is not added to the final GASv3 payload
*/
exports.Card = analytics_next_1.withAnalyticsContext(analytics_1.getBaseAnalyticsContext())(analytics_next_1.withAnalyticsEvents()(CardBase));
//# sourceMappingURL=index.js.map