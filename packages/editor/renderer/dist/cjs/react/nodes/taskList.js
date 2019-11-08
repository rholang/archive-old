"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var react_1 = require("react");
var task_decision_1 = require("@atlaskit/task-decision");
var TaskList = /** @class */ (function (_super) {
    tslib_1.__extends(TaskList, _super);
    function TaskList() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TaskList.prototype.render = function () {
        var _a = this.props, children = _a.children, localId = _a.localId;
        if (react_1.Children.count(children) === 0) {
            return null;
        }
        return React.createElement(task_decision_1.TaskList, { listId: localId }, children);
    };
    return TaskList;
}(react_1.PureComponent));
exports.default = TaskList;
//# sourceMappingURL=taskList.js.map