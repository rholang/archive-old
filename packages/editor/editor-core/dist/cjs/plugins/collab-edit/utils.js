"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prosemirror_state_1 = require("prosemirror-state");
var prosemirror_view_1 = require("prosemirror-view");
var theme_1 = require("@atlaskit/theme");
var editor_common_1 = require("@atlaskit/editor-common");
var utils_1 = require("../../utils");
exports.colors = [
    theme_1.colors.R100,
    theme_1.colors.R300,
    theme_1.colors.R500,
    theme_1.colors.Y100,
    theme_1.colors.Y300,
    theme_1.colors.Y500,
    theme_1.colors.G100,
    theme_1.colors.G300,
    theme_1.colors.G500,
    theme_1.colors.T100,
    theme_1.colors.T300,
    theme_1.colors.T500,
    theme_1.colors.B100,
    theme_1.colors.B300,
    theme_1.colors.B500,
    theme_1.colors.P100,
    theme_1.colors.P300,
    theme_1.colors.P500,
    theme_1.colors.N70,
    theme_1.colors.N200,
    theme_1.colors.N800,
].map(function (solid) { return ({
    solid: solid,
    selection: editor_common_1.hexToRgba(solid, 0.2),
}); });
exports.getAvatarColor = function (str) {
    var hash = 0;
    for (var i = 0; i < str.length; i++) {
        /* eslint-disable no-bitwise */
        hash = (hash << 5) - hash + str.charCodeAt(i);
        hash = hash & hash;
        /* eslint-enable no-bitwise */
    }
    var index = Math.abs(hash) % exports.colors.length;
    return { index: index, color: exports.colors[index] };
};
exports.findPointers = function (id, decorations) {
    return decorations
        .find()
        .reduce(function (arr, deco) {
        return deco.spec.pointer.sessionId === id ? arr.concat(deco) : arr;
    }, []);
};
function style(options) {
    var color = (options && options.color) || 'black';
    return "border-left: 1px solid " + color + "; border-right: 1px solid " + color + "; margin-right: -2px;";
}
exports.createTelepointers = function (from, to, sessionId, isSelection, initial) {
    var decorations = [];
    var avatarColor = exports.getAvatarColor(sessionId);
    var color = avatarColor.index.toString();
    if (isSelection) {
        var className = "telepointer color-" + color + " telepointer-selection";
        decorations.push(prosemirror_view_1.Decoration.inline(from, to, { class: className, 'data-initial': initial }, { pointer: { sessionId: sessionId } }));
    }
    var cursor = document.createElement('span');
    cursor.textContent = utils_1.ZeroWidthSpace;
    cursor.className = "telepointer color-" + color + " telepointer-selection-badge";
    cursor.style.cssText = style({ color: avatarColor.color.solid }) + ";";
    cursor.setAttribute('data-initial', initial);
    return decorations.concat(prosemirror_view_1.Decoration.widget(to, cursor, {
        pointer: { sessionId: sessionId },
        key: "telepointer-" + sessionId,
    }));
};
exports.replaceDocument = function (doc, state, version, options, providerFactory, sanitizePrivateContent) {
    var schema = state.schema, tr = state.tr;
    var content;
    var hasContent;
    // This can be default when we fix the unsupported nodes we currently produce.
    if (options && options.allowUnsupportedContent) {
        // Process the value coming in, this allows us to wrap blocks unknown to us.
        // Instead of throwing an error at this point.
        content = utils_1.processRawValue(state.schema, doc, providerFactory, sanitizePrivateContent);
        hasContent = !!content;
    }
    else {
        content = (doc.content || []).map(function (child) {
            return schema.nodeFromJSON(child);
        });
        hasContent = Array.isArray(content) ? !!content.length : !!content;
    }
    if (hasContent) {
        tr.setMeta('addToHistory', false);
        tr.replaceWith(0, state.doc.nodeSize - 2, content);
        tr.setSelection(prosemirror_state_1.Selection.atStart(tr.doc));
        if (typeof version !== undefined && (options && options.useNativePlugin)) {
            var collabState = { version: version, unconfirmed: [] };
            tr.setMeta('collab$', collabState);
        }
    }
    return tr;
};
//# sourceMappingURL=utils.js.map