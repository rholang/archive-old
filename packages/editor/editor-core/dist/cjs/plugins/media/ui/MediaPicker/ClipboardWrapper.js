"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var PickerFacadeProvider_1 = tslib_1.__importDefault(require("./PickerFacadeProvider"));
var media_picker_1 = require("@atlaskit/media-picker");
exports.ClipboardWrapper = function (_a) {
    var mediaState = _a.mediaState;
    return (React.createElement(PickerFacadeProvider_1.default, { mediaState: mediaState, analyticsName: "clipboard" }, function (_a) {
        var mediaClientConfig = _a.mediaClientConfig, config = _a.config, pickerFacadeInstance = _a.pickerFacadeInstance;
        return (React.createElement(media_picker_1.Clipboard, { mediaClientConfig: mediaClientConfig, config: config, onError: pickerFacadeInstance.handleUploadError, onPreviewUpdate: pickerFacadeInstance.handleUploadPreviewUpdate, onProcessing: pickerFacadeInstance.handleReady }));
    }));
};
//# sourceMappingURL=ClipboardWrapper.js.map