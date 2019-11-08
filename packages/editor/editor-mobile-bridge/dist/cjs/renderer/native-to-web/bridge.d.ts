import { TaskState } from '@atlaskit/task-decision';
export declare type ScrollToContentNode = 'mention' | 'action' | 'decision';
export interface TaskDecisionBridge {
    onTaskUpdated(localId: string, state: TaskState): void;
}
export interface PromiseBridge {
    onPromiseResolved(uuid: string, payload: string): void;
    onPromiseRejected(uuid: string): void;
}
export default interface RendererBridge extends TaskDecisionBridge, PromiseBridge {
    setContent(content: string): void;
    scrollToContentNode(nodeType: ScrollToContentNode, id: string, index?: number): string;
    getContentNodeScrollOffsetY(nodeType: ScrollToContentNode, id: string, index?: number): string;
}
