"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prosemirror_view_1 = require("prosemirror-view");
var prosemirror_state_1 = require("prosemirror-state");
var prosemirror_utils_1 = require("prosemirror-utils");
exports.decorationStateKey = new prosemirror_state_1.PluginKey('decorationPlugin');
var ACTIONS;
(function (ACTIONS) {
    ACTIONS[ACTIONS["DECORATION_ADD"] = 0] = "DECORATION_ADD";
    ACTIONS[ACTIONS["DECORATION_REMOVE"] = 1] = "DECORATION_REMOVE";
})(ACTIONS = exports.ACTIONS || (exports.ACTIONS = {}));
exports.hoverDecoration = function (nodeType, add, className) {
    if (className === void 0) { className = 'danger'; }
    return function (state, dispatch) {
        var parentNode;
        var from;
        if (state.selection instanceof prosemirror_state_1.NodeSelection) {
            parentNode = state.selection.node;
            var nodeTypes = Array.isArray(nodeType) ? nodeType : [nodeType];
            if (nodeTypes.indexOf(parentNode.type) < 0) {
                return false;
            }
            from = state.selection.from;
        }
        else {
            var foundParentNode = prosemirror_utils_1.findParentNodeOfType(nodeType)(state.selection);
            if (!foundParentNode) {
                return false;
            }
            from = foundParentNode.pos;
            parentNode = foundParentNode.node;
        }
        if (!parentNode) {
            return false;
        }
        if (dispatch) {
            dispatch(state.tr
                .setMeta(exports.decorationStateKey, {
                action: add ? ACTIONS.DECORATION_ADD : ACTIONS.DECORATION_REMOVE,
                data: prosemirror_view_1.Decoration.node(from, from + parentNode.nodeSize, {
                    class: className,
                }, { key: 'decorationNode' }),
            })
                .setMeta('addToHistory', false));
        }
        return true;
    };
};
exports.default = (function () {
    return new prosemirror_state_1.Plugin({
        key: exports.decorationStateKey,
        state: {
            init: function () { return ({ decoration: undefined }); },
            apply: function (tr, pluginState) {
                if (pluginState.decoration) {
                    var mapResult = tr.mapping.mapResult(pluginState.decoration.from);
                    if (mapResult.deleted) {
                        pluginState = { decoration: undefined };
                    }
                }
                var meta = tr.getMeta(exports.decorationStateKey);
                if (!meta) {
                    return pluginState;
                }
                switch (meta.action) {
                    case ACTIONS.DECORATION_ADD:
                        return {
                            decoration: meta.data,
                        };
                    case ACTIONS.DECORATION_REMOVE:
                        return { decoration: undefined };
                    default:
                        return pluginState;
                }
            },
        },
        props: {
            decorations: function (state) {
                var doc = state.doc;
                var decoration = exports.decorationStateKey.getState(state).decoration;
                if (decoration) {
                    return prosemirror_view_1.DecorationSet.create(doc, [decoration]);
                }
                return null;
            },
        },
    });
});
//# sourceMappingURL=decoration.js.map