"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prosemirror_state_1 = require("prosemirror-state");
var line_handling_1 = require("./line-handling");
var analytics_1 = require("../../../analytics");
var analytics_2 = require("../../analytics");
/**
 * Return the current indentation level
 * @param indentText - Text in the code block that represent an indentation
 * @param indentSize - Size of the indentation token in a string
 */
function getIndentLevel(indentText, indentSize) {
    if (indentSize === 0 || indentText.length === 0) {
        return 0;
    }
    return indentText.length / indentSize;
}
function indent(state, dispatch) {
    var _a = line_handling_1.getLinesFromSelection(state), text = _a.text, start = _a.start;
    var tr = state.tr, selection = state.selection;
    line_handling_1.forEachLine(text, function (line, offset) {
        var _a = line_handling_1.getLineInfo(line), indentText = _a.indentText, indentToken = _a.indentToken;
        var indentLevel = getIndentLevel(indentText, indentToken.size);
        var indentToAdd = indentToken.token.repeat(indentToken.size - (indentText.length % indentToken.size) ||
            indentToken.size);
        tr.insertText(indentToAdd, tr.mapping.map(start + offset, -1));
        analytics_2.addAnalytics(state, tr, {
            action: analytics_2.ACTION.FORMATTED,
            actionSubject: analytics_2.ACTION_SUBJECT.TEXT,
            actionSubjectId: analytics_2.ACTION_SUBJECT_ID.FORMAT_INDENT,
            eventType: analytics_2.EVENT_TYPE.TRACK,
            attributes: {
                inputMethod: analytics_2.INPUT_METHOD.KEYBOARD,
                previousIndentationLevel: indentLevel,
                newIndentLevel: indentLevel + 1,
                direction: analytics_2.INDENT_DIR.INDENT,
                indentType: analytics_2.INDENT_TYPE.CODE_BLOCK,
            },
        });
        if (!selection.empty) {
            tr.setSelection(prosemirror_state_1.TextSelection.create(tr.doc, tr.mapping.map(selection.from, -1), tr.selection.to));
        }
    });
    if (dispatch) {
        dispatch(tr);
        analytics_1.analyticsService.trackEvent("atlassian.editor.codeblock.indent");
    }
    return true;
}
exports.indent = indent;
function outdent(state, dispatch) {
    var _a = line_handling_1.getLinesFromSelection(state), text = _a.text, start = _a.start;
    var tr = state.tr;
    line_handling_1.forEachLine(text, function (line, offset) {
        var _a = line_handling_1.getLineInfo(line), indentText = _a.indentText, indentToken = _a.indentToken;
        if (indentText) {
            var indentLevel = getIndentLevel(indentText, indentToken.size);
            var unindentLength = indentText.length % indentToken.size || indentToken.size;
            tr.delete(tr.mapping.map(start + offset), tr.mapping.map(start + offset + unindentLength));
            analytics_2.addAnalytics(state, tr, {
                action: analytics_2.ACTION.FORMATTED,
                actionSubject: analytics_2.ACTION_SUBJECT.TEXT,
                actionSubjectId: analytics_2.ACTION_SUBJECT_ID.FORMAT_INDENT,
                eventType: analytics_2.EVENT_TYPE.TRACK,
                attributes: {
                    inputMethod: analytics_2.INPUT_METHOD.KEYBOARD,
                    previousIndentationLevel: indentLevel,
                    newIndentLevel: indentLevel - 1,
                    direction: analytics_2.INDENT_DIR.OUTDENT,
                    indentType: analytics_2.INDENT_TYPE.CODE_BLOCK,
                },
            });
        }
    });
    if (dispatch) {
        dispatch(tr);
        analytics_1.analyticsService.trackEvent('atlassian.editor.codeblock.outdent');
    }
    return true;
}
exports.outdent = outdent;
function insertIndent(state, dispatch) {
    var textAtStartOfLine = line_handling_1.getStartOfCurrentLine(state).text;
    var indentToken = line_handling_1.getLineInfo(textAtStartOfLine).indentToken;
    var indentToAdd = indentToken.token.repeat(indentToken.size - (textAtStartOfLine.length % indentToken.size) ||
        indentToken.size);
    dispatch(state.tr.insertText(indentToAdd));
    analytics_1.analyticsService.trackEvent('atlassian.editor.codeblock.indent.insert');
    return true;
}
exports.insertIndent = insertIndent;
function insertNewlineWithIndent(state, dispatch) {
    var textAtStartOfLine = line_handling_1.getStartOfCurrentLine(state).text;
    var indentText = line_handling_1.getLineInfo(textAtStartOfLine).indentText;
    if (indentText && dispatch) {
        dispatch(state.tr.insertText('\n' + indentText));
        return true;
    }
    return false;
}
exports.insertNewlineWithIndent = insertNewlineWithIndent;
//# sourceMappingURL=commands.js.map