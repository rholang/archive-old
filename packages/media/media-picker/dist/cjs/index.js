"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
// Events public API and types
var uploadEvent_1 = require("./domain/uploadEvent");
exports.isImagePreview = uploadEvent_1.isImagePreview;
function MediaPicker(mediaClientConfig, pickerConfig) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var _a, PopupImpl, getMediaClient, mediaClient;
        return tslib_1.__generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, Promise.all([
                        Promise.resolve().then(function () { return tslib_1.__importStar(require(/* webpackChunkName:"@atlaskit-internal_media-picker-popup" */ './components/popup')); }),
                        Promise.resolve().then(function () { return tslib_1.__importStar(require(/* webpackChunkName:"@atlaskit-media-client" */ '@atlaskit/media-client')); }),
                    ])];
                case 1:
                    _a = tslib_1.__read.apply(void 0, [_b.sent(), 2]), PopupImpl = _a[0].PopupImpl, getMediaClient = _a[1].getMediaClient;
                    mediaClient = getMediaClient(mediaClientConfig);
                    return [2 /*return*/, new PopupImpl(mediaClient, pickerConfig)];
            }
        });
    });
}
exports.MediaPicker = MediaPicker;
// REACT COMPONENTS
var dropzone_1 = require("./components/dropzone");
exports.Dropzone = dropzone_1.DropzoneLoader;
var clipboard_1 = require("./components/clipboard");
exports.Clipboard = clipboard_1.ClipboardLoader;
var browser_1 = require("./components/browser");
exports.Browser = browser_1.BrowserLoader;
//# sourceMappingURL=index.js.map