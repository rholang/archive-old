import React, { Component, ReactNode } from 'react';
import { UIAnalyticsEvent, WithAnalyticsEventsProps } from '@atlaskit/analytics-next';
interface Props extends WithAnalyticsEventsProps {
    /** The time of the comment. */
    children?: ReactNode;
    /** The URL of the link. If not provided, the element will be rendered as text. */
    href?: string;
    /** Handler called when the element is clicked. */
    onClick?: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>, analyticsEvent?: UIAnalyticsEvent) => void;
    /** Handler called when the element is focused. */
    onFocus?: (event: React.FocusEvent<HTMLElement>) => void;
    /** Handler called when the element is moused over. */
    onMouseOver?: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
}
declare class Time extends Component<Props> {
    render(): JSX.Element;
}
export { Time as CommentTimeWithoutAnalytics };
declare const _default: React.ForwardRefExoticComponent<Pick<Pick<Props, "children" | "onFocus" | "onClick" | "onMouseOver" | "href"> & React.RefAttributes<any> & import("@atlaskit/analytics-next/dist/cjs/withAnalyticsContext").WithContextProps, "children" | "key" | "onFocus" | "onClick" | "onMouseOver" | "analyticsContext" | "href"> & React.RefAttributes<any>>;
export default _default;
