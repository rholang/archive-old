"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var analytics_1 = require("../../analytics");
var analytics_2 = require("../../../analytics");
var util_1 = require("../util");
var handlers_1 = require("../handlers");
var utils_1 = require("../../../utils");
var prosemirror_utils_1 = require("prosemirror-utils");
var contentToPasteContent = {
    url: analytics_1.PasteContents.url,
    paragraph: analytics_1.PasteContents.text,
    bulletList: analytics_1.PasteContents.bulletList,
    orderedList: analytics_1.PasteContents.orderedList,
    heading: analytics_1.PasteContents.heading,
    blockquote: analytics_1.PasteContents.blockquote,
    codeBlock: analytics_1.PasteContents.codeBlock,
    panel: analytics_1.PasteContents.panel,
    rule: analytics_1.PasteContents.rule,
    mediaSingle: analytics_1.PasteContents.mediaSingle,
    table: analytics_1.PasteContents.table,
    tableCells: analytics_1.PasteContents.tableCells,
    tableHeader: analytics_1.PasteContents.tableHeader,
    tableRow: analytics_1.PasteContents.tableRow,
    decisionList: analytics_1.PasteContents.decisionList,
    decisionItem: analytics_1.PasteContents.decisionItem,
    taskList: analytics_1.PasteContents.taskItem,
    extension: analytics_1.PasteContents.extension,
    bodiedExtension: analytics_1.PasteContents.bodiedExtension,
    blockCard: analytics_1.PasteContents.blockCard,
};
var nodeToActionSubjectId = {
    blockquote: analytics_1.ACTION_SUBJECT_ID.PASTE_BLOCKQUOTE,
    blockCard: analytics_1.ACTION_SUBJECT_ID.PASTE_BLOCK_CARD,
    bodiedExtension: analytics_1.ACTION_SUBJECT_ID.PASTE_BODIED_EXTENSION,
    bulletList: analytics_1.ACTION_SUBJECT_ID.PASTE_BULLET_LIST,
    codeBlock: analytics_1.ACTION_SUBJECT_ID.PASTE_CODE_BLOCK,
    decisionList: analytics_1.ACTION_SUBJECT_ID.PASTE_DECISION_LIST,
    extension: analytics_1.ACTION_SUBJECT_ID.PASTE_EXTENSION,
    heading: analytics_1.ACTION_SUBJECT_ID.PASTE_HEADING,
    mediaGroup: analytics_1.ACTION_SUBJECT_ID.PASTE_MEDIA_GROUP,
    mediaSingle: analytics_1.ACTION_SUBJECT_ID.PASTE_MEDIA_SINGLE,
    orderedList: analytics_1.ACTION_SUBJECT_ID.PASTE_ORDERED_LIST,
    panel: analytics_1.ACTION_SUBJECT_ID.PASTE_PANEL,
    rule: analytics_1.ACTION_SUBJECT_ID.PASTE_RULE,
    table: analytics_1.ACTION_SUBJECT_ID.PASTE_TABLE,
    tableCell: analytics_1.ACTION_SUBJECT_ID.PASTE_TABLE_CELL,
    tableHeader: analytics_1.ACTION_SUBJECT_ID.PASTE_TABLE_HEADER,
    tableRow: analytics_1.ACTION_SUBJECT_ID.PASTE_TABLE_ROW,
    taskList: analytics_1.ACTION_SUBJECT_ID.PASTE_TASK_LIST,
};
function getContent(state, slice) {
    var _a = state.schema, paragraph = _a.nodes.paragraph, link = _a.marks.link;
    var nodeOrMarkName = new Set();
    slice.content.forEach(function (node) {
        if (node.type === paragraph && node.content.size === 0) {
            // Skip empty paragraph
            return;
        }
        if (node.type.name === 'text' && link.isInSet(node.marks)) {
            nodeOrMarkName.add('url');
            return;
        }
        // Check node contain link
        if (node.type === paragraph &&
            node.rangeHasMark(0, node.nodeSize - 2, link)) {
            nodeOrMarkName.add('url');
            return;
        }
        nodeOrMarkName.add(node.type.name);
    });
    if (nodeOrMarkName.size > 1) {
        return analytics_1.PasteContents.mixed;
    }
    if (nodeOrMarkName.size === 0) {
        return analytics_1.PasteContents.uncategorized;
    }
    var type = nodeOrMarkName.values().next().value;
    var pasteContent = contentToPasteContent[type];
    return pasteContent ? pasteContent : analytics_1.PasteContents.uncategorized;
}
function getActionSubjectId(view) {
    var _a = view.state, selection = _a.selection, _b = _a.schema.nodes, paragraph = _b.paragraph, listItem = _b.listItem, taskItem = _b.taskItem, decisionItem = _b.decisionItem;
    var parent = prosemirror_utils_1.findParentNode(function (node) {
        if (node.type !== paragraph &&
            node.type !== listItem &&
            node.type !== taskItem &&
            node.type !== decisionItem) {
            return true;
        }
        return false;
    })(selection);
    if (!parent) {
        return analytics_1.ACTION_SUBJECT_ID.PASTE_PARAGRAPH;
    }
    var parentType = parent.node.type;
    var actionSubjectId = nodeToActionSubjectId[parentType.name];
    return actionSubjectId ? actionSubjectId : analytics_1.ACTION_SUBJECT_ID.PASTE_PARAGRAPH;
}
function createPasteAsPlainPayload(actionSubjectId, text) {
    return {
        action: analytics_1.ACTION.PASTED_AS_PLAIN,
        actionSubject: analytics_1.ACTION_SUBJECT.DOCUMENT,
        actionSubjectId: actionSubjectId,
        eventType: analytics_1.EVENT_TYPE.TRACK,
        attributes: {
            inputMethod: analytics_1.INPUT_METHOD.KEYBOARD,
            pasteSize: text.length,
        },
    };
}
function createPastePayload(actionSubjectId, attributes) {
    return {
        action: analytics_1.ACTION.PASTED,
        actionSubject: analytics_1.ACTION_SUBJECT.DOCUMENT,
        actionSubjectId: actionSubjectId,
        eventType: analytics_1.EVENT_TYPE.TRACK,
        attributes: tslib_1.__assign({ inputMethod: analytics_1.INPUT_METHOD.KEYBOARD }, attributes),
    };
}
function createPasteAnalyticsPayload(view, event, slice, pasteContext) {
    var text = event.clipboardData
        ? event.clipboardData.getData('text/plain')
        : '';
    var actionSubjectId = getActionSubjectId(view);
    if (pasteContext.asPlain) {
        return createPasteAsPlainPayload(actionSubjectId, text);
    }
    var source = util_1.getPasteSource(event);
    if (pasteContext.type === analytics_1.PasteTypes.plain) {
        return createPastePayload(actionSubjectId, {
            pasteSize: text.length,
            type: pasteContext.type,
            content: analytics_1.PasteContents.text,
            source: source,
        });
    }
    var pasteSize = slice.size;
    var content = getContent(view.state, slice);
    return createPastePayload(actionSubjectId, {
        type: pasteContext.type,
        pasteSize: pasteSize,
        content: content,
        source: source,
    });
}
exports.createPasteAnalyticsPayload = createPasteAnalyticsPayload;
// TODO: ED-6612 We should not dispatch only analytics, it's preferred to wrap each command with his own analytics.
// However, handlers like handleMacroAutoConvert dispatch multiple time,
// so pasteCommandWithAnalytics is useless in this case.
function sendPasteAnalyticsEvent(view, event, slice, pasteContext) {
    var payload = createPasteAnalyticsPayload(view, event, slice, pasteContext);
    view.dispatch(analytics_1.addAnalytics(view.state, view.state.tr, payload));
}
exports.sendPasteAnalyticsEvent = sendPasteAnalyticsEvent;
function pasteCommandWithAnalytics(view, event, slice, pasteContext) {
    return analytics_1.withAnalytics(function () {
        return createPasteAnalyticsPayload(view, event, slice, pasteContext);
    });
}
exports.pasteCommandWithAnalytics = pasteCommandWithAnalytics;
exports.handlePasteAsPlainTextWithAnalytics = function (view, event, slice) {
    return utils_1.pipe(handlers_1.handlePasteAsPlainText, pasteCommandWithAnalytics(view, event, slice, {
        type: analytics_1.PasteTypes.plain,
        asPlain: true,
    }), analytics_2.commandWithAnalytics('atlassian.editor.paste.alt', {
        source: util_1.getPasteSource(event),
    }))(slice, event);
};
exports.handlePasteIntoTaskAndDecisionWithAnalytics = function (view, event, slice, type) {
    return utils_1.pipe(handlers_1.handlePasteIntoTaskAndDecision, analytics_2.commandWithAnalytics('atlassian.fabric.action-decision.editor.paste'), pasteCommandWithAnalytics(view, event, slice, {
        type: type,
    }))(slice);
};
exports.handleCodeBlockWithAnalytics = function (view, event, slice, text) {
    return utils_1.pipe(handlers_1.handleCodeBlock, pasteCommandWithAnalytics(view, event, slice, {
        type: analytics_1.PasteTypes.plain,
    }))(text);
};
exports.handleMediaSingleWithAnalytics = function (view, event, slice, type) {
    return utils_1.pipe(handlers_1.handleMediaSingle(analytics_1.INPUT_METHOD.CLIPBOARD), analytics_2.commandWithAnalytics('atlassian.editor.paste', {
        source: util_1.getPasteSource(event),
    }), pasteCommandWithAnalytics(view, event, slice, {
        type: type,
    }))(slice);
};
exports.handlePastePreservingMarksWithAnalytics = function (view, event, slice, type) {
    var withV2Analytics = analytics_2.commandWithAnalytics('atlassian.editor.paste', {
        source: util_1.getPasteSource(event),
    });
    if (type === analytics_1.PasteTypes.markdown) {
        withV2Analytics = analytics_2.commandWithAnalytics('atlassian.editor.markdown');
    }
    return utils_1.pipe(handlers_1.handlePastePreservingMarks, withV2Analytics, pasteCommandWithAnalytics(view, event, slice, {
        type: type,
    }))(slice);
};
exports.handleMarkdownWithAnalytics = function (view, event, slice) {
    return utils_1.pipe(handlers_1.handleMarkdown, analytics_2.commandWithAnalytics('atlassian.editor.markdown'), pasteCommandWithAnalytics(view, event, slice, {
        type: analytics_1.PasteTypes.markdown,
    }))(slice);
};
exports.handleRichTextWithAnalytics = function (view, event, slice) {
    return utils_1.pipe(handlers_1.handleRichText, analytics_2.commandWithAnalytics('atlassian.editor.paste', {
        source: util_1.getPasteSource(event),
    }), pasteCommandWithAnalytics(view, event, slice, {
        type: analytics_1.PasteTypes.richText,
    }))(slice);
};
//# sourceMappingURL=analytics.js.map