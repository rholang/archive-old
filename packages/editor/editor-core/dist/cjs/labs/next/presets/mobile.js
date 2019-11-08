"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var Editor_1 = require("../Editor");
var plugins_1 = require("../../../plugins");
var utils_1 = require("./utils");
function EditorPresetMobile(_a) {
    var children = _a.children, mentionProvider = _a.mentionProvider, emojiProvider = _a.emojiProvider, media = _a.media, placeholder = _a.placeholder, excludes = _a.excludes, experimental = _a.experimental;
    var plugins = [
        plugins_1.pastePlugin(),
        plugins_1.blockTypePlugin(),
        plugins_1.clearMarksOnChangeToEmptyDocumentPlugin(),
        plugins_1.hyperlinkPlugin(),
        plugins_1.textFormattingPlugin({}),
        plugins_1.widthPlugin(),
        plugins_1.tablesPlugin({
            tableOptions: { allowControls: false },
        }),
        plugins_1.codeBlockPlugin(),
        plugins_1.panelPlugin(),
        plugins_1.listsPlugin(),
        plugins_1.textColorPlugin(),
        plugins_1.extensionPlugin(),
        plugins_1.rulePlugin(),
        plugins_1.datePlugin(),
        plugins_1.layoutPlugin(),
        plugins_1.statusPlugin({ menuDisabled: false, useInlineWrapper: true }),
        plugins_1.tasksAndDecisionsPlugin(),
        plugins_1.insertBlockPlugin({}),
        plugins_1.placeholderPlugin({ placeholder: placeholder }),
        plugins_1.editorDisabledPlugin(),
        plugins_1.typeAheadPlugin(),
        plugins_1.floatingToolbarPlugin(),
        plugins_1.gapCursorPlugin(),
        plugins_1.annotationPlugin(),
        plugins_1.cardPlugin(),
    ];
    if (mentionProvider) {
        plugins.push(plugins_1.mentionsPlugin({
            useInlineWrapper: true,
        }));
    }
    if (emojiProvider) {
        plugins.push(plugins_1.emojiPlugin({
            useInlineWrapper: true,
        }));
    }
    if (media) {
        plugins.push(plugins_1.mediaPlugin({
            provider: media.provider,
            customMediaPicker: media.picker,
            allowMediaSingle: true,
        }, {
            allowMarkingUploadsAsIncomplete: true,
        }));
    }
    var experimentalMap = new Map();
    plugins = utils_1.removeExcludes(plugins, excludes);
    plugins = utils_1.enableExperimental(plugins, experimental, experimentalMap);
    // Add plugins that cannot be excluded for this preset.
    plugins.push(plugins_1.unsupportedContentPlugin(), plugins_1.basePlugin({
        allowScrollGutter: function () { return document.body; },
    }));
    return React.createElement(Editor_1.PresetProvider, { value: plugins }, children);
}
exports.EditorPresetMobile = EditorPresetMobile;
//# sourceMappingURL=mobile.js.map