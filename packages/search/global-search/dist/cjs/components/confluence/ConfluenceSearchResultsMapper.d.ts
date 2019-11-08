import { ConfluenceResultsMap, ResultsGroup } from '../../model/Result';
import { ConfluenceFeatures } from '../../util/features';
export declare const DEFAULT_MAX_OBJECTS = 10;
export declare const MAX_SPACES = 3;
export declare const MAX_PEOPLE = 3;
export declare const MAX_RECENT_RESULTS_TO_SHOW = 3;
export declare const mapRecentResultsToUIGroups: (recentlyViewedObjects: ConfluenceResultsMap | null, features: ConfluenceFeatures, searchSessionId: string) => ResultsGroup[];
export declare const mapSearchResultsToUIGroups: (searchResultsObjects: ConfluenceResultsMap | null, features: ConfluenceFeatures, searchSessionId: string, hideAllSizeLozenge?: boolean | undefined) => ResultsGroup[];
