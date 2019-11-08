"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SEARCH_GIPHY = 'SEARCH_GIPHY';
exports.SEARCH_GIPHY_FULFILLED = 'SEARCH_GIPHY_FULFILLED';
exports.SEARCH_GIPHY_FAILED = 'SEARCH_GIPHY_FAILED';
function isSearchGiphyAction(action) {
    return action.type === exports.SEARCH_GIPHY;
}
exports.isSearchGiphyAction = isSearchGiphyAction;
function searchGiphy(query, shouldAppendResults) {
    return {
        type: exports.SEARCH_GIPHY,
        query: query,
        shouldAppendResults: shouldAppendResults,
    };
}
exports.searchGiphy = searchGiphy;
function isSearchGiphyFulfilledAction(action) {
    return action.type === exports.SEARCH_GIPHY_FULFILLED;
}
exports.isSearchGiphyFulfilledAction = isSearchGiphyFulfilledAction;
function searchGiphyFulfilled(imageCardModels, totalResultCount, shouldAppendResults) {
    return {
        type: exports.SEARCH_GIPHY_FULFILLED,
        imageCardModels: imageCardModels,
        totalResultCount: totalResultCount,
        shouldAppendResults: shouldAppendResults,
    };
}
exports.searchGiphyFulfilled = searchGiphyFulfilled;
function isSearchGiphyFailedAction(action) {
    return action.type === exports.SEARCH_GIPHY_FAILED;
}
exports.isSearchGiphyFailedAction = isSearchGiphyFailedAction;
function searchGiphyFailed() {
    return {
        type: exports.SEARCH_GIPHY_FAILED,
    };
}
exports.searchGiphyFailed = searchGiphyFailed;
//# sourceMappingURL=searchGiphy.js.map