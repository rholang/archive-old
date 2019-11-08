"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var react_1 = require("react");
var adf_utils_1 = require("@atlaskit/adf-utils");
var media_card_1 = require("@atlaskit/media-card");
var media_client_1 = require("@atlaskit/media-client");
var editor_common_1 = require("@atlaskit/editor-common");
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var mediaIdentifierMap = new Map();
exports.getListOfIdentifiersFromDoc = function (doc) {
    if (!doc) {
        return [];
    }
    return adf_utils_1.filter(doc, function (node) { return node.type === 'media'; }).reduce(function (identifierList, mediaNode) {
        if (mediaNode.attrs) {
            var _a = mediaNode.attrs, type = _a.type, dataURI = _a.url, id = _a.id;
            if (type === 'file' && id) {
                identifierList.push({
                    mediaItemType: 'file',
                    id: id,
                });
            }
            else if (type === 'external' && dataURI) {
                identifierList.push({
                    mediaItemType: 'external-image',
                    dataURI: dataURI,
                    name: dataURI,
                });
            }
        }
        return identifierList;
    }, []);
};
var MediaCardInternal = /** @class */ (function (_super) {
    tslib_1.__extends(MediaCardInternal, _super);
    function MediaCardInternal() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {};
        _this.saveFileState = function (id, mediaClientConfig) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
            var collectionName, mediaClient, options, fileState;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        collectionName = this.props.collection;
                        mediaClient = media_client_1.getMediaClient(mediaClientConfig);
                        options = {
                            collectionName: collectionName,
                        };
                        return [4 /*yield*/, mediaClient.file.getCurrentState(id, options)];
                    case 1:
                        fileState = _a.sent();
                        this.setState({
                            fileState: fileState,
                        });
                        return [2 /*return*/];
                }
            });
        }); };
        _this.renderLoadingCard = function () {
            var cardDimensions = _this.props.cardDimensions;
            return React.createElement(media_card_1.CardLoading, { dimensions: cardDimensions });
        };
        /**
         * We want to call provided `eventHandlers.media.onClick` when it's provided,
         * but we also don't want to call it when it's a video and inline video player is enabled.
         * This is due to consumers normally process this onClick call by opening media viewer and
         * we don't want that to happened described above text.
         */
        _this.getOnCardClickCallback = function (isInlinePlayer) {
            var eventHandlers = _this.props.eventHandlers;
            if (eventHandlers && eventHandlers.media && eventHandlers.media.onClick) {
                return (function (result, analyticsEvent) {
                    var isVideo = result.mediaItemDetails &&
                        result.mediaItemDetails.mediaType === 'video';
                    var isVideoWithInlinePlayer = isInlinePlayer && isVideo;
                    if (!isVideoWithInlinePlayer &&
                        eventHandlers &&
                        eventHandlers.media &&
                        eventHandlers.media.onClick) {
                        eventHandlers.media.onClick(result, analyticsEvent);
                    }
                });
            }
            return undefined;
        };
        return _this;
    }
    MediaCardInternal.prototype.componentDidMount = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var _a, rendererContext, mediaProvider, contextIdentifierProvider, id, url, collectionName, _b, _c, mediaProviderObject, mediaClientConfig, nodeIsInCache;
            return tslib_1.__generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _a = this.props, rendererContext = _a.rendererContext, mediaProvider = _a.mediaProvider, contextIdentifierProvider = _a.contextIdentifierProvider, id = _a.id, url = _a.url, collectionName = _a.collection;
                        if (!mediaProvider) {
                            return [2 /*return*/];
                        }
                        if (!contextIdentifierProvider) return [3 /*break*/, 2];
                        _b = this.setState;
                        _c = {};
                        return [4 /*yield*/, contextIdentifierProvider];
                    case 1:
                        _b.apply(this, [(_c.contextIdentifierProvider = _d.sent(),
                                _c)]);
                        _d.label = 2;
                    case 2: return [4 /*yield*/, mediaProvider];
                    case 3:
                        mediaProviderObject = _d.sent();
                        if (!mediaProviderObject.viewMediaClientConfig) return [3 /*break*/, 4];
                        mediaClientConfig = mediaProviderObject.viewMediaClientConfig;
                        return [3 /*break*/, 7];
                    case 4:
                        if (!mediaProviderObject.viewContext) return [3 /*break*/, 6];
                        return [4 /*yield*/, mediaProviderObject.viewContext];
                    case 5:
                        mediaClientConfig = (_d.sent()).config;
                        return [3 /*break*/, 7];
                    case 6: return [2 /*return*/];
                    case 7:
                        nodeIsInCache = (id && mediaIdentifierMap.has(id)) ||
                            (url && mediaIdentifierMap.has(url));
                        if (rendererContext && rendererContext.adDoc && !nodeIsInCache) {
                            exports.getListOfIdentifiersFromDoc(rendererContext.adDoc).forEach(function (identifier) {
                                if (identifier.mediaItemType === 'file') {
                                    mediaIdentifierMap.set(identifier.id, tslib_1.__assign(tslib_1.__assign({}, identifier), { collectionName: collectionName }));
                                }
                                else if (identifier.mediaItemType === 'external-image') {
                                    mediaIdentifierMap.set(identifier.dataURI, identifier);
                                }
                            });
                        }
                        this.setState({
                            mediaClientConfig: mediaClientConfig,
                        });
                        if (id) {
                            this.saveFileState(id, mediaClientConfig);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    MediaCardInternal.prototype.UNSAFE_componentWillReceiveProps = function (newProps) {
        var mediaClientConfig = this.state.mediaClientConfig;
        var newId = newProps.id;
        if (mediaClientConfig && newId && newId !== this.props.id) {
            this.saveFileState(newId, mediaClientConfig);
        }
    };
    MediaCardInternal.prototype.componentWillUnmount = function () {
        var _a = this.props, id = _a.id, dataURI = _a.url;
        if (id) {
            mediaIdentifierMap.delete(id);
        }
        else if (dataURI) {
            mediaIdentifierMap.delete(dataURI);
        }
    };
    MediaCardInternal.prototype.renderExternal = function (shouldOpenMediaViewer) {
        var mediaClientConfig = this.state.mediaClientConfig;
        var _a = this.props, cardDimensions = _a.cardDimensions, resizeMode = _a.resizeMode, appearance = _a.appearance, url = _a.url, imageStatus = _a.imageStatus, disableOverlay = _a.disableOverlay;
        if (imageStatus === 'loading' || !url) {
            return this.renderLoadingCard();
        }
        var identifier = {
            dataURI: url,
            name: url,
            mediaItemType: 'external-image',
        };
        return (React.createElement(media_card_1.Card
        // context is not really used when the type is external and we want to render the component asap
        , { 
            // context is not really used when the type is external and we want to render the component asap
            mediaClientConfig: mediaClientConfig, identifier: identifier, dimensions: cardDimensions, appearance: appearance, resizeMode: resizeMode, disableOverlay: disableOverlay, shouldOpenMediaViewer: shouldOpenMediaViewer, mediaViewerDataSource: {
                list: Array.from(mediaIdentifierMap.values()),
            } }));
    };
    MediaCardInternal.prototype.render = function () {
        var _a = this.state, contextIdentifierProvider = _a.contextIdentifierProvider, mediaClientConfig = _a.mediaClientConfig, fileState = _a.fileState;
        var _b = this.props, id = _b.id, type = _b.type, collection = _b.collection, occurrenceKey = _b.occurrenceKey, cardDimensions = _b.cardDimensions, resizeMode = _b.resizeMode, rendererAppearance = _b.rendererAppearance, disableOverlay = _b.disableOverlay, useInlinePlayer = _b.useInlinePlayer, forceOpenMediaViewer = _b.shouldOpenMediaViewer;
        var isMobile = rendererAppearance === 'mobile';
        var shouldPlayInline = useInlinePlayer !== undefined ? useInlinePlayer : true;
        var isInlinePlayer = isMobile ? false : shouldPlayInline;
        var onCardClick = this.getOnCardClickCallback(isInlinePlayer);
        var shouldOpenMediaViewer = typeof forceOpenMediaViewer === 'boolean'
            ? forceOpenMediaViewer
            : !isMobile && !onCardClick;
        if (type === 'external') {
            return this.renderExternal(shouldOpenMediaViewer);
        }
        if (type === 'link') {
            return null;
        }
        if (!mediaClientConfig || !id) {
            return this.renderLoadingCard();
        }
        if (!id || type !== 'file') {
            return React.createElement(media_card_1.CardError, { dimensions: cardDimensions });
        }
        var contextId = contextIdentifierProvider && contextIdentifierProvider.objectId;
        var identifier = {
            id: id,
            mediaItemType: 'file',
            collectionName: collection,
            occurrenceKey: occurrenceKey,
        };
        return (React.createElement(exports.CardWrapper, tslib_1.__assign({}, exports.getClipboardAttrs({
            id: id,
            collection: collection,
            contextIdentifierProvider: contextIdentifierProvider,
            cardDimensions: cardDimensions,
            fileState: fileState,
        })),
            React.createElement(media_card_1.Card, { identifier: identifier, contextId: contextId, mediaClientConfig: mediaClientConfig, dimensions: cardDimensions, onClick: onCardClick, resizeMode: resizeMode, isLazy: !isMobile, disableOverlay: disableOverlay, useInlinePlayer: isInlinePlayer, shouldOpenMediaViewer: shouldOpenMediaViewer, mediaViewerDataSource: {
                    list: Array.from(mediaIdentifierMap.values()),
                } })));
    };
    return MediaCardInternal;
}(react_1.Component));
exports.MediaCardInternal = MediaCardInternal;
exports.CardWrapper = styled_components_1.default.div(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject([""], [""])));
// Needed for copy & paste
exports.getClipboardAttrs = function (_a) {
    var id = _a.id, collection = _a.collection, contextIdentifierProvider = _a.contextIdentifierProvider, cardDimensions = _a.cardDimensions, fileState = _a.fileState;
    var contextId = contextIdentifierProvider && contextIdentifierProvider.objectId;
    var width = cardDimensions &&
        cardDimensions.width &&
        parseInt("" + cardDimensions.width);
    var height = cardDimensions &&
        cardDimensions.height &&
        parseInt("" + cardDimensions.height);
    var fileName = 'file'; // default name is needed for Confluence
    var fileSize = 1;
    var fileMimeType = '';
    if (fileState && fileState.status !== 'error') {
        fileSize = fileState.size;
        fileName = fileState.name;
        fileMimeType = fileState.mimeType;
    }
    return {
        'data-context-id': contextId,
        'data-type': 'file',
        'data-node-type': 'media',
        'data-width': width,
        'data-height': height,
        'data-id': id,
        'data-collection': collection,
        'data-file-name': fileName,
        'data-file-size': fileSize,
        'data-file-mime-type': fileMimeType,
    };
};
exports.MediaCard = editor_common_1.withImageLoader(MediaCardInternal);
var templateObject_1;
//# sourceMappingURL=MediaCard.js.map