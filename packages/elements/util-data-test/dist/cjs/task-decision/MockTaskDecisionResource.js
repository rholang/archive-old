"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var utils_1 = require("./utils");
var debouncedTaskStateQuery = null;
var debouncedTaskToggle = null;
var MockTaskDecisionResource = /** @class */ (function () {
    function MockTaskDecisionResource(config) {
        this.subscribers = new Map();
        this.cachedItems = new Map();
        this.batchedKeys = new Map();
        this.config = config;
        this.subscribers.clear();
        this.cachedItems.clear();
        this.batchedKeys.clear();
    }
    MockTaskDecisionResource.prototype.unsubscribeRecentUpdates = function (_id) { };
    MockTaskDecisionResource.prototype.notifyRecentUpdates = function (_updateContext) { };
    MockTaskDecisionResource.prototype.getTaskState = function (_keys) {
        return Promise.resolve([
            {
                objectAri: 'ari:cloud:app.cloud:f7ebe2c0-0309-4687-b913-41d422f2110b:message/f1328342-7c28-11e7-a5e8-02420aff0003',
                localId: 'bff0c423-3bba-45c4-a310-d49f7a95003e',
                state: 'DONE',
                type: 'TASK',
            },
        ]);
    };
    MockTaskDecisionResource.prototype.toggleTask = function (objectKey, state) {
        var _this = this;
        if (debouncedTaskToggle) {
            clearTimeout(debouncedTaskToggle);
        }
        // Optimistically notify subscribers that the task have been updated so that they can re-render accordingly
        this.notifyUpdated(objectKey, state);
        return new Promise(function (resolve) {
            var key = utils_1.objectKeyToString(objectKey);
            var cached = _this.cachedItems.get(key);
            if (cached) {
                cached.state = state;
                _this.cachedItems.set(key, cached);
            }
            else {
                _this.cachedItems.set(key, tslib_1.__assign(tslib_1.__assign({}, objectKey), { state: state }));
            }
            resolve(state);
            var lag = (_this.config && _this.config.lag) || 0;
            window.setTimeout(function () {
                if (_this.config && _this.config.error) {
                    // Undo optimistic change
                    _this.notifyUpdated(objectKey, utils_1.toggleTaskState(state));
                }
                else {
                    _this.notifyUpdated(objectKey, state);
                }
            }, 500 + lag);
        });
    };
    MockTaskDecisionResource.prototype.subscribe = function (objectKey, handler) {
        var _this = this;
        var key = utils_1.objectKeyToString(objectKey);
        var handlers = this.subscribers.get(key) || [];
        handlers.push(handler);
        this.subscribers.set(key, handlers);
        var cached = this.cachedItems.get(key);
        if (cached) {
            this.notifyUpdated(objectKey, cached.state);
            return;
        }
        if (debouncedTaskStateQuery) {
            clearTimeout(debouncedTaskStateQuery);
        }
        this.queueItem(objectKey);
        debouncedTaskStateQuery = window.setTimeout(function () {
            _this.getTaskState(Array.from(_this.batchedKeys.values())).then(function (tasks) {
                tasks.forEach(function (task) {
                    var objectAri = task.objectAri, localId = task.localId;
                    var objectKey = { objectAri: objectAri, localId: localId };
                    _this.cachedItems.set(utils_1.objectKeyToString(objectKey), task);
                    _this.dequeueItem(objectKey);
                    _this.notifyUpdated(objectKey, task.state);
                });
            });
        }, 1);
    };
    MockTaskDecisionResource.prototype.unsubscribe = function (objectKey, handler) {
        var key = utils_1.objectKeyToString(objectKey);
        var handlers = this.subscribers.get(key);
        if (!handlers) {
            return;
        }
        var index = utils_1.findIndex(handlers, function (h) { return h === handler; });
        if (index !== -1) {
            handlers.splice(index, 1);
        }
        if (handlers.length === 0) {
            this.subscribers.delete(key);
        }
        else {
            this.subscribers.set(key, handlers);
        }
    };
    MockTaskDecisionResource.prototype.notifyUpdated = function (objectKey, state) {
        var key = utils_1.objectKeyToString(objectKey);
        var handlers = this.subscribers.get(key);
        if (!handlers) {
            return;
        }
        handlers.forEach(function (handler) {
            handler(state);
        });
    };
    MockTaskDecisionResource.prototype.queueItem = function (objectKey) {
        var key = utils_1.objectKeyToString(objectKey);
        if (this.batchedKeys.get(key)) {
            return;
        }
        this.batchedKeys.set(key, objectKey);
    };
    MockTaskDecisionResource.prototype.dequeueItem = function (objectKey) {
        var key = utils_1.objectKeyToString(objectKey);
        this.batchedKeys.delete(key);
    };
    return MockTaskDecisionResource;
}());
exports.MockTaskDecisionResource = MockTaskDecisionResource;
//# sourceMappingURL=MockTaskDecisionResource.js.map