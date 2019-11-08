import React, { Component } from 'react';
import { Props, Placement } from '../types';
declare class InlineDialog extends Component<Props, {}> {
    static defaultProps: {
        isOpen: boolean;
        onContentBlur: () => void;
        onContentClick: () => void;
        onContentFocus: () => void;
        onClose: () => void;
        placement: Placement;
    };
    containerRef?: HTMLElement;
    triggerRef?: HTMLElement;
    componentDidUpdate(prevProps: Props): void;
    componentDidMount(): void;
    componentWillUnmount(): void;
    handleClickOutside: (event: any) => void;
    render(): JSX.Element;
}
export { InlineDialog as InlineDialogWithoutAnalytics };
declare const _default: React.ForwardRefExoticComponent<Pick<Pick<Pick<Props, "children" | "content" | "isOpen" | "onContentBlur" | "onContentClick" | "onContentFocus" | "onClose" | "placement" | "testId">, "children" | "content" | "testId"> & Partial<Pick<Pick<Props, "children" | "content" | "isOpen" | "onContentBlur" | "onContentClick" | "onContentFocus" | "onClose" | "placement" | "testId">, "isOpen" | "onContentBlur" | "onContentClick" | "onContentFocus" | "onClose" | "placement">> & Partial<Pick<{
    isOpen: boolean;
    onContentBlur: () => void;
    onContentClick: () => void;
    onContentFocus: () => void;
    onClose: () => void;
    placement: Placement;
}, never>> & React.RefAttributes<any> & import("@atlaskit/analytics-next/dist/cjs/withAnalyticsContext").WithContextProps, "children" | "content" | "isOpen" | "onContentBlur" | "onContentClick" | "onContentFocus" | "onClose" | "placement" | "testId" | "key" | "analyticsContext"> & React.RefAttributes<any>>;
export default _default;
