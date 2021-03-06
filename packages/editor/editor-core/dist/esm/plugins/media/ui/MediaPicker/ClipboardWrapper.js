import * as React from 'react';
import PickerFacadeProvider from './PickerFacadeProvider';
import { Clipboard } from '@atlaskit/media-picker';
export var ClipboardWrapper = function (_a) {
    var mediaState = _a.mediaState;
    return (React.createElement(PickerFacadeProvider, { mediaState: mediaState, analyticsName: "clipboard" }, function (_a) {
        var mediaClientConfig = _a.mediaClientConfig, config = _a.config, pickerFacadeInstance = _a.pickerFacadeInstance;
        return (React.createElement(Clipboard, { mediaClientConfig: mediaClientConfig, config: config, onError: pickerFacadeInstance.handleUploadError, onPreviewUpdate: pickerFacadeInstance.handleUploadPreviewUpdate, onProcessing: pickerFacadeInstance.handleReady }));
    }));
};
//# sourceMappingURL=ClipboardWrapper.js.map