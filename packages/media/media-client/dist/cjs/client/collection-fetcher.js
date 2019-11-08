"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var ReplaySubject_1 = require("rxjs/ReplaySubject");
var __1 = require("..");
exports.collectionCache = {};
var createCacheEntry = function () { return ({
    items: [],
    subject: new ReplaySubject_1.ReplaySubject(1),
    isLoadingNextPage: false,
}); };
var CollectionFetcher = /** @class */ (function () {
    function CollectionFetcher(mediaStore) {
        this.mediaStore = mediaStore;
    }
    CollectionFetcher.prototype.createFileStateObserver = function (id, details) {
        var subject = new ReplaySubject_1.ReplaySubject(1);
        var mediaFile = tslib_1.__assign({ id: id }, details);
        var fileState = __1.mapMediaFileToFileState({ data: mediaFile });
        subject.next(fileState);
        return subject;
    };
    CollectionFetcher.prototype.populateCache = function (items) {
        var _this = this;
        items.forEach(function (item) {
            var fileStream = _this.createFileStateObserver(item.id, item.details);
            __1.getFileStreamsCache().set(item.id, fileStream);
        });
    };
    CollectionFetcher.prototype.removeFromCache = function (id, collectionName) {
        var collectionCacheIndex = exports.collectionCache[collectionName].items.findIndex(function (item) { return item.id === id; });
        if (collectionCacheIndex === -1) {
            return;
        }
        __1.getFileStreamsCache().remove(id);
        exports.collectionCache[collectionName].items.splice(collectionCacheIndex, 1);
    };
    CollectionFetcher.prototype.getItems = function (collectionName, params) {
        var _this = this;
        if (!exports.collectionCache[collectionName]) {
            exports.collectionCache[collectionName] = createCacheEntry();
        }
        var collection = exports.collectionCache[collectionName];
        var subject = collection.subject;
        this.mediaStore
            .getCollectionItems(collectionName, tslib_1.__assign(tslib_1.__assign({}, params), { details: 'full' }))
            .then(function (items) {
            var _a = items.data, contents = _a.contents, nextInclusiveStartKey = _a.nextInclusiveStartKey;
            _this.populateCache(contents);
            // It's hard to merge two together, so we just take what's came from the server.
            // Since we load only one page > 2 pages will be ditched from the cache.
            collection.items = items.data.contents;
            collection.nextInclusiveStartKey = nextInclusiveStartKey;
            subject.next(collection.items);
        })
            .catch(function (error) { return subject.error(error); });
        return subject;
    };
    CollectionFetcher.prototype.removeFile = function (id, collectionName, occurrenceKey) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var collection;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.mediaStore.removeCollectionFile(id, collectionName, occurrenceKey)];
                    case 1:
                        _a.sent();
                        this.removeFromCache(id, collectionName);
                        collection = exports.collectionCache[collectionName];
                        collection.subject.next(collection.items);
                        return [2 /*return*/];
                }
            });
        });
    };
    CollectionFetcher.prototype.loadNextPage = function (collectionName, params) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var collection, isLoading, _a, inclusiveStartKey, currentItems, subject, response, _b, contents, nextInclusiveStartKey, newItems, items;
            return tslib_1.__generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        collection = exports.collectionCache[collectionName];
                        isLoading = collection ? collection.isLoadingNextPage : false;
                        if (!collection || !collection.nextInclusiveStartKey || isLoading) {
                            return [2 /*return*/];
                        }
                        collection.isLoadingNextPage = true;
                        _a = exports.collectionCache[collectionName], inclusiveStartKey = _a.nextInclusiveStartKey, currentItems = _a.items, subject = _a.subject;
                        return [4 /*yield*/, this.mediaStore.getCollectionItems(collectionName, tslib_1.__assign(tslib_1.__assign({}, params), { inclusiveStartKey: inclusiveStartKey, details: 'full' }))];
                    case 1:
                        response = _c.sent();
                        _b = response.data, contents = _b.contents, nextInclusiveStartKey = _b.nextInclusiveStartKey;
                        this.populateCache(contents);
                        newItems = response.data.contents;
                        items = tslib_1.__spread(currentItems, newItems);
                        subject.next(items);
                        exports.collectionCache[collectionName] = {
                            items: items,
                            nextInclusiveStartKey: nextInclusiveStartKey,
                            subject: subject,
                            isLoadingNextPage: false,
                        };
                        return [2 /*return*/];
                }
            });
        });
    };
    return CollectionFetcher;
}());
exports.CollectionFetcher = CollectionFetcher;
//# sourceMappingURL=collection-fetcher.js.map