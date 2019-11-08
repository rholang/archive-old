"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var UploadController = /** @class */ (function () {
    function UploadController() {
    }
    UploadController.prototype.setAbort = function (abortFunction) {
        this.abortFunction = abortFunction;
    };
    UploadController.prototype.abort = function () {
        if (this.abortFunction) {
            this.abortFunction();
        }
    };
    return UploadController;
}());
exports.UploadController = UploadController;
//# sourceMappingURL=upload-controller.js.map