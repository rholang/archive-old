import { __assign } from "tslib";
export var FETCH_ERROR_NAME = 'FetchError';
export function enrichFetchError(error, status) {
    return {
        name: FETCH_ERROR_NAME,
        message: error.message,
        stack: error.stack,
        status: status,
    };
}
export var fetchJsonSameOrigin = function (url, init) {
    return fetch(url, __assign({ credentials: 'same-origin' }, init)).then(function (response) {
        if (response.ok) {
            return response.json();
        }
        throw enrichFetchError(new Error("Unable to fetch " + url + " " + response.status + " " + response.statusText), response.status);
    });
};
export var fetchJson = function (url) { return fetchJsonSameOrigin(url); };
export var postJson = function (url, data) {
    return fetchJsonSameOrigin(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });
};
//# sourceMappingURL=fetch.js.map