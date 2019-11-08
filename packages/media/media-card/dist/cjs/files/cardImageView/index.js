"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var react_1 = require("react");
var media_ui_1 = require("@atlaskit/media-ui");
var vid_play_1 = tslib_1.__importDefault(require("@atlaskit/icon/glyph/vid-play"));
var cardOverlay_1 = require("./cardOverlay");
var styled_1 = require("./styled");
var isLoadingImage_1 = require("../../utils/isLoadingImage");
var cardLoading_1 = require("../../utils/lightCards/cardLoading");
var shouldDisplayImageThumbnail_1 = require("../../utils/shouldDisplayImageThumbnail");
var progressBar_1 = require("../../utils/progressBar");
var cardActions_1 = tslib_1.__importDefault(require("../../utils/cardActions"));
var analytics_next_1 = require("@atlaskit/analytics-next");
var analytics_1 = require("../../utils/analytics");
var FileCardImageViewBase = /** @class */ (function (_super) {
    tslib_1.__extends(FileCardImageViewBase, _super);
    function FileCardImageViewBase() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.wasThumbnailDisplayed = false;
        _this.renderCardContents = function () {
            var status = _this.props.status;
            if (status === 'error') {
                return _this.renderErrorContents();
            }
            else if (status === 'failed-processing') {
                return _this.renderFailedContents();
            }
            if (_this.isImageNotReadyForDisplay) {
                return _this.renderLoadingContents();
            }
            return _this.renderSuccessCardContents();
        };
        _this.renderLoadingContents = function () {
            return (React.createElement("div", { className: "wrapper" },
                React.createElement("div", { className: "img-wrapper" },
                    React.createElement(cardLoading_1.CardLoading, null))));
        };
        _this.renderErrorContents = function () {
            var _a = _this.props, error = _a.error, mediaName = _a.mediaName, mediaType = _a.mediaType, onRetry = _a.onRetry, actions = _a.actions, fileSize = _a.fileSize;
            return (React.createElement(React.Fragment, null,
                React.createElement("div", { className: "wrapper" }),
                React.createElement(cardOverlay_1.CardOverlay, { persistent: true, mediaName: mediaName, mediaType: mediaType, error: error, onRetry: onRetry, actions: actions, subtitle: fileSize })));
        };
        _this.renderFailedContents = function () {
            var _a = _this.props, mediaName = _a.mediaName, mediaType = _a.mediaType, actions = _a.actions, fileSize = _a.fileSize;
            return (React.createElement(React.Fragment, null,
                React.createElement("div", { className: "wrapper" }),
                React.createElement(cardOverlay_1.CardOverlay, { noHover: true, persistent: true, mediaName: mediaName, mediaType: mediaType, actions: actions, subtitle: fileSize })));
        };
        _this.renderUploadingCardOverlay = function () {
            var _a = _this.props, mediaType = _a.mediaType, dataURI = _a.dataURI, selectable = _a.selectable, selected = _a.selected;
            var isPersistent = mediaType === 'doc' || !dataURI;
            return (React.createElement(cardOverlay_1.CardOverlay, { persistent: isPersistent, selectable: selectable, selected: selected }));
        };
        _this.renderPlayButton = function () {
            var mediaType = _this.props.mediaType;
            if (mediaType !== 'video') {
                return null;
            }
            return (React.createElement(styled_1.PlayIconWrapper, null,
                React.createElement(vid_play_1.default, { label: "play", size: "large" })));
        };
        _this.onImageLoad = function () {
            _this.fireLoadingStatusAnalyticsEvent('succeeded');
        };
        _this.onImageError = function () {
            _this.fireLoadingStatusAnalyticsEvent('failed');
        };
        _this.renderMediaImage = function () {
            var _a = _this.props, dataURI = _a.dataURI, mediaType = _a.mediaType, previewOrientation = _a.previewOrientation, onDisplayImage = _a.onDisplayImage, alt = _a.alt;
            if (!shouldDisplayImageThumbnail_1.shouldDisplayImageThumbnail(dataURI, mediaType)) {
                _this.fireLoadingStatusAnalyticsEvent('succeeded');
                return null;
            }
            if (!_this.wasThumbnailDisplayed &&
                onDisplayImage &&
                mediaType === 'image') {
                onDisplayImage();
                _this.wasThumbnailDisplayed = true;
            }
            return (React.createElement(media_ui_1.MediaImage, { dataURI: dataURI, alt: alt, crop: _this.isCropped, stretch: _this.isStretched, previewOrientation: previewOrientation, onImageLoad: _this.onImageLoad, onImageError: _this.onImageError }));
        };
        _this.shouldFireLoadingStatusAnalyticsEvent = function (action) {
            return !_this.lastAnalyticsAction || _this.lastAnalyticsAction !== action;
        };
        _this.fireLoadingStatusAnalyticsEvent = function (action) {
            var createAnalyticsEvent = _this.props.createAnalyticsEvent;
            if (_this.shouldFireLoadingStatusAnalyticsEvent(action)) {
                _this.lastAnalyticsAction = action;
                analytics_1.createAndFireCustomMediaEvent(tslib_1.__assign({ eventType: 'operational', action: action, actionSubject: 'mediaCardRender' }, (action === 'failed'
                    ? {
                        attributes: {
                            failReason: 'file-uri-error',
                            error: 'unknown error',
                        },
                    }
                    : {})), createAnalyticsEvent);
            }
        };
        _this.renderProgressBar = function () {
            var _a = _this.props, mediaName = _a.mediaName, progress = _a.progress, actions = _a.actions, status = _a.status;
            if (status !== 'uploading') {
                return null;
            }
            return (React.createElement(styled_1.ProgressBarWrapper, null,
                React.createElement(styled_1.Overlay, null,
                    React.createElement(styled_1.Title, null,
                        React.createElement(media_ui_1.Ellipsify, { text: mediaName || '', lines: 2 })),
                    React.createElement(styled_1.Body, null,
                        React.createElement(styled_1.ProgressWrapper, null,
                            React.createElement(progressBar_1.ProgressBar, { progress: progress })),
                        React.createElement(styled_1.CardActionsWrapper, null, actions ? (React.createElement(cardActions_1.default, { actions: actions, triggerColor: "white" })) : null)))));
        };
        _this.renderSuccessCardContents = function () {
            var _a = _this.props, disableOverlay = _a.disableOverlay, selectable = _a.selectable, status = _a.status;
            var overlay = null;
            if (!disableOverlay) {
                if (status === 'uploading') {
                    if (selectable) {
                        overlay = _this.renderUploadingCardOverlay();
                    }
                }
                else {
                    overlay = _this.renderSuccessCardOverlay();
                }
            }
            return (React.createElement("div", { className: "wrapper" },
                React.createElement("div", { className: "img-wrapper" },
                    _this.renderMediaImage(),
                    _this.renderProgressBar(),
                    _this.renderPlayButton()),
                overlay));
        };
        _this.renderSuccessCardOverlay = function () {
            var _a = _this.props, mediaName = _a.mediaName, mediaType = _a.mediaType, fileSize = _a.fileSize, dataURI = _a.dataURI, selectable = _a.selectable, selected = _a.selected, actions = _a.actions;
            var isPersistent = mediaType === 'doc' || !dataURI;
            return (React.createElement(cardOverlay_1.CardOverlay, { persistent: isPersistent, selectable: selectable, selected: selected, mediaName: mediaName, mediaType: mediaType, subtitle: fileSize, actions: actions }));
        };
        return _this;
    }
    FileCardImageViewBase.prototype.render = function () {
        var _a = this.props, disableOverlay = _a.disableOverlay, selectable = _a.selectable, selected = _a.selected, mediaType = _a.mediaType;
        return (React.createElement(styled_1.Wrapper, { disableOverlay: disableOverlay, selectable: selectable, selected: selected, mediaType: mediaType }, this.renderCardContents()));
    };
    Object.defineProperty(FileCardImageViewBase.prototype, "isImageNotReadyForDisplay", {
        get: function () {
            var _a = this.props, status = _a.status, dataURI = _a.dataURI, mediaType = _a.mediaType;
            if (dataURI) {
                return false;
            }
            return (status === 'loading' ||
                status === 'processing' ||
                isLoadingImage_1.isLoadingImage(mediaType, dataURI));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FileCardImageViewBase.prototype, "isCropped", {
        get: function () {
            var resizeMode = this.props.resizeMode;
            return resizeMode === 'crop';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FileCardImageViewBase.prototype, "isStretched", {
        get: function () {
            var resizeMode = this.props.resizeMode;
            return resizeMode === 'stretchy-fit';
        },
        enumerable: true,
        configurable: true
    });
    FileCardImageViewBase.defaultProps = {
        resizeMode: 'crop',
        disableOverlay: false,
    };
    return FileCardImageViewBase;
}(react_1.Component));
exports.FileCardImageViewBase = FileCardImageViewBase;
exports.FileCardImageView = analytics_next_1.withAnalyticsEvents()(FileCardImageViewBase);
//# sourceMappingURL=index.js.map