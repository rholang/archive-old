import { ItemId, FlattenedItem } from '../types';
export declare const getFlatItemPath: (flattenedTree: FlattenedItem[], sourceIndex: number) => number[];
export declare const getSourcePath: (flattenedTree: FlattenedItem[], sourceIndex: number) => number[];
export declare const getDestinationPath: (flattenedTree: FlattenedItem[], sourceIndex: number, destinationIndex: number, level?: number | undefined) => number[];
export declare const getItemById: (flattenedTree: FlattenedItem[], id: ItemId) => FlattenedItem | undefined;
export declare const getIndexById: (flattenedTree: FlattenedItem[], id: ItemId) => number;
