import { BaseItem, Decision, Item, ObjectKey, ServiceDecision, ServiceTask, Task, TaskState } from './types';
export declare const isDecision: (item: Item) => item is Decision;
export declare const isTask: (item: Item) => item is Task;
export declare const toObjectKey: (item: ServiceDecision | ServiceTask | Decision | Task | BaseItem<any>) => ObjectKey;
export declare const objectKeyToString: (objectKey: ObjectKey) => string;
export declare const toggleTaskState: (state: TaskState) => TaskState;
