import React, { Component } from 'react';
import { StatelessProps, Sizes } from './types';
interface State {
    isFocused: boolean;
}
declare class ToggleStateless extends Component<StatelessProps, State> {
    static defaultProps: {
        isDisabled: boolean;
        onBlur: () => void;
        onChange: () => void;
        onFocus: () => void;
        size: Sizes;
        label: string;
        name: string;
        value: string;
        isChecked: boolean;
    };
    state: State;
    handleBlur: React.FocusEventHandler<HTMLInputElement>;
    handleFocus: React.FocusEventHandler<HTMLInputElement>;
    handleChange: React.ChangeEventHandler<HTMLInputElement>;
    render(): JSX.Element;
}
export { ToggleStateless as ToggleStatelessWithoutAnalytics };
declare const _default: React.ForwardRefExoticComponent<Pick<Pick<Pick<StatelessProps, "size" | "isChecked" | "isDisabled" | "label" | "name" | "value" | "onBlur" | "onChange" | "onFocus" | "testId">, "testId"> & Partial<Pick<Pick<StatelessProps, "size" | "isChecked" | "isDisabled" | "label" | "name" | "value" | "onBlur" | "onChange" | "onFocus" | "testId">, "size" | "isChecked" | "isDisabled" | "label" | "name" | "value" | "onBlur" | "onChange" | "onFocus">> & Partial<Pick<{
    isDisabled: boolean;
    onBlur: () => void;
    onChange: () => void;
    onFocus: () => void;
    size: Sizes;
    label: string;
    name: string;
    value: string;
    isChecked: boolean;
}, never>> & React.RefAttributes<any> & import("@atlaskit/analytics-next/dist/cjs/withAnalyticsContext").WithContextProps, "size" | "isChecked" | "isDisabled" | "label" | "name" | "value" | "onBlur" | "onChange" | "onFocus" | "testId" | "key" | "analyticsContext"> & React.RefAttributes<any>>;
export default _default;
