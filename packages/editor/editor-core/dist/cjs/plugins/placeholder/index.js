"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prosemirror_state_1 = require("prosemirror-state");
var prosemirror_view_1 = require("prosemirror-view");
var utils_1 = require("../../utils");
exports.pluginKey = new prosemirror_state_1.PluginKey('placeholderPlugin');
function createPlaceholderDecoration(doc, placeholderText) {
    var placeholderDecoration = document.createElement('span');
    placeholderDecoration.className = 'placeholder-decoration';
    var placeholderNode = document.createElement('span');
    placeholderNode.textContent = placeholderText;
    placeholderDecoration.appendChild(placeholderNode);
    return prosemirror_view_1.DecorationSet.create(doc, [
        prosemirror_view_1.Decoration.widget(1, placeholderDecoration, {
            side: -1,
            key: 'placeholder',
        }),
    ]);
}
exports.createPlaceholderDecoration = createPlaceholderDecoration;
function removePlaceholderIfData(view, event) {
    var havePlaceholder = exports.pluginKey.getState(view.state);
    var compositionEvent = event;
    var hasData = compositionEvent.type === 'compositionstart' ||
        (compositionEvent.type === 'compositionupdate' && !!compositionEvent.data);
    if (havePlaceholder && hasData) {
        view.dispatch(view.state.tr.setMeta(exports.pluginKey, { removePlaceholder: true }));
    }
    return false;
}
function applyPlaceholderIfEmpty(view, event) {
    var havePlaceholder = exports.pluginKey.getState(view.state);
    var compositionEvent = event;
    var emptyData = compositionEvent.data === '';
    if (!havePlaceholder && emptyData) {
        view.dispatch(view.state.tr.setMeta(exports.pluginKey, {
            applyPlaceholderIfEmpty: true,
        }));
    }
    return false;
}
function createPlugin(placeholderText) {
    if (!placeholderText) {
        return;
    }
    return new prosemirror_state_1.Plugin({
        key: exports.pluginKey,
        state: {
            init: function (_, state) { return utils_1.isEmptyDocument(state.doc); },
            apply: function (tr, _oldPluginState, _oldEditorState, newEditorState) {
                var meta = tr.getMeta(exports.pluginKey);
                if (meta) {
                    if (meta.removePlaceholder) {
                        return false;
                    }
                    if (meta.applyPlaceholderIfEmpty) {
                        return utils_1.isEmptyDocument(newEditorState.doc);
                    }
                }
                // non-plugin specific transaction; don't excessively recalculate
                // if the document is empty
                if (!tr.docChanged) {
                    return _oldPluginState;
                }
                return utils_1.isEmptyDocument(newEditorState.doc);
            },
        },
        props: {
            decorations: function (editorState) {
                var havePlaceholder = exports.pluginKey.getState(editorState);
                if (havePlaceholder) {
                    return createPlaceholderDecoration(editorState.doc, placeholderText);
                }
                return;
            },
            // Workaround for ED-4063: On Mobile / Android, a user can start typing but it won't trigger
            // an Editor state update so the placeholder will still be shown. We hook into the compositionstart
            // and compositionend events instead, to make sure we show/hide the placeholder for these devices.
            handleDOMEvents: {
                compositionstart: removePlaceholderIfData,
                compositionupdate: function (view, event) {
                    return applyPlaceholderIfEmpty(view, event) ||
                        removePlaceholderIfData(view, event);
                },
                compositionend: applyPlaceholderIfEmpty,
            },
        },
    });
}
exports.createPlugin = createPlugin;
var placeholderPlugin = function (options) { return ({
    name: 'placeholder',
    pmPlugins: function () {
        return [
            {
                name: 'placeholder',
                plugin: function () { return createPlugin(options && options.placeholder); },
            },
        ];
    },
}); };
exports.default = placeholderPlugin;
//# sourceMappingURL=index.js.map