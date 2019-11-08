"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.nextTick = function () { return Promise.resolve(); };
exports.sleep = function (time) {
    if (time === void 0) { time = 0; }
    return new Promise(function (resolve) { return window.setTimeout(resolve, time); });
};
//# sourceMappingURL=nextTick.js.map