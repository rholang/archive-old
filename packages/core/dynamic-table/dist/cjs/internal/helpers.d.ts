import { HeadType, RowType, RankEnd } from '../types';
export declare const getPageRows: (allRows: RowType[], pageNumber?: number | undefined, rowsPerPage?: number | undefined) => RowType[];
export declare const assertIsSortable: (head?: HeadType | undefined) => void;
export declare const validateSortKey: (sortKey?: string | undefined, head?: HeadType | undefined) => void;
export declare const inlineStylesIfRanking: (isRanking: boolean, width: number, height?: number | undefined) => {};
export declare const computeIndex: (index: number, page: number, rowsPerPage?: number | undefined) => number;
export declare const reorderRows: (rankEnd: RankEnd, rows: RowType[], page?: number, rowsPerPage?: number | undefined) => RowType[];
