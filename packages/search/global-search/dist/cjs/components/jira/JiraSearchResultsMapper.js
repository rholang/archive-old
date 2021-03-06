"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var Result_1 = require("../../model/Result");
var SearchResultsUtil_1 = require("../SearchResultsUtil");
var messages_1 = require("../../messages");
var contextIdentifiersHelper_1 = require("../common/contextIdentifiersHelper");
var experiment_utils_1 = require("../../util/experiment-utils");
var DEFAULT_MAX_OBJECTS = 8;
var MAX_CONTAINERS = 6;
var MAX_PEOPLE = 3;
exports.MAX_RECENT_RESULTS_TO_SHOW = 3;
var DEFAULT_JIRA_RESULTS_MAP = {
    objects: [],
    containers: [],
    people: [],
};
var isEmpty = function (arr) {
    if (arr === void 0) { arr = []; }
    return !arr.length;
};
var hasNoResults = function (objects, poeple, containers) {
    if (objects === void 0) { objects = []; }
    if (poeple === void 0) { poeple = []; }
    if (containers === void 0) { containers = []; }
    return isEmpty(objects) && isEmpty(poeple) && isEmpty(containers);
};
var sliceResults = function (resultsMap, abTest) {
    var _a = resultsMap
        ? resultsMap
        : DEFAULT_JIRA_RESULTS_MAP, objects = _a.objects, containers = _a.containers, people = _a.people;
    var _b = tslib_1.__read([
        { items: objects, count: experiment_utils_1.getJiraMaxObjects(abTest, DEFAULT_MAX_OBJECTS) },
        { items: people, count: MAX_PEOPLE },
        { items: containers, count: MAX_CONTAINERS },
    ].map(function (_a) {
        var items = _a.items, count = _a.count;
        return SearchResultsUtil_1.take(items, count);
    }), 3), objectsToDisplay = _b[0], peopleToDisplay = _b[1], containersToDisplay = _b[2];
    return {
        objectsToDisplay: objectsToDisplay,
        containersToDisplay: containersToDisplay,
        peopleToDisplay: peopleToDisplay,
    };
};
exports.mapRecentResultsToUIGroups = function (recentlyViewedObjects, searchSessionId, features, appPermission) {
    var withSessionId = recentlyViewedObjects !== null
        ? contextIdentifiersHelper_1.attachJiraContextIdentifiers(searchSessionId, recentlyViewedObjects)
        : recentlyViewedObjects;
    var _a = sliceResults(withSessionId, features.abTest), objectsToDisplay = _a.objectsToDisplay, peopleToDisplay = _a.peopleToDisplay, containersToDisplay = _a.containersToDisplay;
    return [
        {
            items: objectsToDisplay,
            key: 'issues',
            title: messages_1.messages.jira_recent_issues_heading,
            totalSize: objectsToDisplay.length,
            showTotalSize: false,
        },
        {
            items: containersToDisplay,
            key: 'containers',
            title: appPermission && !appPermission.hasSoftwareAccess
                ? messages_1.messages.jira_recent_core_containers
                : messages_1.messages.jira_recent_containers,
            totalSize: containersToDisplay.length,
            showTotalSize: false,
        },
        {
            items: peopleToDisplay,
            key: 'people',
            title: messages_1.messages.jira_recent_people_heading,
            totalSize: peopleToDisplay.length,
            showTotalSize: false,
        },
    ];
};
exports.mapSearchResultsToUIGroups = function (searchResultsObjects, searchSessionId, features, appPermission, query) {
    var withSessionId = searchResultsObjects !== null
        ? contextIdentifiersHelper_1.attachJiraContextIdentifiers(searchSessionId, searchResultsObjects)
        : searchResultsObjects;
    var _a = sliceResults(withSessionId, features.abTest), objectsToDisplay = _a.objectsToDisplay, peopleToDisplay = _a.peopleToDisplay, containersToDisplay = _a.containersToDisplay;
    return tslib_1.__spread([
        {
            items: objectsToDisplay,
            key: 'issues',
            title: messages_1.messages.jira_search_result_issues_heading,
            showTotalSize: false,
            totalSize: objectsToDisplay.length,
        }
    ], (!hasNoResults(objectsToDisplay, peopleToDisplay, containersToDisplay)
        ? [
            {
                items: [
                    {
                        resultType: Result_1.ResultType.JiraIssueAdvancedSearch,
                        resultId: 'search-jira',
                        name: 'jira',
                        href: SearchResultsUtil_1.getJiraAdvancedSearchUrl({
                            entityType: SearchResultsUtil_1.JiraEntityTypes.Issues,
                            query: query,
                        }),
                        analyticsType: Result_1.AnalyticsType.LinkPostQueryAdvancedSearchJira,
                        contentType: Result_1.ContentType.JiraIssue,
                    },
                ],
                key: 'issue-advanced',
                title: isEmpty(objectsToDisplay)
                    ? messages_1.messages.jira_search_result_issues_heading
                    : undefined,
                showTotalSize: false,
                totalSize: 1,
            },
        ]
        : []), [
        {
            items: containersToDisplay,
            key: 'containers',
            title: appPermission && !appPermission.hasSoftwareAccess
                ? messages_1.messages.jira_search_result_core_containers_heading
                : messages_1.messages.jira_search_result_containers_heading,
            showTotalSize: false,
            totalSize: containersToDisplay.length,
        },
        {
            items: peopleToDisplay,
            key: 'people',
            title: messages_1.messages.jira_search_result_people_heading,
            showTotalSize: false,
            totalSize: peopleToDisplay.length,
        },
    ]);
};
//# sourceMappingURL=JiraSearchResultsMapper.js.map