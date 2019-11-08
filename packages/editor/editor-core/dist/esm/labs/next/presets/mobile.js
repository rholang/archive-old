import * as React from 'react';
import { PresetProvider } from '../Editor';
import { pastePlugin, blockTypePlugin, clearMarksOnChangeToEmptyDocumentPlugin, hyperlinkPlugin, textFormattingPlugin, widthPlugin, unsupportedContentPlugin, tablesPlugin, codeBlockPlugin, panelPlugin, listsPlugin, textColorPlugin, extensionPlugin, rulePlugin, datePlugin, layoutPlugin, cardPlugin, statusPlugin, mediaPlugin, mentionsPlugin, emojiPlugin, tasksAndDecisionsPlugin, insertBlockPlugin, basePlugin, placeholderPlugin, editorDisabledPlugin, typeAheadPlugin, floatingToolbarPlugin, gapCursorPlugin, annotationPlugin, } from '../../../plugins';
import { removeExcludes, enableExperimental, } from './utils';
export function EditorPresetMobile(_a) {
    var children = _a.children, mentionProvider = _a.mentionProvider, emojiProvider = _a.emojiProvider, media = _a.media, placeholder = _a.placeholder, excludes = _a.excludes, experimental = _a.experimental;
    var plugins = [
        pastePlugin(),
        blockTypePlugin(),
        clearMarksOnChangeToEmptyDocumentPlugin(),
        hyperlinkPlugin(),
        textFormattingPlugin({}),
        widthPlugin(),
        tablesPlugin({
            tableOptions: { allowControls: false },
        }),
        codeBlockPlugin(),
        panelPlugin(),
        listsPlugin(),
        textColorPlugin(),
        extensionPlugin(),
        rulePlugin(),
        datePlugin(),
        layoutPlugin(),
        statusPlugin({ menuDisabled: false, useInlineWrapper: true }),
        tasksAndDecisionsPlugin(),
        insertBlockPlugin({}),
        placeholderPlugin({ placeholder: placeholder }),
        editorDisabledPlugin(),
        typeAheadPlugin(),
        floatingToolbarPlugin(),
        gapCursorPlugin(),
        annotationPlugin(),
        cardPlugin(),
    ];
    if (mentionProvider) {
        plugins.push(mentionsPlugin({
            useInlineWrapper: true,
        }));
    }
    if (emojiProvider) {
        plugins.push(emojiPlugin({
            useInlineWrapper: true,
        }));
    }
    if (media) {
        plugins.push(mediaPlugin({
            provider: media.provider,
            customMediaPicker: media.picker,
            allowMediaSingle: true,
        }, {
            allowMarkingUploadsAsIncomplete: true,
        }));
    }
    var experimentalMap = new Map();
    plugins = removeExcludes(plugins, excludes);
    plugins = enableExperimental(plugins, experimental, experimentalMap);
    // Add plugins that cannot be excluded for this preset.
    plugins.push(unsupportedContentPlugin(), basePlugin({
        allowScrollGutter: function () { return document.body; },
    }));
    return React.createElement(PresetProvider, { value: plugins }, children);
}
//# sourceMappingURL=mobile.js.map