export var ADVANCED_CONFLUENCE_SEARCH_RESULT_ID = 'search_confluence';
export var ADVANCED_JIRA_SEARCH_RESULT_ID = 'search_jira';
export var ADVANCED_PEOPLE_SEARCH_RESULT_ID = 'search_people';
export var JiraEntityTypes;
(function (JiraEntityTypes) {
    JiraEntityTypes["Projects"] = "projects";
    JiraEntityTypes["Issues"] = "issues";
    JiraEntityTypes["Boards"] = "boards";
    JiraEntityTypes["Filters"] = "filters";
    JiraEntityTypes["People"] = "people";
})(JiraEntityTypes || (JiraEntityTypes = {}));
export var ConfluenceAdvancedSearchTypes;
(function (ConfluenceAdvancedSearchTypes) {
    ConfluenceAdvancedSearchTypes["Content"] = "content";
    ConfluenceAdvancedSearchTypes["People"] = "people";
})(ConfluenceAdvancedSearchTypes || (ConfluenceAdvancedSearchTypes = {}));
export var isAdvancedSearchResult = function (resultId) {
    return [
        ADVANCED_CONFLUENCE_SEARCH_RESULT_ID,
        ADVANCED_JIRA_SEARCH_RESULT_ID,
        ADVANCED_PEOPLE_SEARCH_RESULT_ID,
    ].some(function (advancedResultId) { return advancedResultId === resultId; });
};
export function getConfluenceAdvancedSearchLink(query) {
    var queryString = query ? "?queryString=" + encodeURIComponent(query) : '';
    return "/wiki/dosearchsite.action" + queryString;
}
export function getJiraAdvancedSearchUrl(props) {
    var entityType = props.entityType, query = props.query, enableIssueKeySmartMode = props.enableIssueKeySmartMode, isJiraPeopleProfilesEnabled = props.isJiraPeopleProfilesEnabled;
    switch (entityType) {
        case JiraEntityTypes.Issues:
            return !enableIssueKeySmartMode && query && +query
                ? "/issues/?jql=order+by+created+DESC"
                : "/secure/QuickSearch.jspa?searchString=" + query;
        case JiraEntityTypes.Boards:
            return "/secure/ManageRapidViews.jspa?contains=" + query;
        case JiraEntityTypes.Filters:
            return "/secure/ManageFilters.jspa?Search=Search&filterView=search&name=" + query;
        case JiraEntityTypes.Projects:
            return "/projects?contains=" + query;
        case JiraEntityTypes.People:
            return !!isJiraPeopleProfilesEnabled
                ? "/jira/people/search?q=" + query
                : "/people/search?q=" + query;
    }
}
export function redirectToConfluenceAdvancedSearch(query) {
    if (query === void 0) { query = ''; }
    // XPSRCH-891: this breaks SPA navigation. Consumer needs to pass in a redirect/navigate function.
    window.location.assign(getConfluenceAdvancedSearchLink(query));
}
export function redirectToJiraAdvancedSearch(entityType, query) {
    if (query === void 0) { query = ''; }
    window.location.assign(getJiraAdvancedSearchUrl({
        entityType: entityType,
        query: query,
        enableIssueKeySmartMode: true,
    }));
}
export function take(array, n) {
    return (array || []).slice(0, n);
}
export function isEmpty(array) {
    return array.length === 0;
}
/**
 *
 * Gracefully handle promise catch and returning default value
 * @param promise promise to handle its catch block
 * @param defaultValue value returned by the promise in case of error
 * @param errorHandler function to be called in case of promise rejection
 */
export function handlePromiseError(promise, defaultValue, errorHandler) {
    return promise.catch(function (error) {
        try {
            if (errorHandler) {
                errorHandler(error);
            }
        }
        catch (e) { }
        return defaultValue;
    });
}
//# sourceMappingURL=SearchResultsUtil.js.map