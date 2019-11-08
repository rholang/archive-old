"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var react_1 = require("react");
var TaskItem_1 = require("../styled/TaskItem");
var Item_1 = tslib_1.__importDefault(require("./Item"));
var analytics_next_1 = require("@atlaskit/analytics-next");
var analytics_1 = require("../analytics");
var taskCount = 0;
var getCheckBoxId = function (localId) { return localId + "-" + taskCount++; };
var TaskItem = /** @class */ (function (_super) {
    tslib_1.__extends(TaskItem, _super);
    function TaskItem(props) {
        var _this = _super.call(this, props) || this;
        _this.handleOnChange = function (_evt) {
            var _a = _this.props, onChange = _a.onChange, taskId = _a.taskId, isDone = _a.isDone, createAnalyticsEvent = _a.createAnalyticsEvent;
            var newIsDone = !isDone;
            if (onChange) {
                onChange(taskId, newIsDone);
            }
            var action = newIsDone ? 'checked' : 'unchecked';
            if (createAnalyticsEvent) {
                analytics_1.createAndFireEventInElementsChannel({
                    action: action,
                    actionSubject: 'action',
                    eventType: 'ui',
                    attributes: {
                        localId: taskId,
                    },
                })(createAnalyticsEvent);
            }
        };
        _this.checkBoxId = getCheckBoxId(props.taskId);
        return _this;
    }
    TaskItem.prototype.UNSAFE_componentWillReceiveProps = function (nextProps) {
        if (nextProps.taskId !== this.props.taskId) {
            this.checkBoxId = getCheckBoxId(nextProps.taskId);
        }
    };
    TaskItem.prototype.render = function () {
        var _a = this.props, appearance = _a.appearance, isDone = _a.isDone, contentRef = _a.contentRef, children = _a.children, placeholder = _a.placeholder, showPlaceholder = _a.showPlaceholder, disabled = _a.disabled;
        var icon = (React.createElement(TaskItem_1.CheckBoxWrapper, { contentEditable: false },
            React.createElement("input", { id: this.checkBoxId, name: this.checkBoxId, type: "checkbox", onChange: this.handleOnChange, checked: !!isDone, disabled: !!disabled, suppressHydrationWarning: true }),
            React.createElement("label", { htmlFor: this.checkBoxId, suppressHydrationWarning: true })));
        return (React.createElement(Item_1.default, { appearance: appearance, contentRef: contentRef, icon: icon, placeholder: placeholder, showPlaceholder: showPlaceholder }, children));
    };
    TaskItem.defaultProps = {
        appearance: 'inline',
    };
    return TaskItem;
}(react_1.PureComponent));
exports.TaskItem = TaskItem;
// This is to ensure that the "type" is exported, as it gets lost and not exported along with TaskItem after
// going through the high order component.
exports.default = analytics_next_1.withAnalyticsEvents()(TaskItem);
//# sourceMappingURL=TaskItem.js.map