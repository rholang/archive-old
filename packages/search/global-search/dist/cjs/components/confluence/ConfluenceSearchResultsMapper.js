"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var messages_1 = require("../../messages");
var contextIdentifiersHelper_1 = require("../common/contextIdentifiersHelper");
var SearchResultsUtil_1 = require("../SearchResultsUtil");
var experiment_utils_1 = require("../../util/experiment-utils");
var experiment_utils_2 = require("../../util/experiment-utils");
exports.DEFAULT_MAX_OBJECTS = 10;
exports.MAX_SPACES = 3;
exports.MAX_PEOPLE = 3;
exports.MAX_RECENT_RESULTS_TO_SHOW = 3;
var EMPTY_CONFLUENCE_RESULT = {
    people: {
        items: [],
        totalSize: 0,
    },
    objects: {
        items: [],
        totalSize: 0,
    },
    spaces: {
        items: [],
        totalSize: 0,
    },
};
var sliceResults = function (resultsMap, features) {
    if (!resultsMap) {
        return EMPTY_CONFLUENCE_RESULT;
    }
    var people = resultsMap.people, objects = resultsMap.objects, spaces = resultsMap.spaces;
    return {
        objects: tslib_1.__assign(tslib_1.__assign({}, objects), { items: SearchResultsUtil_1.take(objects.items, experiment_utils_1.getConfluenceMaxObjects(features.abTest, objects.numberOfCurrentItems || experiment_utils_2.CONF_OBJECTS_ITEMS_PER_PAGE)), numberOfCurrentItems: objects.numberOfCurrentItems ||
                Math.min(experiment_utils_2.CONF_OBJECTS_ITEMS_PER_PAGE, objects.items.length || 0) }),
        spaces: tslib_1.__assign(tslib_1.__assign({}, spaces), { items: SearchResultsUtil_1.take(spaces.items, exports.MAX_SPACES) }),
        people: tslib_1.__assign(tslib_1.__assign({}, people), { items: SearchResultsUtil_1.take(people.items, exports.MAX_PEOPLE) }),
    };
};
exports.mapRecentResultsToUIGroups = function (recentlyViewedObjects, features, searchSessionId) {
    var sliced = sliceResults(recentlyViewedObjects, features);
    var _a = contextIdentifiersHelper_1.attachConfluenceContextIdentifiers(searchSessionId, sliced), people = _a.people, objects = _a.objects, spaces = _a.spaces;
    return [
        {
            items: objects.items,
            key: 'objects',
            title: messages_1.messages.confluence_recent_pages_heading,
            totalSize: objects.totalSize,
            showTotalSize: false,
        },
        {
            items: spaces.items,
            key: 'spaces',
            title: messages_1.messages.confluence_recent_spaces_heading,
            totalSize: spaces.totalSize,
            showTotalSize: false,
        },
        {
            items: people.items,
            key: 'people',
            title: messages_1.messages.people_recent_people_heading,
            totalSize: people.totalSize,
            showTotalSize: false,
        },
    ];
};
exports.mapSearchResultsToUIGroups = function (searchResultsObjects, features, searchSessionId, hideAllSizeLozenge) {
    var sliced = sliceResults(searchResultsObjects, features);
    var _a = contextIdentifiersHelper_1.attachConfluenceContextIdentifiers(searchSessionId, sliced), people = _a.people, objects = _a.objects, spaces = _a.spaces;
    return [
        {
            items: objects.items,
            key: 'objects',
            title: messages_1.messages.confluence_confluence_objects_heading,
            totalSize: objects.totalSize,
            showTotalSize: !hideAllSizeLozenge,
        },
        {
            items: spaces.items,
            key: 'spaces',
            title: messages_1.messages.confluence_spaces_heading,
            totalSize: spaces.totalSize,
            showTotalSize: false,
        },
        {
            items: people.items,
            key: 'people',
            title: messages_1.messages.people_people_heading,
            totalSize: people.totalSize,
            showTotalSize: false,
        },
    ];
};
//# sourceMappingURL=ConfluenceSearchResultsMapper.js.map