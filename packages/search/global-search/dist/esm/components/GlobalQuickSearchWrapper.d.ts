import * as React from 'react';
import { CancelableEvent } from '@atlaskit/quick-search';
import { SearchClients } from '../api/configureSearchClients';
import { QuickSearchContext, ConfluenceModelContext, JiraModelContext } from '../api/types';
import { JiraFeatures, ConfluenceFeatures } from '../util/features';
import { ABTest } from '../api/CrossProductSearchClient';
import { FeedbackCollectorProps } from './feedback/withFeedbackButton';
export declare type LinkComponent = React.ComponentType<{
    className: string;
    children: React.ReactNode;
    href?: string;
    target?: string;
}>;
export declare type Logger = {
    safeInfo(message?: any, ...optionalParams: any[]): void;
    safeWarn(message?: any, ...optionalParams: any[]): void;
    safeError(message?: any, ...optionalParams: any[]): void;
};
export declare type ReferralContextIdentifiers = {
    searchReferrerId: string;
    currentContentId: string;
    currentContainerId?: string;
    currentContainerName?: string;
    currentContainerIcon?: string;
};
export declare type JiraApplicationPermission = {
    hasCoreAccess: boolean;
    hasSoftwareAccess: boolean;
    hasServiceDeskAccess: boolean;
    hasOpsAccess: boolean;
};
export declare type AdvancedSearchEvent = {
    /**
     * prevent navigation to advanced search page
     */
    preventDefault: () => void;
    /**
     * query entered by user
     */
    query: string;
    /**
     * if it is jira it can be one of the following ['issues', 'boards', 'projects', 'filters', 'people']
     * if it is confluence it can be one of the following ['content', 'people']
     */
    category: string;
    /**
     * original event, this is useful when need to check if the click was to open in new tab or in same tab
     * but if consumer wanna cancel the event {@link preventDefault} should be used
     */
    originalEvent: object;
    /**
     * searchSessionId from the quick search session, it should be used for the advanced search session
     */
    searchSessionId: string;
    /**
     * Space Keys of the spaces to filter the search to (confluence only)
     */
    spaces: string[];
};
export interface Props {
    /**
     * The cloudId of the site the component is embedded in.
     */
    cloudId: string;
    /**
     * The context for quick-search determines the UX and what kind of entities the component is searching.
     */
    context: QuickSearchContext;
    /**
     * For development purposes only: Overrides the URL to the activity service.
     */
    activityServiceUrl?: string;
    /**
     * For development purposes only: Overrides the URL to the search aggregator service.
     */
    searchAggregatorServiceUrl?: string;
    /**
     * For development purposes only: Overrides the URL to the directory service.
     */
    directoryServiceUrl?: string;
    /**
     * The URL for Confluence. Must include the context path.
     */
    confluenceUrl?: string;
    /**
     * The URL for Autocomplete service. Overrides the URL to the autocomplete service
     */
    autocompleteUrl?: string;
    /**
     * The URL for Jira. Must include the context path.
     */
    jiraUrl?: string;
    /**
     * React component to be used for rendering links. It receives a className prop that needs to be applied for
     * proper styling, a children prop that needs to be rendered, and optional href/target props that should be
     * respected.
     */
    linkComponent?: LinkComponent;
    /**
     * An object containing referral IDs, i.e. the searchReferrerId and currentContentId.
     */
    referralContextIdentifiers?: ReferralContextIdentifiers;
    /**
     * Indicates whether or not autocompletion features is enabled
     */
    isAutocompleteEnabled?: boolean;
    /**
     * Indicates whether or not navautocompletion features is enabled
     */
    isNavAutocompleteEnabled?: boolean;
    /**
     * Indicates whether to disable Jira people search on the pre-query screen
     */
    disableJiraPreQueryPeopleSearch?: boolean;
    /**
     * logger with 3 levels error, warn and info
     */
    logger?: Logger;
    /**
     * call back, to be called when advanced search is clicked
     */
    onAdvancedSearch?: (e: AdvancedSearchEvent) => void;
    /**
     * controls where to retrieve prequery results either from aggregator or directly from the product
     */
    enablePreQueryFromAggregator?: boolean;
    /**
     * A prop to provide additional elements to render on the right of the search bar, e.g. the feedback button.
     */
    inputControls?: JSX.Element;
    appPermission?: JiraApplicationPermission;
    /**
     * Determine whether to enable urs for bootstrapping people search.
     */
    useUrsForBootstrapping?: boolean;
    /**
     * Additional context paramters used to evaluate search models
     */
    modelContext?: ConfluenceModelContext | JiraModelContext;
    /**
     * Determines whether or not to show a feedback collector
     */
    showFeedbackCollector?: boolean;
    /**
     * Props to pass down to the feedback collector
     */
    feedbackCollectorProps?: FeedbackCollectorProps;
    /**
     * The user's account id. null if the user is anonymous.
     */
    userId: string | null;
    /**
     * Check if Jira's people profile's page is enabled.
     */
    isJiraPeopleProfilesEnabled?: boolean;
}
/**
 * Component that exposes the public API for global quick search. Its only purpose is to offer a simple, user-friendly API to the outside and hide the implementation detail of search clients etc.
 */
export default class GlobalQuickSearchWrapper extends React.Component<Props> {
    static defaultProps: {
        logger: Logger;
    };
    private makeConfig;
    shouldComponentUpdate(nextProps: Props, nextState: any): boolean;
    onAdvancedSearch: (e: CancelableEvent, entity: string, query: string, searchSessionId: string, spaces?: string[]) => void;
    createFeatures(abTest: ABTest): ConfluenceFeatures & JiraFeatures;
    renderSearchContainer(searchClients: SearchClients, abTest: ABTest): JSX.Element;
    render(): JSX.Element;
}
