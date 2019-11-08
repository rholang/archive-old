"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var searchGiphy_1 = require("../actions/searchGiphy");
exports.giphySearchStarted = function (state, action) {
    if (searchGiphy_1.isSearchGiphyAction(action)) {
        var shouldAppendResults = action.shouldAppendResults;
        var giphy = shouldAppendResults ? state.giphy : { imageCardModels: [] };
        return tslib_1.__assign(tslib_1.__assign({}, state), { view: tslib_1.__assign(tslib_1.__assign({}, state.view), { isLoading: true, hasError: false }), giphy: giphy });
    }
    else {
        return state;
    }
};
exports.giphySearchFullfilled = function (state, action) {
    if (searchGiphy_1.isSearchGiphyFulfilledAction(action)) {
        var oldImageCardModels = state.giphy.imageCardModels;
        var newImageCardModels = action.imageCardModels, shouldAppendResults = action.shouldAppendResults, totalResultCount = action.totalResultCount;
        var imageCardModels = shouldAppendResults
            ? tslib_1.__spread(oldImageCardModels, newImageCardModels) : newImageCardModels;
        return tslib_1.__assign(tslib_1.__assign({}, state), { view: tslib_1.__assign(tslib_1.__assign({}, state.view), { isLoading: false }), giphy: {
                imageCardModels: imageCardModels,
                totalResultCount: totalResultCount,
            } });
    }
    else {
        return state;
    }
};
exports.giphySearchFailed = function (state, action) {
    if (searchGiphy_1.isSearchGiphyFailedAction(action)) {
        return tslib_1.__assign(tslib_1.__assign({}, state), { view: tslib_1.__assign(tslib_1.__assign({}, state.view), { isLoading: false, hasError: true }), giphy: {
                imageCardModels: [],
                totalResultCount: undefined,
            } });
    }
    else {
        return state;
    }
};
//# sourceMappingURL=searchGiphy.js.map