import React, { Component } from 'react';
import { WithAnalyticsEventsProps } from '@atlaskit/analytics-next';
export declare type DotsAppearance = 'default' | 'help' | 'inverted' | 'primary';
export declare type Spacing = 'comfortable' | 'cozy' | 'compact';
export declare type Size = 'small' | 'default' | 'large';
interface Props extends WithAnalyticsEventsProps {
    /** The color of the indicators */
    appearance?: DotsAppearance;
    /** The aria-controls text applied to each indicator, appended by the index */
    ariaControls?: string;
    /** The aria-label text applied to each indicator, appended by the index */
    ariaLabel?: string;
    /** Function called when an indicator is selected */
    onSelect?: (eventData: {
        event: React.MouseEvent<HTMLButtonElement>;
        index: number;
    }) => unknown;
    /** Which indicator is currently selected */
    selectedIndex: number;
    /** Corresponds to the width & height of each indicator */
    size?: Size;
    /** How much of a gutter is desired between indicators */
    spacing?: Spacing;
    /** An array of values mapped over to create the indicators */
    values: Array<any>;
}
declare class ProgressDots extends Component<Props, {}> {
    tablist: {
        children: HTMLElement[];
    };
    static defaultProps: {
        appearance: string;
        ariaControls: string;
        ariaLabel: string;
        size: string;
        spacing: string;
    };
    componentDidMount(): void;
    componentWillUnmount(): void;
    handleKeyDown: (event: KeyboardEvent) => void;
    render(): JSX.Element;
}
export { ProgressDots as ProgressDotsWithoutAnalytics };
declare const _default: React.ForwardRefExoticComponent<Pick<Pick<Pick<Props, "size" | "appearance" | "ariaControls" | "ariaLabel" | "onSelect" | "selectedIndex" | "spacing" | "values">, "onSelect" | "selectedIndex" | "values"> & Partial<Pick<Pick<Props, "size" | "appearance" | "ariaControls" | "ariaLabel" | "onSelect" | "selectedIndex" | "spacing" | "values">, "size" | "appearance" | "ariaControls" | "ariaLabel" | "spacing">> & Partial<Pick<{
    appearance: string;
    ariaControls: string;
    ariaLabel: string;
    size: string;
    spacing: string;
}, never>> & React.RefAttributes<any> & import("@atlaskit/analytics-next/dist/cjs/withAnalyticsContext").WithContextProps, "size" | "appearance" | "ariaControls" | "ariaLabel" | "onSelect" | "selectedIndex" | "spacing" | "values" | "key" | "analyticsContext"> & React.RefAttributes<any>>;
export default _default;
