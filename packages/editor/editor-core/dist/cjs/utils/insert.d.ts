import { Node, Fragment } from 'prosemirror-model';
import { Transaction } from 'prosemirror-state';
export declare type InsertableContent = Node | Fragment;
export declare enum LookDirection {
    Before = "before",
    After = "after"
}
export declare const safeInsert: (content: Node<any> | Fragment<any>, position?: number | undefined) => (tr: Transaction<any>) => Transaction<any> | null;
