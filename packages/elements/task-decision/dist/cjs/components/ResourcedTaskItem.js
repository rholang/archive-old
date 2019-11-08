"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var react_1 = require("react");
var TaskItem_1 = tslib_1.__importDefault(require("./TaskItem"));
var analytics_namespaced_context_1 = require("@atlaskit/analytics-namespaced-context");
var ResourcedTaskItem = /** @class */ (function (_super) {
    tslib_1.__extends(ResourcedTaskItem, _super);
    function ResourcedTaskItem(props) {
        var _this = _super.call(this, props) || this;
        _this.mounted = false;
        _this.onUpdate = function (state) {
            _this.setState({ isDone: state === 'DONE' });
        };
        _this.handleOnChange = function (taskId, isDone) {
            var _a = _this.props, taskDecisionProvider = _a.taskDecisionProvider, objectAri = _a.objectAri, onChange = _a.onChange;
            // Optimistically update the task
            _this.setState({ isDone: isDone });
            if (taskDecisionProvider && objectAri) {
                // Call provider to update task
                taskDecisionProvider.then(function (provider) {
                    if (!_this.mounted) {
                        return;
                    }
                    provider.toggleTask({ localId: taskId, objectAri: objectAri }, isDone ? 'DONE' : 'TODO');
                    // onChange could trigger a rerender, in order to get the correct state
                    // we should only call onChange once the internal state have been modified
                    if (onChange) {
                        onChange(taskId, isDone);
                    }
                });
            }
            else {
                // No provider - state managed by consumer
                if (onChange) {
                    onChange(taskId, isDone);
                }
            }
        };
        _this.state = {
            isDone: props.isDone,
        };
        return _this;
    }
    ResourcedTaskItem.prototype.componentDidMount = function () {
        this.mounted = true;
        this.subscribe(this.props.taskDecisionProvider, this.props.objectAri, this.props.isDone);
    };
    ResourcedTaskItem.prototype.UNSAFE_componentWillReceiveProps = function (nextProps) {
        if (nextProps.isDone !== this.state.isDone) {
            // This only occurs for Actions (DONE vs TODO), since Decisions only support DECIDED.
            // If the document is refreshed or changed, we need to reset the local state to match the new
            // source of truth from the revised data.
            this.onUpdate(nextProps.isDone ? 'DONE' : 'TODO');
        }
        if (nextProps.taskDecisionProvider !== this.props.taskDecisionProvider ||
            nextProps.objectAri !== this.props.objectAri) {
            this.unsubscribe();
            this.subscribe(nextProps.taskDecisionProvider, nextProps.objectAri, nextProps.isDone);
        }
    };
    ResourcedTaskItem.prototype.componentWillUnmount = function () {
        this.unsubscribe();
        this.mounted = false;
    };
    ResourcedTaskItem.prototype.subscribe = function (taskDecisionProvider, objectAri, isDone) {
        var _this = this;
        if (taskDecisionProvider && objectAri) {
            taskDecisionProvider.then(function (provider) {
                if (!_this.mounted) {
                    return;
                }
                var taskId = _this.props.taskId;
                var objectKey = { localId: taskId, objectAri: objectAri };
                var item = tslib_1.__assign(tslib_1.__assign({}, objectKey), { state: isDone ? 'DONE' : 'TODO', lastUpdateDate: new Date(), type: 'TASK' });
                provider.subscribe({ localId: taskId, objectAri: objectAri }, _this.onUpdate, item);
            });
        }
    };
    ResourcedTaskItem.prototype.unsubscribe = function () {
        var _this = this;
        var _a = this.props, taskDecisionProvider = _a.taskDecisionProvider, taskId = _a.taskId, objectAri = _a.objectAri;
        if (taskDecisionProvider && objectAri) {
            taskDecisionProvider.then(function (provider) {
                provider.unsubscribe({ localId: taskId, objectAri: objectAri }, _this.onUpdate);
            });
        }
    };
    ResourcedTaskItem.prototype.render = function () {
        var isDone = this.state.isDone;
        var _a = this.props, appearance = _a.appearance, children = _a.children, contentRef = _a.contentRef, objectAri = _a.objectAri, showPlaceholder = _a.showPlaceholder, placeholder = _a.placeholder, taskId = _a.taskId, disabled = _a.disabled;
        return (React.createElement(analytics_namespaced_context_1.FabricElementsAnalyticsContext, { data: {
                objectAri: objectAri,
            } },
            React.createElement(TaskItem_1.default, { isDone: isDone, taskId: taskId, onChange: this.handleOnChange, appearance: appearance, contentRef: contentRef, showPlaceholder: showPlaceholder, placeholder: placeholder, disabled: disabled }, children)));
    };
    ResourcedTaskItem.defaultProps = {
        appearance: 'inline',
    };
    return ResourcedTaskItem;
}(react_1.PureComponent));
exports.default = ResourcedTaskItem;
//# sourceMappingURL=ResourcedTaskItem.js.map