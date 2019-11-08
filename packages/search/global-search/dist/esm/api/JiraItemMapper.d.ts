import { AnalyticsType, JiraResult } from '../model/Result';
import { JiraItem } from './types';
export declare const mapJiraItemToResult: (analyticsType: AnalyticsType) => (item: JiraItem) => JiraResult;
