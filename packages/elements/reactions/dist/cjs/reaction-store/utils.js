"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var ReactionStatus_1 = require("../types/ReactionStatus");
exports.compareEmojiId = function (l, r) {
    return l.localeCompare(r);
};
exports.sortByRelevance = function (a, b) {
    if (a.count > b.count) {
        return -1;
    }
    else if (a.count < b.count) {
        return 1;
    }
    else {
        return exports.compareEmojiId(a.emojiId, b.emojiId);
    }
};
exports.sortByPreviousPosition = function (reactions) {
    var indexes = reactions.reduce(function (map, reaction, index) {
        map[reaction.emojiId] = index;
        return map;
    }, {});
    var getPosition = function (_a) {
        var emojiId = _a.emojiId;
        return indexes[emojiId] === undefined ? reactions.length : indexes[emojiId];
    };
    return function (a, b) { return getPosition(a) - getPosition(b); };
};
exports.readyState = function (reactions) { return ({
    status: ReactionStatus_1.ReactionStatus.ready,
    reactions: reactions.filter(function (reaction) { return reaction.count > 0; }),
}); };
exports.byEmojiId = function (emojiId) { return function (reaction) {
    return reaction.emojiId === emojiId;
}; };
exports.addOne = function (reaction) { return (tslib_1.__assign(tslib_1.__assign({}, reaction), { count: reaction.count + 1, reacted: true })); };
exports.removeOne = function (reaction) { return (tslib_1.__assign(tslib_1.__assign({}, reaction), { count: reaction.count - 1, reacted: false })); };
exports.updateByEmojiId = function (emojiId, updater) { return function (reaction) {
    return reaction.emojiId === emojiId
        ? updater instanceof Function
            ? updater(reaction)
            : updater
        : reaction;
}; };
exports.getReactionsSortFunction = function (reactions) {
    return reactions && reactions.length
        ? exports.sortByPreviousPosition(reactions)
        : exports.sortByRelevance;
};
exports.flattenAris = function (a, b) { return a.concat(b); };
//# sourceMappingURL=utils.js.map