import { EditorView } from 'prosemirror-view';
export declare type EditorViewWithComposition = EditorView & {
    domObserver: {
        observer?: MutationObserver;
        flush: () => void;
    };
    composing: boolean;
};
export interface ElementsConfig {
    baseUrl: string;
    cloudId?: string;
}
export interface NativeFetchResponse {
    response: string;
    status: number;
    statusText: string;
}
export declare type AccountId = string;
