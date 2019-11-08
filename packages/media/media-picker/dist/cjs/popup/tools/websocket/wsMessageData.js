"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isRemoteUploadStartData = function (data) {
    return data && data.type === 'RemoteUploadStart';
};
exports.isRemoteUploadProgressData = function (data) {
    return data.type === 'RemoteUploadProgress';
};
exports.isRemoteUploadEndData = function (data) {
    return data.type === 'RemoteUploadEnd';
};
var isErrorData = function (data) {
    return data.type === 'Error';
};
exports.isRemoteUploadErrorData = function (data) {
    return isErrorData(data) && data.error === 'RemoteUploadFail';
};
exports.isNotifyMetadata = function (data) {
    return data.type === 'NotifyMetadata';
};
exports.isServerError = function (data) {
    return isErrorData(data) && data.error === 'ServerError';
};
exports.isNoUserFound = function (data) {
    return isErrorData(data) && data.error === 'NoUserFound';
};
//# sourceMappingURL=wsMessageData.js.map