import { ServiceTask, Task, ServiceTaskState, BaseItem, TaskState } from '../types';
export declare const convertServiceTaskToTask: (serviceTask: ServiceTask) => Task;
export declare const convertServiceTaskStateToBaseItem: (serviceTaskInfo: ServiceTaskState) => BaseItem<TaskState>;
export declare const findIndex: (array: any[], predicate: (item: any) => boolean) => number;
