"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.taskItem = function (attrs) { return function () {
    var content = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        content[_i] = arguments[_i];
    }
    return ({
        type: 'taskItem',
        attrs: attrs,
        content: content,
    });
}; };
//# sourceMappingURL=task-item.js.map