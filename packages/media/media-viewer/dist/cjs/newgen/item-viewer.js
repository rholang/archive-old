"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var media_client_1 = require("@atlaskit/media-client");
var react_intl_1 = require("react-intl");
var media_ui_1 = require("@atlaskit/media-ui");
var domain_1 = require("./domain");
var image_1 = require("./viewers/image");
var video_1 = require("./viewers/video");
var doc_1 = require("./viewers/doc");
var loading_1 = require("./loading");
var deep_equal_1 = tslib_1.__importDefault(require("deep-equal"));
var error_1 = tslib_1.__importStar(require("./error"));
var download_1 = require("./download");
var analytics_next_1 = require("@atlaskit/analytics-next");
var item_viewer_1 = require("./analytics/item-viewer");
var index_1 = require("./analytics/index");
var audio_1 = require("./viewers/audio");
var interactive_img_1 = require("./viewers/image/interactive-img");
var initialState = {
    item: domain_1.Outcome.pending(),
};
var ItemViewerBase = /** @class */ (function (_super) {
    tslib_1.__extends(ItemViewerBase, _super);
    function ItemViewerBase() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = initialState;
        _this.onViewerLoaded = function (payload) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
            var item;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                item = this.state.item;
                // the item.whenFailed case is handled in the "init" method
                item.whenSuccessful(function (file) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
                    var identifier, id, _a;
                    return tslib_1.__generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                if (!(file.status === 'processed')) return [3 /*break*/, 5];
                                identifier = this.props.identifier;
                                if (!(payload.status === 'success')) return [3 /*break*/, 1];
                                this.fireAnalytics(item_viewer_1.mediaFileLoadSucceededEvent(file));
                                return [3 /*break*/, 5];
                            case 1:
                                if (!(payload.status === 'error' && media_client_1.isFileIdentifier(identifier))) return [3 /*break*/, 5];
                                if (!(typeof identifier.id === 'string')) return [3 /*break*/, 2];
                                _a = identifier.id;
                                return [3 /*break*/, 4];
                            case 2: return [4 /*yield*/, identifier.id];
                            case 3:
                                _a = _b.sent();
                                _b.label = 4;
                            case 4:
                                id = _a;
                                this.fireAnalytics(item_viewer_1.mediaFileLoadFailedEvent(id, payload.errorMessage || 'Viewer error', file));
                                _b.label = 5;
                            case 5: return [2 /*return*/];
                        }
                    });
                }); });
                return [2 /*return*/];
            });
        }); };
        _this.onCanPlay = function (fileState) { return function () {
            if (fileState.status === 'processed') {
                _this.fireAnalytics(item_viewer_1.mediaFileLoadSucceededEvent(fileState));
            }
        }; };
        _this.onError = function (fileState) { return function () {
            if (fileState.status === 'processed') {
                _this.fireAnalytics(item_viewer_1.mediaFileLoadFailedEvent(fileState.id, 'Playback failed', fileState));
            }
        }; };
        _this.fireAnalytics = function (payload) {
            var createAnalyticsEvent = _this.props.createAnalyticsEvent;
            if (createAnalyticsEvent) {
                var ev = createAnalyticsEvent(payload);
                ev.fire(index_1.channel);
            }
        };
        return _this;
    }
    ItemViewerBase.prototype.UNSAFE_componentWillReceiveProps = function (nextProps) {
        if (this.needsReset(this.props, nextProps)) {
            this.release();
            this.setState(initialState);
        }
    };
    ItemViewerBase.prototype.componentDidUpdate = function (oldProps) {
        if (this.needsReset(oldProps, this.props)) {
            this.init(this.props);
        }
    };
    ItemViewerBase.prototype.componentWillUnmount = function () {
        this.release();
    };
    ItemViewerBase.prototype.componentDidMount = function () {
        this.init(this.props);
    };
    ItemViewerBase.prototype.renderFileState = function (item) {
        if (item.status === 'error') {
            return this.renderError('previewFailed', item);
        }
        var _a = this.props, mediaClient = _a.mediaClient, identifier = _a.identifier, showControls = _a.showControls, onClose = _a.onClose, previewCount = _a.previewCount;
        var collectionName = media_client_1.isFileIdentifier(identifier)
            ? identifier.collectionName
            : undefined;
        var viewerProps = {
            mediaClient: mediaClient,
            item: item,
            collectionName: collectionName,
            onClose: onClose,
            previewCount: previewCount,
        };
        switch (item.mediaType) {
            case 'image':
                return React.createElement(image_1.ImageViewer, tslib_1.__assign({ onLoad: this.onViewerLoaded }, viewerProps));
            case 'audio':
                return (React.createElement(audio_1.AudioViewer, tslib_1.__assign({ showControls: showControls, onCanPlay: this.onCanPlay(item), onError: this.onError(item) }, viewerProps)));
            case 'video':
                return (React.createElement(video_1.VideoViewer, tslib_1.__assign({ showControls: showControls, onCanPlay: this.onCanPlay(item), onError: this.onError(item) }, viewerProps)));
            case 'doc':
                return React.createElement(doc_1.DocViewer, tslib_1.__assign({}, viewerProps));
            default:
                return this.renderError('unsupported', item);
        }
    };
    ItemViewerBase.prototype.renderError = function (errorName, file) {
        if (file) {
            var err = error_1.createError(errorName, undefined, file);
            return (React.createElement(error_1.default, { error: err },
                React.createElement("p", null,
                    React.createElement(react_intl_1.FormattedMessage, tslib_1.__assign({}, media_ui_1.messages.try_downloading_file))),
                this.renderDownloadButton(file, err)));
        }
        else {
            return React.createElement(error_1.default, { error: error_1.createError(errorName) });
        }
    };
    ItemViewerBase.prototype.render = function () {
        var _this = this;
        var identifier = this.props.identifier;
        var item = this.state.item;
        if (media_client_1.isExternalImageIdentifier(identifier)) {
            var dataURI = identifier.dataURI;
            return React.createElement(interactive_img_1.InteractiveImg, { src: dataURI });
        }
        return item.match({
            successful: function (item) {
                switch (item.status) {
                    case 'processed':
                    case 'uploading':
                    case 'processing':
                        return _this.renderFileState(item);
                    case 'failed-processing':
                        return _this.renderError('failedProcessing', item);
                    case 'error':
                        return _this.renderError('previewFailed', item);
                    default:
                        return React.createElement(loading_1.Spinner, null);
                }
            },
            pending: function () { return React.createElement(loading_1.Spinner, null); },
            failed: function (err) { return _this.renderError(err.errorName, item.data); },
        });
    };
    ItemViewerBase.prototype.renderDownloadButton = function (state, err) {
        var _a = this.props, mediaClient = _a.mediaClient, identifier = _a.identifier;
        var collectionName = media_client_1.isFileIdentifier(identifier)
            ? identifier.collectionName
            : undefined;
        return (React.createElement(download_1.ErrorViewDownloadButton, { state: state, mediaClient: mediaClient, err: err, collectionName: collectionName }));
    };
    ItemViewerBase.prototype.init = function (props) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var mediaClient, identifier, id, _a;
            var _this = this;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        mediaClient = props.mediaClient, identifier = props.identifier;
                        if (media_client_1.isExternalImageIdentifier(identifier)) {
                            return [2 /*return*/];
                        }
                        if (!(typeof identifier.id === 'string')) return [3 /*break*/, 1];
                        _a = identifier.id;
                        return [3 /*break*/, 3];
                    case 1: return [4 /*yield*/, identifier.id];
                    case 2:
                        _a = _b.sent();
                        _b.label = 3;
                    case 3:
                        id = _a;
                        this.fireAnalytics(item_viewer_1.mediaFileCommencedEvent(id));
                        this.subscription = mediaClient.file
                            .getFileState(id, {
                            collectionName: identifier.collectionName,
                        })
                            .subscribe({
                            next: function (file) {
                                _this.setState({
                                    item: domain_1.Outcome.successful(file),
                                });
                            },
                            error: function (err) {
                                _this.setState({
                                    item: domain_1.Outcome.failed(error_1.createError('metadataFailed', err)),
                                });
                                _this.fireAnalytics(item_viewer_1.mediaFileLoadFailedEvent(id, 'Metadata fetching failed'));
                            },
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    // It's possible that a different identifier or mediaClient was passed.
    // We therefore need to reset Media Viewer.
    ItemViewerBase.prototype.needsReset = function (propsA, propsB) {
        return (!deep_equal_1.default(propsA.identifier, propsB.identifier) ||
            propsA.mediaClient !== propsB.mediaClient);
    };
    ItemViewerBase.prototype.release = function () {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    };
    return ItemViewerBase;
}(React.Component));
exports.ItemViewerBase = ItemViewerBase;
exports.ItemViewer = analytics_next_1.withAnalyticsEvents()(ItemViewerBase);
//# sourceMappingURL=item-viewer.js.map