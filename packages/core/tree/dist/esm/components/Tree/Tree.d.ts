import React, { Component } from 'react';
import { DragStart, DropResult, DragUpdate, DraggableProvided, DraggableStateSnapshot, DroppableProvided } from 'react-beautiful-dnd';
import { Props, State, DragState } from './Tree-types';
import { FlattenedItem, ItemId, TreeData } from '../../types';
import DelayedFunction from '../../utils/delayed-function';
export default class Tree extends Component<Props, State> {
    static defaultProps: {
        tree: {
            children: never[];
        };
        onExpand: () => void;
        onCollapse: () => void;
        onDragStart: () => void;
        onDragEnd: () => void;
        renderItem: () => void;
        offsetPerLevel: number;
        isDragEnabled: boolean;
        isNestingEnabled: boolean;
    };
    state: {
        flattenedTree: never[];
        draggedItemId: undefined;
    };
    dragState?: DragState;
    itemsElement: Record<ItemId, HTMLElement | undefined>;
    containerElement: HTMLElement | undefined;
    expandTimer: DelayedFunction;
    static getDerivedStateFromProps(props: Props, state: State): {
        flattenedTree: FlattenedItem[];
        draggedItemId?: string | number | undefined;
    };
    static closeParentIfNeeded(tree: TreeData, draggedItemId?: ItemId): TreeData;
    onDragStart: (result: DragStart) => void;
    onDragUpdate: (update: DragUpdate) => void;
    onDropAnimating: () => void;
    onDragEnd: (result: DropResult) => void;
    onPointerMove: () => void;
    calculateEffectivePath: (flatItem: FlattenedItem, snapshot: DraggableStateSnapshot) => number[];
    isExpandable: (item: FlattenedItem) => boolean;
    getDroppedLevel: () => number | undefined;
    patchDroppableProvided: (provided: DroppableProvided) => DroppableProvided;
    setItemRef: (itemId: ItemId, el: HTMLElement | null) => void;
    renderItems: () => React.ReactNode[];
    renderItem: (flatItem: FlattenedItem, index: number) => React.ReactNode;
    renderDraggableItem: (flatItem: FlattenedItem) => (provided: DraggableProvided, snapshot: DraggableStateSnapshot) => JSX.Element;
    render(): JSX.Element;
}
