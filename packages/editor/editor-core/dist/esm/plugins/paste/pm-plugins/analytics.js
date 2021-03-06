import { __assign } from "tslib";
import { ACTION, INPUT_METHOD, EVENT_TYPE, ACTION_SUBJECT, ACTION_SUBJECT_ID, addAnalytics, PasteTypes, PasteContents, withAnalytics, } from '../../analytics';
import { commandWithAnalytics as commandWithV2Analytics } from '../../../analytics';
import { getPasteSource } from '../util';
import { handlePasteAsPlainText, handlePasteIntoTaskAndDecision, handleCodeBlock, handleMediaSingle, handlePastePreservingMarks, handleMarkdown, handleRichText, } from '../handlers';
import { pipe } from '../../../utils';
import { findParentNode } from 'prosemirror-utils';
var contentToPasteContent = {
    url: PasteContents.url,
    paragraph: PasteContents.text,
    bulletList: PasteContents.bulletList,
    orderedList: PasteContents.orderedList,
    heading: PasteContents.heading,
    blockquote: PasteContents.blockquote,
    codeBlock: PasteContents.codeBlock,
    panel: PasteContents.panel,
    rule: PasteContents.rule,
    mediaSingle: PasteContents.mediaSingle,
    table: PasteContents.table,
    tableCells: PasteContents.tableCells,
    tableHeader: PasteContents.tableHeader,
    tableRow: PasteContents.tableRow,
    decisionList: PasteContents.decisionList,
    decisionItem: PasteContents.decisionItem,
    taskList: PasteContents.taskItem,
    extension: PasteContents.extension,
    bodiedExtension: PasteContents.bodiedExtension,
    blockCard: PasteContents.blockCard,
};
var nodeToActionSubjectId = {
    blockquote: ACTION_SUBJECT_ID.PASTE_BLOCKQUOTE,
    blockCard: ACTION_SUBJECT_ID.PASTE_BLOCK_CARD,
    bodiedExtension: ACTION_SUBJECT_ID.PASTE_BODIED_EXTENSION,
    bulletList: ACTION_SUBJECT_ID.PASTE_BULLET_LIST,
    codeBlock: ACTION_SUBJECT_ID.PASTE_CODE_BLOCK,
    decisionList: ACTION_SUBJECT_ID.PASTE_DECISION_LIST,
    extension: ACTION_SUBJECT_ID.PASTE_EXTENSION,
    heading: ACTION_SUBJECT_ID.PASTE_HEADING,
    mediaGroup: ACTION_SUBJECT_ID.PASTE_MEDIA_GROUP,
    mediaSingle: ACTION_SUBJECT_ID.PASTE_MEDIA_SINGLE,
    orderedList: ACTION_SUBJECT_ID.PASTE_ORDERED_LIST,
    panel: ACTION_SUBJECT_ID.PASTE_PANEL,
    rule: ACTION_SUBJECT_ID.PASTE_RULE,
    table: ACTION_SUBJECT_ID.PASTE_TABLE,
    tableCell: ACTION_SUBJECT_ID.PASTE_TABLE_CELL,
    tableHeader: ACTION_SUBJECT_ID.PASTE_TABLE_HEADER,
    tableRow: ACTION_SUBJECT_ID.PASTE_TABLE_ROW,
    taskList: ACTION_SUBJECT_ID.PASTE_TASK_LIST,
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
        return PasteContents.mixed;
    }
    if (nodeOrMarkName.size === 0) {
        return PasteContents.uncategorized;
    }
    var type = nodeOrMarkName.values().next().value;
    var pasteContent = contentToPasteContent[type];
    return pasteContent ? pasteContent : PasteContents.uncategorized;
}
function getActionSubjectId(view) {
    var _a = view.state, selection = _a.selection, _b = _a.schema.nodes, paragraph = _b.paragraph, listItem = _b.listItem, taskItem = _b.taskItem, decisionItem = _b.decisionItem;
    var parent = findParentNode(function (node) {
        if (node.type !== paragraph &&
            node.type !== listItem &&
            node.type !== taskItem &&
            node.type !== decisionItem) {
            return true;
        }
        return false;
    })(selection);
    if (!parent) {
        return ACTION_SUBJECT_ID.PASTE_PARAGRAPH;
    }
    var parentType = parent.node.type;
    var actionSubjectId = nodeToActionSubjectId[parentType.name];
    return actionSubjectId ? actionSubjectId : ACTION_SUBJECT_ID.PASTE_PARAGRAPH;
}
function createPasteAsPlainPayload(actionSubjectId, text) {
    return {
        action: ACTION.PASTED_AS_PLAIN,
        actionSubject: ACTION_SUBJECT.DOCUMENT,
        actionSubjectId: actionSubjectId,
        eventType: EVENT_TYPE.TRACK,
        attributes: {
            inputMethod: INPUT_METHOD.KEYBOARD,
            pasteSize: text.length,
        },
    };
}
function createPastePayload(actionSubjectId, attributes) {
    return {
        action: ACTION.PASTED,
        actionSubject: ACTION_SUBJECT.DOCUMENT,
        actionSubjectId: actionSubjectId,
        eventType: EVENT_TYPE.TRACK,
        attributes: __assign({ inputMethod: INPUT_METHOD.KEYBOARD }, attributes),
    };
}
export function createPasteAnalyticsPayload(view, event, slice, pasteContext) {
    var text = event.clipboardData
        ? event.clipboardData.getData('text/plain')
        : '';
    var actionSubjectId = getActionSubjectId(view);
    if (pasteContext.asPlain) {
        return createPasteAsPlainPayload(actionSubjectId, text);
    }
    var source = getPasteSource(event);
    if (pasteContext.type === PasteTypes.plain) {
        return createPastePayload(actionSubjectId, {
            pasteSize: text.length,
            type: pasteContext.type,
            content: PasteContents.text,
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
// TODO: ED-6612 We should not dispatch only analytics, it's preferred to wrap each command with his own analytics.
// However, handlers like handleMacroAutoConvert dispatch multiple time,
// so pasteCommandWithAnalytics is useless in this case.
export function sendPasteAnalyticsEvent(view, event, slice, pasteContext) {
    var payload = createPasteAnalyticsPayload(view, event, slice, pasteContext);
    view.dispatch(addAnalytics(view.state, view.state.tr, payload));
}
export function pasteCommandWithAnalytics(view, event, slice, pasteContext) {
    return withAnalytics(function () {
        return createPasteAnalyticsPayload(view, event, slice, pasteContext);
    });
}
export var handlePasteAsPlainTextWithAnalytics = function (view, event, slice) {
    return pipe(handlePasteAsPlainText, pasteCommandWithAnalytics(view, event, slice, {
        type: PasteTypes.plain,
        asPlain: true,
    }), commandWithV2Analytics('atlassian.editor.paste.alt', {
        source: getPasteSource(event),
    }))(slice, event);
};
export var handlePasteIntoTaskAndDecisionWithAnalytics = function (view, event, slice, type) {
    return pipe(handlePasteIntoTaskAndDecision, commandWithV2Analytics('atlassian.fabric.action-decision.editor.paste'), pasteCommandWithAnalytics(view, event, slice, {
        type: type,
    }))(slice);
};
export var handleCodeBlockWithAnalytics = function (view, event, slice, text) {
    return pipe(handleCodeBlock, pasteCommandWithAnalytics(view, event, slice, {
        type: PasteTypes.plain,
    }))(text);
};
export var handleMediaSingleWithAnalytics = function (view, event, slice, type) {
    return pipe(handleMediaSingle(INPUT_METHOD.CLIPBOARD), commandWithV2Analytics('atlassian.editor.paste', {
        source: getPasteSource(event),
    }), pasteCommandWithAnalytics(view, event, slice, {
        type: type,
    }))(slice);
};
export var handlePastePreservingMarksWithAnalytics = function (view, event, slice, type) {
    var withV2Analytics = commandWithV2Analytics('atlassian.editor.paste', {
        source: getPasteSource(event),
    });
    if (type === PasteTypes.markdown) {
        withV2Analytics = commandWithV2Analytics('atlassian.editor.markdown');
    }
    return pipe(handlePastePreservingMarks, withV2Analytics, pasteCommandWithAnalytics(view, event, slice, {
        type: type,
    }))(slice);
};
export var handleMarkdownWithAnalytics = function (view, event, slice) {
    return pipe(handleMarkdown, commandWithV2Analytics('atlassian.editor.markdown'), pasteCommandWithAnalytics(view, event, slice, {
        type: PasteTypes.markdown,
    }))(slice);
};
export var handleRichTextWithAnalytics = function (view, event, slice) {
    return pipe(handleRichText, commandWithV2Analytics('atlassian.editor.paste', {
        source: getPasteSource(event),
    }), pasteCommandWithAnalytics(view, event, slice, {
        type: PasteTypes.richText,
    }))(slice);
};
//# sourceMappingURL=analytics.js.map