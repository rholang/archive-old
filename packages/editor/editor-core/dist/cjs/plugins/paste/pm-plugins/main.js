"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var markdown_it_1 = tslib_1.__importDefault(require("markdown-it"));
// @ts-ignore
var prosemirror_tables_1 = require("prosemirror-tables");
var prosemirror_model_1 = require("prosemirror-model");
var prosemirror_state_1 = require("prosemirror-state");
var editor_markdown_transformer_1 = require("@atlaskit/editor-markdown-transformer");
var clipboard = tslib_1.__importStar(require("../../../utils/clipboard"));
var media_single_1 = require("../../media/utils/media-single");
var linkify_md_plugin_1 = tslib_1.__importDefault(require("../linkify-md-plugin"));
var util_1 = require("../util");
var utils_1 = require("../../hyperlink/utils");
var actions_1 = require("../../extension/actions");
var utils_2 = require("../../layout/utils");
var main_1 = require("../../table/pm-plugins/main");
var utils_3 = require("../../table/utils");
var commands_1 = require("../../table/commands");
var handlers_1 = require("../handlers");
var utils_4 = require("../../code-block/utils");
var analytics_1 = require("./analytics");
var analytics_2 = require("../../analytics");
var utils_5 = require("../../../utils");
var media_common_1 = require("../../media/utils/media-common");
var misc_1 = require("../../table/commands/misc");
exports.stateKey = new prosemirror_state_1.PluginKey('pastePlugin');
exports.md = markdown_it_1.default('zero', { html: false });
exports.md.enable([
    // Process html entity - &#123;, &#xAF;, &quot;, ...
    'entity',
    // Process escaped chars and hardbreaks
    'escape',
    'newline',
]);
// enable modified version of linkify plugin
// @see https://product-fabric.atlassian.net/browse/ED-3097
exports.md.use(linkify_md_plugin_1.default);
function isHeaderRowRequired(state) {
    var tableState = main_1.getPluginState(state);
    return tableState && tableState.pluginConfig.isHeaderRowRequired;
}
function isAllowResizingEnabled(state) {
    var tableState = main_1.getPluginState(state);
    return tableState && tableState.pluginConfig.allowColumnResizing;
}
function isBackgroundCellAllowed(state) {
    var tableState = main_1.getPluginState(state);
    return tableState && tableState.pluginConfig.allowBackgroundColor;
}
function createPlugin(schema, cardOptions, sanitizePrivateContent) {
    var atlassianMarkDownParser = new editor_markdown_transformer_1.MarkdownTransformer(schema, exports.md);
    function getMarkdownSlice(text, openStart, openEnd) {
        var doc = atlassianMarkDownParser.parse(util_1.escapeLinks(text));
        if (doc && doc.content) {
            return new prosemirror_model_1.Slice(doc.content, openStart, openEnd);
        }
        return;
    }
    return new prosemirror_state_1.Plugin({
        key: exports.stateKey,
        props: {
            handlePaste: function (view, rawEvent, slice) {
                var event = rawEvent;
                if (!event.clipboardData) {
                    return false;
                }
                var text = event.clipboardData.getData('text/plain');
                var html = event.clipboardData.getData('text/html');
                var isPastedFile = clipboard.isPastedFile(event);
                var isPlainText = text && !html;
                var isRichText = !!html;
                // Bail if copied content has files
                if (isPastedFile) {
                    if (!html) {
                        return true;
                    }
                    /**
                     * Microsoft Office, Number, Pages, etc. adds an image to clipboard
                     * with other mime-types so we don't let the event reach media
                     */
                    event.stopPropagation();
                }
                var state = view.state, dispatch = view.dispatch;
                if (analytics_1.handlePasteAsPlainTextWithAnalytics(view, event, slice)(state, dispatch, view)) {
                    return true;
                }
                // transform slices based on destination
                slice = media_single_1.transformSliceForMedia(slice, schema)(state.selection);
                var markdownSlice;
                if (isPlainText) {
                    markdownSlice = getMarkdownSlice(text, slice.openStart, slice.openEnd);
                    // run macro autoconvert prior to other conversions
                    if (markdownSlice &&
                        handlers_1.handleMacroAutoConvert(text, markdownSlice, cardOptions)(state, dispatch, view)) {
                        // TODO: handleMacroAutoConvert dispatch twice, so we can't use the helper
                        analytics_1.sendPasteAnalyticsEvent(view, event, markdownSlice, {
                            type: analytics_2.PasteTypes.markdown,
                        });
                        return true;
                    }
                }
                if (analytics_1.handlePasteIntoTaskAndDecisionWithAnalytics(view, event, slice, isPlainText ? analytics_2.PasteTypes.plain : analytics_2.PasteTypes.richText)(state, dispatch)) {
                    return true;
                }
                // If we're in a code block, append the text contents of clipboard inside it
                if (analytics_1.handleCodeBlockWithAnalytics(view, event, slice, text)(state, dispatch)) {
                    return true;
                }
                if (analytics_1.handleMediaSingleWithAnalytics(view, event, slice, isPastedFile ? analytics_2.PasteTypes.binary : analytics_2.PasteTypes.richText)(state, dispatch, view)) {
                    return true;
                }
                // If the clipboard only contains plain text, attempt to parse it as Markdown
                if (isPlainText && markdownSlice) {
                    if (analytics_1.handlePastePreservingMarksWithAnalytics(view, event, markdownSlice, analytics_2.PasteTypes.markdown)(state, dispatch)) {
                        return true;
                    }
                    return analytics_1.handleMarkdownWithAnalytics(view, event, markdownSlice)(state, dispatch);
                }
                // finally, handle rich-text copy-paste
                if (isRichText) {
                    // linkify the text where possible
                    slice = utils_1.linkifyContent(state.schema)(slice);
                    // run macro autoconvert prior to other conversions
                    if (handlers_1.handleMacroAutoConvert(text, slice, cardOptions)(state, dispatch, view)) {
                        // TODO: handleMacroAutoConvert dispatch twice, so we can't use the helper
                        analytics_1.sendPasteAnalyticsEvent(view, event, slice, {
                            type: analytics_2.PasteTypes.richText,
                        });
                        return true;
                    }
                    // if we're pasting to outside a table or outside a table
                    // header, ensure that we apply any table headers to the first
                    // row of content we see, if required
                    if (!utils_5.insideTable(state) && isHeaderRowRequired(state)) {
                        slice = commands_1.transformSliceToAddTableHeaders(slice, state.schema);
                    }
                    if (!isAllowResizingEnabled(state)) {
                        slice = misc_1.transformSliceToRemoveColumnsWidths(slice, state.schema);
                    }
                    // If we don't allow background on cells, we need to remove it
                    // from the paste slice
                    if (!isBackgroundCellAllowed(state)) {
                        slice = misc_1.transformSliceRemoveCellBackgroundColor(slice, state.schema);
                    }
                    // get prosemirror-tables to handle pasting tables if it can
                    // otherwise, just the replace the selection with the content
                    if (prosemirror_tables_1.handlePaste(view, null, slice)) {
                        analytics_1.sendPasteAnalyticsEvent(view, event, slice, {
                            type: analytics_2.PasteTypes.richText,
                        });
                        return true;
                    }
                    // ED-4732
                    if (analytics_1.handlePastePreservingMarksWithAnalytics(view, event, slice, analytics_2.PasteTypes.richText)(state, dispatch)) {
                        return true;
                    }
                    return analytics_1.handleRichTextWithAnalytics(view, event, slice)(state, dispatch);
                }
                return false;
            },
            transformPasted: function (slice) {
                if (sanitizePrivateContent) {
                    slice = handlers_1.handleMention(slice, schema);
                }
                slice = utils_3.transformSliceToFixHardBreakProblemOnCopyFromCell(slice, schema);
                /** If a partial paste of table, paste only table's content */
                slice = utils_3.transformSliceToRemoveOpenTable(slice, schema);
                // We do this separately so it also applies to drag/drop events
                slice = utils_2.transformSliceToRemoveOpenLayoutNodes(slice, schema);
                /** If a partial paste of bodied extension, paste only text */
                slice = actions_1.transformSliceToRemoveOpenBodiedExtension(slice, schema);
                /* Bitbucket copies diffs as multiple adjacent code blocks
                 * so we merge ALL adjacent code blocks to support paste here */
                slice = utils_4.transformSliceToJoinAdjacentCodeBlocks(slice);
                slice = utils_4.transformSingleLineCodeBlockToCodeMark(slice, schema);
                slice = media_common_1.transformSliceToCorrectMediaWrapper(slice, schema);
                slice = utils_3.transformSliceToCorrectEmptyTableCells(slice, schema);
                if (slice.content.childCount &&
                    slice.content.lastChild.type === schema.nodes.codeBlock) {
                    slice = new prosemirror_model_1.Slice(slice.content.append(prosemirror_model_1.Fragment.from(schema.nodes.paragraph.createAndFill())), slice.openStart, 1);
                }
                return slice;
            },
            transformPastedHTML: function (html) {
                // Fix for issue ED-4438
                // text from google docs should not be pasted as inline code
                if (html.indexOf('id="docs-internal-guid-') >= 0) {
                    html = html.replace(/white-space:pre/g, '');
                    html = html.replace(/white-space:pre-wrap/g, '');
                }
                if (html.indexOf('<img ') >= 0) {
                    html = media_common_1.unwrapNestedMediaElements(html);
                }
                return html;
            },
        },
    });
}
exports.createPlugin = createPlugin;
//# sourceMappingURL=main.js.map