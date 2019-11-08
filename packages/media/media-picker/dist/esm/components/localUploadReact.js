import { __extends } from "tslib";
import { Component } from 'react';
import { UploadComponent } from './component';
import { UploadServiceImpl } from '../service/uploadServiceImpl';
var LocalUploadComponentReact = /** @class */ (function (_super) {
    __extends(LocalUploadComponentReact, _super);
    function LocalUploadComponentReact(props) {
        var _this = _super.call(this, props) || this;
        _this.uploadComponent = new UploadComponent();
        _this.cancel = function (uniqueIdentifier) {
            _this.uploadService.cancel(uniqueIdentifier);
        };
        _this.onFilesAdded = function (_a) {
            var files = _a.files;
            _this.uploadComponent.emitUploadsStart(files);
        };
        _this.onFilePreviewUpdate = function (_a) {
            var file = _a.file, preview = _a.preview;
            _this.uploadComponent.emitUploadPreviewUpdate(file, preview);
        };
        _this.onFileUploading = function (_a) {
            var file = _a.file, progress = _a.progress;
            _this.uploadComponent.emitUploadProgress(file, progress);
        };
        _this.onFileConverting = function (_a) {
            var file = _a.file;
            _this.uploadComponent.emitUploadProcessing(file);
        };
        _this.onFileConverted = function (payload) {
            _this.uploadComponent.emitUploadEnd(payload.file);
        };
        _this.onUploadError = function (_a) {
            var file = _a.file, error = _a.error;
            _this.uploadComponent.emitUploadError(file, error);
        };
        var _a = _this.props, mediaClient = _a.mediaClient, config = _a.config, onUploadsStart = _a.onUploadsStart, onPreviewUpdate = _a.onPreviewUpdate, onStatusUpdate = _a.onStatusUpdate, onProcessing = _a.onProcessing, onEnd = _a.onEnd, onError = _a.onError;
        var tenantUploadParams = config.uploadParams;
        var _b = config.shouldCopyFileToRecents, shouldCopyFileToRecents = _b === void 0 ? true : _b;
        if (onUploadsStart) {
            _this.uploadComponent.on('uploads-start', onUploadsStart);
        }
        if (onPreviewUpdate) {
            _this.uploadComponent.on('upload-preview-update', onPreviewUpdate);
        }
        if (onStatusUpdate) {
            _this.uploadComponent.on('upload-status-update', onStatusUpdate);
        }
        if (onProcessing) {
            _this.uploadComponent.on('upload-processing', onProcessing);
        }
        if (onEnd) {
            _this.uploadComponent.on('upload-end', onEnd);
        }
        if (onError) {
            _this.uploadComponent.on('upload-error', onError);
        }
        _this.uploadService = new UploadServiceImpl(mediaClient, tenantUploadParams, shouldCopyFileToRecents);
        _this.uploadService.on('files-added', _this.onFilesAdded);
        _this.uploadService.on('file-preview-update', _this.onFilePreviewUpdate);
        _this.uploadService.on('file-uploading', _this.onFileUploading);
        _this.uploadService.on('file-converting', _this.onFileConverting);
        _this.uploadService.on('file-converted', _this.onFileConverted);
        _this.uploadService.on('file-upload-error', _this.onUploadError);
        return _this;
    }
    LocalUploadComponentReact.prototype.setUploadParams = function (uploadParams) {
        this.uploadService.setUploadParams(uploadParams);
    };
    return LocalUploadComponentReact;
}(Component));
export { LocalUploadComponentReact };
//# sourceMappingURL=localUploadReact.js.map