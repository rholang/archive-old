import { NodeSpec } from 'prosemirror-model';
import { ListItemDefinition as ListItemNode } from './list-item';

/**
 * @name bulletList_node
 */
export interface BulletListDefinition {
  type: 'bulletList';
  /**
   * @minItems 1
   */
  content: Array<ListItemNode>;
}

export const bulletListSelector = '.ak-ul';

export const bulletList: NodeSpec = {
  group: 'block',
  content: 'listItem+',
  parseDOM: [{ tag: 'ul' }],
  toDOM() {
    const attrs = {
      class: bulletListSelector.substr(1),
    };
    return ['ul', attrs, 0];
  },
};
