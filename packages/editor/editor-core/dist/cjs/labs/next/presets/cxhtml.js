"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var Editor_1 = require("../Editor");
var plugins_1 = require("../../../plugins");
var utils_1 = require("./utils");
function EditorPresetCXHTML(_a) {
    var children = _a.children, mentionProvider = _a.mentionProvider, mediaProvider = _a.mediaProvider, placeholder = _a.placeholder, excludes = _a.excludes, experimental = _a.experimental;
    var plugins = [
        plugins_1.pastePlugin(),
        plugins_1.blockTypePlugin(),
        plugins_1.clearMarksOnChangeToEmptyDocumentPlugin(),
        plugins_1.hyperlinkPlugin(),
        plugins_1.textFormattingPlugin({}),
        plugins_1.widthPlugin(),
        plugins_1.quickInsertPlugin(),
        plugins_1.tablesPlugin({
            tableOptions: { advanced: true },
        }),
        plugins_1.codeBlockPlugin(),
        plugins_1.panelPlugin(),
        plugins_1.listsPlugin(),
        plugins_1.textColorPlugin(),
        plugins_1.breakoutPlugin(),
        plugins_1.jiraIssuePlugin(),
        plugins_1.extensionPlugin(),
        plugins_1.rulePlugin(),
        plugins_1.datePlugin(),
        plugins_1.layoutPlugin(),
        plugins_1.indentationPlugin(),
        plugins_1.cardPlugin(),
        plugins_1.statusPlugin({ menuDisabled: false }),
        plugins_1.tasksAndDecisionsPlugin(),
        plugins_1.insertBlockPlugin({}),
        plugins_1.placeholderPlugin({ placeholder: placeholder }),
        plugins_1.editorDisabledPlugin(),
        plugins_1.typeAheadPlugin(),
        plugins_1.floatingToolbarPlugin(),
        plugins_1.gapCursorPlugin(),
    ];
    if (mentionProvider) {
        plugins.push(plugins_1.mentionsPlugin());
    }
    if (mediaProvider) {
        plugins.push(plugins_1.mediaPlugin({
            provider: mediaProvider,
            allowMediaSingle: true,
            allowMediaGroup: true,
            allowAnnotation: true,
            allowResizing: true,
        }));
    }
    var experimentalMap = new Map();
    plugins = utils_1.removeExcludes(plugins, excludes);
    plugins = utils_1.enableExperimental(plugins, experimental, experimentalMap);
    // Add plugins that cannot be excluded for this preset.
    plugins.push(plugins_1.unsupportedContentPlugin(), plugins_1.basePlugin({
        allowInlineCursorTarget: true,
        allowScrollGutter: function () {
            return document.querySelector('.fabric-editor-popup-scroll-parent');
        },
    }));
    return React.createElement(Editor_1.PresetProvider, { value: plugins }, children);
}
exports.EditorPresetCXHTML = EditorPresetCXHTML;
//# sourceMappingURL=cxhtml.js.map