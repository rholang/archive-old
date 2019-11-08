"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var filter_1 = require("./filter");
var taskDecisionAllowedNodeTypes = new Set([
    'text',
    'emoji',
    'mention',
    'status',
    'date',
    'hardBreak',
]);
function taskDecisionDocFilter(doc, schema) {
    return filter_1.filterContentByType(doc, taskDecisionAllowedNodeTypes, schema, true);
}
exports.taskDecisionDocFilter = taskDecisionDocFilter;
function taskDecisionSliceFilter(schema) {
    return function (slice) {
        return filter_1.filterSliceByType(slice, taskDecisionAllowedNodeTypes, schema, true);
    };
}
exports.taskDecisionSliceFilter = taskDecisionSliceFilter;
//# sourceMappingURL=task-decision-filter.js.map