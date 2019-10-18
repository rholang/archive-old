import { Node, NodeSpec } from 'prosemirror-model';
import { TaskItemDefinition as TaskItemNode } from './task-item';
import { uuid } from '../../utils/uuid';

export type BaseTaskListDefinition = {
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

export interface NestedTaskListContent
  extends Array<TaskItemNode | TaskListWithNestingDefinition> {
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

const name = 'actionList';

export const taskListSelector = `[data-node-type="${name}"]`;

export const taskList: NodeSpec = {
  group: 'block',
  defining: true,
  content: 'taskItem+',
  attrs: {
    localId: { default: '' },
  },
  parseDOM: [
    {
      tag: `div${taskListSelector}`,

      // Default priority is 50. We normaly don't change this but since this node type is
      // also used by ordered-list we need to make sure that we run this parser first.
      priority: 100,

      getAttrs: () => ({
        localId: uuid.generate(),
      }),
    },
  ],
  toDOM(node: Node) {
    const { localId } = node.attrs;
    const attrs = {
      'data-node-type': name,
      'data-task-list-local-id': localId || 'local-task-list',
      style: 'list-style: none; padding-left: 0',
    };

    return ['div', attrs, 0];
  },
};

export const nestableTaskList: NodeSpec = {
  ...taskList,
  content: 'taskItem+ (taskItem|taskList)*',
};
