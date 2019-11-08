"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var editor_common_1 = require("@atlaskit/editor-common");
var create_event_1 = tslib_1.__importDefault(require("./create-event"));
/**
 * Dispatch a paste event on the given ProseMirror instance
 *
 * Usage:
 *     dispatchPasteEvent(pm, {
 *         plain: 'copied text'
 *     });
 */
exports.default = (function (editorView, content) {
    var event = create_event_1.default('paste');
    var clipboardData = {
        getData: function (type) {
            if (type === 'text/plain') {
                return content.plain;
            }
            if (type === 'text/html') {
                return content.html;
            }
            return;
        },
        types: content.types || [],
        files: content.files || [],
    };
    // Skiping IE < 15
    // Reason: https://github.com/ProseMirror/prosemirror-view/blob/9d2295d03c2d17357213371e4d083f0213441a7e/src/input.js#L379-L384
    if ((editor_common_1.browser.ie && editor_common_1.browser.ie_version < 15) || editor_common_1.browser.ios) {
        return false;
    }
    try {
        Object.defineProperty(event, 'clipboardData', { value: clipboardData });
    }
    catch (e) {
        // iOS 9 will throw if we assign `clipboardData` to `event`
        // revert this change once iOS 10 is out
        return false;
    }
    editorView.dispatchEvent(event);
    return event;
});
//# sourceMappingURL=dispatch-paste-event.js.map