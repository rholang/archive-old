import { NodeSpec } from 'prosemirror-model';
import { TaskItemDefinition as TaskItemNode } from './task-item';
export declare type BaseTaskListDefinition = {
    type: 'taskList';
    attrs: {
        localId: string;
    };
};
/**
 * @name taskList_node
 */
export interface TaskListDefinition extends BaseTaskListDefinition {
    /**
     * @minItems 1
     */
    content: Array<TaskItemNode>;
}
export interface NestedTaskListContent extends Array<TaskItemNode | TaskListWithNestingDefinition> {
    0: TaskItemNode;
}
/**
 * @name nestableTaskList_node
 * @stage 0
 */
export interface TaskListWithNestingDefinition extends BaseTaskListDefinition {
    /**
     * @minItems 1
     */
    content: NestedTaskListContent;
}
export declare const taskListSelector: string;
export declare const taskList: NodeSpec;
export declare const nestableTaskList: NodeSpec;
