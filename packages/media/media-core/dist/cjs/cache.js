"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var eventemitter2_1 = require("eventemitter2");
var lru_fast_1 = require("lru-fast");
exports.mediaState = {
    streams: new lru_fast_1.LRUCache(1000),
    stateDeferreds: new Map(),
    eventEmitter: new eventemitter2_1.EventEmitter2(),
};
//# sourceMappingURL=cache.js.map