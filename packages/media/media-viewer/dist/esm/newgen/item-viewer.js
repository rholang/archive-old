import { __assign, __awaiter, __extends, __generator } from "tslib";
import * as React from 'react';
import { isExternalImageIdentifier, isFileIdentifier, } from '@atlaskit/media-client';
import { FormattedMessage } from 'react-intl';
import { messages } from '@atlaskit/media-ui';
import { Outcome } from './domain';
import { ImageViewer } from './viewers/image';
import { VideoViewer } from './viewers/video';
import { DocViewer } from './viewers/doc';
import { Spinner } from './loading';
import deepEqual from 'deep-equal';
import ErrorMessage, { createError, } from './error';
import { ErrorViewDownloadButton } from './download';
import { withAnalyticsEvents, } from '@atlaskit/analytics-next';
import { mediaFileCommencedEvent, mediaFileLoadSucceededEvent, mediaFileLoadFailedEvent, } from './analytics/item-viewer';
import { channel } from './analytics/index';
import { AudioViewer } from './viewers/audio';
import { InteractiveImg } from './viewers/image/interactive-img';
var initialState = {
    item: Outcome.pending(),
};
var ItemViewerBase = /** @class */ (function (_super) {
    __extends(ItemViewerBase, _super);
    function ItemViewerBase() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = initialState;
        _this.onViewerLoaded = function (payload) { return __awaiter(_this, void 0, void 0, function () {
            var item;
            var _this = this;
            return __generator(this, function (_a) {
                item = this.state.item;
                // the item.whenFailed case is handled in the "init" method
                item.whenSuccessful(function (file) { return __awaiter(_this, void 0, void 0, function () {
                    var identifier, id, _a;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                if (!(file.status === 'processed')) return [3 /*break*/, 5];
                                identifier = this.props.identifier;
                                if (!(payload.status === 'success')) return [3 /*break*/, 1];
                                this.fireAnalytics(mediaFileLoadSucceededEvent(file));
                                return [3 /*break*/, 5];
                            case 1:
                                if (!(payload.status === 'error' && isFileIdentifier(identifier))) return [3 /*break*/, 5];
                                if (!(typeof identifier.id === 'string')) return [3 /*break*/, 2];
                                _a = identifier.id;
                                return [3 /*break*/, 4];
                            case 2: return [4 /*yield*/, identifier.id];
                            case 3:
                                _a = _b.sent();
                                _b.label = 4;
                            case 4:
                                id = _a;
                                this.fireAnalytics(mediaFileLoadFailedEvent(id, payload.errorMessage || 'Viewer error', file));
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
                _this.fireAnalytics(mediaFileLoadSucceededEvent(fileState));
            }
        }; };
        _this.onError = function (fileState) { return function () {
            if (fileState.status === 'processed') {
                _this.fireAnalytics(mediaFileLoadFailedEvent(fileState.id, 'Playback failed', fileState));
            }
        }; };
        _this.fireAnalytics = function (payload) {
            var createAnalyticsEvent = _this.props.createAnalyticsEvent;
            if (createAnalyticsEvent) {
                var ev = createAnalyticsEvent(payload);
                ev.fire(channel);
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
        var collectionName = isFileIdentifier(identifier)
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
                return React.createElement(ImageViewer, __assign({ onLoad: this.onViewerLoaded }, viewerProps));
            case 'audio':
                return (React.createElement(AudioViewer, __assign({ showControls: showControls, onCanPlay: this.onCanPlay(item), onError: this.onError(item) }, viewerProps)));
            case 'video':
                return (React.createElement(VideoViewer, __assign({ showControls: showControls, onCanPlay: this.onCanPlay(item), onError: this.onError(item) }, viewerProps)));
            case 'doc':
                return React.createElement(DocViewer, __assign({}, viewerProps));
            default:
                return this.renderError('unsupported', item);
        }
    };
    ItemViewerBase.prototype.renderError = function (errorName, file) {
        if (file) {
            var err = createError(errorName, undefined, file);
            return (React.createElement(ErrorMessage, { error: err },
                React.createElement("p", null,
                    React.createElement(FormattedMessage, __assign({}, messages.try_downloading_file))),
                this.renderDownloadButton(file, err)));
        }
        else {
            return React.createElement(ErrorMessage, { error: createError(errorName) });
        }
    };
    ItemViewerBase.prototype.render = function () {
        var _this = this;
        var identifier = this.props.identifier;
        var item = this.state.item;
        if (isExternalImageIdentifier(identifier)) {
            var dataURI = identifier.dataURI;
            return React.createElement(InteractiveImg, { src: dataURI });
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
                        return React.createElement(Spinner, null);
                }
            },
            pending: function () { return React.createElement(Spinner, null); },
            failed: function (err) { return _this.renderError(err.errorName, item.data); },
        });
    };
    ItemViewerBase.prototype.renderDownloadButton = function (state, err) {
        var _a = this.props, mediaClient = _a.mediaClient, identifier = _a.identifier;
        var collectionName = isFileIdentifier(identifier)
            ? identifier.collectionName
            : undefined;
        return (React.createElement(ErrorViewDownloadButton, { state: state, mediaClient: mediaClient, err: err, collectionName: collectionName }));
    };
    ItemViewerBase.prototype.init = function (props) {
        return __awaiter(this, void 0, void 0, function () {
            var mediaClient, identifier, id, _a;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        mediaClient = props.mediaClient, identifier = props.identifier;
                        if (isExternalImageIdentifier(identifier)) {
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
                        this.fireAnalytics(mediaFileCommencedEvent(id));
                        this.subscription = mediaClient.file
                            .getFileState(id, {
                            collectionName: identifier.collectionName,
                        })
                            .subscribe({
                            next: function (file) {
                                _this.setState({
                                    item: Outcome.successful(file),
                                });
                            },
                            error: function (err) {
                                _this.setState({
                                    item: Outcome.failed(createError('metadataFailed', err)),
                                });
                                _this.fireAnalytics(mediaFileLoadFailedEvent(id, 'Metadata fetching failed'));
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
        return (!deepEqual(propsA.identifier, propsB.identifier) ||
            propsA.mediaClient !== propsB.mediaClient);
    };
    ItemViewerBase.prototype.release = function () {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    };
    return ItemViewerBase;
}(React.Component));
export { ItemViewerBase };
export var ItemViewer = withAnalyticsEvents()(ItemViewerBase);
//# sourceMappingURL=item-viewer.js.map