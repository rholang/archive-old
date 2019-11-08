"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var plugins_1 = require("../plugins");
var is_full_page_1 = require("../utils/is-full-page");
/**
 * Returns list of plugins that are absolutely necessary for editor to work
 */
function getDefaultPluginsList(props) {
    var appearance = props.appearance, textFormatting = props.textFormatting, placeholder = props.placeholder;
    var isFullPage = is_full_page_1.isFullPage(appearance);
    return [
        plugins_1.pastePlugin(),
        plugins_1.basePlugin({
            allowInlineCursorTarget: appearance !== 'mobile',
            allowScrollGutter: allowScrollGutter(props),
            addRunTimePerformanceCheck: isFullPage,
        }),
        plugins_1.blockTypePlugin({ lastNodeMustBeParagraph: appearance === 'comment' }),
        plugins_1.placeholderPlugin({ placeholder: placeholder }),
        plugins_1.clearMarksOnChangeToEmptyDocumentPlugin(),
        plugins_1.hyperlinkPlugin(),
        plugins_1.textFormattingPlugin(textFormatting || {}),
        plugins_1.widthPlugin(),
        plugins_1.typeAheadPlugin(),
        plugins_1.unsupportedContentPlugin(),
        plugins_1.editorDisabledPlugin(),
        plugins_1.gapCursorPlugin(),
        plugins_1.gridPlugin({ shouldCalcBreakoutGridLines: isFullPage }),
        plugins_1.submitEditorPlugin(),
        plugins_1.fakeTextCursorPlugin(),
        plugins_1.floatingToolbarPlugin(),
        plugins_1.sharedContextPlugin(),
    ];
}
exports.getDefaultPluginsList = getDefaultPluginsList;
function allowScrollGutter(props) {
    var appearance = props.appearance;
    if (is_full_page_1.isFullPage(appearance)) {
        // Full Page appearance uses a scrollable div wrapper
        return function () { return document.querySelector('.fabric-editor-popup-scroll-parent'); };
    }
    if (appearance === 'mobile') {
        // Mobile appearance uses body scrolling for improved performance on low powered devices.
        return function () { return document.body; };
    }
    return undefined;
}
/**
 * Maps EditorProps to EditorPlugins
 */
function createPluginsList(props, prevProps, createAnalyticsEvent) {
    var isMobile = props.appearance === 'mobile';
    var isFullPage = is_full_page_1.isFullPage(props.appearance);
    var plugins = getDefaultPluginsList(props);
    if (props.allowAnalyticsGASV3) {
        plugins.push(plugins_1.analyticsPlugin(createAnalyticsEvent));
    }
    if (props.allowBreakout && isFullPage) {
        plugins.push(plugins_1.breakoutPlugin({ allowBreakoutButton: props.appearance === 'full-page' }));
    }
    if (props.allowTextAlignment) {
        plugins.push(plugins_1.alignmentPlugin());
    }
    if (props.allowTextColor) {
        plugins.push(plugins_1.textColorPlugin());
    }
    if (props.allowLists) {
        plugins.push(plugins_1.listsPlugin());
    }
    if (props.allowRule) {
        plugins.push(plugins_1.rulePlugin());
    }
    if (props.media || props.mediaProvider) {
        plugins.push(plugins_1.mediaPlugin(props.media, {
            allowLazyLoading: !isMobile,
            allowBreakoutSnapPoints: isFullPage,
            allowAdvancedToolBarOptions: isFullPage,
            allowDropzoneDropLine: isFullPage,
            allowMediaSingleEditable: !isMobile,
            allowRemoteDimensionsFetch: !isMobile,
            // This is a wild one. I didnt quite understand what the code was doing
            // so a bit of guess for now.
            allowMarkingUploadsAsIncomplete: isMobile,
            fullWidthEnabled: props.appearance === 'full-width',
        }));
    }
    if (props.allowCodeBlocks) {
        var options = props.allowCodeBlocks !== true ? props.allowCodeBlocks : {};
        plugins.push(plugins_1.codeBlockPlugin(options));
    }
    if (props.mentionProvider) {
        plugins.push(plugins_1.mentionsPlugin({
            createAnalyticsEvent: createAnalyticsEvent,
            sanitizePrivateContent: props.sanitizePrivateContent,
            mentionInsertDisplayName: props.mentionInsertDisplayName,
            useInlineWrapper: isMobile,
            allowZeroWidthSpaceAfter: !isMobile,
        }));
    }
    if (props.emojiProvider) {
        plugins.push(plugins_1.emojiPlugin({
            createAnalyticsEvent: createAnalyticsEvent,
            useInlineWrapper: isMobile,
            allowZeroWidthSpaceAfter: !isMobile,
        }));
    }
    if (props.allowTables) {
        var tableOptions = !props.allowTables || typeof props.allowTables === 'boolean'
            ? {}
            : props.allowTables;
        plugins.push(plugins_1.tablesPlugin({
            tableOptions: tableOptions,
            breakoutEnabled: props.appearance === 'full-page',
            allowContextualMenu: !isMobile,
            fullWidthEnabled: props.appearance === 'full-width',
            wasFullWidthEnabled: prevProps && prevProps.appearance === 'full-width',
            dynamicSizingEnabled: props.allowDynamicTextSizing,
        }));
    }
    if (props.allowTasksAndDecisions || props.taskDecisionProvider) {
        plugins.push(plugins_1.tasksAndDecisionsPlugin());
    }
    if (props.feedbackInfo) {
        plugins.push(plugins_1.feedbackDialogPlugin(props.feedbackInfo));
    }
    if (props.allowHelpDialog) {
        plugins.push(plugins_1.helpDialogPlugin());
    }
    if (props.saveOnEnter) {
        plugins.push(plugins_1.saveOnEnterPlugin());
    }
    if (props.legacyImageUploadProvider) {
        plugins.push(plugins_1.imageUploadPlugin());
        if (!props.media && !props.mediaProvider) {
            plugins.push(plugins_1.mediaPlugin({
                allowMediaSingle: { disableLayout: true },
                allowMediaGroup: false,
            }));
        }
    }
    if (props.collabEdit || props.collabEditProvider) {
        plugins.push(plugins_1.collabEditPlugin(props.collabEdit, props.sanitizePrivateContent));
    }
    if (props.maxContentSize) {
        plugins.push(plugins_1.maxContentSizePlugin());
    }
    if (props.allowJiraIssue) {
        plugins.push(plugins_1.jiraIssuePlugin());
    }
    if (props.allowPanel) {
        plugins.push(plugins_1.panelPlugin());
    }
    if (props.allowExtension) {
        plugins.push(plugins_1.extensionPlugin({ breakoutEnabled: props.appearance === 'full-page' }));
    }
    if (props.macroProvider) {
        plugins.push(plugins_1.macroPlugin());
    }
    if (props.annotationProvider || props.allowConfluenceInlineComment) {
        plugins.push(plugins_1.annotationPlugin(props.annotationProvider));
    }
    if (props.allowDate) {
        plugins.push(plugins_1.datePlugin());
    }
    if (props.allowTemplatePlaceholders) {
        var options = props.allowTemplatePlaceholders !== true
            ? props.allowTemplatePlaceholders
            : {};
        plugins.push(plugins_1.placeholderTextPlugin(options));
    }
    if (props.allowLayouts) {
        plugins.push(plugins_1.layoutPlugin());
    }
    if (props.UNSAFE_cards) {
        plugins.push(plugins_1.cardPlugin());
    }
    if (props.autoformattingProvider) {
        plugins.push(plugins_1.customAutoformatPlugin());
    }
    var statusMenuDisabled = true;
    if (props.allowStatus) {
        statusMenuDisabled =
            typeof props.allowStatus === 'object'
                ? props.allowStatus.menuDisabled
                : false;
        plugins.push(plugins_1.statusPlugin({
            menuDisabled: statusMenuDisabled,
            useInlineWrapper: isMobile,
            allowZeroWidthSpaceAfter: !isMobile,
        }));
    }
    if (props.allowIndentation) {
        plugins.push(plugins_1.indentationPlugin());
    }
    // UI only plugins
    plugins.push(plugins_1.insertBlockPlugin({
        allowTables: !!props.allowTables,
        insertMenuItems: props.insertMenuItems,
        horizontalRuleEnabled: props.allowRule,
        nativeStatusSupported: !statusMenuDisabled,
    }));
    if (!isMobile) {
        plugins.push(plugins_1.quickInsertPlugin());
    }
    if (isMobile) {
        plugins.push(plugins_1.historyPlugin());
    }
    return plugins;
}
exports.default = createPluginsList;
//# sourceMappingURL=create-plugins-list.js.map