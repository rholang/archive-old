import { CreateUIAnalyticsEvent } from '@atlaskit/analytics-next';
import { EditorPlugin, EditorProps } from '../types';
import {
  basePlugin,
  breakoutPlugin,
  blockTypePlugin,
  clearMarksOnChangeToEmptyDocumentPlugin,
  codeBlockPlugin,
  collabEditPlugin,
  datePlugin,
  emojiPlugin,
  extensionPlugin,
  fakeTextCursorPlugin,
  helpDialogPlugin,
  hyperlinkPlugin,
  imageUploadPlugin,
  insertBlockPlugin,
  jiraIssuePlugin,
  layoutPlugin,
  listsPlugin,
  macroPlugin,
  maxContentSizePlugin,
  mediaPlugin,
  mentionsPlugin,
  panelPlugin,
  pastePlugin,
  placeholderPlugin,
  placeholderTextPlugin,
  rulePlugin,
  saveOnEnterPlugin,
  submitEditorPlugin,
  tablesPlugin,
  tasksAndDecisionsPlugin,
  textColorPlugin,
  textFormattingPlugin,
  unsupportedContentPlugin,
  widthPlugin,
  typeAheadPlugin,
  quickInsertPlugin,
  gapCursorPlugin,
  cardPlugin,
  floatingToolbarPlugin,
  statusPlugin,
  gridPlugin,
  alignmentPlugin,
  editorDisabledPlugin,
  indentationPlugin,
  annotationPlugin,
  analyticsPlugin,
  customAutoformatPlugin,
  feedbackDialogPlugin,
  historyPlugin,
  sharedContextPlugin,
} from '../plugins';
import { isFullPage as fullPageCheck } from '../utils/is-full-page';
import { EditorView } from 'prosemirror-view';

/**
 * Returns list of plugins that are absolutely necessary for editor to work
 */
export function getDefaultPluginsList(props: EditorProps): EditorPlugin[] {
  const { appearance, textFormatting, placeholder } = props;
  const isFullPage = fullPageCheck(appearance);

  return [
    pastePlugin(),
    basePlugin({
      allowInlineCursorTarget: appearance !== 'mobile',
      allowScrollGutter: allowScrollGutter(props),
      addRunTimePerformanceCheck: isFullPage,
    }),
    blockTypePlugin({ lastNodeMustBeParagraph: appearance === 'comment' }),
    placeholderPlugin({ placeholder }),
    clearMarksOnChangeToEmptyDocumentPlugin(),
    hyperlinkPlugin(),
    textFormattingPlugin(textFormatting || {}),
    widthPlugin(),
    typeAheadPlugin(),
    unsupportedContentPlugin(),
    editorDisabledPlugin(),
    gapCursorPlugin(),
    gridPlugin({ shouldCalcBreakoutGridLines: isFullPage }),
    submitEditorPlugin(),
    fakeTextCursorPlugin(),
    floatingToolbarPlugin(),
    sharedContextPlugin(),
  ];
}

function allowScrollGutter(
  props: EditorProps,
): ((view: EditorView) => HTMLElement | null) | undefined {
  const { appearance } = props;
  if (fullPageCheck(appearance)) {
    // Full Page appearance uses a scrollable div wrapper
    return () => document.querySelector('.fabric-editor-popup-scroll-parent');
  }
  if (appearance === 'mobile') {
    // Mobile appearance uses body scrolling for improved performance on low powered devices.
    return () => document.body;
  }
  return undefined;
}

/**
 * Maps EditorProps to EditorPlugins
 */
export default function createPluginsList(
  props: EditorProps,
  prevProps?: EditorProps,
  createAnalyticsEvent?: CreateUIAnalyticsEvent,
): EditorPlugin[] {
  const isMobile = props.appearance === 'mobile';
  const isFullPage = fullPageCheck(props.appearance);
  const plugins = getDefaultPluginsList(props);

  if (props.allowAnalyticsGASV3) {
    plugins.push(analyticsPlugin(createAnalyticsEvent));
  }

  if (props.allowBreakout && isFullPage) {
    plugins.push(
      breakoutPlugin({ allowBreakoutButton: props.appearance === 'full-page' }),
    );
  }

  if (props.allowTextAlignment) {
    plugins.push(alignmentPlugin());
  }

  if (props.allowTextColor) {
    plugins.push(textColorPlugin());
  }

  if (props.allowLists) {
    plugins.push(listsPlugin());
  }

  if (props.allowRule) {
    plugins.push(rulePlugin());
  }

  if (props.media || props.mediaProvider) {
    plugins.push(
      mediaPlugin(props.media, {
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
      }),
    );
  }

  if (props.allowCodeBlocks) {
    const options = props.allowCodeBlocks !== true ? props.allowCodeBlocks : {};
    plugins.push(codeBlockPlugin(options));
  }

  if (props.mentionProvider) {
    plugins.push(
      mentionsPlugin({
        createAnalyticsEvent,
        sanitizePrivateContent: props.sanitizePrivateContent,
        mentionInsertDisplayName: props.mentionInsertDisplayName,
        useInlineWrapper: isMobile,
        allowZeroWidthSpaceAfter: !isMobile,
      }),
    );
  }

  if (props.emojiProvider) {
    plugins.push(
      emojiPlugin({
        createAnalyticsEvent,
        useInlineWrapper: isMobile,
        allowZeroWidthSpaceAfter: !isMobile,
      }),
    );
  }

  if (props.allowTables) {
    const tableOptions =
      !props.allowTables || typeof props.allowTables === 'boolean'
        ? {}
        : props.allowTables;
    plugins.push(
      tablesPlugin({
        tableOptions,
        breakoutEnabled: props.appearance === 'full-page',
        allowContextualMenu: !isMobile,
        fullWidthEnabled: props.appearance === 'full-width',
        wasFullWidthEnabled: prevProps && prevProps.appearance === 'full-width',
        dynamicSizingEnabled: props.allowDynamicTextSizing,
      }),
    );
  }

  if (props.allowTasksAndDecisions || props.taskDecisionProvider) {
    plugins.push(tasksAndDecisionsPlugin());
  }

  if (props.feedbackInfo) {
    plugins.push(feedbackDialogPlugin(props.feedbackInfo));
  }

  if (props.allowHelpDialog) {
    plugins.push(helpDialogPlugin());
  }

  if (props.saveOnEnter) {
    plugins.push(saveOnEnterPlugin());
  }

  if (props.legacyImageUploadProvider) {
    plugins.push(imageUploadPlugin());

    if (!props.media && !props.mediaProvider) {
      plugins.push(
        mediaPlugin({
          allowMediaSingle: { disableLayout: true },
          allowMediaGroup: false,
        }),
      );
    }
  }

  if (props.collabEdit || props.collabEditProvider) {
    plugins.push(
      collabEditPlugin(props.collabEdit, props.sanitizePrivateContent),
    );
  }

  if (props.maxContentSize) {
    plugins.push(maxContentSizePlugin());
  }

  if (props.allowJiraIssue) {
    plugins.push(jiraIssuePlugin());
  }

  if (props.allowPanel) {
    plugins.push(panelPlugin());
  }

  if (props.allowExtension) {
    plugins.push(
      extensionPlugin({ breakoutEnabled: props.appearance === 'full-page' }),
    );
  }

  if (props.macroProvider) {
    plugins.push(macroPlugin());
  }

  if (props.annotationProvider || props.allowConfluenceInlineComment) {
    plugins.push(annotationPlugin(props.annotationProvider));
  }

  if (props.allowDate) {
    plugins.push(datePlugin());
  }

  if (props.allowTemplatePlaceholders) {
    const options =
      props.allowTemplatePlaceholders !== true
        ? props.allowTemplatePlaceholders
        : {};
    plugins.push(placeholderTextPlugin(options));
  }

  if (props.allowLayouts) {
    plugins.push(layoutPlugin());
  }

  if (props.UNSAFE_cards) {
    plugins.push(cardPlugin());
  }

  if (props.autoformattingProvider) {
    plugins.push(customAutoformatPlugin());
  }

  let statusMenuDisabled = true;
  if (props.allowStatus) {
    statusMenuDisabled =
      typeof props.allowStatus === 'object'
        ? props.allowStatus.menuDisabled
        : false;
    plugins.push(
      statusPlugin({
        menuDisabled: statusMenuDisabled,
        useInlineWrapper: isMobile,
        allowZeroWidthSpaceAfter: !isMobile,
      }),
    );
  }

  if (props.allowIndentation) {
    plugins.push(indentationPlugin());
  }

  // UI only plugins
  plugins.push(
    insertBlockPlugin({
      allowTables: !!props.allowTables,
      insertMenuItems: props.insertMenuItems,
      horizontalRuleEnabled: props.allowRule,
      nativeStatusSupported: !statusMenuDisabled,
    }),
  );

  if (!isMobile) {
    plugins.push(quickInsertPlugin());
  }

  if (isMobile) {
    plugins.push(historyPlugin());
  }

  return plugins;
}
