/**
 * Grape is an experiment to increase the number of search results shown to the user
 */
var CONFLUENCE_GRAPE_EXPERIMENT = 'grape';
var JIRA_GRAPE_EXPERIMENT = 'grape';
export var getJiraMaxObjects = function (abTest, defaultMaxObjects) {
    return getMaxObjects(abTest, JIRA_GRAPE_EXPERIMENT, defaultMaxObjects);
};
/**
 * Extension to quick search
 * Show more results
 *
 * Page size i.e. number of items reterieved from server per request
 */
export var CONF_OBJECTS_ITEMS_PER_PAGE = 10;
/**
 *  Max number of result items otherwise recommend advanced search
 */
export var CONF_MAX_DISPLAYED_RESULTS = 30;
export var getConfluenceMaxObjects = function (abTest, defaultMaxObjects) { return getMaxObjects(abTest, CONFLUENCE_GRAPE_EXPERIMENT, defaultMaxObjects); };
var getMaxObjects = function (abTest, experimentIdPrefix, defaultMaxObjects) {
    if (abTest.experimentId.startsWith(experimentIdPrefix)) {
        var parsedMaxObjects = Number.parseInt(abTest.experimentId.split('-')[1], 10);
        return parsedMaxObjects || defaultMaxObjects;
    }
    return defaultMaxObjects;
};
//# sourceMappingURL=experiment-utils.js.map