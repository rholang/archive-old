import { ABTest } from '../api/CrossProductSearchClient';
import { FormattedMessage } from 'react-intl';
export declare enum ResultType {
    JiraObjectResult = "jira-object-result",
    JiraProjectResult = "jira-project-result",
    GenericContainerResult = "generic-container-result",
    PersonResult = "person-result",
    ConfluenceObjectResult = "confluence-object-result",
    JiraIssueAdvancedSearch = "JiraIssueAdvancedSearch"
}
export declare enum JiraProjectType {
    Software = "software",
    ServiceDesk = "service_desk",
    Business = "business",
    Ops = "ops"
}
export interface Results<T = Result> {
    items: T[];
    totalSize: number;
    numberOfCurrentItems?: number;
}
export declare type PeopleResults = Results<PersonResult>;
export declare type ConfluenceObjectResults = Results<ConfluenceObjectResult>;
export interface Result {
    resultId: string;
    name: string;
    href: string;
    avatarUrl?: string;
    analyticsType: AnalyticsType;
    resultType: ResultType;
    containerId?: string;
    experimentId?: string;
    contentType: ContentType;
    key?: string;
    isRecentResult?: boolean;
    objectKey?: string;
}
export declare type ResultsWithTiming<T extends ConfluenceResultsMap | JiraResultsMap> = {
    results: T;
    timings?: {
        [key: string]: number | string;
    };
    abTest?: ABTest;
};
export interface ConfluenceResultsMap {
    [key: string]: PeopleResults | ConfluenceObjectResults | Results;
    people: PeopleResults;
    objects: ConfluenceObjectResults;
    spaces: Results;
}
export interface ConfluenceRecentsMap {
    objects: ConfluenceObjectResults;
    spaces: Results;
    people: PeopleResults;
}
export interface JiraResultsMap {
    [key: string]: Result[];
    objects: Result[];
    containers: Result[];
    people: Result[];
}
export interface ConfluenceObjectResult extends Result {
    containerName: string;
    containerId: string;
    contentType: ContentType;
    resultType: ResultType.ConfluenceObjectResult;
    iconClass?: string;
    friendlyLastModified: string | undefined;
}
export declare type ResultsGroup = {
    items: Result[];
    key: string;
    showTotalSize: boolean;
    totalSize: number;
    title?: FormattedMessage.MessageDescriptor;
};
export interface JiraResult extends Result {
    objectKey?: string;
    containerName?: string;
    projectType?: JiraProjectType;
    resultType: ResultType.JiraObjectResult | ResultType.JiraProjectResult;
    contentType: ContentType;
}
export interface ContainerResult extends Result {
    resultType: ResultType.GenericContainerResult;
    contentType: ContentType.ConfluenceSpace;
}
export interface PersonResult extends Result {
    mentionName: string;
    presenceMessage: string;
    resultType: ResultType.PersonResult;
}
export declare enum ContentType {
    ConfluencePage = "confluence-page",
    ConfluenceBlogpost = "confluence-blogpost",
    ConfluenceAttachment = "confluence-attachment",
    ConfluenceSpace = "confluence-space",
    JiraIssue = "jira-issue",
    JiraBoard = "jira-board",
    JiraFilter = "jira-filter",
    JiraProject = "jira-project",
    Person = "person"
}
export declare enum AnalyticsType {
    RecentJira = "recent-jira",
    ResultJira = "result-jira",
    RecentConfluence = "recent-confluence",
    ResultConfluence = "result-confluence",
    RecentPerson = "recent-person",
    ResultPerson = "result-person",
    AdvancedSearchConfluence = "advanced-search-confluence",
    AdvancedSearchJira = "advanced-search-jira",
    TopLinkPreQueryAdvancedSearchJira = "top-link-prequery-advanced-search-jira",
    LinkPostQueryAdvancedSearchJira = "link-postquery-advanced-search-jira",
    AdvancedSearchPeople = "advanced-search-people"
}
