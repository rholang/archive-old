import { DragState } from './Tree-types';
import { TreeSourcePosition, TreeDestinationPosition, TreeData } from '../../types';
export declare const calculateFinalDropPositions: (tree: TreeData, flattenedTree: import("../../types").FlattenedItem[], dragState: DragState) => {
    sourcePosition: TreeSourcePosition;
    destinationPosition?: TreeDestinationPosition | undefined;
};
