import { __assign } from "tslib";
import * as React from 'react';
import DefaultTaskIcon from '@atlaskit/icon-object/glyph/task/16';
import JiraTaskIcon from '@atlaskit/icon-object/glyph/task/16';
import JiraSubTaskIcon from '@atlaskit/icon-object/glyph/subtask/16';
import JiraStoryIcon from '@atlaskit/icon-object/glyph/story/16';
import JiraBugIcon from '@atlaskit/icon-object/glyph/bug/16';
import JiraEpicIcon from '@atlaskit/icon-object/glyph/epic/16';
import JiraIncidentIcon from '@atlaskit/icon-object/glyph/incident/16';
import JiraServiceRequestIcon from '@atlaskit/icon-object/glyph/issue/16';
import JiraChangeIcon from '@atlaskit/icon-object/glyph/changes/16';
import JiraProblemIcon from '@atlaskit/icon-object/glyph/problem/16';
import { extractInlineViewPropsFromObject } from './extractPropsFromObject';
import { JIRA_GENERATOR_ID, JIRA_TASK, JIRA_SUB_TASK, JIRA_STORY, JIRA_BUG, JIRA_EPIC, JIRA_INCIDENT, JIRA_SERVICE_REQUEST, JIRA_CHANGE, JIRA_PROBLEM, JIRA_CUSTOM_TASK_TYPE, } from './constants';
var buildInlineTaskIcon = function (json) {
    // Render Atlaskit icons for all supported Jira issue types.
    var taskType = json['atlassian:taskType'] || json.taskType;
    if (json.generator &&
        json.generator['@id'] === JIRA_GENERATOR_ID &&
        taskType &&
        taskType['@id']) {
        var taskTypeId = taskType['@id'];
        var taskTypeName = taskTypeId.split('#').pop();
        var taskLabel = json.name || '';
        switch (taskTypeName) {
            case JIRA_TASK:
                return { icon: React.createElement(JiraTaskIcon, { label: taskLabel }) };
            case JIRA_SUB_TASK:
                return { icon: React.createElement(JiraSubTaskIcon, { label: taskLabel }) };
            case JIRA_STORY:
                return { icon: React.createElement(JiraStoryIcon, { label: taskLabel }) };
            case JIRA_BUG:
                return { icon: React.createElement(JiraBugIcon, { label: taskLabel }) };
            case JIRA_EPIC:
                return { icon: React.createElement(JiraEpicIcon, { label: taskLabel }) };
            case JIRA_INCIDENT:
                return { icon: React.createElement(JiraIncidentIcon, { label: taskLabel }) };
            case JIRA_SERVICE_REQUEST:
                return { icon: React.createElement(JiraServiceRequestIcon, { label: taskLabel }) };
            case JIRA_CHANGE:
                return { icon: React.createElement(JiraChangeIcon, { label: taskLabel }) };
            case JIRA_PROBLEM:
                return { icon: React.createElement(JiraProblemIcon, { label: taskLabel }) };
            case JIRA_CUSTOM_TASK_TYPE:
                return {
                    icon: (taskType.icon && taskType.icon.url) ||
                        (json.icon && json.icon.url) || (React.createElement(DefaultTaskIcon, { label: json.provider ? json.provider.name : '' })),
                };
        }
    }
    return {
        icon: React.createElement(DefaultTaskIcon, { label: json.provider ? json.provider.name : '' }),
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
export function extractInlineViewPropsFromTask(json) {
    var props = extractInlineViewPropsFromObject(json);
    return __assign(__assign(__assign({}, props), buildInlineTaskLozenge(json)), buildInlineTaskIcon(json));
}
//# sourceMappingURL=extractPropsFromTask.js.map