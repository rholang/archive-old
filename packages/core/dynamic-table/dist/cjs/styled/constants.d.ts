export interface TruncateStyleProps {
    width?: number;
    isFixedSize?: boolean;
    shouldTruncate?: boolean;
}
export declare const truncateStyle: ({ width, isFixedSize, shouldTruncate, }: TruncateStyleProps) => import("styled-components").InterpolationValue[];
export declare const onClickStyle: ({ onClick }: {
    onClick?: boolean | undefined;
}) => false | import("styled-components").InterpolationValue[] | undefined;
export declare const arrowsStyle: (props: {
    isSortable?: boolean | undefined;
    sortOrder?: "ASC" | "DESC" | undefined;
}) => import("styled-components").InterpolationValue[] | "";
export declare const cellStyle: import("styled-components").InterpolationValue[];
