"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
function waitUntil(predicate, timeout, maxRetries) {
    if (timeout === void 0) { timeout = 100; }
    if (maxRetries === void 0) { maxRetries = 10; }
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        return tslib_1.__generator(this, function (_a) {
            return [2 /*return*/, new Promise(function (resolve, reject) {
                    var check = function (retry) {
                        if (retry > 0) {
                            if (predicate()) {
                                resolve();
                            }
                            else {
                                window.setTimeout(check, timeout, retry - 1);
                            }
                        }
                        else {
                            reject('timed out');
                        }
                    };
                    check(maxRetries);
                })];
        });
    });
}
exports.waitUntil = waitUntil;
exports.default = waitUntil;
//# sourceMappingURL=waitUntil.js.map