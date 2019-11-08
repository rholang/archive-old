import { Command } from '../types';
import { AnalyticsProperties } from './handler';
export declare function commandWithAnalytics(analyticsEventName: string, properties?: AnalyticsProperties): (command: Command) => Command;
