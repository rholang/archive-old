"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var ALLOWED_RESPONSE_STATUS_CODES = [200, 401, 404];
function request(method, url, data) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var requestConfig, response;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    requestConfig = tslib_1.__assign({ method: method, credentials: 'include', headers: {
                            Accept: 'application/json',
                            'Cache-Control': 'no-cache',
                            'Content-Type': 'application/json',
                        } }, (data ? { body: JSON.stringify(data) } : {}));
                    return [4 /*yield*/, fetch(url, requestConfig)];
                case 1:
                    response = _a.sent();
                    if (!(response.ok || ALLOWED_RESPONSE_STATUS_CODES.includes(response.status))) return [3 /*break*/, 3];
                    return [4 /*yield*/, response.json()];
                case 2: return [2 /*return*/, _a.sent()];
                case 3: throw response;
            }
        });
    });
}
exports.request = request;
//# sourceMappingURL=api.js.map