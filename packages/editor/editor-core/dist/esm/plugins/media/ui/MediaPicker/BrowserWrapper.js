import * as React from 'react';
import PickerFacadeProvider from './PickerFacadeProvider';
import { Browser } from '@atlaskit/media-picker';
export var BrowserWrapper = function (_a) {
    var mediaState = _a.mediaState, isOpen = _a.isOpen, onBrowseFn = _a.onBrowseFn;
    return (React.createElement(PickerFacadeProvider, { mediaState: mediaState, analyticsName: "browser" }, function (_a) {
        var mediaClientConfig = _a.mediaClientConfig, config = _a.config, pickerFacadeInstance = _a.pickerFacadeInstance;
        return (React.createElement(Browser, { onBrowseFn: onBrowseFn, isOpen: isOpen, config: config, mediaClientConfig: mediaClientConfig, onProcessing: pickerFacadeInstance.handleReady, onError: pickerFacadeInstance.handleUploadError, onPreviewUpdate: pickerFacadeInstance.handleUploadPreviewUpdate }));
    }));
};
//# sourceMappingURL=BrowserWrapper.js.map