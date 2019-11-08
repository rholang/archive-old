import { __awaiter, __generator } from "tslib";
import { createPromise } from '../cross-platform-promise';
var getMediaToken = function (context) {
    return createPromise('getAuth', 
    // if collectionName exists in media's AuthContext, pass it along
    // otherwise pass an empty string (note that undefined doesn't work well with native promises)
    context && context.collectionName ? context.collectionName : '').submit();
};
function createMediaProvider() {
    return __awaiter(this, void 0, void 0, function () {
        var mediaClientConfig;
        return __generator(this, function (_a) {
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
export default createMediaProvider();
//# sourceMappingURL=mediaProvider.js.map