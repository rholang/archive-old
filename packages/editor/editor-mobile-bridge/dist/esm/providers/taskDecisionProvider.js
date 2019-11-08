export var objectKeyToString = function (objectKey) {
    var objectAri = objectKey.objectAri, localId = objectKey.localId;
    return objectAri + ":" + localId;
};
var TaskDecisionProviderImpl = /** @class */ (function () {
    function TaskDecisionProviderImpl(toggleTask) {
        this._handleToggleTask = toggleTask;
        this._handlers = new Map();
    }
    TaskDecisionProviderImpl.prototype.unsubscribeRecentUpdates = function (_id) { };
    TaskDecisionProviderImpl.prototype.notifyRecentUpdates = function (_updateContext) { };
    TaskDecisionProviderImpl.prototype.toggleTask = function (key, state) {
        if (this._handleToggleTask) {
            this._handleToggleTask(key, state);
        }
        // Optimistically notify subscribers that the task have been updated so that they can re-render accordingly
        this.notifyUpdated(key, state);
        return Promise.resolve(state);
    };
    TaskDecisionProviderImpl.prototype.subscribe = function (key, handler) {
        this._handlers.set(objectKeyToString(key), handler);
    };
    TaskDecisionProviderImpl.prototype.unsubscribe = function (key) {
        this._handlers.delete(objectKeyToString(key));
    };
    TaskDecisionProviderImpl.prototype.notifyUpdated = function (objectKey, state) {
        if (!this._handlers.has(objectKeyToString(objectKey))) {
            return;
        }
        var handler = this._handlers.get(objectKeyToString(objectKey));
        handler(state);
    };
    return TaskDecisionProviderImpl;
}());
export { TaskDecisionProviderImpl };
export default (function (handleToggleTask) {
    return new TaskDecisionProviderImpl(handleToggleTask);
});
//# sourceMappingURL=taskDecisionProvider.js.map