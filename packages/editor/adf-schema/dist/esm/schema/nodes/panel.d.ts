import { NodeSpec } from 'prosemirror-model';
import { ParagraphDefinition as Paragraph } from './paragraph';
import { OrderedListDefinition as OrderedList } from './ordered-list';
import { BulletListDefinition as BulletList } from './bullet-list';
import { HeadingDefinition as Heading } from './heading';
export declare type PanelType = 'info' | 'note' | 'tip' | 'warning' | 'error' | 'success';
export interface PanelAttributes {
    panelType: PanelType;
}
/**
 * @name panel_node
 */
export interface PanelDefinition {
    type: 'panel';
    attrs: PanelAttributes;
    /**
     * @minItems 1
     */
    content: Array<Paragraph | Heading | OrderedList | BulletList>;
}
export interface DOMAttributes {
    [propName: string]: string;
}
export declare const panel: NodeSpec;
