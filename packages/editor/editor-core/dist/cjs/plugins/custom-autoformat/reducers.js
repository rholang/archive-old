"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
// queues a match at a given position in the document
var matched = function (state, action) { return (tslib_1.__assign(tslib_1.__assign({}, state), { resolving: tslib_1.__spread(state.resolving, [
        {
            start: action.start,
            end: action.end,
            match: action.match,
        },
    ]) })); };
// store the replacement for a match
var resolved = function (state, action) { return (tslib_1.__assign(tslib_1.__assign({}, state), { matches: tslib_1.__spread(state.matches, [
        {
            replacement: action.replacement,
            matchString: action.matchString,
        },
    ]) })); };
// indicates a replacement in the document has been completed, and removes the match from both resolving and matches
var finish = function (state, action) {
    return tslib_1.__assign(tslib_1.__assign({}, state), { resolving: state.resolving.filter(function (resolving) { return resolving.match[0] !== action.matchString; }), matches: state.matches.filter(function (matching) { return matching.matchString !== action.matchString; }) });
};
var reduce = function (state, action) {
    switch (action.action) {
        case 'matched':
            return matched(state, action);
        case 'resolved':
            return resolved(state, action);
        case 'finish':
            return finish(state, action);
        default:
            return state;
    }
};
exports.default = reduce;
//# sourceMappingURL=reducers.js.map