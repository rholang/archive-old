import { Node as PMNode } from 'prosemirror-model';
import { Step, StepResult, StepMap, ReplaceStep } from 'prosemirror-transform';
import { TableColumnOrdering } from '../types';
export declare const tableSortingStepType = "atlaskit-table-sorting-ordering";
export declare class TableSortStep extends Step {
    prev: TableColumnOrdering | undefined;
    next: TableColumnOrdering | undefined;
    pos: number;
    constructor(pos: number, prev?: TableColumnOrdering, next?: TableColumnOrdering);
    invert(): TableSortStep;
    apply(doc: PMNode): StepResult<any>;
    map(): null;
    getMap(): StepMap;
    toJSON(): {
        stepType: string;
    };
    static fromJSON(): ReplaceStep<any>;
}
