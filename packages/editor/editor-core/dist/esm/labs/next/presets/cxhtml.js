import * as React from 'react';
import { PresetProvider } from '../Editor';
import { pastePlugin, blockTypePlugin, clearMarksOnChangeToEmptyDocumentPlugin, hyperlinkPlugin, textFormattingPlugin, widthPlugin, unsupportedContentPlugin, quickInsertPlugin, tablesPlugin, codeBlockPlugin, panelPlugin, listsPlugin, textColorPlugin, breakoutPlugin, jiraIssuePlugin, extensionPlugin, rulePlugin, datePlugin, layoutPlugin, indentationPlugin, cardPlugin, statusPlugin, mediaPlugin, mentionsPlugin, tasksAndDecisionsPlugin, insertBlockPlugin, basePlugin, placeholderPlugin, editorDisabledPlugin, typeAheadPlugin, floatingToolbarPlugin, gapCursorPlugin, } from '../../../plugins';
import { removeExcludes, enableExperimental, } from './utils';
export function EditorPresetCXHTML(_a) {
    var children = _a.children, mentionProvider = _a.mentionProvider, mediaProvider = _a.mediaProvider, placeholder = _a.placeholder, excludes = _a.excludes, experimental = _a.experimental;
    var plugins = [
        pastePlugin(),
        blockTypePlugin(),
        clearMarksOnChangeToEmptyDocumentPlugin(),
        hyperlinkPlugin(),
        textFormattingPlugin({}),
        widthPlugin(),
        quickInsertPlugin(),
        tablesPlugin({
            tableOptions: { advanced: true },
        }),
        codeBlockPlugin(),
        panelPlugin(),
        listsPlugin(),
        textColorPlugin(),
        breakoutPlugin(),
        jiraIssuePlugin(),
        extensionPlugin(),
        rulePlugin(),
        datePlugin(),
        layoutPlugin(),
        indentationPlugin(),
        cardPlugin(),
        statusPlugin({ menuDisabled: false }),
        tasksAndDecisionsPlugin(),
        insertBlockPlugin({}),
        placeholderPlugin({ placeholder: placeholder }),
        editorDisabledPlugin(),
        typeAheadPlugin(),
        floatingToolbarPlugin(),
        gapCursorPlugin(),
    ];
    if (mentionProvider) {
        plugins.push(mentionsPlugin());
    }
    if (mediaProvider) {
        plugins.push(mediaPlugin({
            provider: mediaProvider,
            allowMediaSingle: true,
            allowMediaGroup: true,
            allowAnnotation: true,
            allowResizing: true,
        }));
    }
    var experimentalMap = new Map();
    plugins = removeExcludes(plugins, excludes);
    plugins = enableExperimental(plugins, experimental, experimentalMap);
    // Add plugins that cannot be excluded for this preset.
    plugins.push(unsupportedContentPlugin(), basePlugin({
        allowInlineCursorTarget: true,
        allowScrollGutter: function () {
            return document.querySelector('.fabric-editor-popup-scroll-parent');
        },
    }));
    return React.createElement(PresetProvider, { value: plugins }, children);
}
//# sourceMappingURL=cxhtml.js.map