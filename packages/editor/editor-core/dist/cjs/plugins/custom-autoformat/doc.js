"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var prosemirror_history_1 = require("prosemirror-history");
var utils_1 = require("../../utils");
var utils_2 = require("./utils");
exports.buildHandler = function (_regex, handler) {
    return function (view, match, start, end) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var replacementPromise, replacementData, replacementNode;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    replacementPromise = handler(match.slice(1, match.length - 1));
                    // queue the position and match pair so that we can remap across transactions
                    // while we wait for the replacmentPromise to resolve
                    view.dispatch(utils_2.autoformatAction(view.state.tr, {
                        action: 'matched',
                        match: match,
                        start: start,
                        end: end,
                    }));
                    return [4 /*yield*/, replacementPromise];
                case 1:
                    replacementData = _a.sent();
                    replacementNode = utils_1.processRawValue(view.state.schema, replacementData);
                    view.dispatch(utils_2.autoformatAction(view.state.tr, {
                        action: 'resolved',
                        matchString: match[0],
                        replacement: replacementNode,
                    }));
                    return [2 /*return*/, replacementData];
            }
        });
    }); };
};
exports.completeReplacements = function (view, state) {
    var inlineCard = view.state.schema.nodes.inlineCard;
    state.matches.forEach(function (completedMatch) {
        var matchingRequests = state.resolving.filter(function (candidate) { return candidate.match[0] === completedMatch.matchString; });
        var tr = view.state.tr;
        matchingRequests.forEach(function (request) {
            var match = request.match, start = request.start, end = request.end;
            var replacement = completedMatch.replacement;
            var prefix = match[1];
            var suffix = match[match.length - 1];
            var matchEndPos = end + suffix.length;
            // only permit inlineCard as replacement target for now
            if (!replacement ||
                (replacement.type !== inlineCard && !replacement.isText)) {
                return;
            }
            // get the current document text, adding # or | if we cross node boundaries
            var docText = view.state.doc.textBetween(start, matchEndPos, '#', '|');
            // only replace if text still remains the same as when typed at the start
            if (docText === match[0]) {
                tr = tr.replaceWith(tr.mapping.map(start + prefix.length), tr.mapping.map(end, -1), replacement);
            }
        });
        // clear this match from plugin state now that we've processed it
        tr = utils_2.autoformatAction(tr, {
            action: 'finish',
            matchString: completedMatch.matchString,
        });
        // and dispatch the replacement, closing history for cmd+z to allow undo separately
        view.dispatch(prosemirror_history_1.closeHistory(tr));
    });
};
//# sourceMappingURL=doc.js.map