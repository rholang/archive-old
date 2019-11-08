import { PluginKey } from 'prosemirror-state';
import { CreateUIAnalyticsEvent } from '@atlaskit/analytics-next';
import { EditorPlugin } from '../../types';
import { AnalyticsEventPayload } from './types';
export declare const analyticsPluginKey: PluginKey<any>;
declare const analyticsPlugin: (createAnalyticsEvent?: CreateUIAnalyticsEvent | undefined) => EditorPlugin;
export declare function extendPayload(payload: AnalyticsEventPayload, duration: number): AnalyticsEventPayload;
export default analyticsPlugin;
