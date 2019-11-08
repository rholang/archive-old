"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var extractPropsFromObject_1 = require("./extractPropsFromObject");
function extractBlockViewPropsFromProject(json) {
    var props = extractPropsFromObject_1.extractPropsFromObject(json);
    props.byline = 'Project';
    if (json.member &&
        json.member['@type'] === 'Collection' &&
        json.member.totalItems > 0) {
        props.details = props.details || [];
        props.details.push({
            title: 'Members',
            text: json.member.totalItems,
        });
    }
    return props;
}
exports.extractBlockViewPropsFromProject = extractBlockViewPropsFromProject;
//# sourceMappingURL=extractPropsFromProject.js.map