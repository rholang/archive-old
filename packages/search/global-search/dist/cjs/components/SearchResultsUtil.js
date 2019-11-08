"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ADVANCED_CONFLUENCE_SEARCH_RESULT_ID = 'search_confluence';
exports.ADVANCED_JIRA_SEARCH_RESULT_ID = 'search_jira';
exports.ADVANCED_PEOPLE_SEARCH_RESULT_ID = 'search_people';
var JiraEntityTypes;
(function (JiraEntityTypes) {
    JiraEntityTypes["Projects"] = "projects";
    JiraEntityTypes["Issues"] = "issues";
    JiraEntityTypes["Boards"] = "boards";
    JiraEntityTypes["Filters"] = "filters";
    JiraEntityTypes["People"] = "people";
})(JiraEntityTypes = exports.JiraEntityTypes || (exports.JiraEntityTypes = {}));
var ConfluenceAdvancedSearchTypes;
(function (ConfluenceAdvancedSearchTypes) {
    ConfluenceAdvancedSearchTypes["Content"] = "content";
    ConfluenceAdvancedSearchTypes["People"] = "people";
})(ConfluenceAdvancedSearchTypes = exports.ConfluenceAdvancedSearchTypes || (exports.ConfluenceAdvancedSearchTypes = {}));
exports.isAdvancedSearchResult = function (resultId) {
    return [
        exports.ADVANCED_CONFLUENCE_SEARCH_RESULT_ID,
        exports.ADVANCED_JIRA_SEARCH_RESULT_ID,
        exports.ADVANCED_PEOPLE_SEARCH_RESULT_ID,
    ].some(function (advancedResultId) { return advancedResultId === resultId; });
};
function getConfluenceAdvancedSearchLink(query) {
    var queryString = query ? "?queryString=" + encodeURIComponent(query) : '';
    return "/wiki/dosearchsite.action" + queryString;
}
exports.getConfluenceAdvancedSearchLink = getConfluenceAdvancedSearchLink;
function getJiraAdvancedSearchUrl(props) {
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
exports.getJiraAdvancedSearchUrl = getJiraAdvancedSearchUrl;
function redirectToConfluenceAdvancedSearch(query) {
    if (query === void 0) { query = ''; }
    // XPSRCH-891: this breaks SPA navigation. Consumer needs to pass in a redirect/navigate function.
    window.location.assign(getConfluenceAdvancedSearchLink(query));
}
exports.redirectToConfluenceAdvancedSearch = redirectToConfluenceAdvancedSearch;
function redirectToJiraAdvancedSearch(entityType, query) {
    if (query === void 0) { query = ''; }
    window.location.assign(getJiraAdvancedSearchUrl({
        entityType: entityType,
        query: query,
        enableIssueKeySmartMode: true,
    }));
}
exports.redirectToJiraAdvancedSearch = redirectToJiraAdvancedSearch;
function take(array, n) {
    return (array || []).slice(0, n);
}
exports.take = take;
function isEmpty(array) {
    return array.length === 0;
}
exports.isEmpty = isEmpty;
/**
 *
 * Gracefully handle promise catch and returning default value
 * @param promise promise to handle its catch block
 * @param defaultValue value returned by the promise in case of error
 * @param errorHandler function to be called in case of promise rejection
 */
function handlePromiseError(promise, defaultValue, errorHandler) {
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
exports.handlePromiseError = handlePromiseError;
//# sourceMappingURL=SearchResultsUtil.js.map