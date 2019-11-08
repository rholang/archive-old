import { __awaiter, __generator } from "tslib";
import memoizeOne from 'memoize-one';
function coalesceProductIdToUrlShortenerProduct(product) {
    switch (product) {
        case 'confluence':
            return 'confluence';
        case 'jira-software':
        case 'jira-core':
        case 'jira-servicedesk':
            return 'jira';
        default:
            return undefined;
    }
}
var warnProductNotSupported = memoizeOne(function (productId) {
    var isProduction = process.env.NODE_ENV === 'production';
    if (!isProduction) {
        /* eslint-disable no-console */
        console['warn']("elements/share: product \"" + productId + "\" is not supported by the URL Shortener!");
        /* eslint-enable no-console */
    }
});
var AtlassianUrlShortenerClient = /** @class */ (function () {
    function AtlassianUrlShortenerClient() {
    }
    AtlassianUrlShortenerClient.prototype.isSupportedProduct = function (product) {
        return !!coalesceProductIdToUrlShortenerProduct(product);
    };
    AtlassianUrlShortenerClient.prototype.shorten = function (fullLink, cloudId, productId) {
        return __awaiter(this, void 0, void 0, function () {
            var product, response, result, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        product = coalesceProductIdToUrlShortenerProduct(productId);
                        if (!product) {
                            warnProductNotSupported(productId);
                            return [2 /*return*/, {
                                    shortUrl: fullLink,
                                }];
                        }
                        return [4 /*yield*/, fetch('/gateway/api/atl-link/create', {
                                method: 'POST',
                                headers: {
                                    'Content-Type': 'application/json',
                                },
                                body: JSON.stringify({
                                    path: fullLink,
                                    cloudId: cloudId,
                                    product: product,
                                }),
                            })];
                    case 1:
                        response = _a.sent();
                        if (!response.ok)
                            throw new Error("status=\"" + response.status + "\"");
                        return [4 /*yield*/, response.json()];
                    case 2:
                        result = _a.sent();
                        if (!result.shortUrl)
                            throw new Error('Breach of contract!');
                        return [2 /*return*/, result];
                    case 3:
                        err_1 = _a.sent();
                        err_1.message = "While shortening URL: " + err_1.message + "!";
                        throw err_1;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    return AtlassianUrlShortenerClient;
}());
export { AtlassianUrlShortenerClient };
//# sourceMappingURL=AtlassianUrlShortenerClient.js.map