import { TaskDecisionProvider, RecentUpdatesId, RecentUpdateContext, ObjectKey, TaskState, Handler } from '@atlaskit/task-decision';
declare type ToggleTaskCallback = (key: ObjectKey, state: TaskState) => void;
export declare const objectKeyToString: (objectKey: ObjectKey) => string;
export declare class TaskDecisionProviderImpl implements TaskDecisionProvider {
    _handleToggleTask: ToggleTaskCallback | undefined;
    _handlers: Map<string, Handler>;
    constructor(toggleTask?: ToggleTaskCallback);
    unsubscribeRecentUpdates(_id: RecentUpdatesId): void;
    notifyRecentUpdates(_updateContext?: RecentUpdateContext): void;
    toggleTask(key: ObjectKey, state: TaskState): Promise<TaskState>;
    subscribe(key: ObjectKey, handler: Handler): void;
    unsubscribe(key: ObjectKey): void;
    notifyUpdated(objectKey: ObjectKey, state: TaskState): void;
}
declare const _default: (handleToggleTask?: ToggleTaskCallback | undefined) => TaskDecisionProviderImpl;
export default _default;
