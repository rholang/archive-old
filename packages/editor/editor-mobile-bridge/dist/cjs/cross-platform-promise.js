"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var web_to_native_1 = require("./editor/web-to-native");
var pendingPromises = new Map();
exports.counter = 0;
var Holder = /** @class */ (function () {
    function Holder() {
    }
    return Holder;
}());
function createPromise(name, args) {
    var holder = createHolder();
    var uuid = exports.counter++ + '';
    pendingPromises.set(uuid, holder);
    return {
        submit: function () {
            web_to_native_1.toNativeBridge.submitPromise(name, uuid, args);
            return holder
                .promise.then(function (data) {
                pendingPromises.delete(uuid);
                return data;
            })
                .catch(function (data) {
                pendingPromises.delete(uuid);
                return Promise.reject(data);
            });
        },
    };
}
exports.createPromise = createPromise;
function createHolder() {
    var holder = new Holder();
    holder.promise = new Promise(function (resolve, reject) {
        holder.resolve = function (data) { return resolve(data); };
        holder.reject = function () { return reject(); };
    });
    return holder;
}
function resolvePromise(uuid, resolution) {
    var holder = pendingPromises.get(uuid);
    if (holder) {
        holder.resolve(resolution);
    }
}
exports.resolvePromise = resolvePromise;
function rejectPromise(uuid) {
    var holder = pendingPromises.get(uuid);
    if (holder) {
        holder.reject();
    }
}
exports.rejectPromise = rejectPromise;
// expose this function for testing
function setCounter(value) {
    exports.counter = value;
}
exports.setCounter = setCounter;
//# sourceMappingURL=cross-platform-promise.js.map