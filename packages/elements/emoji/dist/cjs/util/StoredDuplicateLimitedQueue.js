"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var DuplicateLimitedQueue_1 = tslib_1.__importDefault(require("./DuplicateLimitedQueue"));
var logger_1 = tslib_1.__importDefault(require("./logger"));
/**
 * An extension to the DuplicateLimitedQueue that will initialise its contents from the
 * supplied Storage and will also update the storage for every new item enqueued.
 */
var StoredDuplicateLimitedQueue = /** @class */ (function (_super) {
    tslib_1.__extends(StoredDuplicateLimitedQueue, _super);
    function StoredDuplicateLimitedQueue(options) {
        var _this = _super.call(this, options) || this;
        _this.storage = options.storage;
        _this.prefixedStorageKey = options.storagePrefix + "." + StoredDuplicateLimitedQueue.storageKey;
        _this.load();
        return _this;
    }
    /**
     * Enqueue the supplied item and also persist the new contents of the queue to storage.
     *
     * @param item the item to be enqueued
     */
    StoredDuplicateLimitedQueue.prototype.enqueue = function (item) {
        _super.prototype.enqueue.call(this, item);
        this.save();
    };
    /**
     * Exposed for storybook/testing purposes only. Clear the contents of the queue, and localStorage.
     */
    StoredDuplicateLimitedQueue.prototype.clear = function () {
        _super.prototype.clear.call(this);
        this.storage.removeItem(this.prefixedStorageKey);
    };
    /**
     * Initialise the queue contents from the configured Storage. If there is no data found in
     * storage then the queue will have no items added. Likewise, a failure to read or parse stored
     * data will be swallowed and no items are added to the queue.
     */
    StoredDuplicateLimitedQueue.prototype.load = function () {
        var itemsJson = this.storage.getItem(this.prefixedStorageKey);
        if (itemsJson) {
            try {
                var items = JSON.parse(itemsJson);
                this.bulkEnqueue(items);
            }
            catch (e) {
                logger_1.default("Error parsing the queue stored as " + this.prefixedStorageKey + " key from storage", e);
            }
        }
    };
    /**
     * Save the current items in the queue, overwriting any previously stored queue.
     * Any failure in saving will be silently ignored with the likely outcome that any previous
     * saved items will remain unchanged in storage.
     */
    StoredDuplicateLimitedQueue.prototype.save = function () {
        var itemsJson = JSON.stringify(this.getItems());
        try {
            this.storage.setItem(this.prefixedStorageKey, itemsJson);
        }
        catch (e) {
            logger_1.default("Error saving the queued items as " + this.prefixedStorageKey, e);
        }
    };
    StoredDuplicateLimitedQueue.storageKey = 'lastUsed';
    return StoredDuplicateLimitedQueue;
}(DuplicateLimitedQueue_1.default));
exports.default = StoredDuplicateLimitedQueue;
//# sourceMappingURL=StoredDuplicateLimitedQueue.js.map