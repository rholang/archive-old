"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var uuid_1 = tslib_1.__importDefault(require("uuid"));
var util_service_support_1 = require("@atlaskit/util-service-support");
var TaskDecisionUtils_1 = require("./TaskDecisionUtils");
var types_1 = require("../types");
var type_helpers_1 = require("../type-helpers");
exports.ACTION_CREATED_FPS_EVENT = 'avi:task-decision-service:created:action';
exports.ACTION_EDITED_FPS_EVENT = 'avi:task-decision-service:edited:action';
exports.ACTION_DELETED_FPS_EVENT = 'avi:task-decision-service:deleted:action';
exports.ACTION_ARCHIVED_FPS_EVENT = 'avi:task-decision-service:archived:action';
exports.ACTION_STATE_CHANGED_FPS_EVENT = 'avi:task-decision-service:stateChanged:action';
exports.DECISION_CREATED_FPS_EVENT = 'avi:task-decision-service:created:decision';
exports.DECISION_EDITED_FPS_EVENT = 'avi:task-decision-service:edited:decision';
exports.DECISION_DELETED_FPS_EVENT = 'avi:task-decision-service:deleted:decision';
exports.DECISION_ARCHIVED_FPS_EVENT = 'avi:task-decision-service:archived:decision';
exports.DECISION_STATE_CHANGED_FPS_EVENT = 'avi:task-decision-service:stateChanged:decision';
exports.ACTION_DECISION_FPS_EVENTS = 'avi:task-decision-service:*:*';
var RecentUpdates = /** @class */ (function () {
    function RecentUpdates(pubSubClient) {
        var _this = this;
        this.idsByContainer = new Map();
        this.listenersById = new Map();
        this.onPubSubEvent = function (_event, payload) {
            var objectAri = payload.objectAri;
            _this.notify({ objectAri: objectAri });
        };
        this.pubSubClient = pubSubClient;
        this.subscribeToPubSubEvents();
    }
    RecentUpdates.prototype.subscribe = function (objectAri, recentUpdatesListener) {
        var id = uuid_1.default();
        var containerIds = this.idsByContainer.get(objectAri);
        if (!containerIds) {
            containerIds = [];
            this.idsByContainer.set(objectAri, containerIds);
        }
        containerIds.push(id);
        this.listenersById.set(id, {
            listener: recentUpdatesListener,
            objectAri: objectAri,
        });
        // Notify of id
        recentUpdatesListener.id(id);
    };
    RecentUpdates.prototype.unsubscribe = function (unsubscribeId) {
        var listenerDetail = this.listenersById.get(unsubscribeId);
        if (listenerDetail) {
            this.listenersById.delete(unsubscribeId);
            var objectAri = listenerDetail.objectAri;
            var idsToFilter = this.idsByContainer.get(objectAri);
            if (idsToFilter) {
                this.idsByContainer.set(objectAri, idsToFilter.filter(function (id) { return id !== unsubscribeId; }));
            }
        }
    };
    RecentUpdates.prototype.notify = function (recentUpdateContext) {
        var _this = this;
        var objectAri = recentUpdateContext.objectAri;
        var subscriberIds = this.idsByContainer.get(objectAri);
        if (subscriberIds) {
            subscriberIds.forEach(function (subscriberId) {
                var listenerDetail = _this.listenersById.get(subscriberId);
                if (listenerDetail) {
                    var listener = listenerDetail.listener;
                    listener.recentUpdates(recentUpdateContext);
                }
            });
        }
    };
    RecentUpdates.prototype.destroy = function () {
        this.unsubscribeFromPubSubEvents();
    };
    RecentUpdates.prototype.subscribeToPubSubEvents = function () {
        if (this.pubSubClient) {
            this.pubSubClient.on(exports.ACTION_DECISION_FPS_EVENTS, this.onPubSubEvent);
        }
    };
    RecentUpdates.prototype.unsubscribeFromPubSubEvents = function () {
        if (this.pubSubClient) {
            this.pubSubClient.off(exports.ACTION_DECISION_FPS_EVENTS, this.onPubSubEvent);
        }
    };
    return RecentUpdates;
}());
exports.RecentUpdates = RecentUpdates;
var ItemStateManager = /** @class */ (function () {
    function ItemStateManager(serviceConfig) {
        var _this = this;
        this.debouncedTaskStateQuery = null;
        this.debouncedTaskToggle = new Map();
        this.subscribers = new Map();
        this.trackedObjectKeys = new Map();
        this.cachedItems = new Map();
        this.batchedKeys = new Map();
        this.onTaskUpdatedEvent = function (_event, payload) {
            var objectAri = payload.objectAri, localId = payload.localId;
            var objectKey = { objectAri: objectAri, localId: localId };
            var cached = _this.getCached(objectKey);
            if (!cached) {
                // ignore unknown task
                return;
            }
            var lastUpdateDate = new Date(payload.lastUpdateDate);
            if (lastUpdateDate > cached.lastUpdateDate) {
                _this.updateCache(TaskDecisionUtils_1.convertServiceTaskStateToBaseItem(payload));
                _this.notifyUpdated(objectKey, payload.state);
                return;
            }
        };
        this.onReconnect = function () {
            _this.refreshAllTasks();
        };
        this.serviceConfig = serviceConfig;
        this.subscribeToPubSubEvents();
    }
    ItemStateManager.prototype.destroy = function () {
        if (this.debouncedTaskStateQuery) {
            clearTimeout(this.debouncedTaskStateQuery);
        }
        this.debouncedTaskToggle.forEach(function (timeout) {
            clearTimeout(timeout);
        });
        this.unsubscribeFromPubSubEvents();
    };
    ItemStateManager.prototype.toggleTask = function (objectKey, state) {
        var _this = this;
        var stringKey = type_helpers_1.objectKeyToString(objectKey);
        var timeout = this.debouncedTaskToggle.get(stringKey);
        if (timeout) {
            clearTimeout(timeout);
            this.debouncedTaskToggle.delete(stringKey);
        }
        // Update cache optimistically
        this.updateCache(tslib_1.__assign(tslib_1.__assign({}, objectKey), { lastUpdateDate: new Date(), type: 'TASK', state: state }));
        // Optimistically notify subscribers that the task have been updated so that they can re-render accordingly
        this.notifyUpdated(objectKey, state);
        return new Promise(function (resolve, reject) {
            _this.debouncedTaskToggle.set(stringKey, window.setTimeout(function () {
                var options = {
                    path: 'tasks/state',
                    requestInit: {
                        method: 'PUT',
                        headers: {
                            'Content-Type': 'application/json; charset=UTF-8',
                        },
                        body: JSON.stringify(tslib_1.__assign(tslib_1.__assign({}, objectKey), { state: state })),
                    },
                };
                util_service_support_1.utils
                    .requestService(_this.serviceConfig, options)
                    .then(TaskDecisionUtils_1.convertServiceTaskToTask)
                    .then(function (task) {
                    _this.updateCache(task);
                    resolve(state);
                    // Notify subscribers that the task have been updated so that they can re-render accordingly
                    _this.notifyUpdated(objectKey, state);
                })
                    .catch(function () {
                    // Undo optimistic change
                    var previousState = type_helpers_1.toggleTaskState(state);
                    _this.updateCache(tslib_1.__assign(tslib_1.__assign({}, objectKey), { lastUpdateDate: new Date(), type: 'TASK', state: previousState }));
                    _this.notifyUpdated(objectKey, previousState);
                    reject();
                });
            }, 500));
        });
    };
    ItemStateManager.prototype.refreshAllTasks = function () {
        this.queueAllItems();
        this.scheduleGetTaskState();
    };
    ItemStateManager.prototype.subscribe = function (objectKey, handler, item) {
        var key = type_helpers_1.objectKeyToString(objectKey);
        var handlers = this.subscribers.get(key) || [];
        handlers.push(handler);
        this.subscribers.set(key, handlers);
        this.trackedObjectKeys.set(key, objectKey);
        var cached = this.getCached(objectKey);
        if (cached) {
            this.notifyUpdated(objectKey, cached.state);
            return;
        }
        if (this.serviceConfig.disableServiceHydration && item) {
            this.updateCache(item);
            return;
        }
        this.queueItem(objectKey);
        this.scheduleGetTaskState();
    };
    ItemStateManager.prototype.unsubscribe = function (objectKey, handler) {
        var key = type_helpers_1.objectKeyToString(objectKey);
        var handlers = this.subscribers.get(key);
        if (!handlers) {
            return;
        }
        var index = TaskDecisionUtils_1.findIndex(handlers, function (h) { return h === handler; });
        if (index !== -1) {
            handlers.splice(index, 1);
        }
        if (handlers.length === 0) {
            this.subscribers.delete(key);
            this.trackedObjectKeys.delete(key);
        }
        else {
            this.subscribers.set(key, handlers);
        }
    };
    ItemStateManager.prototype.getTaskState = function (keys) {
        var options = {
            path: 'tasks/state',
            requestInit: {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json; charset=UTF-8',
                },
                body: JSON.stringify({
                    taskKeys: keys,
                }),
            },
        };
        return util_service_support_1.utils.requestService(this.serviceConfig, options);
    };
    ItemStateManager.prototype.notifyUpdated = function (objectKey, state) {
        var key = type_helpers_1.objectKeyToString(objectKey);
        var handlers = this.subscribers.get(key);
        if (!handlers) {
            return;
        }
        handlers.forEach(function (handler) {
            handler(state);
        });
    };
    ItemStateManager.prototype.updateCache = function (item) {
        var stringKey = type_helpers_1.objectKeyToString(type_helpers_1.toObjectKey(item));
        this.cachedItems.set(stringKey, item);
    };
    ItemStateManager.prototype.getCached = function (objectKey) {
        return this.cachedItems.get(type_helpers_1.objectKeyToString(objectKey));
    };
    ItemStateManager.prototype.subscribeToPubSubEvents = function () {
        if (this.serviceConfig.pubSubClient) {
            this.serviceConfig.pubSubClient.on(exports.ACTION_STATE_CHANGED_FPS_EVENT, this.onTaskUpdatedEvent);
            this.serviceConfig.pubSubClient.on(types_1.PubSubSpecialEventType.RECONNECT, this.onReconnect);
        }
    };
    ItemStateManager.prototype.unsubscribeFromPubSubEvents = function () {
        if (this.serviceConfig.pubSubClient) {
            this.serviceConfig.pubSubClient.off(exports.ACTION_STATE_CHANGED_FPS_EVENT, this.onTaskUpdatedEvent);
            this.serviceConfig.pubSubClient.off(types_1.PubSubSpecialEventType.RECONNECT, this.onReconnect);
        }
    };
    ItemStateManager.prototype.queueAllItems = function () {
        this.batchedKeys = new Map(this.trackedObjectKeys);
    };
    ItemStateManager.prototype.queueItem = function (objectKey) {
        var key = type_helpers_1.objectKeyToString(objectKey);
        if (this.batchedKeys.get(key)) {
            return;
        }
        this.batchedKeys.set(key, objectKey);
    };
    ItemStateManager.prototype.dequeueItem = function (objectKey) {
        var key = type_helpers_1.objectKeyToString(objectKey);
        this.batchedKeys.delete(key);
    };
    ItemStateManager.prototype.scheduleGetTaskState = function () {
        var _this = this;
        if (this.debouncedTaskStateQuery) {
            clearTimeout(this.debouncedTaskStateQuery);
        }
        this.debouncedTaskStateQuery = window.setTimeout(function () {
            _this.getTaskState(Array.from(_this.batchedKeys.values())).then(function (tasks) {
                tasks.forEach(function (task) {
                    var objectAri = task.objectAri, localId = task.localId;
                    var objectKey = { objectAri: objectAri, localId: localId };
                    _this.updateCache(TaskDecisionUtils_1.convertServiceTaskStateToBaseItem(task));
                    _this.dequeueItem(objectKey);
                    _this.notifyUpdated(objectKey, task.state);
                });
            });
        }, 1);
    };
    return ItemStateManager;
}());
exports.ItemStateManager = ItemStateManager;
var TaskDecisionResource = /** @class */ (function () {
    function TaskDecisionResource(serviceConfig) {
        this.recentUpdates = new RecentUpdates(serviceConfig.pubSubClient);
        this.itemStateManager = new ItemStateManager(serviceConfig);
    }
    TaskDecisionResource.prototype.unsubscribeRecentUpdates = function (id) {
        this.recentUpdates.unsubscribe(id);
    };
    TaskDecisionResource.prototype.notifyRecentUpdates = function (recentUpdateContext) {
        this.recentUpdates.notify(recentUpdateContext);
        this.itemStateManager.refreshAllTasks();
    };
    TaskDecisionResource.prototype.toggleTask = function (objectKey, state) {
        return this.itemStateManager.toggleTask(objectKey, state);
    };
    TaskDecisionResource.prototype.subscribe = function (objectKey, handler, item) {
        this.itemStateManager.subscribe(objectKey, handler, item);
    };
    TaskDecisionResource.prototype.unsubscribe = function (objectKey, handler) {
        this.itemStateManager.unsubscribe(objectKey, handler);
    };
    /**
     * Usually only needed for testing to ensure no outstanding requests
     * are sent to a server (typically mocked).
     */
    TaskDecisionResource.prototype.destroy = function () {
        this.recentUpdates.destroy();
        this.itemStateManager.destroy();
    };
    return TaskDecisionResource;
}());
exports.default = TaskDecisionResource;
//# sourceMappingURL=TaskDecisionResource.js.map