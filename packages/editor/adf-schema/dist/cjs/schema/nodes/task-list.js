"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var uuid_1 = require("../../utils/uuid");
var name = 'actionList';
exports.taskListSelector = "[data-node-type=\"" + name + "\"]";
exports.taskList = {
    group: 'block',
    defining: true,
    content: 'taskItem+',
    attrs: {
        localId: { default: '' },
    },
    parseDOM: [
        {
            tag: "div" + exports.taskListSelector,
            // Default priority is 50. We normaly don't change this but since this node type is
            // also used by ordered-list we need to make sure that we run this parser first.
            priority: 100,
            getAttrs: function () { return ({
                localId: uuid_1.uuid.generate(),
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
exports.nestableTaskList = tslib_1.__assign(tslib_1.__assign({}, exports.taskList), { content: 'taskItem+ (taskItem|taskList)*' });
//# sourceMappingURL=task-list.js.map