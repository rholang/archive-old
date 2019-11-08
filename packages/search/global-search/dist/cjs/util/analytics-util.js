"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var Result_1 = require("../model/Result");
exports.DEFAULT_GAS_SOURCE = 'globalSearchDrawer';
exports.DEFAULT_GAS_CHANNEL = 'fabric-elements';
exports.DEFAULT_GAS_ATTRIBUTES = {
    packageName: 'global-search',
    packageVersion: '0.0.0',
    componentName: 'GlobalQuickSearch',
};
exports.GLOBAL_SEARCH_SCREEN_NAME = 'globalSearchDrawer';
exports.sanitizeSearchQuery = function (query) {
    return (query || '').replace(/\s+/g, ' ').trim();
};
exports.sanitizeContainerId = function (containerId) {
    var trimmedContainerId = (containerId || '').trim();
    return trimmedContainerId.startsWith('~')
        ? 'UNAVAILABLE'
        : trimmedContainerId;
};
function mapResultsToShownSection(results) {
    return {
        sectionId: results[0].resultType,
        results: results.map(mapResultToShownResult),
    };
}
function mapResultToShownResult(result) {
    if (result.resultType === Result_1.ResultType.ConfluenceObjectResult) {
        var confluenceResult = result;
        return {
            resultContentId: result.resultId,
            resultType: confluenceResult.contentType,
            containerId: exports.sanitizeContainerId(confluenceResult.containerId),
            isRecentResult: !!result.isRecentResult,
        };
    }
    else if (result.resultType === Result_1.ResultType.JiraObjectResult) {
        var jiraResult = result;
        return {
            resultContentId: result.resultId,
            resultType: jiraResult.contentType,
            containerId: exports.sanitizeContainerId(jiraResult.containerId),
        };
    }
    return {
        resultContentId: result.resultId,
    };
}
/**
 * @param resultsArrays an ordered array of Result arrays, passed as arguments
 */
function buildShownEventDetails() {
    var resultsArrays = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        resultsArrays[_i] = arguments[_i];
    }
    var sectionsWithContent = resultsArrays.filter(function (section) { return section.length > 0; });
    var totalResultCount = resultsArrays.reduce(function (prev, curr) { return prev + curr.length; }, 0);
    return {
        resultCount: totalResultCount,
        resultSectionCount: sectionsWithContent.length,
        resultContext: sectionsWithContent.map(mapResultsToShownSection),
    };
}
exports.buildShownEventDetails = buildShownEventDetails;
var Screen;
(function (Screen) {
    Screen["PRE_QUERY"] = "GlobalSearchPreQueryDrawer";
    Screen["POST_QUERY"] = "GlobalSearchPostQueryDrawer";
})(Screen = exports.Screen || (exports.Screen = {}));
function buildScreenEvent(screen, timesViewed, searchSessionId, referralContextIdentifiers) {
    return {
        action: 'viewed',
        actionSubject: exports.GLOBAL_SEARCH_SCREEN_NAME,
        eventType: 'screen',
        source: exports.DEFAULT_GAS_SOURCE,
        name: exports.DEFAULT_GAS_SOURCE,
        attributes: tslib_1.__assign({ subscreen: screen, timesViewed: timesViewed, searchSessionId: searchSessionId, searchReferrerId: referralContextIdentifiers &&
                referralContextIdentifiers.searchReferrerId, currentContentId: referralContextIdentifiers &&
                referralContextIdentifiers.currentContentId, currentContainerId: referralContextIdentifiers &&
                referralContextIdentifiers.currentContainerId }, exports.DEFAULT_GAS_ATTRIBUTES),
    };
}
exports.buildScreenEvent = buildScreenEvent;
//# sourceMappingURL=analytics-util.js.map