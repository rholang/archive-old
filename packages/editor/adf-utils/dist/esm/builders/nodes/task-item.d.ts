import { Inline, TaskItemDefinition } from '@atlaskit/adf-schema';
export declare const taskItem: (attrs: {
    localId: string;
    state: "TODO" | "DONE";
}) => (...content: Inline[]) => TaskItemDefinition;
