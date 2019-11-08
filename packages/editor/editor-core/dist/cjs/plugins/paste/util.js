"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var prosemirror_model_1 = require("prosemirror-model");
function isPastedFromWord(html) {
    return !!html && html.indexOf('urn:schemas-microsoft-com:office:word') >= 0;
}
exports.isPastedFromWord = isPastedFromWord;
function isPastedFromExcel(html) {
    return !!html && html.indexOf('urn:schemas-microsoft-com:office:excel') >= 0;
}
exports.isPastedFromExcel = isPastedFromExcel;
function isPastedFromDropboxPaper(html) {
    return !!html && !!html.match(/class=\"\s?author-d-.+"/gim);
}
exports.isPastedFromDropboxPaper = isPastedFromDropboxPaper;
function isPastedFromGoogleDocs(html) {
    return !!html && !!html.match(/id=\"docs-internal-guid-.+"/gim);
}
exports.isPastedFromGoogleDocs = isPastedFromGoogleDocs;
function isPastedFromGoogleSpreadSheets(html) {
    return !!html && !!html.match(/data-sheets-.+=/gim);
}
exports.isPastedFromGoogleSpreadSheets = isPastedFromGoogleSpreadSheets;
function isPastedFromPages(html) {
    return !!html && html.indexOf('content="Cocoa HTML Writer"') >= 0;
}
exports.isPastedFromPages = isPastedFromPages;
function isPastedFromFabricEditor(html) {
    return !!html && html.indexOf('data-pm-slice="') >= 0;
}
exports.isPastedFromFabricEditor = isPastedFromFabricEditor;
exports.isSingleLine = function (text) {
    return !!text && text.trim().split('\n').length === 1;
};
function getPasteSource(event) {
    var html = event.clipboardData.getData('text/html');
    if (isPastedFromDropboxPaper(html)) {
        return 'dropbox-paper';
    }
    else if (isPastedFromWord(html)) {
        return 'microsoft-word';
    }
    else if (isPastedFromExcel(html)) {
        return 'microsoft-excel';
    }
    else if (isPastedFromGoogleDocs(html)) {
        return 'google-docs';
    }
    else if (isPastedFromGoogleSpreadSheets(html)) {
        return 'google-spreadsheets';
    }
    else if (isPastedFromPages(html)) {
        return 'apple-pages';
    }
    else if (isPastedFromFabricEditor(html)) {
        return 'fabric-editor';
    }
    return 'uncategorized';
}
exports.getPasteSource = getPasteSource;
// TODO: Write JEST tests for this part
function isCode(str) {
    var lines = str.split(/\r?\n|\r/);
    if (3 > lines.length) {
        return false;
    }
    var weight = 0;
    lines.forEach(function (line) {
        // Ends with : or ;
        if (/[:;]$/.test(line)) {
            weight++;
        }
        // Contains second and third braces
        if (/[{}\[\]]/.test(line)) {
            weight++;
        }
        // Contains <tag> or </
        if (/<\w+>/.test(line) || /<\//.test(line)) {
            weight++;
        }
        // Contains () <- function calls
        if (/\(\)/.test(line)) {
            weight++;
        }
        // Contains a link
        if (/(^|[^!])\[(.*?)\]\((\S+)\)$/.test(line)) {
            weight--;
        }
        // New line starts with less than two chars. e.g- if, {, <, etc
        var token = /^(\s+)[a-zA-Z<{]{2,}/.exec(line);
        if (token && 2 <= token[1].length) {
            weight++;
        }
        if (/&&/.test(line)) {
            weight++;
        }
    });
    return 4 <= weight && weight >= 0.5 * lines.length;
}
exports.isCode = isCode;
// @see https://product-fabric.atlassian.net/browse/ED-3159
// @see https://github.com/markdown-it/markdown-it/issues/38
function escapeLinks(text) {
    return text.replace(/(\[([^\]]+)\]\()?((https?|ftp):\/\/[^\s]+)/g, function (str) {
        return str.match(/^(https?|ftp):\/\/[^\s]+$/) ? "<" + str + ">" : str;
    });
}
exports.escapeLinks = escapeLinks;
function hasOnlyNodesOfType() {
    var nodeTypes = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        nodeTypes[_i] = arguments[_i];
    }
    return function (slice) {
        var hasOnlyNodesOfType = true;
        slice.content.descendants(function (node) {
            hasOnlyNodesOfType =
                hasOnlyNodesOfType && nodeTypes.indexOf(node.type) > -1;
            return hasOnlyNodesOfType;
        });
        return hasOnlyNodesOfType;
    };
}
exports.hasOnlyNodesOfType = hasOnlyNodesOfType;
function applyTextMarksToSlice(schema, marks) {
    return function (slice) {
        var _a = schema.marks, codeMark = _a.code, linkMark = _a.link;
        if (!Array.isArray(marks) || marks.length === 0) {
            return slice;
        }
        var sliceCopy = prosemirror_model_1.Slice.fromJSON(schema, slice.toJSON() || {});
        sliceCopy.content.descendants(function (node, _pos, parent) {
            if (node.isText && parent && parent.isBlock) {
                node.marks = tslib_1.__spread(((node.marks &&
                    !codeMark.isInSet(marks) &&
                    node.marks.filter(function (mark) { return mark.type === linkMark; })) ||
                    []), parent.type
                    .allowedMarks(marks)
                    .filter(function (mark) { return mark.type !== linkMark; }));
                return false;
            }
            return true;
        });
        return sliceCopy;
    };
}
exports.applyTextMarksToSlice = applyTextMarksToSlice;
//# sourceMappingURL=util.js.map