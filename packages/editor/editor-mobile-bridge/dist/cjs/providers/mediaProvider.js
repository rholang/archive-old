"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var cross_platform_promise_1 = require("../cross-platform-promise");
var getMediaToken = function (context) {
    return cross_platform_promise_1.createPromise('getAuth', 
    // if collectionName exists in media's AuthContext, pass it along
    // otherwise pass an empty string (note that undefined doesn't work well with native promises)
    context && context.collectionName ? context.collectionName : '').submit();
};
function createMediaProvider() {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var mediaClientConfig;
        return tslib_1.__generator(this, function (_a) {
            mediaClientConfig = {
                authProvider: function (context) { return getMediaToken(context); },
            };
            return [2 /*return*/, Promise.resolve({
                    uploadMediaClientConfig: mediaClientConfig,
                    viewMediaClientConfig: mediaClientConfig,
                    uploadParams: {
                        collection: '',
                    },
                })];
        });
    });
}
exports.default = createMediaProvider();
//# sourceMappingURL=mediaProvider.js.map