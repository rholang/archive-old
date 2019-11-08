"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var types_1 = require("../types");
var analytics_1 = require("../util/analytics");
var DefaultMentionNameResolver = /** @class */ (function () {
    function DefaultMentionNameResolver(client, analyticsProps) {
        var _this = this;
        if (analyticsProps === void 0) { analyticsProps = {}; }
        this.nameCache = new Map();
        this.nameQueue = new Map();
        this.nameStartTime = new Map();
        this.processingQueue = new Map();
        this.debounce = 0;
        this.processQueue = function () {
            clearTimeout(_this.debounce);
            _this.debounce = 0;
            var _a = _this.splitQueueAtLimit(), queue = _a.queue, extraQueue = _a.extraQueue;
            _this.nameQueue = extraQueue;
            _this.processingQueue = new Map(tslib_1.__spread(_this.processingQueue, queue));
            _this.client
                .lookupMentionNames(Array.from(queue.keys()))
                .then(function (response) {
                response.forEach(function (mentionDetail) {
                    var id = mentionDetail.id;
                    queue.delete(id);
                    _this.resolveQueueItem(mentionDetail);
                });
                queue.forEach(function (_callback, id) {
                    // No response from client for these ids treat as unknown
                    _this.resolveQueueItem({
                        id: id,
                        status: types_1.MentionNameStatus.UNKNOWN,
                    });
                });
            })
                .catch(function () {
                // Service completely failed, reject all items in the queue
                queue.forEach(function (_callback, id) {
                    _this.resolveQueueItem({
                        id: id,
                        status: types_1.MentionNameStatus.SERVICE_ERROR,
                    });
                });
            });
            // Make sure anything left in the queue gets processed.
            if (_this.nameQueue.size > 0) {
                _this.scheduleProcessQueue();
            }
        };
        this.client = client;
        this.fireHydrationEvent = analytics_1.fireAnalyticsMentionHydrationEvent(analyticsProps);
    }
    DefaultMentionNameResolver.prototype.lookupName = function (id) {
        var _this = this;
        var name = this.nameCache.get(id);
        if (name) {
            this.fireAnalytics(true, name);
            return name;
        }
        return new Promise(function (resolve) {
            var processingItems = _this.processingQueue.get(id);
            if (processingItems) {
                _this.processingQueue.set(id, tslib_1.__spread(processingItems, [resolve]));
            }
            var queuedItems = _this.nameQueue.get(id) || [];
            _this.nameQueue.set(id, tslib_1.__spread(queuedItems, [resolve]));
            if (queuedItems.length === 0 && !processingItems) {
                _this.nameStartTime.set(id, Date.now());
            }
            _this.scheduleProcessQueue();
            if (_this.isQueueAtLimit()) {
                _this.processQueue();
            }
        });
    };
    DefaultMentionNameResolver.prototype.cacheName = function (id, name) {
        this.nameCache.set(id, {
            id: id,
            name: name,
            status: types_1.MentionNameStatus.OK,
        });
    };
    DefaultMentionNameResolver.prototype.scheduleProcessQueue = function () {
        if (!this.debounce) {
            this.debounce = window.setTimeout(this.processQueue, DefaultMentionNameResolver.waitForBatch);
        }
    };
    DefaultMentionNameResolver.prototype.isQueueAtLimit = function () {
        return this.nameQueue.size >= this.client.getLookupLimit();
    };
    DefaultMentionNameResolver.prototype.splitQueueAtLimit = function () {
        var values = Array.from(this.nameQueue.entries());
        var splitPoint = this.client.getLookupLimit();
        return {
            queue: new Map(values.slice(0, splitPoint)),
            extraQueue: new Map(values.slice(splitPoint)),
        };
    };
    DefaultMentionNameResolver.prototype.resolveQueueItem = function (mentionDetail) {
        var id = mentionDetail.id;
        var resolvers = this.processingQueue.get(id);
        if (resolvers) {
            this.processingQueue.delete(id);
            this.nameCache.set(id, mentionDetail);
            resolvers.forEach(function (resolve) {
                try {
                    resolve(mentionDetail);
                }
                catch (_a) {
                    // ignore - exception in consumer
                }
            });
            this.fireAnalytics(false, mentionDetail);
        }
    };
    DefaultMentionNameResolver.prototype.fireAnalytics = function (fromCache, mentionDetail) {
        var id = mentionDetail.id;
        var action = mentionDetail.status === types_1.MentionNameStatus.OK ? 'completed' : 'failed';
        var start = this.nameStartTime.get(id);
        var duration = start ? Date.now() - start : 0;
        this.nameStartTime.delete(id);
        this.fireHydrationEvent(action, id, fromCache, duration);
    };
    DefaultMentionNameResolver.waitForBatch = 100; // ms
    return DefaultMentionNameResolver;
}());
exports.DefaultMentionNameResolver = DefaultMentionNameResolver;
//# sourceMappingURL=MentionNameResolver.js.map