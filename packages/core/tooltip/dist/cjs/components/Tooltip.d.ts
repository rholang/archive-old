import React from 'react';
import { WithAnalyticsEventsProps } from '@atlaskit/analytics-next';
import { PositionType, PositionTypeBase, FakeMouseElement } from '../types';
import { StyledComponentClass } from 'styled-components';
export interface TooltipProps extends WithAnalyticsEventsProps {
    /** The content of the tooltip */
    content: React.ReactNode;
    /** Extend `TooltipPrimitive` to create your own tooltip and pass it as component */
    component?: StyledComponentClass<{
        truncate?: boolean;
        style?: any;
        className?: any;
    }, any>;
    /** Time in milliseconds to wait before showing and hiding the tooltip. Defaults to 300. */
    delay?: number;
    /**
      Hide the tooltip when the click event is triggered. This should be
      used when tooltip should be hidden if `onClick` react synthetic event
      is triggered, which happens after `onMouseDown` event
    */
    hideTooltipOnClick?: boolean;
    /**
      Hide the tooltip when the mousedown event is triggered. This should be
      used when tooltip should be hidden if `onMouseDown` react synthetic event
      is triggered, which happens before `onClick` event
    */
    hideTooltipOnMouseDown?: boolean;
    /**
      Where the tooltip should appear relative to the mouse. Only used when the
      `position` prop is set to 'mouse'
    */
    mousePosition?: PositionTypeBase;
    /**
      Function to be called when the tooltip will be shown. It is called when the
      tooltip begins to animate in.
    */
    onShow?: () => void;
    /**
      Function to be called when the tooltip will be hidden. It is called after the
      delay, when the tooltip begins to animate out.
    */
    onHide?: () => void;
    /**
      Where the tooltip should appear relative to its target. If set to 'mouse',
      tooltip will display next to the mouse instead.
    */
    position?: PositionType;
    /**
      Replace the wrapping element. This accepts the name of a html tag which will
      be used to wrap the element.
    */
    tag?: React.ElementType;
    /** Show only one line of text, and truncate when too long */
    truncate?: boolean;
    /** Elements to be wrapped by the tooltip */
    children: React.ReactNode;
    /**
     * A `testId` prop is provided for specified elements, which is a unique
     * string that appears as a data attribute `data-testid` in the rendered code,
     * serving as a hook for automated tests */
    testId?: string;
}
interface State {
    immediatelyHide: boolean;
    immediatelyShow: boolean;
    isVisible: boolean;
    renderTooltip: boolean;
}
declare class Tooltip extends React.Component<TooltipProps, State> {
    static defaultProps: Pick<TooltipProps, 'component' | 'delay' | 'mousePosition' | 'position' | 'tag'>;
    wrapperRef?: HTMLElement;
    targetRef?: HTMLElement;
    fakeMouseElement?: FakeMouseElement;
    cancelPendingSetState: () => void;
    state: {
        immediatelyHide: boolean;
        immediatelyShow: boolean;
        isVisible: boolean;
        renderTooltip: boolean;
    };
    componentWillUnmount(): void;
    componentDidUpdate(_prevProps: TooltipProps, prevState: State): void;
    removeScrollListener(): void;
    handleWindowScroll: () => void;
    handleMouseClick: () => void;
    handleMouseDown: () => void;
    handleMouseOver: (e: React.MouseEvent<Element, MouseEvent>) => void;
    handleMouseLeave: (e: React.MouseEvent<Element, MouseEvent>) => void;
    handleMouseMove: (event: MouseEvent) => void;
    render(): JSX.Element;
}
export { Tooltip as TooltipWithoutAnalytics };
export declare type TooltipType = Tooltip;
declare const _default: React.ForwardRefExoticComponent<Pick<Pick<Pick<TooltipProps, "children" | "content" | "component" | "delay" | "hideTooltipOnClick" | "hideTooltipOnMouseDown" | "mousePosition" | "onShow" | "onHide" | "position" | "tag" | "truncate" | "testId">, "children" | "content" | "hideTooltipOnClick" | "hideTooltipOnMouseDown" | "onShow" | "onHide" | "truncate" | "testId"> & Partial<Pick<Pick<TooltipProps, "children" | "content" | "component" | "delay" | "hideTooltipOnClick" | "hideTooltipOnMouseDown" | "mousePosition" | "onShow" | "onHide" | "position" | "tag" | "truncate" | "testId">, "component" | "delay" | "mousePosition" | "position" | "tag">> & Partial<Pick<Pick<TooltipProps, "component" | "delay" | "mousePosition" | "position" | "tag">, never>> & React.RefAttributes<any> & import("@atlaskit/analytics-next/dist/cjs/withAnalyticsContext").WithContextProps, "children" | "content" | "component" | "delay" | "hideTooltipOnClick" | "hideTooltipOnMouseDown" | "mousePosition" | "onShow" | "onHide" | "position" | "tag" | "truncate" | "testId" | "key" | "analyticsContext"> & React.RefAttributes<any>>;
export default _default;
