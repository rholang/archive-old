import React, { Component, ReactNode } from 'react';
import { WithAnalyticsEventsProps, UIAnalyticsEvent } from '@atlaskit/analytics-next';
export interface Props extends WithAnalyticsEventsProps {
    /** The content to render inside the action button. */
    children?: ReactNode;
    /** Handler called when the element is clicked. */
    onClick?: (event: React.MouseEvent<HTMLElement, MouseEvent>, analyticsEvent?: UIAnalyticsEvent) => void;
    /** Handler called when the element is focused. */
    onFocus?: (event: React.FocusEvent<HTMLElement>) => void;
    /** Handler called when the element is moused over. */
    onMouseOver?: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
}
declare class ActionItem extends Component<Props, {}> {
    render(): JSX.Element;
}
export { ActionItem as CommentActionWithoutAnalytics };
declare const _default: React.ForwardRefExoticComponent<Pick<Pick<Props, "children" | "onFocus" | "onClick" | "onMouseOver"> & React.RefAttributes<any> & import("@atlaskit/analytics-next/dist/cjs/withAnalyticsContext").WithContextProps, "children" | "key" | "onFocus" | "onClick" | "onMouseOver" | "analyticsContext"> & React.RefAttributes<any>>;
export default _default;
