import React from 'react';
import { WithAnalyticsEventsProps } from '@atlaskit/analytics-next';
export interface BreadcrumbsStatelessProps extends WithAnalyticsEventsProps {
    /** Override collapsing of the nav when there are more than maxItems */
    isExpanded?: boolean;
    /** Set the maximum number of breadcrumbs to display. When there are more
    than the maximum number, only the first and last will be shown, with an
    ellipsis in between. */
    maxItems?: number;
    /** The items to be included inside the Breadcrumbs wrapper */
    children?: React.ReactNode;
    /** A function to be called when you are in the collapsed view and click
     the ellipsis. */
    onExpand?: (event: React.MouseEvent) => any;
    /** If max items is exceeded, the number of items to show before the ellipsis */
    itemsBeforeCollapse?: number;
    /** If max items is exceeded, the number of items to show after the ellipsis */
    itemsAfterCollapse?: number;
    /** A `testId` prop is provided for specified elements, which is a unique string that appears as a data attribute `data-testid` in the rendered code, serving as a hook for automated tests.
    In case of `testId` passed through EllipsisItem, the element will be identified like this: 'testId && `${testId}--breadcrumb-ellipsis'.
    This can be used to click the elements when they are collapsed. */
    testId?: string;
}
declare class BreadcrumbsStateless extends React.Component<BreadcrumbsStatelessProps, {}> {
    static defaultProps: {
        isExpanded: boolean;
        maxItems: number;
        itemsBeforeCollapse: number;
        itemsAfterCollapse: number;
    };
    renderAllItems(): Array<React.ReactNode>;
    renderItemsBeforeAndAfter(): React.ReactNode[] | undefined;
    render(): JSX.Element;
}
export { BreadcrumbsStateless as BreadcrumbsStatelessWithoutAnalytics };
declare const _default: React.ForwardRefExoticComponent<Pick<Pick<Pick<BreadcrumbsStatelessProps, "children" | "testId" | "isExpanded" | "maxItems" | "onExpand" | "itemsBeforeCollapse" | "itemsAfterCollapse">, "children" | "testId" | "onExpand"> & Partial<Pick<Pick<BreadcrumbsStatelessProps, "children" | "testId" | "isExpanded" | "maxItems" | "onExpand" | "itemsBeforeCollapse" | "itemsAfterCollapse">, "isExpanded" | "maxItems" | "itemsBeforeCollapse" | "itemsAfterCollapse">> & Partial<Pick<{
    isExpanded: boolean;
    maxItems: number;
    itemsBeforeCollapse: number;
    itemsAfterCollapse: number;
}, never>> & React.RefAttributes<any> & import("@atlaskit/analytics-next/dist/cjs/withAnalyticsContext").WithContextProps, "children" | "testId" | "key" | "analyticsContext" | "isExpanded" | "maxItems" | "onExpand" | "itemsBeforeCollapse" | "itemsAfterCollapse"> & React.RefAttributes<any>>;
export default _default;
