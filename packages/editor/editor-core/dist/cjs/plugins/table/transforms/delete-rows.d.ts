import { Transaction } from 'prosemirror-state';
import { Rect } from 'prosemirror-tables';
export declare const deleteRows: (rect: Rect, isHeaderRowRequired?: boolean) => (tr: Transaction<any>) => Transaction<any>;
