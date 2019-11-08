import React from 'react';
import { WithAnalyticsEventsProps } from '@atlaskit/analytics-next';
interface IProps extends WithAnalyticsEventsProps {
    /** Whether this item will be followed by a separator. */
    hasSeparator?: boolean;
    /** The url or path which the breadcrumb should act as a link to. */
    href?: string;
    /** An icon to display before the breadcrumb. */
    iconBefore?: React.ReactChild;
    /** An icon to display after the breadcrumb. */
    iconAfter?: React.ReactChild;
    /** Handler to be called on click. **/
    onClick?: (event: React.MouseEvent) => void;
    /** The text to appear within the breadcrumb as a link. */
    text: string;
    /** The maximum width in pixels that an item can have before it is truncated.
    If this is not set, truncation will only occur when it cannot fit alone on a
    line. If there is no truncationWidth, tooltips are not provided on truncation. */
    truncationWidth?: number;
    target?: '_blank' | '_parent' | '_self' | '_top' | '';
    /** Provide a custom component to use instead of the default button.
     *  The custom component should accept a className prop so it can be styled
     *  and possibly all action handlers */
    component?: React.ClassType<any, any, any>;
    /** A `testId` prop is provided for specified elements, which is a unique string that appears as a data attribute `data-testid` in the rendered code, serving as a hook for automated tests */
    testId?: string;
}
interface IState {
    hasOverflow: boolean;
}
declare class BreadcrumbsItem extends React.Component<IProps, IState> {
    button: any;
    static defaultProps: {
        hasSeparator: boolean;
        href: string;
        truncationWidth: number;
        onClick: () => void;
    };
    state: {
        hasOverflow: boolean;
    };
    componentDidMount(): void;
    UNSAFE_componentWillReceiveProps(): void;
    componentDidUpdate(): void;
    updateOverflow(): boolean;
    renderButton: () => JSX.Element;
    renderButtonWithTooltip: () => JSX.Element;
    render(): JSX.Element;
}
export { BreadcrumbsItem as BreadcrumbsItemWithoutAnalytics };
declare const _default: React.ForwardRefExoticComponent<Pick<Pick<IProps, "href" | "target" | "onClick" | "component" | "iconAfter" | "iconBefore" | "testId" | "text" | "truncationWidth" | "hasSeparator">, "target" | "component" | "iconAfter" | "iconBefore" | "testId" | "text"> & Partial<Pick<Pick<IProps, "href" | "target" | "onClick" | "component" | "iconAfter" | "iconBefore" | "testId" | "text" | "truncationWidth" | "hasSeparator">, "href" | "onClick" | "truncationWidth" | "hasSeparator">> & Partial<Pick<{
    hasSeparator: boolean;
    href: string;
    truncationWidth: number;
    onClick: () => void;
}, never>> & React.RefAttributes<any>>;
export default _default;
