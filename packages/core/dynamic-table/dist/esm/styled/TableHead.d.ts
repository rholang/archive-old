/// <reference types="react" />
import { TruncateStyleProps } from './constants';
import { SortOrderType } from '../types';
interface HeadProps {
    isRanking?: boolean;
}
export declare const Head: import("styled-components").StyledComponentClass<import("react").ClassAttributes<HTMLTableSectionElement> & import("react").HTMLAttributes<HTMLTableSectionElement> & HeadProps, any, import("react").ClassAttributes<HTMLTableSectionElement> & import("react").HTMLAttributes<HTMLTableSectionElement> & HeadProps>;
interface HeadCellProps extends TruncateStyleProps {
    onClick?: () => void;
    isSortable?: boolean;
    sortOrder?: SortOrderType;
}
export declare const HeadCell: import("styled-components").StyledComponentClass<import("react").ClassAttributes<HTMLTableHeaderCellElement> & import("react").ThHTMLAttributes<HTMLTableHeaderCellElement> & HeadCellProps, any, import("react").ClassAttributes<HTMLTableHeaderCellElement> & import("react").ThHTMLAttributes<HTMLTableHeaderCellElement> & HeadCellProps>;
export {};
