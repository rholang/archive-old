import { TaskListDefinition, TaskItemDefinition } from '@atlaskit/adf-schema';
export declare const taskList: (attrs: {
    localId: string;
}) => (...content: TaskItemDefinition[]) => TaskListDefinition;
