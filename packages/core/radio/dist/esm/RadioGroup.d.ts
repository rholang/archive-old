import React, { Component, SyntheticEvent } from 'react';
import { OptionsPropType } from './types';
export interface RadioGroupProps {
    /** Once set, controls the selected value on the Radio Group */
    value?: string | number | null;
    /** Sets the initial selected value on the Radio Group */
    defaultValue?: string | number | null;
    /** Sets the disabled state of all Radio elements in the group */
    isDisabled?: boolean;
    /** Sets the required state of all Radio elements in the group */
    isRequired?: boolean;
    /** An array of objects, each object is mapped onto a Radio element within the group */
    options: OptionsPropType;
    /** Function that gets fired after each invalid event */
    onInvalid?: (event: SyntheticEvent<any>) => void;
    /** Function that gets after each change event */
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
    [key: string]: any;
}
interface State {
    value?: string | number | null;
    [key: string]: string | number | null | undefined;
}
export default class RadioGroup extends Component<RadioGroupProps, State> {
    static defaultProps: {
        onChange: () => void;
        options: never[];
    };
    constructor(props: RadioGroupProps);
    getProp: (key: string) => any;
    onChange: React.ChangeEventHandler<HTMLInputElement>;
    buildOptions: () => React.ReactComponentElement<React.ForwardRefExoticComponent<Pick<Pick<Pick<import("./types").RadioProps, "label" | "isDisabled" | "isChecked" | "isInvalid" | "testId" | "ariaLabel" | "isRequired" | "name" | "onChange" | "onBlur" | "onFocus" | "onMouseDown" | "onMouseUp" | "onMouseEnter" | "onMouseLeave" | "onInvalid" | "value">, "label" | "testId" | "ariaLabel" | "isRequired" | "name" | "onChange" | "onBlur" | "onFocus" | "onMouseDown" | "onMouseUp" | "onMouseEnter" | "onMouseLeave" | "onInvalid" | "value"> & Partial<Pick<Pick<import("./types").RadioProps, "label" | "isDisabled" | "isChecked" | "isInvalid" | "testId" | "ariaLabel" | "isRequired" | "name" | "onChange" | "onBlur" | "onFocus" | "onMouseDown" | "onMouseUp" | "onMouseEnter" | "onMouseLeave" | "onInvalid" | "value">, "isDisabled" | "isChecked" | "isInvalid">> & Partial<Pick<{
        isDisabled: boolean;
        isInvalid: boolean;
        isChecked: boolean;
    }, never>> & React.RefAttributes<any> & import("@atlaskit/analytics-next/dist/cjs/withAnalyticsContext").WithContextProps, "label" | "isDisabled" | "isChecked" | "isInvalid" | "testId" | "ariaLabel" | "isRequired" | "name" | "onChange" | "onBlur" | "onFocus" | "onMouseDown" | "onMouseUp" | "onMouseEnter" | "onMouseLeave" | "onInvalid" | "value" | "key" | "analyticsContext"> & React.RefAttributes<any>>, Pick<Pick<Pick<Pick<import("./types").RadioProps, "label" | "isDisabled" | "isChecked" | "isInvalid" | "testId" | "ariaLabel" | "isRequired" | "name" | "onChange" | "onBlur" | "onFocus" | "onMouseDown" | "onMouseUp" | "onMouseEnter" | "onMouseLeave" | "onInvalid" | "value">, "label" | "testId" | "ariaLabel" | "isRequired" | "name" | "onChange" | "onBlur" | "onFocus" | "onMouseDown" | "onMouseUp" | "onMouseEnter" | "onMouseLeave" | "onInvalid" | "value"> & Partial<Pick<Pick<import("./types").RadioProps, "label" | "isDisabled" | "isChecked" | "isInvalid" | "testId" | "ariaLabel" | "isRequired" | "name" | "onChange" | "onBlur" | "onFocus" | "onMouseDown" | "onMouseUp" | "onMouseEnter" | "onMouseLeave" | "onInvalid" | "value">, "isDisabled" | "isChecked" | "isInvalid">> & Partial<Pick<{
        isDisabled: boolean;
        isInvalid: boolean;
        isChecked: boolean;
    }, never>> & React.RefAttributes<any> & import("@atlaskit/analytics-next/dist/cjs/withAnalyticsContext").WithContextProps, "label" | "isDisabled" | "isChecked" | "isInvalid" | "testId" | "ariaLabel" | "isRequired" | "name" | "onChange" | "onBlur" | "onFocus" | "onMouseDown" | "onMouseUp" | "onMouseEnter" | "onMouseLeave" | "onInvalid" | "value" | "key" | "analyticsContext"> & React.RefAttributes<any>, "label" | "isDisabled" | "isChecked" | "isInvalid" | "testId" | "ariaLabel" | "isRequired" | "name" | "onChange" | "onBlur" | "onFocus" | "onMouseDown" | "onMouseUp" | "onMouseEnter" | "onMouseLeave" | "onInvalid" | "value" | "analyticsContext">>[];
    render(): JSX.Element;
}
export {};
