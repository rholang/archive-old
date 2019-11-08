"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var PickerFacadeProvider_1 = tslib_1.__importDefault(require("./PickerFacadeProvider"));
var media_picker_1 = require("@atlaskit/media-picker");
exports.BrowserWrapper = function (_a) {
    var mediaState = _a.mediaState, isOpen = _a.isOpen, onBrowseFn = _a.onBrowseFn;
    return (React.createElement(PickerFacadeProvider_1.default, { mediaState: mediaState, analyticsName: "browser" }, function (_a) {
        var mediaClientConfig = _a.mediaClientConfig, config = _a.config, pickerFacadeInstance = _a.pickerFacadeInstance;
        return (React.createElement(media_picker_1.Browser, { onBrowseFn: onBrowseFn, isOpen: isOpen, config: config, mediaClientConfig: mediaClientConfig, onProcessing: pickerFacadeInstance.handleReady, onError: pickerFacadeInstance.handleUploadError, onPreviewUpdate: pickerFacadeInstance.handleUploadPreviewUpdate }));
    }));
};
//# sourceMappingURL=BrowserWrapper.js.map