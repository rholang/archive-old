"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var url = tslib_1.__importStar(require("url"));
var auth_1 = require("../../domain/auth");
var giphyApiKey = 'lBOxhhz1BM62Y3JsK0iQv1pRYyOGUjR8';
var toJson = function (response) { return response.json(); };
var MediaApiFetcher = /** @class */ (function () {
    function MediaApiFetcher() {
        var _this = this;
        this.fetchTrendingGifs = function (offset) {
            var baseUrl = 'https://api.giphy.com/v1/gifs/trending';
            var params = {
                api_key: giphyApiKey,
                rating: 'pg',
                offset: offset,
            };
            var url = "" + baseUrl + _this.stringifyParams(params);
            return fetch(url)
                .then(toJson)
                .then(_this.mapGiphyResponseToViewModel);
        };
        this.fetchGifsRelevantToSearch = function (query, offset) {
            var baseUrl = 'https://api.giphy.com/v1/gifs/search';
            var params = {
                api_key: giphyApiKey,
                rating: 'pg',
                q: query,
                offset: offset,
            };
            var url = "" + baseUrl + _this.stringifyParams(params);
            return fetch(url)
                .then(toJson)
                .then(_this.mapGiphyResponseToViewModel);
        };
        this.mapGiphyResponseToViewModel = function (response) {
            var data = response.data, pagination = response.pagination;
            var cardModels = data.map(function (gif) {
                var id = gif.id, slug = gif.slug;
                var _a = gif.images.fixed_width, size = _a.size, url = _a.url, width = _a.width, height = _a.height;
                var name = slug.replace(new RegExp("-" + id), '');
                var metadata = {
                    id: id,
                    name: name,
                    mediaType: 'image',
                    size: parseInt(size, 10),
                };
                return {
                    metadata: metadata,
                    dataURI: url,
                    dimensions: {
                        width: parseInt(width, 10),
                        height: parseInt(height, 10),
                    },
                };
            });
            return {
                cardModels: cardModels,
                totalResultCount: pagination.total_count,
            };
        };
    }
    MediaApiFetcher.prototype.fetchCloudAccountFolder = function (auth, serviceName, accountId, folderId, cursor) {
        var _this = this;
        return this.query(exports.pickerUrl(auth.baseUrl) + "/service/" + serviceName + "/" + accountId + "/folder", 'GET', {
            folderId: folderId,
            limit: 100,
            cursor: cursor,
        }, auth_1.mapAuthToAuthHeaders(auth))
            .then(toJson)
            .then(function (_a) {
            var serviceFolder = _a.data;
            if (serviceName === 'dropbox') {
                return tslib_1.__assign(tslib_1.__assign({}, serviceFolder), { items: _this.sortDropboxFiles(serviceFolder.items) });
            }
            else {
                return serviceFolder;
            }
        });
    };
    MediaApiFetcher.prototype.getServiceList = function (auth) {
        return this.query(exports.pickerUrl(auth.baseUrl) + "/accounts", 'GET', {}, auth_1.mapAuthToAuthHeaders(auth))
            .then(toJson)
            .then(function (_a) {
            var services = _a.data;
            return flattenAccounts(services);
        });
    };
    MediaApiFetcher.prototype.unlinkCloudAccount = function (auth, accountId) {
        return this.query(exports.pickerUrl(auth.baseUrl) + "/account/" + accountId, 'DELETE', {}, auth_1.mapAuthToAuthHeaders(auth)).then(function () { });
    };
    MediaApiFetcher.prototype.stringifyParams = function (queryParams) {
        var keys = Object.keys(queryParams);
        if (!keys.length) {
            return '';
        }
        var stringifiedParams = keys
            .map(function (key) {
            var value = queryParams[key];
            return value !== undefined ? key + "=" + value : undefined;
        })
            .filter(function (key) { return !!key; })
            .join('&');
        return "?" + stringifiedParams;
    };
    MediaApiFetcher.prototype.query = function (baseUrl, method, payload, authHeaders) {
        var contentType = 'application/json; charset=utf-8';
        var headers = new Headers(tslib_1.__assign(tslib_1.__assign({}, authHeaders), { 'Content-Type': contentType }));
        var params = method === 'GET' ? this.stringifyParams(payload) : '';
        var body = method !== 'GET' ? JSON.stringify(payload) : undefined;
        var url = "" + baseUrl + params;
        var request = new Request(url, {
            method: method,
            headers: headers,
            body: body,
        });
        return fetch(request);
    };
    MediaApiFetcher.prototype.isFolder = function (item) {
        return item.mimeType === 'application/vnd.atlassian.mediapicker.folder';
    };
    MediaApiFetcher.prototype.sortDropboxFiles = function (items) {
        var _this = this;
        return items.sort(function (a, b) {
            var isAFolder = _this.isFolder(a);
            var isBFolder = _this.isFolder(b);
            if (!isAFolder && isBFolder) {
                return 1;
            }
            if (isAFolder && !isBFolder) {
                return -1;
            }
            var aName = a.name.toLowerCase();
            var bName = b.name.toLowerCase();
            if (aName > bName) {
                return 1;
            }
            else if (aName < bName) {
                return -1;
            }
            else {
                return 0;
            }
        });
    };
    return MediaApiFetcher;
}());
exports.MediaApiFetcher = MediaApiFetcher;
exports.fileStoreUrl = function (baseUrl) {
    var _a = url.parse(baseUrl), protocol = _a.protocol, host = _a.host;
    return protocol + "//" + host;
};
exports.pickerUrl = function (baseUrl) {
    return exports.fileStoreUrl(baseUrl) + "/picker";
};
function flattenAccounts(services) {
    return services.reduce(function (accounts, service) {
        return accounts.concat(service.accounts.map(function (account) { return (tslib_1.__assign(tslib_1.__assign({}, account), { type: service.type })); }));
    }, new Array());
}
exports.flattenAccounts = flattenAccounts;
//# sourceMappingURL=fetcher.js.map