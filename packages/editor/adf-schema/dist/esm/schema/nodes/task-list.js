import { __assign } from "tslib";
import { uuid } from '../../utils/uuid';
var name = 'actionList';
export var taskListSelector = "[data-node-type=\"" + name + "\"]";
export var taskList = {
    group: 'block',
    defining: true,
    content: 'taskItem+',
    attrs: {
        localId: { default: '' },
    },
    parseDOM: [
        {
            tag: "div" + taskListSelector,
            // Default priority is 50. We normaly don't change this but since this node type is
            // also used by ordered-list we need to make sure that we run this parser first.
            priority: 100,
            getAttrs: function () { return ({
                localId: uuid.generate(),
            }); },
        },
    ],
    toDOM: function (node) {
        var localId = node.attrs.localId;
        var attrs = {
            'data-node-type': name,
            'data-task-list-local-id': localId || 'local-task-list',
            style: 'list-style: none; padding-left: 0',
        };
        return ['div', attrs, 0];
    },
};
export var nestableTaskList = __assign(__assign({}, taskList), { content: 'taskItem+ (taskItem|taskList)*' });
//# sourceMappingURL=task-list.js.map