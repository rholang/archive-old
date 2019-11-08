import React, { Component, ReactNode } from 'react';
import { WithAnalyticsEventsProps } from '@atlaskit/analytics-next';
interface Props extends WithAnalyticsEventsProps {
    /** Content to render indicating that the comment has been edited. */
    children?: ReactNode;
    /** Handler called when the element is focused. */
    onFocus?: (event: React.FocusEvent<HTMLElement>) => void;
    /** Handler called when the element is moused over. */
    onMouseOver?: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
}
declare class Edited extends Component<Props, {}> {
    render(): JSX.Element;
}
export { Edited as CommentEditedWithoutAnalytics };
declare const _default: React.ForwardRefExoticComponent<Pick<Pick<Props, "children" | "onFocus" | "onMouseOver"> & React.RefAttributes<any> & import("@atlaskit/analytics-next/dist/cjs/withAnalyticsContext").WithContextProps, "children" | "key" | "onFocus" | "onMouseOver" | "analyticsContext"> & React.RefAttributes<any>>;
export default _default;
