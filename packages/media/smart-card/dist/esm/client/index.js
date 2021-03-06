import { __awaiter, __extends, __generator } from "tslib";
import * as api from './api';
import { getResolverUrl } from '../utils/environments';
import { getError } from '../state/actions/helpers';
import DataLoader from 'dataloader';
var FetchError = /** @class */ (function (_super) {
    __extends(FetchError, _super);
    function FetchError(kind, message) {
        var _this = _super.call(this, kind + ": " + message) || this;
        _this.kind = kind;
        _this.name = 'FetchError';
        return _this;
    }
    return FetchError;
}(Error));
export { FetchError };
var CardClient = /** @class */ (function () {
    function CardClient(envKey) {
        this.resolverUrl = getResolverUrl(envKey);
        this.loadersByDomain = {};
    }
    CardClient.prototype.batchResolve = function (resourceUrls) {
        return __awaiter(this, void 0, void 0, function () {
            var urls;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        urls = resourceUrls.map(function (resourceUrl) { return ({ resourceUrl: resourceUrl }); });
                        return [4 /*yield*/, api.request('post', this.resolverUrl + "/resolve/batch", urls)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    CardClient.prototype.createLoader = function () {
        var _this = this;
        return new DataLoader(function (urls) { return _this.batchResolve(urls); }, {
            maxBatchSize: 50,
            cache: false,
        });
    };
    CardClient.prototype.getLoader = function (hostname) {
        if (!this.loadersByDomain[hostname]) {
            this.loadersByDomain[hostname] = this.createLoader();
        }
        return this.loadersByDomain[hostname];
    };
    CardClient.prototype.fetchData = function (url) {
        return __awaiter(this, void 0, void 0, function () {
            var loader, response, body, status, errorType;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        loader = this.getLoader(new URL(url).hostname);
                        return [4 /*yield*/, loader.load(url)];
                    case 1:
                        response = _a.sent();
                        body = response.body, status = response.status;
                        errorType = getError(body);
                        switch (errorType) {
                            case 'ResolveAuthError':
                                throw new FetchError('auth', "authentication required for URL " + url + ", error: " + errorType);
                            case 'InternalServerError': // Timeouts and ORS failures
                            case 'ResolveUnsupportedError': // URL isn't supported
                                throw new FetchError('fatal', "the URL " + url + " is unsupported, received server error: " + errorType);
                            default:
                                if (status === 404) {
                                    return [2 /*return*/, {
                                            meta: {
                                                visibility: 'not_found',
                                                access: 'forbidden',
                                                auth: [],
                                                definitionId: 'provider-not-found',
                                            },
                                            data: {
                                                url: url,
                                            },
                                        }];
                                }
                                return [2 /*return*/, response.body];
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    return CardClient;
}());
export default CardClient;
//# sourceMappingURL=index.js.map