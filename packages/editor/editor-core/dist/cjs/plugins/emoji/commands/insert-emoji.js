"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var prosemirror_utils_1 = require("prosemirror-utils");
var prosemirror_model_1 = require("prosemirror-model");
var prosemirror_state_1 = require("prosemirror-state");
var analytics_1 = require("../../analytics");
function insertEmoji(emojiId, inputMethod) {
    return function (state, dispatch) {
        var emoji = state.schema.nodes.emoji;
        if (emoji && emojiId) {
            var node = emoji.createChecked(tslib_1.__assign(tslib_1.__assign({}, emojiId), { text: emojiId.fallback || emojiId.shortName }));
            var textNode = state.schema.text(' ');
            if (dispatch) {
                var fragment = prosemirror_model_1.Fragment.fromArray([node, textNode]);
                var tr = prosemirror_utils_1.safeInsert(fragment)(state.tr);
                if (inputMethod) {
                    analytics_1.addAnalytics(state, tr, {
                        action: analytics_1.ACTION.INSERTED,
                        actionSubject: analytics_1.ACTION_SUBJECT.DOCUMENT,
                        actionSubjectId: analytics_1.ACTION_SUBJECT_ID.EMOJI,
                        attributes: { inputMethod: inputMethod },
                        eventType: analytics_1.EVENT_TYPE.TRACK,
                    });
                }
                dispatch(tr.setSelection(prosemirror_state_1.Selection.near(tr.doc.resolve(state.selection.$from.pos + fragment.size))));
            }
            return true;
        }
        return false;
    };
}
exports.insertEmoji = insertEmoji;
//# sourceMappingURL=insert-emoji.js.map