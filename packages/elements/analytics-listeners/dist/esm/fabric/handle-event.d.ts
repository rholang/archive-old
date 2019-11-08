import { AnalyticsWebClient } from '../types';
import Logger from '../helpers/logger';
import { UIAnalyticsEvent } from '@atlaskit/analytics-next';
export declare const handleEvent: (event: UIAnalyticsEvent, tag: string, logger: Logger, client?: AnalyticsWebClient | Promise<AnalyticsWebClient> | undefined) => void;
