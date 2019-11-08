import React, { Component } from 'react';
import { ExtenderType } from './utils';
import { CheckboxProps } from './types';
interface State {
    isActive: boolean;
    isChecked?: boolean;
    isFocused: boolean;
    isHovered: boolean;
    isMouseDown: boolean;
}
declare class Checkbox extends Component<CheckboxProps, State> {
    static defaultProps: CheckboxProps;
    state: State;
    createExtender?: ExtenderType;
    checkbox?: HTMLInputElement | null;
    actionKeys: string[];
    constructor(props: CheckboxProps);
    componentDidMount(): void;
    componentDidUpdate(prevProps: CheckboxProps): void;
    onChange: React.ChangeEventHandler<HTMLInputElement>;
    blur: () => void;
    focus: () => void;
    onBlur: () => void;
    onFocus: () => void;
    onMouseLeave: () => void;
    onMouseEnter: () => void;
    onMouseUp: () => void;
    onMouseDown: () => void;
    onKeyDown: (event: React.KeyboardEvent<HTMLInputElement>) => void;
    onKeyUp: (event: React.KeyboardEvent<HTMLInputElement>) => void;
    render(): JSX.Element;
}
export { Checkbox as CheckboxWithoutAnalytics };
declare const _default: React.ForwardRefExoticComponent<Pick<Pick<Pick<Pick<CheckboxProps, "isDisabled" | "isChecked" | "isInvalid" | "label" | "name" | "value" | "defaultChecked" | "id" | "onChange" | "testId" | "isIndeterminate" | "overrides" | "theme" | "inputRef" | "isFullWidth" | "isRequired">, never> & Partial<Pick<Pick<CheckboxProps, "isDisabled" | "isChecked" | "isInvalid" | "label" | "name" | "value" | "defaultChecked" | "id" | "onChange" | "testId" | "isIndeterminate" | "overrides" | "theme" | "inputRef" | "isFullWidth" | "isRequired">, "isDisabled" | "isChecked" | "isInvalid" | "label" | "name" | "value" | "defaultChecked" | "id" | "onChange" | "testId" | "isIndeterminate" | "overrides" | "theme" | "inputRef" | "isFullWidth" | "isRequired">> & Partial<Pick<CheckboxProps, "ref" | "createAnalyticsEvent">>, "isDisabled" | "isChecked" | "isInvalid" | "label" | "name" | "value" | "defaultChecked" | "id" | "onChange" | "testId" | "createAnalyticsEvent" | "isIndeterminate" | "overrides" | "theme" | "inputRef" | "isFullWidth" | "isRequired"> & React.RefAttributes<any> & import("@atlaskit/analytics-next/dist/cjs/withAnalyticsContext").WithContextProps, "isDisabled" | "isChecked" | "isInvalid" | "label" | "name" | "value" | "defaultChecked" | "id" | "onChange" | "key" | "testId" | "createAnalyticsEvent" | "isIndeterminate" | "overrides" | "theme" | "inputRef" | "isFullWidth" | "isRequired" | "analyticsContext"> & React.RefAttributes<any>>;
export default _default;
