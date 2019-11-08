"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var people_group_1 = tslib_1.__importDefault(require("@atlaskit/icon/glyph/people-group"));
var extractPropsFromDocument_1 = require("./extractPropsFromDocument");
exports.buildProjectIcon = function (json) {
    if (json.icon && json.icon.url) {
        return { icon: json.icon.url };
    }
    return {
        icon: React.createElement(people_group_1.default, { size: "small", label: json.name || 'Project' }),
    };
};
function extractInlineViewPropsFromProject(json) {
    var props = extractPropsFromDocument_1.extractInlineViewPropsFromDocument(json);
    return tslib_1.__assign(tslib_1.__assign({}, props), exports.buildProjectIcon(json));
}
exports.extractInlineViewPropsFromProject = extractInlineViewPropsFromProject;
//# sourceMappingURL=extractPropsFromProject.js.map