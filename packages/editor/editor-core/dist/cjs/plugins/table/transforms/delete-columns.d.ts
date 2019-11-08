import { Transaction } from 'prosemirror-state';
import { Rect } from 'prosemirror-tables';
export declare const deleteColumns: (rect: Rect) => (tr: Transaction<any>) => Transaction<any>;
