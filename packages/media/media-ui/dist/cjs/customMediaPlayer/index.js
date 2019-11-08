"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var react_1 = require("react");
var vid_play_1 = tslib_1.__importDefault(require("@atlaskit/icon/glyph/vid-play"));
var vid_pause_1 = tslib_1.__importDefault(require("@atlaskit/icon/glyph/vid-pause"));
var vid_full_screen_on_1 = tslib_1.__importDefault(require("@atlaskit/icon/glyph/vid-full-screen-on"));
var vid_full_screen_off_1 = tslib_1.__importDefault(require("@atlaskit/icon/glyph/vid-full-screen-off"));
var outgoing_sound_1 = tslib_1.__importDefault(require("@atlaskit/icon/glyph/hipchat/outgoing-sound"));
var vid_hd_circle_1 = tslib_1.__importDefault(require("@atlaskit/icon/glyph/vid-hd-circle"));
var download_1 = tslib_1.__importDefault(require("@atlaskit/icon/glyph/download"));
var MediaButton_1 = tslib_1.__importDefault(require("../MediaButton"));
var spinner_1 = tslib_1.__importDefault(require("@atlaskit/spinner"));
var react_video_renderer_1 = tslib_1.__importDefault(require("react-video-renderer"));
var colors_1 = require("@atlaskit/theme/colors");
var timeRange_1 = require("./timeRange");
var styled_1 = require("./styled");
var formatDuration_1 = require("../formatDuration");
var classNames_1 = require("../classNames");
var shortcut_1 = require("../shortcut");
var fullscreen_1 = require("./fullscreen");
var react_intl_1 = require("react-intl");
var messages_1 = require("../messages");
var simultaneousPlayManager_1 = tslib_1.__importDefault(require("./simultaneousPlayManager"));
var toolbar = 'toolbar';
var CustomMediaPlayer = /** @class */ (function (_super) {
    tslib_1.__extends(CustomMediaPlayer, _super);
    function CustomMediaPlayer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.wasPlayedOnce = false;
        _this.state = {
            isFullScreenEnabled: false,
        };
        _this.onFullScreenChange = function () {
            var currentFullScreenMode = _this.state.isFullScreenEnabled;
            var isFullScreenEnabled = fullscreen_1.getFullscreenElement() ? true : false;
            if (currentFullScreenMode !== isFullScreenEnabled) {
                _this.setState({
                    isFullScreenEnabled: isFullScreenEnabled,
                });
            }
        };
        _this.onTimeChange = function (navigate) { return function (value) {
            navigate(value);
        }; };
        _this.onVolumeChange = function (setVolume) { return function (value) {
            return setVolume(value);
        }; };
        _this.shortcutHandler = function (toggleButtonAction) { return function () {
            var showControls = _this.props.showControls;
            toggleButtonAction();
            if (showControls) {
                showControls();
            }
        }; };
        _this.renderHDButton = function () {
            var _a = _this.props, type = _a.type, isHDAvailable = _a.isHDAvailable, isHDActive = _a.isHDActive, onHDToggleClick = _a.onHDToggleClick;
            if (type === 'audio' || !isHDAvailable) {
                return;
            }
            var primaryColor = isHDActive ? colors_1.B200 : colors_1.DN400;
            var secondaryColor = isHDActive ? colors_1.N0 : colors_1.DN60;
            return (React.createElement(MediaButton_1.default, { appearance: toolbar, onClick: onHDToggleClick, iconBefore: React.createElement(vid_hd_circle_1.default, { primaryColor: primaryColor, secondaryColor: secondaryColor, label: "hd" }) }));
        };
        _this.renderVolume = function (_a, actions) {
            var isMuted = _a.isMuted, volume = _a.volume;
            return (React.createElement(styled_1.VolumeWrapper, null,
                React.createElement(styled_1.VolumeToggleWrapper, { isMuted: isMuted },
                    React.createElement(styled_1.MutedIndicator, { isMuted: isMuted }),
                    React.createElement(MediaButton_1.default, { appearance: toolbar, onClick: actions.toggleMute, iconBefore: React.createElement(outgoing_sound_1.default, { label: "volume" }) })),
                React.createElement(styled_1.VolumeTimeRangeWrapper, null,
                    React.createElement(timeRange_1.TimeRange, { onChange: _this.onVolumeChange(actions.setVolume), duration: 1, currentTime: volume, bufferedTime: volume, disableThumbTooltip: true, isAlwaysActive: true }))));
        };
        _this.onFullScreenClick = function () { return fullscreen_1.toggleFullscreen(_this.videoWrapperRef); };
        _this.saveVideoWrapperRef = function (el) { return (_this.videoWrapperRef = el); };
        _this.renderFullScreenButton = function () {
            var _a = _this.props, formatMessage = _a.intl.formatMessage, type = _a.type;
            if (type === 'audio') {
                return;
            }
            var isFullScreenEnabled = _this.state.isFullScreenEnabled;
            var icon = isFullScreenEnabled ? (React.createElement(vid_full_screen_off_1.default, { label: formatMessage(messages_1.messages.disable_fullscreen) })) : (React.createElement(vid_full_screen_on_1.default, { label: formatMessage(messages_1.messages.enable_fullscreen) }));
            return (React.createElement(MediaButton_1.default, { appearance: toolbar, onClick: _this.onFullScreenClick, iconBefore: icon }));
        };
        _this.renderDownloadButton = function () {
            var onDownloadClick = _this.props.onDownloadClick;
            if (!onDownloadClick) {
                return;
            }
            return (React.createElement(MediaButton_1.default, { appearance: toolbar, onClick: onDownloadClick, iconBefore: React.createElement(download_1.default, { label: "download" }) }));
        };
        _this.renderSpinner = function () { return (React.createElement(styled_1.SpinnerWrapper, null,
            React.createElement(spinner_1.default, { invertColor: true, size: "large" }))); };
        _this.pause = function () {
            if (_this.actions) {
                _this.actions.pause();
            }
        };
        _this.play = function () {
            var onFirstPlay = _this.props.onFirstPlay;
            if (_this.actions) {
                _this.actions.play();
            }
            simultaneousPlayManager_1.default.pauseOthers(_this);
            if (!_this.wasPlayedOnce && onFirstPlay) {
                _this.wasPlayedOnce = true;
                onFirstPlay();
            }
        };
        return _this;
    }
    CustomMediaPlayer.prototype.componentDidMount = function () {
        var _a = this.props, isAutoPlay = _a.isAutoPlay, onFirstPlay = _a.onFirstPlay;
        document.addEventListener(fullscreen_1.vendorify('fullscreenchange', false), this.onFullScreenChange);
        simultaneousPlayManager_1.default.subscribe(this);
        if (isAutoPlay) {
            simultaneousPlayManager_1.default.pauseOthers(this);
            if (onFirstPlay) {
                this.wasPlayedOnce = true;
                onFirstPlay();
            }
        }
    };
    CustomMediaPlayer.prototype.componentWillUnmount = function () {
        document.removeEventListener(fullscreen_1.vendorify('fullscreenchange', false), this.onFullScreenChange);
        simultaneousPlayManager_1.default.unsubscribe(this);
    };
    CustomMediaPlayer.prototype.setActions = function (actions) {
        // Actions are being sent constantly while the video is playing,
        // though play and pause functions are always the same objects
        if (!this.actions) {
            var play = actions.play, pause = actions.pause;
            this.actions = { play: play, pause: pause };
        }
    };
    CustomMediaPlayer.prototype.render = function () {
        var _this = this;
        var _a = this.props, type = _a.type, src = _a.src, isAutoPlay = _a.isAutoPlay, isShortcutEnabled = _a.isShortcutEnabled, formatMessage = _a.intl.formatMessage, onCanPlay = _a.onCanPlay, onError = _a.onError;
        return (React.createElement(styled_1.CustomVideoWrapper, { innerRef: this.saveVideoWrapperRef },
            React.createElement(react_video_renderer_1.default, { sourceType: type, src: src, autoPlay: isAutoPlay, onCanPlay: onCanPlay, onError: onError }, function (video, videoState, actions) {
                _this.setActions(actions);
                var status = videoState.status, currentTime = videoState.currentTime, buffered = videoState.buffered, duration = videoState.duration, isLoading = videoState.isLoading;
                var isPlaying = status === 'playing';
                var toggleButtonIcon = isPlaying ? (React.createElement(vid_pause_1.default, { label: formatMessage(messages_1.messages.play) })) : (React.createElement(vid_play_1.default, { label: formatMessage(messages_1.messages.pause) }));
                var toggleButtonAction = isPlaying ? _this.pause : _this.play;
                var button = (React.createElement(MediaButton_1.default, { appearance: toolbar, iconBefore: toggleButtonIcon, onClick: toggleButtonAction }));
                var shortcuts = isShortcutEnabled && [
                    React.createElement(shortcut_1.Shortcut, { key: "space-shortcut", keyCode: shortcut_1.keyCodes.space, handler: _this.shortcutHandler(toggleButtonAction) }),
                    React.createElement(shortcut_1.Shortcut, { key: "m-shortcut", keyCode: shortcut_1.keyCodes.m, handler: _this.shortcutHandler(actions.toggleMute) }),
                ];
                return (React.createElement(styled_1.VideoWrapper, null,
                    video,
                    isLoading && _this.renderSpinner(),
                    shortcuts,
                    React.createElement(styled_1.ControlsWrapper, { className: classNames_1.hideControlsClassName },
                        React.createElement(styled_1.TimeWrapper, null,
                            React.createElement(timeRange_1.TimeRange, { currentTime: currentTime, bufferedTime: buffered, duration: duration, onChange: _this.onTimeChange(actions.navigate) })),
                        React.createElement(styled_1.TimebarWrapper, null,
                            React.createElement(styled_1.LeftControls, null,
                                button,
                                _this.renderVolume(videoState, actions)),
                            React.createElement(styled_1.RightControls, null,
                                React.createElement(styled_1.CurrentTime, { draggable: false },
                                    formatDuration_1.formatDuration(currentTime),
                                    " /",
                                    ' ',
                                    formatDuration_1.formatDuration(duration)),
                                _this.renderHDButton(),
                                _this.renderFullScreenButton(),
                                _this.renderDownloadButton())))));
            })));
    };
    return CustomMediaPlayer;
}(react_1.Component));
exports.CustomMediaPlayer = CustomMediaPlayer;
exports.default = react_intl_1.injectIntl(CustomMediaPlayer);
//# sourceMappingURL=index.js.map