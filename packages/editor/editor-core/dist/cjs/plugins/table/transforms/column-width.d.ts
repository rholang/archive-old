import { Transaction } from 'prosemirror-state';
import { Node as PMNode } from 'prosemirror-model';
import { ResizeState } from '../pm-plugins/table-resizing/utils';
export declare const updateColumnWidths: (resizeState: ResizeState, table: PMNode<any>, start: number) => (tr: Transaction<any>) => Transaction<any>;
