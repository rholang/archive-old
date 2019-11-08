import { CellSelectionType } from './types';
import { PopupProps } from '@atlaskit/editor-common';
interface GetPopupOptions {
    left: number;
    top: number;
    selectionType?: CellSelectionType;
    tableWrapper: HTMLElement | null;
}
export default function getPopupOptions({ left, top, selectionType, tableWrapper, }: GetPopupOptions): Partial<PopupProps>;
export {};
