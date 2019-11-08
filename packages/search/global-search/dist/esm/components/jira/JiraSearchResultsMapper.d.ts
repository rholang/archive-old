import { ResultsGroup, JiraResultsMap } from '../../model/Result';
import { JiraApplicationPermission } from '../GlobalQuickSearchWrapper';
import { JiraFeatures } from '../../util/features';
export declare const MAX_RECENT_RESULTS_TO_SHOW = 3;
export declare const mapRecentResultsToUIGroups: (recentlyViewedObjects: JiraResultsMap | null, searchSessionId: string, features: JiraFeatures, appPermission?: JiraApplicationPermission | undefined) => ResultsGroup[];
export declare const mapSearchResultsToUIGroups: (searchResultsObjects: JiraResultsMap | null, searchSessionId: string, features: JiraFeatures, appPermission?: JiraApplicationPermission | undefined, query?: string | undefined) => ResultsGroup[];
