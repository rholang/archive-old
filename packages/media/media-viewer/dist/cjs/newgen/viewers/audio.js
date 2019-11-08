"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var media_client_1 = require("@atlaskit/media-client");
var audio_1 = tslib_1.__importDefault(require("@atlaskit/icon/glyph/media-services/audio"));
var domain_1 = require("../domain");
var styled_1 = require("../styled");
var error_1 = require("../error");
var base_viewer_1 = require("./base-viewer");
var isIE_1 = require("../utils/isIE");
var media_ui_1 = require("@atlaskit/media-ui");
var getObjectUrlFromFileState_1 = require("../utils/getObjectUrlFromFileState");
var defaultCover = (React.createElement(styled_1.DefaultCoverWrapper, null,
    React.createElement(audio_1.default, { label: "cover", size: "xlarge", primaryColor: styled_1.blanketColor })));
var getCoverUrl = function (item, mediaClient, collectionName) {
    return mediaClient.getImageUrl(item.id, {
        collection: collectionName,
    });
};
var AudioViewer = /** @class */ (function (_super) {
    tslib_1.__extends(AudioViewer, _super);
    function AudioViewer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.renderCover = function () {
            var item = _this.props.item;
            var coverUrl = _this.state.coverUrl;
            if (coverUrl && item.status !== 'error') {
                return React.createElement(styled_1.AudioCover, { src: coverUrl, alt: item.name });
            }
            else {
                return defaultCover;
            }
        };
        _this.saveAudioElement = function (audioElement) {
            if (!audioElement) {
                return;
            }
            audioElement.setAttribute('controlsList', 'nodownload');
        };
        _this.onFirstPlay = function () {
            var item = _this.props.item;
            media_client_1.globalMediaEventEmitter.emit('media-viewed', {
                fileId: item.id,
                viewingLevel: 'full',
            });
        };
        _this.loadCover = function (coverUrl) {
            return new Promise(function (resolve, reject) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
                var img;
                return tslib_1.__generator(this, function (_a) {
                    img = new Image();
                    img.src = coverUrl;
                    img.onload = resolve;
                    img.onerror = reject;
                    return [2 /*return*/];
                });
            }); });
        };
        _this.setCoverUrl = function () { return tslib_1.__awaiter(_this, void 0, void 0, function () {
            var _a, mediaClient, item, collectionName, coverUrl, e_1;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this.props, mediaClient = _a.mediaClient, item = _a.item, collectionName = _a.collectionName;
                        if (item.status !== 'processed') {
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, getCoverUrl(item, mediaClient, collectionName)];
                    case 1:
                        coverUrl = _b.sent();
                        _b.label = 2;
                    case 2:
                        _b.trys.push([2, 4, , 5]);
                        return [4 /*yield*/, this.loadCover(coverUrl)];
                    case 3:
                        _b.sent();
                        this.setState({ coverUrl: coverUrl });
                        return [3 /*break*/, 5];
                    case 4:
                        e_1 = _b.sent();
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        }); };
        return _this;
    }
    Object.defineProperty(AudioViewer.prototype, "initialState", {
        get: function () {
            return {
                content: domain_1.Outcome.pending(),
            };
        },
        enumerable: true,
        configurable: true
    });
    AudioViewer.prototype.renderSuccessful = function (src) {
        var _a = this.props, showControls = _a.showControls, previewCount = _a.previewCount, onCanPlay = _a.onCanPlay, onError = _a.onError;
        var useCustomAudioPlayer = !isIE_1.isIE();
        var isAutoPlay = previewCount === 0;
        return useCustomAudioPlayer ? (React.createElement(styled_1.AudioPlayer, null,
            this.renderCover(),
            React.createElement(styled_1.CustomAudioPlayerWrapper, null,
                React.createElement(media_ui_1.CustomMediaPlayer, { type: "audio", isAutoPlay: isAutoPlay, src: src, isShortcutEnabled: true, showControls: showControls, onCanPlay: onCanPlay, onFirstPlay: this.onFirstPlay, onError: onError })))) : (React.createElement(styled_1.AudioPlayer, null,
            this.renderCover(),
            React.createElement(styled_1.CustomAudioPlayerWrapper, null,
                React.createElement(styled_1.Audio, { autoPlay: isAutoPlay, controls: true, innerRef: this.saveAudioElement, src: src, preload: "metadata" }))));
    };
    AudioViewer.prototype.init = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var _a, mediaClient, item, collectionName, audioUrl, err_1;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this.props, mediaClient = _a.mediaClient, item = _a.item, collectionName = _a.collectionName;
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 6, , 7]);
                        audioUrl = void 0;
                        if (!(item.status === 'processed')) return [3 /*break*/, 3];
                        return [4 /*yield*/, mediaClient.file.getArtifactURL(item.artifacts, 'audio.mp3', collectionName)];
                    case 2:
                        audioUrl = _b.sent();
                        if (!audioUrl) {
                            throw new Error('No audio artifacts found');
                        }
                        return [3 /*break*/, 5];
                    case 3: return [4 /*yield*/, getObjectUrlFromFileState_1.getObjectUrlFromFileState(item)];
                    case 4:
                        audioUrl = _b.sent();
                        if (!audioUrl) {
                            this.setState({
                                content: domain_1.Outcome.pending(),
                            });
                            return [2 /*return*/];
                        }
                        _b.label = 5;
                    case 5:
                        this.setCoverUrl();
                        this.setState({
                            content: domain_1.Outcome.successful(audioUrl),
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
    AudioViewer.prototype.release = function () {
        var content = this.state.content;
        if (!content.data) {
            return;
        }
        URL.revokeObjectURL(content.data);
    };
    return AudioViewer;
}(base_viewer_1.BaseViewer));
exports.AudioViewer = AudioViewer;
//# sourceMappingURL=audio.js.map