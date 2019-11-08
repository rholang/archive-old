import { BaseItem, DecisionState, Handler, ObjectKey, RecentUpdateContext, RecentUpdatesId, TaskDecisionProvider, TaskState } from '@atlaskit/task-decision';
export interface MockTaskDecisionResourceConfig {
    hasMore?: boolean;
    lag?: number;
    error?: boolean;
    empty?: boolean;
}
export declare class MockTaskDecisionResource implements TaskDecisionProvider {
    private config?;
    private subscribers;
    private cachedItems;
    private batchedKeys;
    constructor(config?: MockTaskDecisionResourceConfig);
    unsubscribeRecentUpdates(_id: RecentUpdatesId): void;
    notifyRecentUpdates(_updateContext?: RecentUpdateContext): void;
    getTaskState(_keys: ObjectKey[]): Promise<BaseItem<TaskState>[]>;
    toggleTask(objectKey: ObjectKey, state: TaskState): Promise<TaskState>;
    subscribe(objectKey: ObjectKey, handler: Handler): void;
    unsubscribe(objectKey: ObjectKey, handler: Handler): void;
    notifyUpdated(objectKey: ObjectKey, state: TaskState | DecisionState): void;
    private queueItem;
    private dequeueItem;
}
