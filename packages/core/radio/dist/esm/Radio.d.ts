import React, { Component } from 'react';
import { RadioProps } from './types';
interface State {
    isHovered: boolean;
    isFocused: boolean;
    isActive: boolean;
    isMouseDown: boolean;
}
declare class Radio extends Component<RadioProps, State> {
    static defaultProps: {
        isDisabled: boolean;
        isInvalid: boolean;
        isChecked: boolean;
    };
    state: State;
    onBlur: React.FocusEventHandler<HTMLInputElement>;
    onFocus: React.FocusEventHandler<HTMLInputElement>;
    onMouseLeave: React.MouseEventHandler;
    onMouseEnter: React.MouseEventHandler;
    onMouseUp: React.MouseEventHandler;
    onMouseDown: React.MouseEventHandler;
    render(): JSX.Element;
}
export { Radio as RadioWithoutAnalytics };
declare const _default: React.ForwardRefExoticComponent<Pick<Pick<Pick<RadioProps, "label" | "isDisabled" | "isChecked" | "isInvalid" | "testId" | "ariaLabel" | "isRequired" | "name" | "onChange" | "onBlur" | "onFocus" | "onMouseDown" | "onMouseUp" | "onMouseEnter" | "onMouseLeave" | "onInvalid" | "value">, "label" | "testId" | "ariaLabel" | "isRequired" | "name" | "onChange" | "onBlur" | "onFocus" | "onMouseDown" | "onMouseUp" | "onMouseEnter" | "onMouseLeave" | "onInvalid" | "value"> & Partial<Pick<Pick<RadioProps, "label" | "isDisabled" | "isChecked" | "isInvalid" | "testId" | "ariaLabel" | "isRequired" | "name" | "onChange" | "onBlur" | "onFocus" | "onMouseDown" | "onMouseUp" | "onMouseEnter" | "onMouseLeave" | "onInvalid" | "value">, "isDisabled" | "isChecked" | "isInvalid">> & Partial<Pick<{
    isDisabled: boolean;
    isInvalid: boolean;
    isChecked: boolean;
}, never>> & React.RefAttributes<any> & import("@atlaskit/analytics-next/dist/cjs/withAnalyticsContext").WithContextProps, "label" | "isDisabled" | "isChecked" | "isInvalid" | "testId" | "ariaLabel" | "isRequired" | "name" | "onChange" | "onBlur" | "onFocus" | "onMouseDown" | "onMouseUp" | "onMouseEnter" | "onMouseLeave" | "onInvalid" | "value" | "key" | "analyticsContext"> & React.RefAttributes<any>>;
export default _default;
