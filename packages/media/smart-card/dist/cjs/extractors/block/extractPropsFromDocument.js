"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var react_intl_1 = require("react-intl");
var extractPropsFromObject_1 = require("./extractPropsFromObject");
var comment_1 = tslib_1.__importDefault(require("@atlaskit/icon/glyph/comment"));
var colors_1 = require("@atlaskit/theme/colors");
var utils_1 = require("../../utils");
function extractPropsFromDocument(json) {
    var props = extractPropsFromObject_1.extractPropsFromObject(json);
    props.icon = utils_1.getIconForFileType(json.fileFormat || '');
    props.details = [];
    if (json.commentCount) {
        var commentCount = json.commentCount;
        var intCommentCount = parseInt(commentCount, 10);
        // Only show the comment count if it's a string or an integer > 0
        if (isNaN(intCommentCount) || intCommentCount) {
            props.details.push({
                icon: (React.createElement(comment_1.default, { label: "", key: "comments-count-icon", size: "medium", primaryColor: colors_1.N600 })),
                text: "" + json.commentCount,
            });
        }
    }
    var typeDescription = utils_1.getLabelForFileType(json.fileFormat || '') || 'Document';
    // Note: we're relying on the consumers to pass a proper react-intl context that
    // formats relative time according to the spec:
    // https://hello.atlassian.net/wiki/spaces/ADG/pages/195123084/Date+formats+product+1.0+spec
    if (json.updated && json.updatedBy) {
        var lastPerson = void 0;
        if (Array.isArray(json.updatedBy)) {
            lastPerson = json.updatedBy.pop();
            props.details.concat(json.updatedBy.map(function (person) { return ({
                text: person.name,
                icon: person.icon,
            }); }));
        }
        else {
            lastPerson = json.updatedBy;
        }
        props.byline = (React.createElement("span", null,
            typeDescription,
            " \u00B7 Updated by ",
            lastPerson.name,
            ' ',
            React.createElement(react_intl_1.FormattedRelative, { value: json.updated })));
    }
    else if (json.attributedTo) {
        var person = Array.isArray(json.attributedTo)
            ? json.attributedTo.pop()
            : json.attributedTo;
        props.byline = (React.createElement("span", null,
            typeDescription,
            " \u00B7 Created by ",
            person.name,
            ' ',
            React.createElement(react_intl_1.FormattedRelative, { value: json.dateCreated })));
    }
    if (json.image && json.image.url) {
        props.preview = json.image.url;
    }
    return props;
}
exports.extractPropsFromDocument = extractPropsFromDocument;
//# sourceMappingURL=extractPropsFromDocument.js.map