import { __awaiter, __extends, __generator } from "tslib";
import * as React from 'react';
import { MediaPicker, } from '@atlaskit/media-picker';
import { ErrorReporter } from '@atlaskit/editor-common';
import PickerFacade from '../../picker-facade';
import { getUploadMediaClientConfigFromMediaProvider, getViewMediaClientConfigFromMediaProvider, } from '../../utils/media-common';
var dummyMediaPickerObject = {
    on: function () { },
    removeAllListeners: function () { },
    emit: function () { },
    destroy: function () { },
    setUploadParams: function () { },
};
var PickerFacadeProvider = /** @class */ (function (_super) {
    __extends(PickerFacadeProvider, _super);
    function PickerFacadeProvider() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {};
        _this.handleMediaProvider = function (_name, provider) { return __awaiter(_this, void 0, void 0, function () {
            var _a, mediaState, analyticsName, mediaProvider, resolvedMediaClientConfig, _b, pickerFacadeConfig, pickerFacadeInstance, config;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _a = this.props, mediaState = _a.mediaState, analyticsName = _a.analyticsName;
                        return [4 /*yield*/, provider];
                    case 1:
                        mediaProvider = _c.sent();
                        if (!mediaProvider || !mediaProvider.uploadParams) {
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, getUploadMediaClientConfigFromMediaProvider(mediaProvider)];
                    case 2:
                        _b = (_c.sent());
                        if (_b) return [3 /*break*/, 4];
                        return [4 /*yield*/, getViewMediaClientConfigFromMediaProvider(mediaProvider)];
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
                            errorReporter: mediaState.options.errorReporter || new ErrorReporter(),
                        };
                        return [4 /*yield*/, new PickerFacade('customMediaPicker', pickerFacadeConfig, dummyMediaPickerObject, MediaPicker, analyticsName).init()];
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
export default PickerFacadeProvider;
//# sourceMappingURL=PickerFacadeProvider.js.map