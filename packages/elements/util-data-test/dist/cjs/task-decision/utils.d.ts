import { ObjectKey } from '@atlaskit/task-decision';
export declare const objectKeyToString: (objectKey: ObjectKey) => string;
export declare const toggleTaskState: (state: string) => "DONE" | "TODO";
export declare const findIndex: (array: any[], predicate: (item: any) => boolean) => number;
