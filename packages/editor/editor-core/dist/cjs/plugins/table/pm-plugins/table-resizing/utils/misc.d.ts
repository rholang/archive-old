import { EditorView } from 'prosemirror-view';
import { ResolvedPos } from 'prosemirror-model';
import { TableLayout, CellAttributes } from '@atlaskit/adf-schema';
import { TableOptions } from '../../../nodeviews/table';
export declare const tableLayoutToSize: Record<string, number>;
export declare function getLayoutSize(tableLayout: TableLayout, containerWidth: number | undefined, options: TableOptions): number;
export declare function getDefaultLayoutMaxWidth(containerWidth?: number): number;
export declare function pointsAtCell($pos: ResolvedPos<any>): false | import("prosemirror-model").Node<any> | null | undefined;
export declare function currentColWidth(view: EditorView, cellPos: number, { colspan, colwidth }: CellAttributes): number;
export declare function domCellAround(target: HTMLElement | null): HTMLElement | null;