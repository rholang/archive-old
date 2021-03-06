"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var StreamsCache = /** @class */ (function () {
    function StreamsCache(streams) {
        this.streams = streams;
    }
    StreamsCache.prototype.has = function (id) {
        return !!this.streams.find(id);
    };
    StreamsCache.prototype.set = function (id, stream) {
        this.streams.set(id, stream);
    };
    StreamsCache.prototype.get = function (id) {
        return this.streams.get(id);
    };
    StreamsCache.prototype.getOrInsert = function (id, callback) {
        if (!this.has(id)) {
            this.set(id, callback());
        }
        return this.get(id);
    };
    StreamsCache.prototype.removeAll = function () {
        this.streams.removeAll();
    };
    StreamsCache.prototype.remove = function (id) {
        this.streams.remove(id);
    };
    Object.defineProperty(StreamsCache.prototype, "size", {
        get: function () {
            return this.streams.size;
        },
        enumerable: true,
        configurable: true
    });
    return StreamsCache;
}());
exports.StreamsCache = StreamsCache;
var streamCache;
exports.getFileStreamsCache = function () {
    if (!streamCache) {
        var mediaState = require('@atlaskit/media-core').mediaState;
        streamCache = new StreamsCache(mediaState.streams);
    }
    return streamCache;
};
//# sourceMappingURL=file-streams-cache.js.map