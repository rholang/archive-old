"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function batch(callback) {
    var calls = [];
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (calls.length === 0) {
            window.setTimeout(function () {
                callback(calls);
                calls = [];
            });
            calls = [];
        }
        calls.push(args);
    };
}
exports.batch = batch;
function batchByKey(callback) {
    var calls = {};
    return function (key) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        if (!calls[key]) {
            window.setTimeout(function () {
                callback(key, calls[key]);
                delete calls[key];
            });
            calls[key] = [];
        }
        calls[key].push(args);
    };
}
exports.batchByKey = batchByKey;
//# sourceMappingURL=batched.js.map