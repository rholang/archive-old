import { __extends } from "tslib";
import * as React from 'react';
import { PureComponent, Children } from 'react';
import { TaskList as AkTaskList } from '@atlaskit/task-decision';
var TaskList = /** @class */ (function (_super) {
    __extends(TaskList, _super);
    function TaskList() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TaskList.prototype.render = function () {
        var _a = this.props, children = _a.children, localId = _a.localId;
        if (Children.count(children) === 0) {
            return null;
        }
        return React.createElement(AkTaskList, { listId: localId }, children);
    };
    return TaskList;
}(PureComponent));
export default TaskList;
//# sourceMappingURL=taskList.js.map