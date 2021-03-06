import { ListBridge, MediaBridge, MentionBridge, PromiseBridge, TextFormattingBridge, StatusBridge, TypeAheadBridge, LinkBridge, UndoRedoBridge, AnalyticsBridge } from './bridge';
import NativeBridge from './bridge';
export interface EditorBridges {
    mentionsBridge?: MentionBridge;
    mentionBridge?: MentionBridge;
    textFormatBridge?: TextFormattingBridge;
    mediaBridge?: MediaBridge;
    promiseBridge?: PromiseBridge;
    listBridge?: ListBridge;
    blockFormatBridge?: TextFormattingBridge;
    statusBridge?: StatusBridge;
    typeAheadBridge?: TypeAheadBridge;
    linkBridge?: LinkBridge;
    undoRedoBridge?: UndoRedoBridge;
    analyticsBridge?: AnalyticsBridge;
}
export declare type EditorPluginBridges = keyof EditorBridges;
declare global {
    interface Window extends EditorBridges {
        webkit?: any;
    }
}
export declare const toNativeBridge: NativeBridge;
