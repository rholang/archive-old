import { Plugin, PluginKey } from 'prosemirror-state';
import { DecorationSet, Decoration } from 'prosemirror-view';
import { isEmptyDocument } from '../../utils';
export var pluginKey = new PluginKey('placeholderPlugin');
export function createPlaceholderDecoration(doc, placeholderText) {
    var placeholderDecoration = document.createElement('span');
    placeholderDecoration.className = 'placeholder-decoration';
    var placeholderNode = document.createElement('span');
    placeholderNode.textContent = placeholderText;
    placeholderDecoration.appendChild(placeholderNode);
    return DecorationSet.create(doc, [
        Decoration.widget(1, placeholderDecoration, {
            side: -1,
            key: 'placeholder',
        }),
    ]);
}
function removePlaceholderIfData(view, event) {
    var havePlaceholder = pluginKey.getState(view.state);
    var compositionEvent = event;
    var hasData = compositionEvent.type === 'compositionstart' ||
        (compositionEvent.type === 'compositionupdate' && !!compositionEvent.data);
    if (havePlaceholder && hasData) {
        view.dispatch(view.state.tr.setMeta(pluginKey, { removePlaceholder: true }));
    }
    return false;
}
function applyPlaceholderIfEmpty(view, event) {
    var havePlaceholder = pluginKey.getState(view.state);
    var compositionEvent = event;
    var emptyData = compositionEvent.data === '';
    if (!havePlaceholder && emptyData) {
        view.dispatch(view.state.tr.setMeta(pluginKey, {
            applyPlaceholderIfEmpty: true,
        }));
    }
    return false;
}
export function createPlugin(placeholderText) {
    if (!placeholderText) {
        return;
    }
    return new Plugin({
        key: pluginKey,
        state: {
            init: function (_, state) { return isEmptyDocument(state.doc); },
            apply: function (tr, _oldPluginState, _oldEditorState, newEditorState) {
                var meta = tr.getMeta(pluginKey);
                if (meta) {
                    if (meta.removePlaceholder) {
                        return false;
                    }
                    if (meta.applyPlaceholderIfEmpty) {
                        return isEmptyDocument(newEditorState.doc);
                    }
                }
                // non-plugin specific transaction; don't excessively recalculate
                // if the document is empty
                if (!tr.docChanged) {
                    return _oldPluginState;
                }
                return isEmptyDocument(newEditorState.doc);
            },
        },
        props: {
            decorations: function (editorState) {
                var havePlaceholder = pluginKey.getState(editorState);
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
export default placeholderPlugin;
//# sourceMappingURL=index.js.map