import { ResolvedPos, Mark } from 'prosemirror-model';
/**
 * Finds the marks in the nodes to the left and right.
 * @param $pos Position to center search around
 */
export declare const surroundingMarks: ($pos: ResolvedPos<any>) => Mark<any>[][];
/**
 * Finds annotation marks, and returns their IDs.
 * @param marks Array of marks to search in
 */
export declare const filterAnnotationIds: (marks: Mark<any>[]) => string[];
