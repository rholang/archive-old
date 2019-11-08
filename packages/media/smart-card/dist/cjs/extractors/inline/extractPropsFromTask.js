"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var _16_1 = tslib_1.__importDefault(require("@atlaskit/icon-object/glyph/task/16"));
var _16_2 = tslib_1.__importDefault(require("@atlaskit/icon-object/glyph/task/16"));
var _16_3 = tslib_1.__importDefault(require("@atlaskit/icon-object/glyph/subtask/16"));
var _16_4 = tslib_1.__importDefault(require("@atlaskit/icon-object/glyph/story/16"));
var _16_5 = tslib_1.__importDefault(require("@atlaskit/icon-object/glyph/bug/16"));
var _16_6 = tslib_1.__importDefault(require("@atlaskit/icon-object/glyph/epic/16"));
var _16_7 = tslib_1.__importDefault(require("@atlaskit/icon-object/glyph/incident/16"));
var _16_8 = tslib_1.__importDefault(require("@atlaskit/icon-object/glyph/issue/16"));
var _16_9 = tslib_1.__importDefault(require("@atlaskit/icon-object/glyph/changes/16"));
var _16_10 = tslib_1.__importDefault(require("@atlaskit/icon-object/glyph/problem/16"));
var extractPropsFromObject_1 = require("./extractPropsFromObject");
var constants_1 = require("./constants");
var buildInlineTaskIcon = function (json) {
    // Render Atlaskit icons for all supported Jira issue types.
    var taskType = json['atlassian:taskType'] || json.taskType;
    if (json.generator &&
        json.generator['@id'] === constants_1.JIRA_GENERATOR_ID &&
        taskType &&
        taskType['@id']) {
        var taskTypeId = taskType['@id'];
        var taskTypeName = taskTypeId.split('#').pop();
        var taskLabel = json.name || '';
        switch (taskTypeName) {
            case constants_1.JIRA_TASK:
                return { icon: React.createElement(_16_2.default, { label: taskLabel }) };
            case constants_1.JIRA_SUB_TASK:
                return { icon: React.createElement(_16_3.default, { label: taskLabel }) };
            case constants_1.JIRA_STORY:
                return { icon: React.createElement(_16_4.default, { label: taskLabel }) };
            case constants_1.JIRA_BUG:
                return { icon: React.createElement(_16_5.default, { label: taskLabel }) };
            case constants_1.JIRA_EPIC:
                return { icon: React.createElement(_16_6.default, { label: taskLabel }) };
            case constants_1.JIRA_INCIDENT:
                return { icon: React.createElement(_16_7.default, { label: taskLabel }) };
            case constants_1.JIRA_SERVICE_REQUEST:
                return { icon: React.createElement(_16_8.default, { label: taskLabel }) };
            case constants_1.JIRA_CHANGE:
                return { icon: React.createElement(_16_9.default, { label: taskLabel }) };
            case constants_1.JIRA_PROBLEM:
                return { icon: React.createElement(_16_10.default, { label: taskLabel }) };
            case constants_1.JIRA_CUSTOM_TASK_TYPE:
                return {
                    icon: (taskType.icon && taskType.icon.url) ||
                        (json.icon && json.icon.url) || (React.createElement(_16_1.default, { label: json.provider ? json.provider.name : '' })),
                };
        }
    }
    return {
        icon: React.createElement(_16_1.default, { label: json.provider ? json.provider.name : '' }),
    };
};
var VALID_APPEARANCES = [
    'default',
    'success',
    'removed',
    'inprogress',
    'new',
    'moved',
];
var isValidAppearance = function (appearance) {
    return VALID_APPEARANCES.indexOf(appearance) !== -1;
};
var buildInlineTaskLozenge = function (json) {
    // The .tag property is used by some consumers
    // to extract information required for the task lozenge.
    // We check this property first to privilege this behaviour e.g.
    // Jira's current implementation of Native Resolving.
    if (json.tag && json.tag.name) {
        var _a = json.tag, name_1 = _a.name, appearance = _a.appearance;
        return {
            lozenge: {
                appearance: (isValidAppearance(appearance) && appearance) || VALID_APPEARANCES[0],
                text: name_1,
            },
        };
    }
    // Per the JSON-LD spec, all other tasks should contain status information inside of
    // the .taskStatus JSON tree (Asana, Github, Bitbucket).
    var taskStatus = json['atlassian:taskStatus'];
    if (taskStatus && taskStatus.name) {
        return {
            lozenge: {
                text: taskStatus.name,
                appearance: 'success',
            },
        };
    }
    return {};
};
function extractInlineViewPropsFromTask(json) {
    var props = extractPropsFromObject_1.extractInlineViewPropsFromObject(json);
    return tslib_1.__assign(tslib_1.__assign(tslib_1.__assign({}, props), buildInlineTaskLozenge(json)), buildInlineTaskIcon(json));
}
exports.extractInlineViewPropsFromTask = extractInlineViewPropsFromTask;
//# sourceMappingURL=extractPropsFromTask.js.map