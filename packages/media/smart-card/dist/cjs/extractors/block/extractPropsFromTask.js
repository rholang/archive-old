"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var comment_1 = tslib_1.__importDefault(require("@atlaskit/icon/glyph/comment"));
var colors_1 = require("@atlaskit/theme/colors");
var react_intl_1 = require("react-intl");
exports.buildTaskTitle = function (json) {
    var name = json.name && json.name.trim();
    return name ? { title: { text: name } } : {};
};
exports.buildTaskDescription = function (json) {
    var summary = json.summary && json.summary.trim();
    return summary ? { description: { text: summary } } : {};
};
exports.buildTaskLink = function (json) {
    var url = json.url && json.url.trim();
    return url ? { link: url } : {};
};
exports.buildTaskByline = function (json) {
    var updatedBy = json.updatedBy && json.updatedBy.name ? ' by ' + json.updatedBy.name : '';
    var attributedTo = json.attributedTo && json.attributedTo.name
        ? ' by ' + json.attributedTo.name
        : '';
    if (json.dateCreated || json.updated) {
        return {
            byline: json.updated ? (React.createElement("span", null,
                "Updated ",
                updatedBy,
                " ",
                React.createElement(react_intl_1.FormattedRelative, { value: json.updated }))) : (React.createElement("span", null,
                "Created ",
                attributedTo,
                " ",
                React.createElement(react_intl_1.FormattedRelative, { value: json.dateCreated }))),
        };
    }
    return {};
};
exports.buildTaskUser = function (json) {
    if (json.assignedBy && (json.assignedBy.image || json.assignedBy.name)) {
        return {
            user: tslib_1.__assign(tslib_1.__assign({}, (json.assignedBy.image ? { icon: json.assignedBy.image } : {})), (json.assignedBy.name ? { name: json.assignedBy.name } : {})),
        };
    }
    return {};
};
exports.buildTaskUsers = function (json) {
    if (Array.isArray(json.assignedTo) && json.assignedTo.length > 0) {
        return {
            users: json.assignedTo.map(function (assignee) { return ({
                icon: assignee.image,
                name: assignee.name,
            }); }),
        };
    }
    return {};
};
exports.buildTaskCommentCount = function (json) {
    if (!isNaN(Number(json.commentCount)) && Number(json.commentCount) > 0) {
        return {
            icon: (React.createElement(comment_1.default, { label: "", key: "comments-count-icon", size: "medium", primaryColor: colors_1.N600 })),
            text: String(json.commentCount),
        };
    }
    return {};
};
exports.buildTaskDetailsLozenge = function (json) {
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
exports.buildTaskDetails = function (json) {
    if (json['atlassian:taskStatus'] || json.commentCount) {
        return {
            details: [exports.buildTaskDetailsLozenge(json), exports.buildTaskCommentCount(json)],
        };
    }
    return {};
};
exports.buildTaskContext = function (json) {
    var genName = json.generator && json.generator.name && json.generator.name.trim();
    if (genName) {
        var additional = (json.context &&
            json.context.name &&
            json.context.name.trim() &&
            " / " + json.context.name.trim()) ||
            '';
        return {
            context: tslib_1.__assign({ text: genName + additional }, (json.generator.icon ? { icon: json.generator.icon } : {})),
        };
    }
    return {};
};
function extractBlockViewPropsFromTask(json) {
    if (!json) {
        throw new Error('smart-card: data is not parsable JSON-LD.');
    }
    var props = tslib_1.__assign(tslib_1.__assign(tslib_1.__assign(tslib_1.__assign(tslib_1.__assign(tslib_1.__assign(tslib_1.__assign(tslib_1.__assign({}, exports.buildTaskContext(json)), exports.buildTaskTitle(json)), exports.buildTaskDescription(json)), exports.buildTaskLink(json)), exports.buildTaskByline(json)), exports.buildTaskUser(json)), exports.buildTaskUsers(json)), exports.buildTaskDetails(json));
    return props;
}
exports.extractBlockViewPropsFromTask = extractBlockViewPropsFromTask;
//# sourceMappingURL=extractPropsFromTask.js.map