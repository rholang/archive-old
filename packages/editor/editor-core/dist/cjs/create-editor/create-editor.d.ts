import { Schema, MarkSpec } from 'prosemirror-model';
import { Plugin } from 'prosemirror-state';
import { ErrorReporter, ErrorReportingHandler } from '@atlaskit/editor-common';
import { AnalyticsHandler } from '../analytics';
import { EditorPlugin, EditorProps, EditorConfig, PMPluginCreateConfig } from '../types';
export declare function sortByRank(a: {
    rank: number;
}, b: {
    rank: number;
}): number;
export declare function sortByOrder(item: 'plugins' | 'nodes' | 'marks'): (a: {
    name: string;
}, b: {
    name: string;
}) => number;
export declare function fixExcludes(marks: {
    [key: string]: MarkSpec;
}): {
    [key: string]: MarkSpec;
};
export declare function processPluginsList(plugins: EditorPlugin[], editorProps: EditorProps): EditorConfig;
export declare function createSchema(editorConfig: EditorConfig): Schema<string, string>;
export declare function createPMPlugins({ editorConfig, schema, props, prevProps, dispatch, eventDispatcher, providerFactory, errorReporter, portalProviderAPI, reactContext, dispatchAnalyticsEvent, }: PMPluginCreateConfig): Plugin[];
export declare function createErrorReporter(errorReporterHandler?: ErrorReportingHandler): ErrorReporter;
export declare function initAnalytics(analyticsHandler?: AnalyticsHandler): void;
