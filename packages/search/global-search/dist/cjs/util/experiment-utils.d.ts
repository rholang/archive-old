import { ABTest } from '../api/CrossProductSearchClient';
export declare const getJiraMaxObjects: (abTest: ABTest, defaultMaxObjects: number) => number;
/**
 * Extension to quick search
 * Show more results
 *
 * Page size i.e. number of items reterieved from server per request
 */
export declare const CONF_OBJECTS_ITEMS_PER_PAGE = 10;
/**
 *  Max number of result items otherwise recommend advanced search
 */
export declare const CONF_MAX_DISPLAYED_RESULTS = 30;
export declare const getConfluenceMaxObjects: (abTest: ABTest, defaultMaxObjects: number) => number;
