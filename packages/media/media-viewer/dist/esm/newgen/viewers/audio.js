import { __awaiter, __extends, __generator } from "tslib";
import * as React from 'react';
import { globalMediaEventEmitter, } from '@atlaskit/media-client';
import AudioIcon from '@atlaskit/icon/glyph/media-services/audio';
import { Outcome } from '../domain';
import { AudioPlayer, AudioCover, Audio, DefaultCoverWrapper, blanketColor, CustomAudioPlayerWrapper, } from '../styled';
import { createError } from '../error';
import { BaseViewer } from './base-viewer';
import { isIE } from '../utils/isIE';
import { CustomMediaPlayer, } from '@atlaskit/media-ui';
import { getObjectUrlFromFileState } from '../utils/getObjectUrlFromFileState';
var defaultCover = (React.createElement(DefaultCoverWrapper, null,
    React.createElement(AudioIcon, { label: "cover", size: "xlarge", primaryColor: blanketColor })));
var getCoverUrl = function (item, mediaClient, collectionName) {
    return mediaClient.getImageUrl(item.id, {
        collection: collectionName,
    });
};
var AudioViewer = /** @class */ (function (_super) {
    __extends(AudioViewer, _super);
    function AudioViewer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.renderCover = function () {
            var item = _this.props.item;
            var coverUrl = _this.state.coverUrl;
            if (coverUrl && item.status !== 'error') {
                return React.createElement(AudioCover, { src: coverUrl, alt: item.name });
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
            globalMediaEventEmitter.emit('media-viewed', {
                fileId: item.id,
                viewingLevel: 'full',
            });
        };
        _this.loadCover = function (coverUrl) {
            return new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
                var img;
                return __generator(this, function (_a) {
                    img = new Image();
                    img.src = coverUrl;
                    img.onload = resolve;
                    img.onerror = reject;
                    return [2 /*return*/];
                });
            }); });
        };
        _this.setCoverUrl = function () { return __awaiter(_this, void 0, void 0, function () {
            var _a, mediaClient, item, collectionName, coverUrl, e_1;
            return __generator(this, function (_b) {
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
                content: Outcome.pending(),
            };
        },
        enumerable: true,
        configurable: true
    });
    AudioViewer.prototype.renderSuccessful = function (src) {
        var _a = this.props, showControls = _a.showControls, previewCount = _a.previewCount, onCanPlay = _a.onCanPlay, onError = _a.onError;
        var useCustomAudioPlayer = !isIE();
        var isAutoPlay = previewCount === 0;
        return useCustomAudioPlayer ? (React.createElement(AudioPlayer, null,
            this.renderCover(),
            React.createElement(CustomAudioPlayerWrapper, null,
                React.createElement(CustomMediaPlayer, { type: "audio", isAutoPlay: isAutoPlay, src: src, isShortcutEnabled: true, showControls: showControls, onCanPlay: onCanPlay, onFirstPlay: this.onFirstPlay, onError: onError })))) : (React.createElement(AudioPlayer, null,
            this.renderCover(),
            React.createElement(CustomAudioPlayerWrapper, null,
                React.createElement(Audio, { autoPlay: isAutoPlay, controls: true, innerRef: this.saveAudioElement, src: src, preload: "metadata" }))));
    };
    AudioViewer.prototype.init = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, mediaClient, item, collectionName, audioUrl, err_1;
            return __generator(this, function (_b) {
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
                    case 3: return [4 /*yield*/, getObjectUrlFromFileState(item)];
                    case 4:
                        audioUrl = _b.sent();
                        if (!audioUrl) {
                            this.setState({
                                content: Outcome.pending(),
                            });
                            return [2 /*return*/];
                        }
                        _b.label = 5;
                    case 5:
                        this.setCoverUrl();
                        this.setState({
                            content: Outcome.successful(audioUrl),
                        });
                        return [3 /*break*/, 7];
                    case 6:
                        err_1 = _b.sent();
                        this.setState({
                            content: Outcome.failed(createError('previewFailed', err_1, item)),
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
}(BaseViewer));
export { AudioViewer };
//# sourceMappingURL=audio.js.map