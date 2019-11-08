"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var eventemitter2_1 = require("eventemitter2");
var media_store_1 = require("./media-store");
var collection_fetcher_1 = require("./collection-fetcher");
var file_fetcher_1 = require("./file-fetcher");
var MediaClient = /** @class */ (function () {
    function MediaClient(mediaClientConfig) {
        this.mediaClientConfig = mediaClientConfig;
        this.mediaStore = new media_store_1.MediaStore({
            authProvider: mediaClientConfig.authProvider,
        });
        this.config = mediaClientConfig;
        this.collection = new collection_fetcher_1.CollectionFetcher(this.mediaStore);
        this.file = new file_fetcher_1.FileFetcherImpl(this.mediaStore);
        this.eventEmitter = new eventemitter2_1.EventEmitter2();
    }
    MediaClient.prototype.getImage = function (id, params, controller, fetchMaxRes) {
        return this.mediaStore.getImage(id, params, controller, fetchMaxRes);
    };
    MediaClient.prototype.getImageUrl = function (id, params) {
        return this.mediaStore.getFileImageURL(id, params);
    };
    MediaClient.prototype.getImageMetadata = function (id, params) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.mediaStore.getImageMetadata(id, params)];
                    case 1: return [2 /*return*/, (_a.sent()).metadata];
                }
            });
        });
    };
    MediaClient.prototype.on = function (event, listener) {
        this.eventEmitter.on(event, listener);
    };
    MediaClient.prototype.off = function (event, listener) {
        this.eventEmitter.off(event, listener);
    };
    MediaClient.prototype.emit = function (event, payload) {
        return this.eventEmitter.emit(event, payload);
    };
    return MediaClient;
}());
exports.MediaClient = MediaClient;
//# sourceMappingURL=media-client.js.map