import { EditorPlugin } from '../../../types';
export declare const removeExcludes: (plugins: EditorPlugin[], excludes: string[] | undefined) => EditorPlugin[];
export declare type ExperimentalPluginMap = Map<string, EditorPlugin>;
export declare const enableExperimental: (plugins: EditorPlugin[], experimental: string[] | undefined, experimentalPluginMap: Map<string, EditorPlugin>) => EditorPlugin[];
