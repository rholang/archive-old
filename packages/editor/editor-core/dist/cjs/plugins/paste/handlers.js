"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var prosemirror_state_1 = require("prosemirror-state");
var prosemirror_utils_1 = require("prosemirror-utils");
var filter_1 = require("../../utils/filter");
var utils_1 = require("../hyperlink/utils");
var prosemirror_model_1 = require("prosemirror-model");
var macro_1 = require("../macro");
var prosemirror_history_1 = require("prosemirror-history");
var util_1 = require("./util");
var doc_1 = require("../card/pm-plugins/doc");
var main_1 = require("../text-formatting/pm-plugins/main");
var utils_2 = require("../../utils");
var slice_1 = require("../../utils/slice");
var media_single_1 = require("../media/utils/media-single");
var analytics_1 = require("../analytics");
var utils_3 = require("../../utils");
var gap_cursor_1 = require("../gap-cursor/");
// remove text attribute from mention for copy/paste (GDPR)
function handleMention(slice, schema) {
    return slice_1.mapSlice(slice, function (node) {
        if (node.type.name === schema.nodes.mention.name) {
            var mention = node.attrs;
            var newMention = tslib_1.__assign(tslib_1.__assign({}, mention), { text: '' });
            return schema.nodes.mention.create(newMention, node.content, node.marks);
        }
        return node;
    });
}
exports.handleMention = handleMention;
function handlePasteIntoTaskAndDecision(slice) {
    return function (state, dispatch) {
        var schema = state.schema, selection = state.tr.selection;
        var codeMark = schema.marks.code, _a = schema.nodes, decisionItem = _a.decisionItem, decisionList = _a.decisionList, emoji = _a.emoji, hardBreak = _a.hardBreak, mention = _a.mention, paragraph = _a.paragraph, taskList = _a.taskList, taskItem = _a.taskItem, text = _a.text;
        if (!decisionItem ||
            !decisionList ||
            !taskList ||
            !taskItem ||
            !prosemirror_utils_1.hasParentNodeOfType([decisionItem, taskItem])(state.selection)) {
            return false;
        }
        var filters = [
            utils_1.linkifyContent(schema),
            filter_1.taskDecisionSliceFilter(schema),
        ];
        var selectionMarks = selection.$head.marks();
        var textFormattingState = main_1.pluginKey.getState(state);
        if (selection instanceof prosemirror_state_1.TextSelection &&
            Array.isArray(selectionMarks) &&
            selectionMarks.length > 0 &&
            util_1.hasOnlyNodesOfType(paragraph, text, emoji, mention, hardBreak)(slice) &&
            (!codeMark.isInSet(selectionMarks) || textFormattingState.codeActive) // for codeMarks let's make sure mark is active
        ) {
            filters.push(util_1.applyTextMarksToSlice(schema, selection.$head.marks()));
        }
        var transformedSlice = utils_2.compose.apply(null, filters)(slice);
        var tr = prosemirror_history_1.closeHistory(state.tr)
            .replaceSelection(transformedSlice)
            .scrollIntoView();
        doc_1.queueCardsFromChangedTr(state, tr, analytics_1.INPUT_METHOD.CLIPBOARD);
        if (dispatch) {
            dispatch(tr);
        }
        return true;
    };
}
exports.handlePasteIntoTaskAndDecision = handlePasteIntoTaskAndDecision;
function handlePasteAsPlainText(slice, _event) {
    return function (state, dispatch, view) {
        // In case of SHIFT+CMD+V ("Paste and Match Style") we don't want to run the usual
        // fuzzy matching of content. ProseMirror already handles this scenario and will
        // provide us with slice containing paragraphs with plain text, which we decorate
        // with "stored marks".
        // @see prosemirror-view/src/clipboard.js:parseFromClipboard()).
        // @see prosemirror-view/src/input.js:doPaste().
        if (view && view.shiftKey) {
            var tr_1 = prosemirror_history_1.closeHistory(state.tr);
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
exports.handlePasteAsPlainText = handlePasteAsPlainText;
function handlePastePreservingMarks(slice) {
    return function (state, dispatch) {
        var schema = state.schema, selection = state.tr.selection;
        var _a = schema.marks, codeMark = _a.code, linkMark = _a.link, _b = schema.nodes, bulletList = _b.bulletList, emoji = _b.emoji, hardBreak = _b.hardBreak, heading = _b.heading, listItem = _b.listItem, mention = _b.mention, orderedList = _b.orderedList, paragraph = _b.paragraph, text = _b.text;
        if (!(selection instanceof prosemirror_state_1.TextSelection)) {
            return false;
        }
        var selectionMarks = selection.$head.marks();
        if (selectionMarks.length === 0) {
            return false;
        }
        var textFormattingState = main_1.pluginKey.getState(state);
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
            var tr = prosemirror_history_1.closeHistory(state.tr)
                .replaceSelectionWith(slice.content.firstChild.firstChild, true)
                .setStoredMarks(selectionMarks)
                .scrollIntoView();
            doc_1.queueCardsFromChangedTr(state, tr, analytics_1.INPUT_METHOD.CLIPBOARD);
            if (dispatch) {
                dispatch(tr);
            }
            return true;
        }
        if (util_1.hasOnlyNodesOfType(bulletList, hardBreak, heading, listItem, paragraph, text, emoji, mention, orderedList)(slice)) {
            var transformedSlice = util_1.applyTextMarksToSlice(schema, selectionMarks)(slice);
            var tr = prosemirror_history_1.closeHistory(state.tr)
                .replaceSelection(transformedSlice)
                .setStoredMarks(selectionMarks)
                .scrollIntoView();
            doc_1.queueCardsFromChangedTr(state, tr, analytics_1.INPUT_METHOD.CLIPBOARD);
            if (dispatch) {
                dispatch(tr);
            }
            return true;
        }
        return false;
    };
}
exports.handlePastePreservingMarks = handlePastePreservingMarks;
function isLinkSmart(text, type, cardOptions) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var provider;
        return tslib_1.__generator(this, function (_a) {
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
        view.dispatch(prosemirror_history_1.closeHistory(view.state.tr)
            .replaceRangeWith(before_1, before_1 + slice.size, macro)
            .scrollIntoView());
        return true;
    }
    return false;
}
function handleMacroAutoConvert(text, slice, cardsOptions) {
    return function (state, _dispatch, view) {
        var macro = macro_1.runMacroAutoConvert(state, text);
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
                    var cardAdf = utils_2.processRawValue(schema, cardData);
                    if (!cardAdf) {
                        throw new Error('Received invalid ADF from CardProvider');
                    }
                    view.dispatch(doc_1.insertCard(tr, cardAdf, schema));
                })
                    .catch(function () { return insertAutoMacro(slice, macro, view); });
                return true;
            }
            return insertAutoMacro(slice, macro, view);
        }
        return !!macro;
    };
}
exports.handleMacroAutoConvert = handleMacroAutoConvert;
function handleCodeBlock(text) {
    return function (state, dispatch) {
        var codeBlock = state.schema.nodes.codeBlock;
        if (text && prosemirror_utils_1.hasParentNodeOfType(codeBlock)(state.selection)) {
            var tr = prosemirror_history_1.closeHistory(state.tr);
            tr.scrollIntoView();
            if (dispatch) {
                dispatch(tr.insertText(text));
            }
            return true;
        }
        return false;
    };
}
exports.handleCodeBlock = handleCodeBlock;
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
function handleMediaSingle(inputMethod) {
    return function (slice) {
        return function (state, dispatch, view) {
            if (view) {
                if (isOnlyMedia(state, slice)) {
                    return media_single_1.insertMediaAsMediaSingle(view, slice.content.firstChild, inputMethod);
                }
                if (utils_3.insideTable(state) && isOnlyMediaSingle(state, slice)) {
                    var tr = state.tr.replaceSelection(slice);
                    var nextPos = tr.doc.resolve(tr.mapping.map(state.selection.$from.pos));
                    if (dispatch) {
                        dispatch(tr.setSelection(new gap_cursor_1.GapCursorSelection(nextPos, gap_cursor_1.Side.RIGHT)));
                    }
                    return true;
                }
            }
            return false;
        };
    };
}
exports.handleMediaSingle = handleMediaSingle;
function handleMarkdown(markdownSlice) {
    return function (state, dispatch) {
        var tr = prosemirror_history_1.closeHistory(state.tr);
        tr.replaceSelection(markdownSlice);
        doc_1.queueCardsFromChangedTr(state, tr, analytics_1.INPUT_METHOD.CLIPBOARD);
        if (dispatch) {
            dispatch(tr.scrollIntoView());
        }
        return true;
    };
}
exports.handleMarkdown = handleMarkdown;
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
        utils_3.insideTable(state) &&
        isList(state.schema, node) &&
        slice.openStart > slice.openEnd);
}
function handleRichText(slice) {
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
            slice = new prosemirror_model_1.Slice(prosemirror_model_1.Fragment.from(node.type.createChecked(node.attrs, nodes)), slice.openEnd, slice.openEnd);
        }
        prosemirror_history_1.closeHistory(tr);
        // if inside an empty panel, try and insert content inside it rather than replace it
        var panelParent = prosemirror_utils_1.findParentNodeOfType(panel)(tr.selection);
        if (tr.selection.$from === tr.selection.$to &&
            panelParent &&
            !panelParent.node.textContent) {
            tr = prosemirror_utils_1.safeInsert(slice.content, tr.selection.$to.pos)(tr);
            // set selection to end of inserted content
            panelParent = prosemirror_utils_1.findParentNodeOfType(panel)(tr.selection);
            if (panelParent) {
                tr.setSelection(prosemirror_state_1.TextSelection.near(tr.doc.resolve(panelParent.pos + panelParent.node.nodeSize)));
            }
        }
        else {
            tr.replaceSelection(slice);
        }
        tr.setStoredMarks([]);
        if (tr.selection.empty && tr.selection.$from.parent.type === codeBlock) {
            tr.setSelection(prosemirror_state_1.TextSelection.near(tr.selection.$from, 1));
        }
        tr.scrollIntoView();
        // queue link cards, ignoring any errors
        if (dispatch) {
            dispatch(doc_1.queueCardsFromChangedTr(state, tr, analytics_1.INPUT_METHOD.CLIPBOARD));
        }
        return true;
    };
}
exports.handleRichText = handleRichText;
//# sourceMappingURL=handlers.js.map