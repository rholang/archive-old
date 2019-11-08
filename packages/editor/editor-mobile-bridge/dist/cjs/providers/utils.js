"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var cross_platform_promise_1 = require("../cross-platform-promise");
var globalFetch = window.fetch;
exports.mockFetchFor = function (urls) {
    if (urls === void 0) { urls = []; }
    window.fetch = function (request, options) {
        var url = typeof request === 'string' ? request : request.url;
        // Determine whether its a URL we want native to handle, otherwise continue as normal.
        var shouldMock = urls.find(function (u) { return url.startsWith(u); });
        if (!shouldMock) {
            return globalFetch(url, options);
        }
        return cross_platform_promise_1.createPromise('nativeFetch', JSON.stringify({ url: url, options: options }))
            .submit()
            .then(function (_a) {
            var response = _a.response, status = _a.status, statusText = _a.statusText;
            return Promise.resolve(new Response(response, { status: status, statusText: statusText }));
        });
    };
};
//# sourceMappingURL=utils.js.map