"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var environments_1 = require("../../utils/environments");
var EditorCardProvider = /** @class */ (function () {
    function EditorCardProvider(envKey) {
        this.baseUrl = environments_1.getBaseUrl(envKey);
        this.resolverUrl = environments_1.getResolverUrl(envKey);
    }
    EditorCardProvider.prototype.resolve = function (url, appearance) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var constructedUrl, result, e_1;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        constructedUrl = this.resolverUrl + "/check";
                        return [4 /*yield*/, fetch(constructedUrl, {
                                method: 'POST',
                                credentials: 'include',
                                headers: {
                                    'Content-Type': 'application/json',
                                    Accept: 'application/json',
                                    Origin: this.baseUrl,
                                },
                                body: JSON.stringify({ resourceUrl: url }),
                            })];
                    case 1: return [4 /*yield*/, (_a.sent()).json()];
                    case 2:
                        result = _a.sent();
                        if (result && result.isSupported) {
                            return [2 /*return*/, {
                                    type: appearance === 'inline' ? 'inlineCard' : 'blockCard',
                                    attrs: {
                                        url: url,
                                    },
                                }];
                        }
                        return [3 /*break*/, 4];
                    case 3:
                        e_1 = _a.sent();
                        // eslint-disable-next-line
                        console.warn("Error when trying to check Smart Card url \"" + url + " - " + e_1.prototype.name + " " + e_1.message, e_1);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/, Promise.reject(undefined)];
                }
            });
        });
    };
    return EditorCardProvider;
}());
exports.EditorCardProvider = EditorCardProvider;
exports.editorCardProvider = new EditorCardProvider();
//# sourceMappingURL=index.js.map