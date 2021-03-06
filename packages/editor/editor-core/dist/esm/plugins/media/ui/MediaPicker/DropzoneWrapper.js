import { __assign } from "tslib";
import * as React from 'react';
import PickerFacadeProvider from './PickerFacadeProvider';
import { Dropzone } from '@atlaskit/media-picker';
export var DropzoneWrapper = function (_a) {
    var mediaState = _a.mediaState, isActive = _a.isActive;
    return (React.createElement(PickerFacadeProvider, { mediaState: mediaState, analyticsName: "dropzone" }, function (_a) {
        var mediaClientConfig = _a.mediaClientConfig, config = _a.config, pickerFacadeInstance = _a.pickerFacadeInstance;
        var customDropzoneContainer = mediaState.options.customDropzoneContainer, handleDrag = mediaState.handleDrag;
        var dropzoneConfig = __assign(__assign({}, config), { container: customDropzoneContainer });
        return isActive ? (React.createElement(Dropzone, { mediaClientConfig: mediaClientConfig, config: dropzoneConfig, onError: pickerFacadeInstance.handleUploadError, onPreviewUpdate: pickerFacadeInstance.handleUploadPreviewUpdate, onProcessing: pickerFacadeInstance.handleReady, onDragEnter: function () { return handleDrag('enter'); }, onDragLeave: function () { return handleDrag('leave'); } })) : null;
    }));
};
//# sourceMappingURL=DropzoneWrapper.js.map