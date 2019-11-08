"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ResultType;
(function (ResultType) {
    ResultType["JiraObjectResult"] = "jira-object-result";
    ResultType["JiraProjectResult"] = "jira-project-result";
    ResultType["GenericContainerResult"] = "generic-container-result";
    ResultType["PersonResult"] = "person-result";
    ResultType["ConfluenceObjectResult"] = "confluence-object-result";
    ResultType["JiraIssueAdvancedSearch"] = "JiraIssueAdvancedSearch";
})(ResultType = exports.ResultType || (exports.ResultType = {}));
var JiraProjectType;
(function (JiraProjectType) {
    JiraProjectType["Software"] = "software";
    JiraProjectType["ServiceDesk"] = "service_desk";
    JiraProjectType["Business"] = "business";
    JiraProjectType["Ops"] = "ops";
})(JiraProjectType = exports.JiraProjectType || (exports.JiraProjectType = {}));
var ContentType;
(function (ContentType) {
    ContentType["ConfluencePage"] = "confluence-page";
    ContentType["ConfluenceBlogpost"] = "confluence-blogpost";
    ContentType["ConfluenceAttachment"] = "confluence-attachment";
    ContentType["ConfluenceSpace"] = "confluence-space";
    ContentType["JiraIssue"] = "jira-issue";
    ContentType["JiraBoard"] = "jira-board";
    ContentType["JiraFilter"] = "jira-filter";
    ContentType["JiraProject"] = "jira-project";
    ContentType["Person"] = "person";
})(ContentType = exports.ContentType || (exports.ContentType = {}));
var AnalyticsType;
(function (AnalyticsType) {
    AnalyticsType["RecentJira"] = "recent-jira";
    AnalyticsType["ResultJira"] = "result-jira";
    AnalyticsType["RecentConfluence"] = "recent-confluence";
    AnalyticsType["ResultConfluence"] = "result-confluence";
    AnalyticsType["RecentPerson"] = "recent-person";
    AnalyticsType["ResultPerson"] = "result-person";
    AnalyticsType["AdvancedSearchConfluence"] = "advanced-search-confluence";
    AnalyticsType["AdvancedSearchJira"] = "advanced-search-jira";
    AnalyticsType["TopLinkPreQueryAdvancedSearchJira"] = "top-link-prequery-advanced-search-jira";
    AnalyticsType["LinkPostQueryAdvancedSearchJira"] = "link-postquery-advanced-search-jira";
    AnalyticsType["AdvancedSearchPeople"] = "advanced-search-people";
})(AnalyticsType = exports.AnalyticsType || (exports.AnalyticsType = {}));
//# sourceMappingURL=Result.js.map