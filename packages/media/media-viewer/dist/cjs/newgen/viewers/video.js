"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var media_client_1 = require("@atlaskit/media-client");
var media_store_1 = require("@atlaskit/media-store");
var media_ui_1 = require("@atlaskit/media-ui");
var domain_1 = require("../domain");
var styled_1 = require("../styled");
var isIE_1 = require("../utils/isIE");
var error_1 = require("../error");
var base_viewer_1 = require("./base-viewer");
var getObjectUrlFromFileState_1 = require("../utils/getObjectUrlFromFileState");
var sdArtifact = 'video_640.mp4';
var hdArtifact = 'video_1280.mp4';
var localStorageKeyName = 'mv_video_player_quality';
var VideoViewer = /** @class */ (function (_super) {
    tslib_1.__extends(VideoViewer, _super);
    function VideoViewer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.onHDChange = function () {
            var isHDActive = !_this.state.isHDActive;
            var preferredQuality = isHDActive ? 'hd' : 'sd';
            localStorage.setItem(localStorageKeyName, preferredQuality);
            _this.setState({ isHDActive: isHDActive });
            _this.init(isHDActive);
        };
        _this.onFirstPlay = function () {
            var item = _this.props.item;
            media_client_1.globalMediaEventEmitter.emit('media-viewed', {
                fileId: item.id,
                viewingLevel: 'full',
            });
        };
        return _this;
    }
    Object.defineProperty(VideoViewer.prototype, "initialState", {
        get: function () {
            var item = this.props.item;
            var preferredQuality = localStorage.getItem(localStorageKeyName);
            return {
                content: domain_1.Outcome.pending(),
                isHDActive: isHDAvailable(item) && preferredQuality !== 'sd',
            };
        },
        enumerable: true,
        configurable: true
    });
    VideoViewer.prototype.renderSuccessful = function (content) {
        var isHDActive = this.state.isHDActive;
        var _a = this.props, item = _a.item, showControls = _a.showControls, previewCount = _a.previewCount, onCanPlay = _a.onCanPlay, onError = _a.onError;
        var useCustomVideoPlayer = !isIE_1.isIE();
        var isAutoPlay = previewCount === 0;
        return useCustomVideoPlayer ? (React.createElement(styled_1.CustomVideoPlayerWrapper, null,
            React.createElement(media_ui_1.CustomMediaPlayer, { type: "video", isAutoPlay: isAutoPlay, onHDToggleClick: this.onHDChange, showControls: showControls, src: content, isHDActive: isHDActive, isHDAvailable: isHDAvailable(item), isShortcutEnabled: true, onCanPlay: onCanPlay, onFirstPlay: this.onFirstPlay, onError: onError }))) : (React.createElement(styled_1.Video, { autoPlay: isAutoPlay, controls: true, src: content }));
    };
    VideoViewer.prototype.init = function (isHDActive) {
        if (isHDActive === void 0) { isHDActive = this.state.isHDActive; }
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var _a, mediaClient, item, collectionName, contentUrl, preferHd, err_1;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this.props, mediaClient = _a.mediaClient, item = _a.item, collectionName = _a.collectionName;
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 6, , 7]);
                        contentUrl = void 0;
                        if (!(item.status === 'processed')) return [3 /*break*/, 3];
                        preferHd = isHDActive && isHDAvailable(item);
                        return [4 /*yield*/, mediaClient.file.getArtifactURL(item.artifacts, preferHd ? hdArtifact : sdArtifact, collectionName)];
                    case 2:
                        contentUrl = _b.sent();
                        if (!contentUrl) {
                            throw new Error("No video artifacts found");
                        }
                        return [3 /*break*/, 5];
                    case 3: return [4 /*yield*/, getObjectUrlFromFileState_1.getObjectUrlFromFileState(item)];
                    case 4:
                        contentUrl = _b.sent();
                        if (!contentUrl) {
                            this.setState({
                                content: domain_1.Outcome.pending(),
                            });
                            return [2 /*return*/];
                        }
                        _b.label = 5;
                    case 5:
                        this.setState({
                            content: domain_1.Outcome.successful(contentUrl),
                        });
                        return [3 /*break*/, 7];
                    case 6:
                        err_1 = _b.sent();
                        this.setState({
                            content: domain_1.Outcome.failed(error_1.createError('previewFailed', err_1, item)),
                        });
                        return [3 /*break*/, 7];
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    VideoViewer.prototype.release = function () { };
    return VideoViewer;
}(base_viewer_1.BaseViewer));
exports.VideoViewer = VideoViewer;
function isHDAvailable(file) {
    if (file.status !== 'processed') {
        return false;
    }
    return !!media_store_1.getArtifactUrl(file.artifacts, hdArtifact);
}
//# sourceMappingURL=video.js.map