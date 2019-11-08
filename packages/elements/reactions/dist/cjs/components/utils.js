"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isLeftClick = function (event) {
    return event.button === 0 &&
        !event.altKey &&
        !event.ctrlKey &&
        !event.metaKey &&
        !event.shiftKey;
};
exports.equalEmojiId = function (l, r) {
    if (isEmojiId(l) && isEmojiId(r)) {
        return l === r || (l && r && l.id === r.id && l.shortName === r.shortName);
    }
    else {
        return l === r;
    }
};
var isEmojiId = function (emojiId) {
    return emojiId.id !== undefined;
};
//# sourceMappingURL=utils.js.map