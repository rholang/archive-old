import { __awaiter, __extends, __generator } from "tslib";
import * as React from 'react';
import { Component } from 'react';
import { globalMediaEventEmitter, } from '@atlaskit/media-client';
import { CustomMediaPlayer, InactivityDetector } from '@atlaskit/media-ui';
import { InlinePlayerWrapper } from './styled';
import { defaultImageCardDimensions } from '..';
import { CardLoading } from '../utils/lightCards/cardLoading';
import { withAnalyticsEvents, } from '@atlaskit/analytics-next';
import { createAndFireMediaEvent } from '../utils/analytics';
export var getPreferredVideoArtifact = function (fileState) {
    if (fileState.status === 'processed' || fileState.status === 'processing') {
        var artifacts = fileState.artifacts;
        if (!artifacts) {
            return undefined;
        }
        return artifacts['video_1280.mp4']
            ? 'video_1280.mp4'
            : artifacts['video_640.mp4']
                ? 'video_640.mp4'
                : undefined;
    }
    return undefined;
};
var InlinePlayerBase = /** @class */ (function (_super) {
    __extends(InlinePlayerBase, _super);
    function InlinePlayerBase() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {};
        _this.divRef = React.createRef();
        _this.setFileSrc = function (fileSrc) {
            _this.setState({ fileSrc: fileSrc });
        };
        // Tries to use the binary artifact to provide something to play while the video is still processing
        _this.setBinaryURL = function () { return __awaiter(_this, void 0, void 0, function () {
            var _a, mediaClient, identifier, onError, id, collectionName, resolvedId, fileSrc, error_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this.props, mediaClient = _a.mediaClient, identifier = _a.identifier, onError = _a.onError;
                        id = identifier.id, collectionName = identifier.collectionName;
                        return [4 /*yield*/, id];
                    case 1:
                        resolvedId = _b.sent();
                        _b.label = 2;
                    case 2:
                        _b.trys.push([2, 4, , 5]);
                        return [4 /*yield*/, mediaClient.file.getFileBinaryURL(resolvedId, collectionName)];
                    case 3:
                        fileSrc = _b.sent();
                        this.setFileSrc(fileSrc);
                        return [3 /*break*/, 5];
                    case 4:
                        error_1 = _b.sent();
                        if (onError) {
                            onError(error_1);
                        }
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        }); };
        _this.unsubscribe = function () {
            if (_this.subscription) {
                _this.subscription.unsubscribe();
            }
        };
        _this.revoke = function () {
            var fileSrc = _this.state.fileSrc;
            if (fileSrc) {
                URL.revokeObjectURL(fileSrc);
            }
        };
        _this.getStyle = function () {
            var dimensions = _this.props.dimensions;
            // We are given dimensions. But we can’t just blindly apply them as width and height.
            // Because editor is giving us “maximum” dimensions (equal to what it can go to if resized to 100%
            // of available width). And the same time we don’t want to ignore these dimensions completely,
            // because if consumer do not constraint width/height of container we still want to stick to given dimensions.
            // Here we put width as a style. In combination with max-width: 100%; and max-height: 100%;
            // it would give us required effect.
            return {
                width: dimensions.width,
            };
        };
        _this.onDownloadClick = function () { return __awaiter(_this, void 0, void 0, function () {
            var _a, mediaClient, identifier, id, collectionName, _b, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _a = this.props, mediaClient = _a.mediaClient, identifier = _a.identifier;
                        id = identifier.id, collectionName = identifier.collectionName;
                        _c = (_b = mediaClient.file).downloadBinary;
                        return [4 /*yield*/, id];
                    case 1:
                        _c.apply(_b, [_d.sent(), undefined, collectionName]);
                        return [2 /*return*/];
                }
            });
        }); };
        _this.onFirstPlay = function () { return __awaiter(_this, void 0, void 0, function () {
            var identifier, _a, _b, _c, _d;
            return __generator(this, function (_e) {
                switch (_e.label) {
                    case 0:
                        identifier = this.props.identifier;
                        _b = (_a = globalMediaEventEmitter).emit;
                        _c = ['media-viewed'];
                        _d = {};
                        return [4 /*yield*/, identifier.id];
                    case 1:
                        _b.apply(_a, _c.concat([(_d.fileId = _e.sent(),
                                _d.viewingLevel = 'full',
                                _d)]));
                        return [2 /*return*/];
                }
            });
        }); };
        return _this;
    }
    InlinePlayerBase.prototype.componentDidMount = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, mediaClient, identifier, id, collectionName, _b, _c, _d;
            var _this = this;
            return __generator(this, function (_e) {
                switch (_e.label) {
                    case 0:
                        _a = this.props, mediaClient = _a.mediaClient, identifier = _a.identifier;
                        id = identifier.id, collectionName = identifier.collectionName;
                        this.revoke();
                        this.unsubscribe();
                        _b = this;
                        _d = (_c = mediaClient.file).getFileState;
                        return [4 /*yield*/, id];
                    case 1:
                        _b.subscription = _d.apply(_c, [_e.sent(), { collectionName: collectionName }])
                            .subscribe({
                            next: function (state) { return __awaiter(_this, void 0, void 0, function () {
                                var value, fileSrc, artifactName, artifacts, fileSrc, error_2, onError;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            if (!(state.status !== 'error' && state.preview)) return [3 /*break*/, 2];
                                            return [4 /*yield*/, state.preview];
                                        case 1:
                                            value = (_a.sent()).value;
                                            if (value instanceof Blob && value.type.indexOf('video/') === 0) {
                                                fileSrc = URL.createObjectURL(value);
                                                this.setFileSrc(fileSrc);
                                                return [2 /*return*/];
                                            }
                                            _a.label = 2;
                                        case 2:
                                            if (!(state.status === 'processed' || state.status === 'processing')) return [3 /*break*/, 6];
                                            artifactName = getPreferredVideoArtifact(state);
                                            artifacts = state.artifacts;
                                            if (!artifactName || !artifacts) {
                                                this.setBinaryURL();
                                                return [2 /*return*/];
                                            }
                                            _a.label = 3;
                                        case 3:
                                            _a.trys.push([3, 5, , 6]);
                                            return [4 /*yield*/, mediaClient.file.getArtifactURL(artifacts, artifactName, collectionName)];
                                        case 4:
                                            fileSrc = _a.sent();
                                            this.setFileSrc(fileSrc);
                                            return [3 /*break*/, 6];
                                        case 5:
                                            error_2 = _a.sent();
                                            onError = this.props.onError;
                                            if (onError) {
                                                onError(error_2);
                                            }
                                            return [3 /*break*/, 6];
                                        case 6: return [2 /*return*/];
                                    }
                                });
                            }); },
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    InlinePlayerBase.prototype.componentWillUnmount = function () {
        this.unsubscribe();
        this.revoke();
    };
    InlinePlayerBase.prototype.render = function () {
        var _this = this;
        var _a = this.props, onClick = _a.onClick, dimensions = _a.dimensions, selected = _a.selected;
        var fileSrc = this.state.fileSrc;
        if (!fileSrc) {
            return React.createElement(CardLoading, { dimensions: dimensions });
        }
        return (React.createElement(InlinePlayerWrapper, { style: this.getStyle(), selected: selected, onClick: onClick, innerRef: this.divRef },
            React.createElement(InactivityDetector, null, function () { return (React.createElement(CustomMediaPlayer, { type: "video", src: fileSrc, isAutoPlay: true, isHDAvailable: false, onDownloadClick: _this.onDownloadClick, onFirstPlay: _this.onFirstPlay })); })));
    };
    InlinePlayerBase.defaultProps = {
        dimensions: defaultImageCardDimensions,
    };
    return InlinePlayerBase;
}(Component));
export { InlinePlayerBase };
export var InlinePlayer = withAnalyticsEvents({
    onClick: createAndFireMediaEvent({
        eventType: 'ui',
        action: 'clicked',
        actionSubject: 'mediaCard',
        actionSubjectId: 'mediaCardInlinePlayer',
    }),
})(InlinePlayerBase);
//# sourceMappingURL=inlinePlayer.js.map