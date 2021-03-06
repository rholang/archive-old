import { __assign, __awaiter, __generator } from "tslib";
import { TextSelection } from 'prosemirror-state';
import { hasParentNodeOfType, findParentNodeOfType, safeInsert, } from 'prosemirror-utils';
import { taskDecisionSliceFilter } from '../../utils/filter';
import { linkifyContent } from '../hyperlink/utils';
import { Slice, Fragment } from 'prosemirror-model';
import { runMacroAutoConvert } from '../macro';
import { closeHistory } from 'prosemirror-history';
import { applyTextMarksToSlice, hasOnlyNodesOfType } from './util';
import { queueCardsFromChangedTr, insertCard } from '../card/pm-plugins/doc';
import { pluginKey as textFormattingPluginKey, } from '../text-formatting/pm-plugins/main';
import { compose, processRawValue } from '../../utils';
import { mapSlice } from '../../utils/slice';
import { insertMediaAsMediaSingle } from '../media/utils/media-single';
import { INPUT_METHOD } from '../analytics';
import { insideTable } from '../../utils';
import { GapCursorSelection, Side } from '../gap-cursor/';
// remove text attribute from mention for copy/paste (GDPR)
export function handleMention(slice, schema) {
    return mapSlice(slice, function (node) {
        if (node.type.name === schema.nodes.mention.name) {
            var mention = node.attrs;
            var newMention = __assign(__assign({}, mention), { text: '' });
            return schema.nodes.mention.create(newMention, node.content, node.marks);
        }
        return node;
    });
}
export function handlePasteIntoTaskAndDecision(slice) {
    return function (state, dispatch) {
        var schema = state.schema, selection = state.tr.selection;
        var codeMark = schema.marks.code, _a = schema.nodes, decisionItem = _a.decisionItem, decisionList = _a.decisionList, emoji = _a.emoji, hardBreak = _a.hardBreak, mention = _a.mention, paragraph = _a.paragraph, taskList = _a.taskList, taskItem = _a.taskItem, text = _a.text;
        if (!decisionItem ||
            !decisionList ||
            !taskList ||
            !taskItem ||
            !hasParentNodeOfType([decisionItem, taskItem])(state.selection)) {
            return false;
        }
        var filters = [
            linkifyContent(schema),
            taskDecisionSliceFilter(schema),
        ];
        var selectionMarks = selection.$head.marks();
        var textFormattingState = textFormattingPluginKey.getState(state);
        if (selection instanceof TextSelection &&
            Array.isArray(selectionMarks) &&
            selectionMarks.length > 0 &&
            hasOnlyNodesOfType(paragraph, text, emoji, mention, hardBreak)(slice) &&
            (!codeMark.isInSet(selectionMarks) || textFormattingState.codeActive) // for codeMarks let's make sure mark is active
        ) {
            filters.push(applyTextMarksToSlice(schema, selection.$head.marks()));
        }
        var transformedSlice = compose.apply(null, filters)(slice);
        var tr = closeHistory(state.tr)
            .replaceSelection(transformedSlice)
            .scrollIntoView();
        queueCardsFromChangedTr(state, tr, INPUT_METHOD.CLIPBOARD);
        if (dispatch) {
            dispatch(tr);
        }
        return true;
    };
}
export function handlePasteAsPlainText(slice, _event) {
    return function (state, dispatch, view) {
        // In case of SHIFT+CMD+V ("Paste and Match Style") we don't want to run the usual
        // fuzzy matching of content. ProseMirror already handles this scenario and will
        // provide us with slice containing paragraphs with plain text, which we decorate
        // with "stored marks".
        // @see prosemirror-view/src/clipboard.js:parseFromClipboard()).
        // @see prosemirror-view/src/input.js:doPaste().
        if (view && view.shiftKey) {
            var tr_1 = closeHistory(state.tr);
            // <- using the same internal flag that prosemirror-view is using
            tr_1.replaceSelection(slice);
            (state.storedMarks || []).forEach(function (mark) {
                tr_1.addMark(tr_1.selection.from, tr_1.selection.from + slice.size, mark);
            });
            tr_1.scrollIntoView();
            if (dispatch) {
                dispatch(tr_1);
            }
            return true;
        }
        return false;
    };
}
export function handlePastePreservingMarks(slice) {
    return function (state, dispatch) {
        var schema = state.schema, selection = state.tr.selection;
        var _a = schema.marks, codeMark = _a.code, linkMark = _a.link, _b = schema.nodes, bulletList = _b.bulletList, emoji = _b.emoji, hardBreak = _b.hardBreak, heading = _b.heading, listItem = _b.listItem, mention = _b.mention, orderedList = _b.orderedList, paragraph = _b.paragraph, text = _b.text;
        if (!(selection instanceof TextSelection)) {
            return false;
        }
        var selectionMarks = selection.$head.marks();
        if (selectionMarks.length === 0) {
            return false;
        }
        var textFormattingState = textFormattingPluginKey.getState(state);
        // special case for codeMark: will preserve mark only if codeMark is currently active
        // won't preserve mark if cursor is on the edge on the mark (namely inactive)
        if (codeMark.isInSet(selectionMarks) && !textFormattingState.codeActive) {
            return false;
        }
        var isPlainTextSlice = slice.content.childCount === 1 &&
            slice.content.firstChild.type === paragraph &&
            slice.content.firstChild.content.childCount === 1 &&
            slice.content.firstChild.firstChild.type === text;
        // special case for plainTextSlice & linkMark: merge into existing link
        if (isPlainTextSlice &&
            linkMark.isInSet(selectionMarks) &&
            selectionMarks.length === 1) {
            var tr = closeHistory(state.tr)
                .replaceSelectionWith(slice.content.firstChild.firstChild, true)
                .setStoredMarks(selectionMarks)
                .scrollIntoView();
            queueCardsFromChangedTr(state, tr, INPUT_METHOD.CLIPBOARD);
            if (dispatch) {
                dispatch(tr);
            }
            return true;
        }
        if (hasOnlyNodesOfType(bulletList, hardBreak, heading, listItem, paragraph, text, emoji, mention, orderedList)(slice)) {
            var transformedSlice = applyTextMarksToSlice(schema, selectionMarks)(slice);
            var tr = closeHistory(state.tr)
                .replaceSelection(transformedSlice)
                .setStoredMarks(selectionMarks)
                .scrollIntoView();
            queueCardsFromChangedTr(state, tr, INPUT_METHOD.CLIPBOARD);
            if (dispatch) {
                dispatch(tr);
            }
            return true;
        }
        return false;
    };
}
function isLinkSmart(text, type, cardOptions) {
    return __awaiter(this, void 0, void 0, function () {
        var provider;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!cardOptions.provider) {
                        return [2 /*return*/, false];
                    }
                    return [4 /*yield*/, cardOptions.provider];
                case 1:
                    provider = _a.sent();
                    return [4 /*yield*/, provider.resolve(text, type)];
                case 2: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
function insertAutoMacro(slice, macro, view) {
    if (view) {
        // insert the text or linkified/md-converted clipboard data
        var selection = view.state.tr.selection;
        var tr = view.state.tr.replaceSelection(slice);
        var before_1 = tr.mapping.map(selection.from, -1);
        view.dispatch(tr);
        // replace the text with the macro as a separate transaction
        // so the autoconversion generates 2 undo steps
        view.dispatch(closeHistory(view.state.tr)
            .replaceRangeWith(before_1, before_1 + slice.size, macro)
            .scrollIntoView());
        return true;
    }
    return false;
}
export function handleMacroAutoConvert(text, slice, cardsOptions) {
    return function (state, _dispatch, view) {
        var macro = runMacroAutoConvert(state, text);
        if (macro) {
            /**
             * if FF enabled, run through smart links and check for result
             */
            if (cardsOptions &&
                cardsOptions.resolveBeforeMacros &&
                cardsOptions.resolveBeforeMacros.length) {
                if (cardsOptions.resolveBeforeMacros.indexOf(macro.attrs.extensionKey) < 0) {
                    return insertAutoMacro(slice, macro, view);
                }
                isLinkSmart(text, 'inline', cardsOptions)
                    .then(function (cardData) {
                    if (!view) {
                        throw new Error('Missing view');
                    }
                    var _a = view.state, schema = _a.schema, tr = _a.tr;
                    var cardAdf = processRawValue(schema, cardData);
                    if (!cardAdf) {
                        throw new Error('Received invalid ADF from CardProvider');
                    }
                    view.dispatch(insertCard(tr, cardAdf, schema));
                })
                    .catch(function () { return insertAutoMacro(slice, macro, view); });
                return true;
            }
            return insertAutoMacro(slice, macro, view);
        }
        return !!macro;
    };
}
export function handleCodeBlock(text) {
    return function (state, dispatch) {
        var codeBlock = state.schema.nodes.codeBlock;
        if (text && hasParentNodeOfType(codeBlock)(state.selection)) {
            var tr = closeHistory(state.tr);
            tr.scrollIntoView();
            if (dispatch) {
                dispatch(tr.insertText(text));
            }
            return true;
        }
        return false;
    };
}
function isOnlyMedia(state, slice) {
    var media = state.schema.nodes.media;
    return (slice.content.childCount === 1 && slice.content.firstChild.type === media);
}
function isOnlyMediaSingle(state, slice) {
    var mediaSingle = state.schema.nodes.mediaSingle;
    return (mediaSingle &&
        slice.content.childCount === 1 &&
        slice.content.firstChild.type === mediaSingle);
}
export function handleMediaSingle(inputMethod) {
    return function (slice) {
        return function (state, dispatch, view) {
            if (view) {
                if (isOnlyMedia(state, slice)) {
                    return insertMediaAsMediaSingle(view, slice.content.firstChild, inputMethod);
                }
                if (insideTable(state) && isOnlyMediaSingle(state, slice)) {
                    var tr = state.tr.replaceSelection(slice);
                    var nextPos = tr.doc.resolve(tr.mapping.map(state.selection.$from.pos));
                    if (dispatch) {
                        dispatch(tr.setSelection(new GapCursorSelection(nextPos, Side.RIGHT)));
                    }
                    return true;
                }
            }
            return false;
        };
    };
}
export function handleMarkdown(markdownSlice) {
    return function (state, dispatch) {
        var tr = closeHistory(state.tr);
        tr.replaceSelection(markdownSlice);
        queueCardsFromChangedTr(state, tr, INPUT_METHOD.CLIPBOARD);
        if (dispatch) {
            dispatch(tr.scrollIntoView());
        }
        return true;
    };
}
function removePrecedingBackTick(tr) {
    var _a = tr.selection, nodeBefore = _a.$from.nodeBefore, from = _a.from;
    if (nodeBefore && nodeBefore.isText && nodeBefore.text.endsWith('`')) {
        tr.delete(from - 1, from);
    }
}
function hasInlineCode(state, slice) {
    return (slice.content.firstChild &&
        slice.content.firstChild.marks.some(function (m) { return m.type === state.schema.marks.code; }));
}
function isList(schema, node) {
    var _a = schema.nodes, bulletList = _a.bulletList, orderedList = _a.orderedList;
    return node && (node.type === bulletList || node.type === orderedList);
}
function flattenList(state, node, nodesArr) {
    var listItem = state.schema.nodes.listItem;
    node.content.forEach(function (child) {
        if (isList(state.schema, child) ||
            (child.type === listItem && isList(state.schema, child.firstChild))) {
            flattenList(state, child, nodesArr);
        }
        else {
            nodesArr.push(child);
        }
    });
}
function shouldFlattenList(state, slice) {
    var node = slice.content.firstChild;
    return (node &&
        insideTable(state) &&
        isList(state.schema, node) &&
        slice.openStart > slice.openEnd);
}
export function handleRichText(slice) {
    return function (state, dispatch) {
        var _a = state.schema.nodes, codeBlock = _a.codeBlock, panel = _a.panel;
        // In case user is pasting inline code,
        // any backtick ` immediately preceding it should be removed.
        var tr = state.tr;
        if (hasInlineCode(state, slice)) {
            removePrecedingBackTick(tr);
        }
        /**
         * ED-6300: When a nested list is pasted in a table cell and the slice has openStart > openEnd,
         * it splits the table. As a workaround, we flatten the list to even openStart and openEnd
         *
         *  Before:
         *  ul
         *    ┗━ li
         *      ┗━ ul
         *        ┗━ li
         *          ┗━ p -> "one"
         *    ┗━ li
         *      ┗━ p -> "two"
         *
         *  After:
         *  ul
         *    ┗━ li
         *      ┗━ p -> "one"
         *    ┗━ li
         *      ┗━p -> "two"
         */
        if (shouldFlattenList(state, slice) && slice.content.firstChild) {
            var node = slice.content.firstChild;
            var nodes = [];
            flattenList(state, node, nodes);
            slice = new Slice(Fragment.from(node.type.createChecked(node.attrs, nodes)), slice.openEnd, slice.openEnd);
        }
        closeHistory(tr);
        // if inside an empty panel, try and insert content inside it rather than replace it
        var panelParent = findParentNodeOfType(panel)(tr.selection);
        if (tr.selection.$from === tr.selection.$to &&
            panelParent &&
            !panelParent.node.textContent) {
            tr = safeInsert(slice.content, tr.selection.$to.pos)(tr);
            // set selection to end of inserted content
            panelParent = findParentNodeOfType(panel)(tr.selection);
            if (panelParent) {
                tr.setSelection(TextSelection.near(tr.doc.resolve(panelParent.pos + panelParent.node.nodeSize)));
            }
        }
        else {
            tr.replaceSelection(slice);
        }
        tr.setStoredMarks([]);
        if (tr.selection.empty && tr.selection.$from.parent.type === codeBlock) {
            tr.setSelection(TextSelection.near(tr.selection.$from, 1));
        }
        tr.scrollIntoView();
        // queue link cards, ignoring any errors
        if (dispatch) {
            dispatch(queueCardsFromChangedTr(state, tr, INPUT_METHOD.CLIPBOARD));
        }
        return true;
    };
}
//# sourceMappingURL=handlers.js.map