"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var media_picker_1 = require("@atlaskit/media-picker");
var editor_common_1 = require("@atlaskit/editor-common");
var picker_facade_1 = tslib_1.__importDefault(require("../../picker-facade"));
var media_common_1 = require("../../utils/media-common");
var dummyMediaPickerObject = {
    on: function () { },
    removeAllListeners: function () { },
    emit: function () { },
    destroy: function () { },
    setUploadParams: function () { },
};
var PickerFacadeProvider = /** @class */ (function (_super) {
    tslib_1.__extends(PickerFacadeProvider, _super);
    function PickerFacadeProvider() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {};
        _this.handleMediaProvider = function (_name, provider) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
            var _a, mediaState, analyticsName, mediaProvider, resolvedMediaClientConfig, _b, pickerFacadeConfig, pickerFacadeInstance, config;
            return tslib_1.__generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _a = this.props, mediaState = _a.mediaState, analyticsName = _a.analyticsName;
                        return [4 /*yield*/, provider];
                    case 1:
                        mediaProvider = _c.sent();
                        if (!mediaProvider || !mediaProvider.uploadParams) {
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, media_common_1.getUploadMediaClientConfigFromMediaProvider(mediaProvider)];
                    case 2:
                        _b = (_c.sent());
                        if (_b) return [3 /*break*/, 4];
                        return [4 /*yield*/, media_common_1.getViewMediaClientConfigFromMediaProvider(mediaProvider)];
                    case 3:
                        _b = (_c.sent());
                        _c.label = 4;
                    case 4:
                        resolvedMediaClientConfig = _b;
                        if (!resolvedMediaClientConfig) {
                            return [2 /*return*/];
                        }
                        pickerFacadeConfig = {
                            mediaClientConfig: resolvedMediaClientConfig,
                            errorReporter: mediaState.options.errorReporter || new editor_common_1.ErrorReporter(),
                        };
                        return [4 /*yield*/, new picker_facade_1.default('customMediaPicker', pickerFacadeConfig, dummyMediaPickerObject, media_picker_1.MediaPicker, analyticsName).init()];
                    case 5:
                        pickerFacadeInstance = _c.sent();
                        /**
                         * Based on the `initPickers` method in `MediaPluginState` we need these 2 `onNewMedia` subscriptions.
                         * First one in order to trigger the entire process of uploading a file for when `onPreviewUpdate` is called
                         * Second one in order to track all analytics as before.
                         */
                        pickerFacadeInstance.onNewMedia(mediaState.insertFile);
                        pickerFacadeInstance.onNewMedia(mediaState.trackNewMediaEvent);
                        pickerFacadeInstance.setUploadParams(mediaProvider.uploadParams);
                        config = {
                            uploadParams: mediaProvider.uploadParams,
                        };
                        this.setState({
                            pickerFacadeInstance: pickerFacadeInstance,
                            config: config,
                            mediaClientConfig: resolvedMediaClientConfig,
                        });
                        return [2 /*return*/];
                }
            });
        }); };
        return _this;
    }
    PickerFacadeProvider.prototype.componentDidMount = function () {
        this.props.mediaState.options.providerFactory.subscribe('mediaProvider', this.handleMediaProvider);
    };
    PickerFacadeProvider.prototype.componentWillUnmount = function () {
        this.props.mediaState.options.providerFactory.unsubscribe('mediaProvider', this.handleMediaProvider);
    };
    PickerFacadeProvider.prototype.render = function () {
        var _a = this.state, mediaClientConfig = _a.mediaClientConfig, config = _a.config, pickerFacadeInstance = _a.pickerFacadeInstance;
        if (!mediaClientConfig || !config || !pickerFacadeInstance) {
            return null;
        }
        return this.props.children({
            mediaClientConfig: mediaClientConfig,
            config: config,
            pickerFacadeInstance: pickerFacadeInstance,
        });
    };
    return PickerFacadeProvider;
}(React.Component));
exports.default = PickerFacadeProvider;
//# sourceMappingURL=PickerFacadeProvider.js.map