"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
exports.FETCH_ERROR_NAME = 'FetchError';
function enrichFetchError(error, status) {
    return {
        name: exports.FETCH_ERROR_NAME,
        message: error.message,
        stack: error.stack,
        status: status,
    };
}
exports.enrichFetchError = enrichFetchError;
exports.fetchJsonSameOrigin = function (url, init) {
    return fetch(url, tslib_1.__assign({ credentials: 'same-origin' }, init)).then(function (response) {
        if (response.ok) {
            return response.json();
        }
        throw enrichFetchError(new Error("Unable to fetch " + url + " " + response.status + " " + response.statusText), response.status);
    });
};
exports.fetchJson = function (url) { return exports.fetchJsonSameOrigin(url); };
exports.postJson = function (url, data) {
    return exports.fetchJsonSameOrigin(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });
};
//# sourceMappingURL=fetch.js.map