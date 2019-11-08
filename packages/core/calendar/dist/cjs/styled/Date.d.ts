/// <reference types="react" />
/// <reference types="@emotion/core" />
export interface DateProps {
    disabled?: boolean;
    isToday?: boolean;
    sibling?: boolean;
    selected?: boolean;
    previouslySelected?: boolean;
    isActive?: boolean;
    focused?: boolean;
}
export declare const DateDiv: import("styled-components").StyledComponentClass<import("react").ClassAttributes<HTMLDivElement> & import("react").HTMLAttributes<HTMLDivElement> & DateProps, any, import("react").ClassAttributes<HTMLDivElement> & import("react").HTMLAttributes<HTMLDivElement> & DateProps>;
export declare const DateTd: import("styled-components").StyledComponentClass<import("react").DetailedHTMLProps<import("react").TdHTMLAttributes<HTMLTableDataCellElement>, HTMLTableDataCellElement>, any, import("react").DetailedHTMLProps<import("react").TdHTMLAttributes<HTMLTableDataCellElement>, HTMLTableDataCellElement>>;
