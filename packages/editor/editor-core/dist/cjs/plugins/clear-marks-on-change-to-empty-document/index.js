"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prosemirror_state_1 = require("prosemirror-state");
var utils_1 = require("../../utils");
exports.pluginKey = new prosemirror_state_1.PluginKey('clearMarksOnChangeToEmptyDocumentPlugin');
function createPlugin() {
    return new prosemirror_state_1.Plugin({
        key: exports.pluginKey,
        appendTransaction: function (_transactions, oldState, newState) {
            // ED-2973: When a user clears the editor's content, remove the current active marks
            if (!utils_1.isEmptyDocument(oldState.doc) && utils_1.isEmptyDocument(newState.doc)) {
                return newState.tr.setStoredMarks([]);
            }
            return;
        },
    });
}
exports.createPlugin = createPlugin;
var clearMarksOnChangeToEmptyDocumentPlugin = function () { return ({
    name: 'clearMarksOnEmptyDoc',
    pmPlugins: function () {
        return [{ name: 'clearMarksOnChange', plugin: createPlugin }];
    },
}); };
exports.default = clearMarksOnChangeToEmptyDocumentPlugin;
//# sourceMappingURL=index.js.map