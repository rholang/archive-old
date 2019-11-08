import { __awaiter, __generator } from "tslib";
var access = {
    'urn:filestore:collection:MediaServicesSample': ['read', 'insert'],
    'urn:filestore:chunk:*': ['create', 'read'],
    'urn:filestore:upload': ['create'],
    'urn:filestore:upload:*': ['read', 'update'],
    'urn:filestore:file': ['create'],
    'urn:filestore:file:*': ['read', 'update'],
    'urn:filestore:collection': ['create'],
    'urn:filestore:collection:mediapicker-test': ['read', 'insert'],
};
export var getAuthFromContextProvider = function () { return __awaiter(void 0, void 0, void 0, function () {
    var url, body, headers, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                url = 'https://api-private.dev.atlassian.com/media-playground/api/token/tenant?environment=asap';
                body = JSON.stringify({
                    access: access,
                });
                headers = new Headers();
                headers.append('Content-Type', 'application/json; charset=utf-8');
                headers.append('Accept', 'text/plain, */*; q=0.01');
                return [4 /*yield*/, fetch(url, {
                        method: 'POST',
                        body: body,
                        headers: headers,
                        credentials: 'include',
                    })];
            case 1:
                response = _a.sent();
                return [2 /*return*/, response.json()];
        }
    });
}); };
//# sourceMappingURL=getAuthFromContextProvider.js.map