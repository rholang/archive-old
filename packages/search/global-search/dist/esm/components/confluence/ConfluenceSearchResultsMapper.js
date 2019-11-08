import { __assign } from "tslib";
import { messages } from '../../messages';
import { attachConfluenceContextIdentifiers } from '../common/contextIdentifiersHelper';
import { take } from '../SearchResultsUtil';
import { getConfluenceMaxObjects } from '../../util/experiment-utils';
import { CONF_OBJECTS_ITEMS_PER_PAGE } from '../../util/experiment-utils';
export var DEFAULT_MAX_OBJECTS = 10;
export var MAX_SPACES = 3;
export var MAX_PEOPLE = 3;
export var MAX_RECENT_RESULTS_TO_SHOW = 3;
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
        objects: __assign(__assign({}, objects), { items: take(objects.items, getConfluenceMaxObjects(features.abTest, objects.numberOfCurrentItems || CONF_OBJECTS_ITEMS_PER_PAGE)), numberOfCurrentItems: objects.numberOfCurrentItems ||
                Math.min(CONF_OBJECTS_ITEMS_PER_PAGE, objects.items.length || 0) }),
        spaces: __assign(__assign({}, spaces), { items: take(spaces.items, MAX_SPACES) }),
        people: __assign(__assign({}, people), { items: take(people.items, MAX_PEOPLE) }),
    };
};
export var mapRecentResultsToUIGroups = function (recentlyViewedObjects, features, searchSessionId) {
    var sliced = sliceResults(recentlyViewedObjects, features);
    var _a = attachConfluenceContextIdentifiers(searchSessionId, sliced), people = _a.people, objects = _a.objects, spaces = _a.spaces;
    return [
        {
            items: objects.items,
            key: 'objects',
            title: messages.confluence_recent_pages_heading,
            totalSize: objects.totalSize,
            showTotalSize: false,
        },
        {
            items: spaces.items,
            key: 'spaces',
            title: messages.confluence_recent_spaces_heading,
            totalSize: spaces.totalSize,
            showTotalSize: false,
        },
        {
            items: people.items,
            key: 'people',
            title: messages.people_recent_people_heading,
            totalSize: people.totalSize,
            showTotalSize: false,
        },
    ];
};
export var mapSearchResultsToUIGroups = function (searchResultsObjects, features, searchSessionId, hideAllSizeLozenge) {
    var sliced = sliceResults(searchResultsObjects, features);
    var _a = attachConfluenceContextIdentifiers(searchSessionId, sliced), people = _a.people, objects = _a.objects, spaces = _a.spaces;
    return [
        {
            items: objects.items,
            key: 'objects',
            title: messages.confluence_confluence_objects_heading,
            totalSize: objects.totalSize,
            showTotalSize: !hideAllSizeLozenge,
        },
        {
            items: spaces.items,
            key: 'spaces',
            title: messages.confluence_spaces_heading,
            totalSize: spaces.totalSize,
            showTotalSize: false,
        },
        {
            items: people.items,
            key: 'people',
            title: messages.people_people_heading,
            totalSize: people.totalSize,
            showTotalSize: false,
        },
    ];
};
//# sourceMappingURL=ConfluenceSearchResultsMapper.js.map