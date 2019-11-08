"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var PickerFacadeProvider_1 = tslib_1.__importDefault(require("./PickerFacadeProvider"));
var media_picker_1 = require("@atlaskit/media-picker");
exports.DropzoneWrapper = function (_a) {
    var mediaState = _a.mediaState, isActive = _a.isActive;
    return (React.createElement(PickerFacadeProvider_1.default, { mediaState: mediaState, analyticsName: "dropzone" }, function (_a) {
        var mediaClientConfig = _a.mediaClientConfig, config = _a.config, pickerFacadeInstance = _a.pickerFacadeInstance;
        var customDropzoneContainer = mediaState.options.customDropzoneContainer, handleDrag = mediaState.handleDrag;
        var dropzoneConfig = tslib_1.__assign(tslib_1.__assign({}, config), { container: customDropzoneContainer });
        return isActive ? (React.createElement(media_picker_1.Dropzone, { mediaClientConfig: mediaClientConfig, config: dropzoneConfig, onError: pickerFacadeInstance.handleUploadError, onPreviewUpdate: pickerFacadeInstance.handleUploadPreviewUpdate, onProcessing: pickerFacadeInstance.handleReady, onDragEnter: function () { return handleDrag('enter'); }, onDragLeave: function () { return handleDrag('leave'); } })) : null;
    }));
};
//# sourceMappingURL=DropzoneWrapper.js.map