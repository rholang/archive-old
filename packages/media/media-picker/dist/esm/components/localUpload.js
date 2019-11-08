import { __extends } from "tslib";
import { UploadComponent } from './component';
import { UploadServiceImpl } from '../service/uploadServiceImpl';
var LocalUploadComponent = /** @class */ (function (_super) {
    __extends(LocalUploadComponent, _super);
    function LocalUploadComponent(mediaClient, config) {
        var _this = _super.call(this) || this;
        _this.addFiles = function (files) { return _this.uploadService.addFiles(files); };
        _this.onFilesAdded = function (_a) {
            var files = _a.files;
            _this.emitUploadsStart(files);
        };
        _this.onFilePreviewUpdate = function (_a) {
            var file = _a.file, preview = _a.preview;
            _this.emitUploadPreviewUpdate(file, preview);
        };
        _this.onFileUploading = function (_a) {
            var file = _a.file, progress = _a.progress;
            _this.emitUploadProgress(file, progress);
        };
        _this.onFileConverting = function (_a) {
            var file = _a.file;
            _this.emitUploadProcessing(file);
        };
        _this.onFileConverted = function (payload) {
            _this.emitUploadEnd(payload.file);
        };
        _this.onUploadError = function (_a) {
            var file = _a.file, error = _a.error;
            _this.emitUploadError(file, error);
        };
        var tenantUploadParams = config.uploadParams;
        _this.mediaClient = mediaClient;
        var _a = config.shouldCopyFileToRecents, shouldCopyFileToRecents = _a === void 0 ? true : _a;
        _this.uploadService = new UploadServiceImpl(_this.mediaClient, tenantUploadParams, shouldCopyFileToRecents);
        _this.config = config;
        _this.uploadService.on('files-added', _this.onFilesAdded);
        _this.uploadService.on('file-preview-update', _this.onFilePreviewUpdate);
        _this.uploadService.on('file-uploading', _this.onFileUploading);
        _this.uploadService.on('file-converting', _this.onFileConverting);
        _this.uploadService.on('file-converted', _this.onFileConverted);
        _this.uploadService.on('file-upload-error', _this.onUploadError);
        return _this;
    }
    LocalUploadComponent.prototype.cancel = function (uniqueIdentifier) {
        this.uploadService.cancel(uniqueIdentifier);
    };
    LocalUploadComponent.prototype.setUploadParams = function (uploadParams) {
        this.uploadService.setUploadParams(uploadParams);
    };
    return LocalUploadComponent;
}(UploadComponent));
export { LocalUploadComponent };
//# sourceMappingURL=localUpload.js.map