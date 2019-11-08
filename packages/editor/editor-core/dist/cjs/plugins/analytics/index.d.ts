import analyticsPlugin from './plugin';
import { FabricChannel } from '@atlaskit/analytics-listeners';
export declare const analyticsEventKey = "EDITOR_ANALYTICS_EVENT";
export declare const editorAnalyticsChannel = FabricChannel.editor;
export * from './types';
export * from './utils';
export declare const analyticsPluginKey: import("prosemirror-state").PluginKey<any>;
export default analyticsPlugin;
