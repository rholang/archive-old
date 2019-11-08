"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var media_picker_1 = require("@atlaskit/media-picker");
var PickerFacade = /** @class */ (function () {
    function PickerFacade(pickerType, config, pickerConfig, mediaPickerFactoryClass, analyticsName) {
        var _this = this;
        if (mediaPickerFactoryClass === void 0) { mediaPickerFactoryClass = media_picker_1.MediaPicker; }
        this.config = config;
        this.pickerConfig = pickerConfig;
        this.mediaPickerFactoryClass = mediaPickerFactoryClass;
        this.onDragListeners = [];
        this.onStartListeners = [];
        this.eventListeners = {};
        this.handleUploadPreviewUpdate = function (event) {
            var file = event.file, preview = event.preview;
            var _a = media_picker_1.isImagePreview(preview)
                ? preview
                : { dimensions: undefined, scaleFactor: undefined }, dimensions = _a.dimensions, scaleFactor = _a.scaleFactor;
            var state = {
                id: file.id,
                fileName: file.name,
                fileSize: file.size,
                fileMimeType: file.type,
                dimensions: dimensions,
                scaleFactor: scaleFactor,
            };
            _this.eventListeners[file.id] = [];
            _this.onStartListeners.forEach(function (cb) {
                return cb(state, function (evt) { return _this.subscribeStateChanged(file, evt); }, _this.analyticsName || _this.pickerType);
            });
        };
        this.subscribeStateChanged = function (file, onStateChanged) {
            var subscribers = _this.eventListeners[file.id];
            if (!subscribers) {
                return;
            }
            subscribers.push(onStateChanged);
        };
        this.handleUploadError = function (_a) {
            var error = _a.error;
            if (!error || !error.fileId) {
                var err = new Error("Media: unknown upload-error received from Media Picker: " + (error &&
                    error.name));
                _this.errorReporter.captureException(err);
                return;
            }
            var listeners = _this.eventListeners[error.fileId];
            if (!listeners) {
                return;
            }
            listeners.forEach(function (cb) {
                return cb({
                    id: error.fileId,
                    status: 'error',
                    error: error && { description: error.description, name: error.name },
                });
            });
            // remove listeners
            delete _this.eventListeners[error.fileId];
        };
        this.handleMobileUploadEnd = function (event) {
            var file = event.file;
            var listeners = _this.eventListeners[file.id];
            if (!listeners) {
                return;
            }
            listeners.forEach(function (cb) {
                return cb({
                    id: file.id,
                    status: 'mobile-upload-end',
                    fileMimeType: file.type,
                    collection: file.collectionName,
                    publicId: file.publicId,
                });
            });
        };
        this.handleReady = function (event) {
            var file = event.file;
            var listeners = _this.eventListeners[file.id];
            if (!listeners) {
                return;
            }
            listeners.forEach(function (cb) {
                return cb({
                    id: file.id,
                    status: 'ready',
                });
            });
            // remove listeners
            delete _this.eventListeners[file.id];
        };
        this.pickerType = pickerType;
        this.errorReporter = config.errorReporter;
        this.analyticsName = analyticsName;
    }
    PickerFacade.prototype.init = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var picker, _a;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!(this.pickerType === 'customMediaPicker')) return [3 /*break*/, 1];
                        picker = this.picker = this.pickerConfig;
                        return [3 /*break*/, 3];
                    case 1:
                        if (!(this.pickerType === 'popup')) return [3 /*break*/, 3];
                        _a = this;
                        return [4 /*yield*/, this.mediaPickerFactoryClass(this.config.mediaClientConfig, this.pickerConfig)];
                    case 2:
                        picker = _a.picker = _b.sent();
                        _b.label = 3;
                    case 3:
                        picker.on('upload-preview-update', this.handleUploadPreviewUpdate);
                        picker.on('upload-processing', this.handleReady);
                        // media picker not always fires upload-processing but always fires upload-end, and since handleReady() is idempotent it can be treated the same
                        picker.on('upload-end', this.handleReady);
                        picker.on('upload-error', this.handleUploadError);
                        picker.on('mobile-upload-end', this.handleMobileUploadEnd);
                        return [2 /*return*/, this];
                }
            });
        });
    };
    Object.defineProperty(PickerFacade.prototype, "type", {
        get: function () {
            return this.pickerType;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PickerFacade.prototype, "mediaPicker", {
        get: function () {
            return this.picker;
        },
        enumerable: true,
        configurable: true
    });
    PickerFacade.prototype.destroy = function () {
        var picker = this.picker;
        if (!picker) {
            return;
        }
        picker.removeAllListeners('upload-preview-update');
        picker.removeAllListeners('upload-processing');
        picker.removeAllListeners('upload-end');
        picker.removeAllListeners('upload-error');
        this.onStartListeners = [];
        this.onDragListeners = [];
        try {
            if (this.pickerType === 'popup') {
                picker.teardown();
            }
        }
        catch (ex) {
            this.errorReporter.captureException(ex);
        }
    };
    PickerFacade.prototype.setUploadParams = function (params) {
        if (this.picker) {
            this.picker.setUploadParams(params);
        }
    };
    PickerFacade.prototype.onClose = function (cb) {
        var picker = this.picker;
        if (this.pickerType === 'popup') {
            var popupPicker_1 = picker;
            popupPicker_1.on('closed', cb);
            return function () { return popupPicker_1.off('closed', cb); };
        }
        return function () { };
    };
    PickerFacade.prototype.show = function () {
        if (this.pickerType === 'popup') {
            try {
                this.picker.show();
            }
            catch (ex) {
                this.errorReporter.captureException(ex);
            }
        }
    };
    PickerFacade.prototype.hide = function () {
        if (this.pickerType === 'popup') {
            this.picker.hide();
        }
    };
    PickerFacade.prototype.onNewMedia = function (cb) {
        this.onStartListeners.push(cb);
    };
    PickerFacade.prototype.onDrag = function (cb) {
        this.onDragListeners.push(cb);
    };
    return PickerFacade;
}());
exports.default = PickerFacade;
//# sourceMappingURL=picker-facade.js.map