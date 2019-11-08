import * as React from 'react';
import { Palette, Color } from '../types';
export interface Props {
    /** color picker button label */
    label?: string;
    /** list of available colors */
    palette: Palette;
    /** selected color */
    selectedColor?: string;
    /** maximum column length */
    cols?: number;
    /** color of checkmark on selected color */
    checkMarkColor?: string;
    /** props for react-popper */
    popperProps?: Object;
    /** onChange handler */
    onChange: (value: string, analyticsEvent?: object) => void;
    /** You should not be accessing this prop under any circumstances. It is provided by @atlaskit/analytics-next. */
    createAnalyticsEvent?: any;
}
export declare class ColorPickerWithoutAnalytics extends React.Component<Props> {
    createAndFireEventOnAtlaskit: (payload: Record<string, any>) => (createAnalyticsEvent: import("@atlaskit/analytics-next").CreateUIAnalyticsEvent) => import("@atlaskit/analytics-next").UIAnalyticsEvent;
    changeAnalyticsCaller: () => import("@atlaskit/analytics-next").UIAnalyticsEvent | undefined;
    onChange: (option: Color) => void;
    render(): JSX.Element;
}
declare const _default: React.ForwardRefExoticComponent<Pick<Pick<Props, "label" | "onChange" | "checkMarkColor" | "cols" | "palette" | "selectedColor" | "popperProps"> & React.RefAttributes<any> & import("@atlaskit/analytics-next/dist/cjs/withAnalyticsContext").WithContextProps, "label" | "key" | "onChange" | "checkMarkColor" | "cols" | "palette" | "selectedColor" | "popperProps" | "analyticsContext"> & React.RefAttributes<any>>;
export default _default;
