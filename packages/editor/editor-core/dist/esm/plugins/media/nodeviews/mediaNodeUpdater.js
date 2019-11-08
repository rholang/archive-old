import { __awaiter, __generator } from "tslib";
import uuidV4 from 'uuid/v4';
import { updateMediaNodeAttrs, replaceExternalMedia, updateAllMediaNodesAttrs, } from '../commands';
import { DEFAULT_IMAGE_HEIGHT, DEFAULT_IMAGE_WIDTH, } from '@atlaskit/editor-common';
import { getViewMediaClientConfigFromMediaProvider, getUploadMediaClientConfigFromMediaProvider, } from '../utils/media-common';
import { getMediaClient, isMediaBlobUrl, getAttrsFromUrl, } from '@atlaskit/media-client';
import { ACTION, ACTION_SUBJECT, EVENT_TYPE, } from '../../analytics';
var MediaNodeUpdater = /** @class */ (function () {
    function MediaNodeUpdater(props) {
        var _this = this;
        // Updates the node with contextId if it doesn't have one already
        // TODO [MS-2258]: remove updateContextId in order to only use updateFileAttrs
        this.updateContextId = function () { return __awaiter(_this, void 0, void 0, function () {
            var attrs, id, objectId;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        attrs = this.getAttrs();
                        if (!attrs || attrs.type !== 'file') {
                            return [2 /*return*/];
                        }
                        id = attrs.id;
                        return [4 /*yield*/, this.getObjectId()];
                    case 1:
                        objectId = _a.sent();
                        updateAllMediaNodesAttrs(id, {
                            __contextId: objectId,
                        }, this.props.isMediaSingle)(this.props.view.state, this.props.view.dispatch);
                        return [2 /*return*/];
                }
            });
        }); };
        this.hasFileAttributesDefined = function () {
            var attrs = _this.getAttrs();
            return (attrs &&
                attrs.type === 'file' &&
                attrs.__fileName &&
                attrs.__fileMimeType &&
                attrs.__fileSize &&
                attrs.__contextId);
        };
        this.updateFileAttrs = function () { return __awaiter(_this, void 0, void 0, function () {
            var attrs, mediaProvider, mediaClientConfig, mediaClient, options, fileState, contextId, _a, name, mimeType, size, newAttrs;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        attrs = this.getAttrs();
                        return [4 /*yield*/, this.props.mediaProvider];
                    case 1:
                        mediaProvider = _b.sent();
                        if (!mediaProvider ||
                            !mediaProvider.uploadParams ||
                            !attrs ||
                            attrs.type !== 'file' ||
                            this.hasFileAttributesDefined()) {
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, getViewMediaClientConfigFromMediaProvider(mediaProvider)];
                    case 2:
                        mediaClientConfig = _b.sent();
                        mediaClient = getMediaClient(mediaClientConfig);
                        options = {
                            collectionName: attrs.collection,
                        };
                        return [4 /*yield*/, mediaClient.file.getCurrentState(attrs.id, options)];
                    case 3:
                        fileState = _b.sent();
                        if (fileState.status === 'error') {
                            return [2 /*return*/];
                        }
                        _a = this.getCurrentContextId();
                        if (_a) return [3 /*break*/, 5];
                        return [4 /*yield*/, this.getObjectId()];
                    case 4:
                        _a = (_b.sent());
                        _b.label = 5;
                    case 5:
                        contextId = _a;
                        name = fileState.name, mimeType = fileState.mimeType, size = fileState.size;
                        newAttrs = {
                            __fileName: name,
                            __fileMimeType: mimeType,
                            __fileSize: size,
                            __contextId: contextId,
                        };
                        // TODO [MS-2258]: we should pass this.props.isMediaSingle and remove hardcoded "true"
                        updateAllMediaNodesAttrs(attrs.id, newAttrs, true)(this.props.view.state, this.props.view.dispatch);
                        return [2 /*return*/];
                }
            });
        }); };
        this.getAttrs = function () {
            var attrs = _this.props.node.attrs;
            if (attrs) {
                return attrs;
            }
            return undefined;
        };
        this.getObjectId = function () { return __awaiter(_this, void 0, void 0, function () {
            var contextIdentifierProvider;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.props
                            .contextIdentifierProvider];
                    case 1:
                        contextIdentifierProvider = _a.sent();
                        return [2 /*return*/, contextIdentifierProvider && contextIdentifierProvider.objectId];
                }
            });
        }); };
        this.uploadExternalMedia = function (pos) { return __awaiter(_this, void 0, void 0, function () {
            var node, mediaProvider, uploadMediaClientConfig, mediaClient, collection, uploader, uploadableFileUpfrontIds, dimensions, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        node = this.props.node;
                        return [4 /*yield*/, this.props.mediaProvider];
                    case 1:
                        mediaProvider = _a.sent();
                        if (!(node && mediaProvider)) return [3 /*break*/, 6];
                        return [4 /*yield*/, getUploadMediaClientConfigFromMediaProvider(mediaProvider)];
                    case 2:
                        uploadMediaClientConfig = _a.sent();
                        if (!uploadMediaClientConfig || !node.attrs.url) {
                            return [2 /*return*/];
                        }
                        mediaClient = getMediaClient(uploadMediaClientConfig);
                        collection = mediaProvider.uploadParams && mediaProvider.uploadParams.collection;
                        _a.label = 3;
                    case 3:
                        _a.trys.push([3, 5, , 6]);
                        return [4 /*yield*/, mediaClient.file.uploadExternal(node.attrs.url, collection)];
                    case 4:
                        uploader = _a.sent();
                        uploadableFileUpfrontIds = uploader.uploadableFileUpfrontIds, dimensions = uploader.dimensions;
                        replaceExternalMedia(pos + 1, {
                            id: uploadableFileUpfrontIds.id,
                            collection: collection,
                            height: dimensions.height,
                            width: dimensions.width,
                            occurrenceKey: uploadableFileUpfrontIds.occurrenceKey,
                        })(this.props.view.state, this.props.view.dispatch);
                        return [3 /*break*/, 6];
                    case 5:
                        e_1 = _a.sent();
                        //keep it as external media
                        if (this.props.dispatchAnalyticsEvent) {
                            this.props.dispatchAnalyticsEvent({
                                action: ACTION.UPLOAD_EXTERNAL_FAIL,
                                actionSubject: ACTION_SUBJECT.EDITOR,
                                eventType: EVENT_TYPE.OPERATIONAL,
                            });
                        }
                        return [3 /*break*/, 6];
                    case 6: return [2 /*return*/];
                }
            });
        }); };
        this.getCurrentContextId = function () {
            var attrs = _this.getAttrs();
            if (!attrs || attrs.type !== 'file') {
                return undefined;
            }
            return attrs.__contextId;
        };
        this.updateDimensions = function (dimensions) {
            updateAllMediaNodesAttrs(dimensions.id, {
                height: dimensions.height,
                width: dimensions.width,
            }, true)(_this.props.view.state, _this.props.view.dispatch);
        };
        this.isNodeFromDifferentCollection = function () { return __awaiter(_this, void 0, void 0, function () {
            var mediaProvider, currentCollectionName, attrs, nodeCollection, __contextId, contextId, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.props.mediaProvider];
                    case 1:
                        mediaProvider = _b.sent();
                        if (!mediaProvider || !mediaProvider.uploadParams) {
                            return [2 /*return*/, false];
                        }
                        currentCollectionName = mediaProvider.uploadParams.collection;
                        attrs = this.getAttrs();
                        if (!attrs || attrs.type !== 'file') {
                            return [2 /*return*/, false];
                        }
                        nodeCollection = attrs.collection, __contextId = attrs.__contextId;
                        _a = __contextId;
                        if (_a) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.getObjectId()];
                    case 2:
                        _a = (_b.sent());
                        _b.label = 3;
                    case 3:
                        contextId = _a;
                        if (contextId && currentCollectionName !== nodeCollection) {
                            return [2 /*return*/, true];
                        }
                        return [2 /*return*/, false];
                }
            });
        }); };
        this.copyNodeFromBlobUrl = function (pos) { return __awaiter(_this, void 0, void 0, function () {
            var attrs, url, mediaAttrs, mediaProvider, currentCollectionName, contextId, id, collection, height, width, mimeType, name, size, uploadMediaClientConfig, mediaClient, auth, source, destination, mediaFile;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        attrs = this.getAttrs();
                        if (!attrs || attrs.type !== 'external') {
                            return [2 /*return*/];
                        }
                        url = attrs.url;
                        mediaAttrs = getAttrsFromUrl(url);
                        if (!mediaAttrs) {
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, this.props.mediaProvider];
                    case 1:
                        mediaProvider = _a.sent();
                        if (!mediaProvider || !mediaProvider.uploadParams) {
                            return [2 /*return*/];
                        }
                        currentCollectionName = mediaProvider.uploadParams.collection;
                        contextId = mediaAttrs.contextId, id = mediaAttrs.id, collection = mediaAttrs.collection, height = mediaAttrs.height, width = mediaAttrs.width, mimeType = mediaAttrs.mimeType, name = mediaAttrs.name, size = mediaAttrs.size;
                        return [4 /*yield*/, getUploadMediaClientConfigFromMediaProvider(mediaProvider)];
                    case 2:
                        uploadMediaClientConfig = _a.sent();
                        if (!uploadMediaClientConfig ||
                            !uploadMediaClientConfig.getAuthFromContext) {
                            return [2 /*return*/];
                        }
                        mediaClient = getMediaClient(uploadMediaClientConfig);
                        return [4 /*yield*/, uploadMediaClientConfig.getAuthFromContext(contextId)];
                    case 3:
                        auth = _a.sent();
                        source = {
                            id: id,
                            collection: collection,
                            authProvider: function () { return Promise.resolve(auth); },
                        };
                        destination = {
                            collection: currentCollectionName,
                            authProvider: uploadMediaClientConfig.authProvider,
                            occurrenceKey: uuidV4(),
                        };
                        return [4 /*yield*/, mediaClient.file.copyFile(source, destination)];
                    case 4:
                        mediaFile = _a.sent();
                        replaceExternalMedia(pos + 1, {
                            id: mediaFile.id,
                            collection: currentCollectionName,
                            height: height,
                            width: width,
                            __fileName: name,
                            __fileMimeType: mimeType,
                            __fileSize: size,
                        })(this.props.view.state, this.props.view.dispatch);
                        return [2 /*return*/];
                }
            });
        }); };
        this.copyNode = function () { return __awaiter(_this, void 0, void 0, function () {
            var mediaProvider, _a, isMediaSingle, view, attrs, currentCollectionName, contextId, _b, uploadMediaClientConfig, mediaClient, auth_1, id, collection, source, destination, mediaFile;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, this.props.mediaProvider];
                    case 1:
                        mediaProvider = _c.sent();
                        _a = this.props, isMediaSingle = _a.isMediaSingle, view = _a.view;
                        attrs = this.getAttrs();
                        if (!mediaProvider ||
                            !mediaProvider.uploadParams ||
                            !attrs ||
                            attrs.type !== 'file') {
                            return [2 /*return*/];
                        }
                        currentCollectionName = mediaProvider.uploadParams.collection;
                        _b = this.getCurrentContextId();
                        if (_b) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.getObjectId()];
                    case 2:
                        _b = (_c.sent());
                        _c.label = 3;
                    case 3:
                        contextId = _b;
                        return [4 /*yield*/, getUploadMediaClientConfigFromMediaProvider(mediaProvider)];
                    case 4:
                        uploadMediaClientConfig = _c.sent();
                        if (!uploadMediaClientConfig) {
                            return [2 /*return*/];
                        }
                        mediaClient = getMediaClient(uploadMediaClientConfig);
                        if (!(uploadMediaClientConfig.getAuthFromContext && contextId)) return [3 /*break*/, 7];
                        return [4 /*yield*/, uploadMediaClientConfig.getAuthFromContext(contextId)];
                    case 5:
                        auth_1 = _c.sent();
                        id = attrs.id, collection = attrs.collection;
                        source = {
                            id: id,
                            collection: collection,
                            authProvider: function () { return Promise.resolve(auth_1); },
                        };
                        destination = {
                            collection: currentCollectionName,
                            authProvider: uploadMediaClientConfig.authProvider,
                            occurrenceKey: uuidV4(),
                        };
                        return [4 /*yield*/, mediaClient.file.copyFile(source, destination)];
                    case 6:
                        mediaFile = _c.sent();
                        updateMediaNodeAttrs(source.id, {
                            id: mediaFile.id,
                            collection: currentCollectionName,
                        }, isMediaSingle)(view.state, view.dispatch);
                        _c.label = 7;
                    case 7: return [2 /*return*/];
                }
            });
        }); };
        this.props = props;
    }
    MediaNodeUpdater.prototype.isMediaBlobUrl = function () {
        var attrs = this.getAttrs();
        return !!(attrs && attrs.type === 'external' && isMediaBlobUrl(attrs.url));
    };
    MediaNodeUpdater.prototype.getRemoteDimensions = function () {
        return __awaiter(this, void 0, void 0, function () {
            var mediaProvider, mediaPluginOptions, attrs, height, width, id, collection, viewMediaClientConfig, mediaClient, state;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.props.mediaProvider];
                    case 1:
                        mediaProvider = _a.sent();
                        mediaPluginOptions = this.props.mediaPluginOptions;
                        attrs = this.getAttrs();
                        if (!mediaProvider || !attrs) {
                            return [2 /*return*/, false];
                        }
                        height = attrs.height, width = attrs.width;
                        if (attrs.type === 'external' || !attrs.id) {
                            return [2 /*return*/, false];
                        }
                        id = attrs.id, collection = attrs.collection;
                        if (height && width) {
                            return [2 /*return*/, false];
                        }
                        // can't fetch remote dimensions on mobile, so we'll default them
                        if (mediaPluginOptions && !mediaPluginOptions.allowRemoteDimensionsFetch) {
                            return [2 /*return*/, {
                                    id: id,
                                    height: DEFAULT_IMAGE_HEIGHT,
                                    width: DEFAULT_IMAGE_WIDTH,
                                }];
                        }
                        return [4 /*yield*/, getViewMediaClientConfigFromMediaProvider(mediaProvider)];
                    case 2:
                        viewMediaClientConfig = _a.sent();
                        mediaClient = getMediaClient(viewMediaClientConfig);
                        return [4 /*yield*/, mediaClient.getImageMetadata(id, {
                                collection: collection,
                            })];
                    case 3:
                        state = _a.sent();
                        if (!state || !state.original) {
                            return [2 /*return*/, false];
                        }
                        return [2 /*return*/, {
                                id: id,
                                height: state.original.height || DEFAULT_IMAGE_HEIGHT,
                                width: state.original.width || DEFAULT_IMAGE_WIDTH,
                            }];
                }
            });
        });
    };
    return MediaNodeUpdater;
}());
export { MediaNodeUpdater };
//# sourceMappingURL=mediaNodeUpdater.js.map