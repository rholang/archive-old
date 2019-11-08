"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var HttpError = /** @class */ (function (_super) {
    tslib_1.__extends(HttpError, _super);
    function HttpError(status, message) {
        var _this = _super.call(this, message) || this;
        _this.status = status;
        switch (status) {
            case 400:
            case 403:
            case 404:
                _this.canRetry = false;
                break;
            default:
                _this.canRetry = true;
                break;
        }
        return _this;
    }
    return HttpError;
}(Error));
exports.HttpError = HttpError;
//# sourceMappingURL=HttpError.js.map