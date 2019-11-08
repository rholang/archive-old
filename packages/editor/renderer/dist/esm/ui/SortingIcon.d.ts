import { SortOrder } from '@atlaskit/editor-common';
export declare enum StatusClassNames {
    ASC = "sorting-icon-svg__asc",
    DESC = "sorting-icon-svg__desc",
    SORTING_NOT_ALLOWED = "sorting-icon-svg__not-allowed"
}
declare type Props = {
    isSortingAllowed: boolean;
    sortOrdered?: SortOrder;
};
declare const SortingIcon: ({ isSortingAllowed, sortOrdered }: Props) => JSX.Element;
export default SortingIcon;
